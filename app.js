const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".site-nav a");
const instagramGrid = document.querySelector("#instagram-grid");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (navToggle && header) {
  navToggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("menu-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (!header || !header.classList.contains("menu-open")) {
      return;
    }

    header.classList.remove("menu-open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

const revealObserver =
  !prefersReducedMotion && "IntersectionObserver" in window
    ? new IntersectionObserver(
        (entries, currentObserver) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }

            entry.target.classList.add("is-visible");
            currentObserver.unobserve(entry.target);
          });
        },
        {
          threshold: 0.18,
          rootMargin: "0px 0px -40px 0px"
        }
      )
    : null;

function registerReveal(targets) {
  targets.forEach((target) => {
    if (!revealObserver) {
      target.classList.add("is-visible");
      return;
    }

    revealObserver.observe(target);
  });
}

registerReveal(document.querySelectorAll(".reveal"));

const videoObserver =
  !prefersReducedMotion && "IntersectionObserver" in window
    ? new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const video = entry.target;

            if (entry.isIntersecting) {
              const playPromise = video.play();
              if (playPromise) {
                playPromise.catch(() => {});
              }
              return;
            }

            video.pause();
          });
        },
        {
          threshold: 0.45
        }
      )
    : null;

function registerVideos(videos) {
  videos.forEach((video) => {
    if (!videoObserver) {
      return;
    }

    videoObserver.observe(video);
  });
}

function normalizeCaption(text) {
  return (text || "").replace(/\s+/g, " ").trim();
}

function createSocialCard(item, index) {
  const article = document.createElement("article");
  article.className = `social-card social-card-${item.kind} reveal`;

  if (index === 0) {
    article.classList.add("social-card-feature");
  }

  if (item.kind === "reel") {
    article.classList.add("social-card-motion");
  }

  const link = document.createElement("a");
  link.className = "social-card-link";
  link.href = item.href;
  link.target = "_blank";
  link.rel = "noreferrer";
  link.setAttribute("aria-label", `Open ${item.kind} on Instagram`);

  if (item.kind === "reel" && item.video) {
    const video = document.createElement("video");
    video.className = "media-video";
    video.src = item.video;
    video.poster = item.image;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = "metadata";
    link.appendChild(video);
  } else {
    const image = document.createElement("img");
    image.src = item.image;
    image.alt = "Tarfay Instagram photo";
    image.loading = "lazy";
    link.appendChild(image);
  }

  const overlay = document.createElement("div");
  overlay.className = "social-card-body";

  const badge = document.createElement("span");
  badge.className = "social-card-badge";
  badge.textContent = item.kind === "reel" ? "Reel" : "Photo";

  const caption = document.createElement("p");
  caption.className = "social-card-caption";
  caption.lang = "ar";
  caption.dir = "rtl";
  caption.textContent = normalizeCaption(item.caption);

  const cta = document.createElement("span");
  cta.className = "social-card-cta";
  cta.textContent = "Open on Instagram";

  overlay.append(badge, caption, cta);
  link.appendChild(overlay);
  article.appendChild(link);

  return article;
}

function renderInstagramGallery() {
  if (!instagramGrid) {
    return;
  }

  const items = window.TARFAY_MEDIA?.instagram;

  if (!Array.isArray(items) || items.length === 0) {
    instagramGrid.innerHTML =
      '<article class="social-card social-card-fallback reveal is-visible"><div class="social-card-empty"><p>Instagram moments will appear here.</p></div></article>';
    return;
  }

  const cards = items.map((item, index) => createSocialCard(item, index));
  instagramGrid.replaceChildren(...cards);
  registerReveal(cards);
  registerVideos(instagramGrid.querySelectorAll(".media-video"));
}

renderInstagramGallery();
