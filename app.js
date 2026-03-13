const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".site-nav a");
const showcaseGrid = document.querySelector("#showcase-grid");
const languageButtons = document.querySelectorAll("[data-lang-switch]");
const descriptionTag = document.querySelector("#site-description");
const mapImage = document.querySelector("#location-map-image");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const STORAGE_KEY = "tarfay-language";

const translations = {
  en: {
    meta: {
      title: "Tarfay | Coffee Shop & Art Gallery",
      description:
        "Tarfay is a cozy coffee shop, art gallery, and intimate event space on Prince Nasser Street in Al Khobar."
    },
    brand: {
      tagline: "Coffee & Art House"
    },
    ui: {
      menu: "Menu"
    },
    nav: {
      story: "Story",
      founder: "Founder",
      menu: "Menu",
      gallery: "Gallery",
      moments: "Moments",
      visit: "Visit",
      instagram: "Instagram"
    },
    hero: {
      eyebrow: "Prince Nasser St, Al Khobar Al Shamalia",
      title: "Coffee, art, and intimate events under one elegant roof.",
      text:
        "Tarfay is a cozy Al Khobar destination where specialty coffee, gallery walls, and thoughtful gatherings come together in a soft, welcoming atmosphere.",
      primary: "Plan Your Visit",
      secondary: "Explore the Space",
      note1Title: "Specialty coffee",
      note1Text: "Warm drinks, soft bites, and a slower rhythm.",
      note2Title: "Art gallery corners",
      note2Text: "A room that gives paintings, objects, and textures space to speak.",
      note3Title: "Small elegant events",
      note3Text: "Made for intimate launches, creative nights, and private gatherings.",
      stageLabel: "Introduction",
      stageTitle: "A cafe and art gallery designed to feel cinematic, calm, and close-knit.",
      stageText:
        "The opening impression stays light and atmospheric, with motion in the background so the mood feels alive without overpowering the page.",
      stack1Label: "Gallery feeling",
      stack1Text: "Paintings, color, and seating arranged like a lived-in art room.",
      stack2Label: "Neighborhood destination",
      stack2Text: "A storefront that immediately tells visitors coffee and creativity live here.",
      accentLabel: "Saudi-owned",
      accentTitle: "Coffee. Canvas. Community.",
      accentText: "Intimate in scale, rich in atmosphere, and ready for thoughtful events."
    },
    founder: {
      eyebrow: "Founder & CEO",
      title: "A message from the young Saudi founder behind Tarfay.",
      text:
        "Tarfay was shaped as more than a cafe. It was imagined as a cultural room in Al Khobar, where coffee, local creativity, and hospitality could feel beautifully connected.",
      point1Label: "Identity",
      point1Text: "A Saudi-founded coffee house with an art-led point of view.",
      point2Label: "Atmosphere",
      point2Text: "Warm, elegant, and intentionally intimate rather than oversized.",
      quote:
        '"I wanted Tarfay to feel like a beautiful pause in the city. A place where specialty coffee, local creativity, and gentle hospitality could meet with sincerity."',
      footer: "Founder & CEO, Tarfay"
    },
    story: {
      eyebrow: "About Tarfay",
      title: "A coffee shop with gallery energy and event-ready warmth.",
      text:
        "The experience is built around three layers: specialty coffee, curated visual culture, and intimate gatherings that feel personal from the first minute.",
      card1Label: "Coffee first",
      card1Title: "A place to settle into the cup in your hand.",
      card1Text: "Drinks and bites are part of the emotional experience, not just the menu.",
      card2Label: "Gallery layer",
      card2Title: "Walls, objects, and corners that feel curated.",
      card2Text: "Paintings, collectible details, and tactile styling make the room feel like a small exhibition.",
      card3Label: "Event mood",
      card3Title: "Best for elegant small-scale gatherings.",
      card3Text:
        "Tarfay is not a large venue, which makes launches, artist evenings, and private meetups feel warm and memorable."
    },
    menu: {
      eyebrow: "Signature Menu",
      title: "Specialty drinks and soft bites for slow afternoons.",
      group1: "Coffee Rituals",
      item1Name: "Saffron Latte",
      item1Text: "Velvety milk, floral sweetness, warm spice.",
      item1Price: "22 SAR",
      item2Name: "Gallery Flat White",
      item2Text: "Balanced espresso with a soft chocolate finish.",
      item2Price: "19 SAR",
      item3Name: "Honey Cortado",
      item3Text: "Short, silky, and finished with amber sweetness.",
      item3Price: "18 SAR",
      group2: "Gallery Evenings",
      item4Name: "Cardamom Mocha",
      item4Text: "Dark cocoa lifted by fragrant spice.",
      item4Price: "24 SAR",
      item5Name: "Citrus Cold Brew",
      item5Text: "Bright, crisp, and quietly refreshing.",
      item5Price: "21 SAR",
      item6Name: "Vanilla Basque Slice",
      item6Text: "Creamy, toasted, and made to share.",
      item6Price: "17 SAR",
      featureKicker: "Designed for the room",
      featureTitle: "The menu should feel as layered as the atmosphere around it.",
      featureText:
        "Use this section as the base for your real offerings, seasonal specials, and event-night pairings.",
      featureLink: "See the latest on Instagram"
    },
    gallery: {
      eyebrow: "Cafe + Gallery",
      title: "A compact space that still feels visually rich.",
      text:
        "Tarfay blends the intimacy of a neighborhood coffee bar with the curation of a small gallery. It invites guests to notice paintings, objects, textures, and people as part of one experience.",
      point1Title: "Rotating displays",
      point1Text: "Highlight local artists, small collections, and changing visual stories.",
      point2Title: "Lived-in corners",
      point2Text: "Seating is arranged to feel personal, artistic, and easy to return to.",
      point3Title: "Creative hospitality",
      point3Text: "Coffee service and visual identity work together instead of feeling separate.",
      frame1Label: "Art corner",
      frame1Text: "A lounge that reads like a small exhibition room.",
      frame2Label: "Creative details",
      frame2Text: "Objects and artist-made touches that stay in memory.",
      frame3Label: "Street presence",
      frame3Text: "From outside, the brand already feels like coffee and creativity together."
    },
    moments: {
      eyebrow: "Real Moments",
      title: "Inside Tarfay: coffee, gallery corners, and moving atmosphere.",
      text:
        "These cards use your local photos and videos so the website feels grounded in the real space, while still pointing people to Instagram and Google Maps.",
      sidebarEyebrow: "Visit & Follow",
      sidebarTitle: "A softer first impression before someone even arrives.",
      sidebarText:
        "The showcase on the left captures the intimacy of the space, while this card keeps your location and social presence easy to reach.",
      mapLabel: "Google Maps",
      mapTitle: "Prince Nasser St, Al Khobar Al Shamalia",
      instagramLabel: "Instagram",
      phoneLabel: "Phone",
      openInstagram: "Open Instagram",
      openMaps: "Open Maps",
      mapAlt: "Map preview of Tarfay on Prince Nasser Street in Al Khobar"
    },
    showcase: {
      photo: "Photo",
      video: "Reel",
      meta: "Inside Tarfay",
      fallback: "Tarfay moments will appear here.",
      imageAlt: "Tarfay showcase image",
      item1: "An event reel showing how the cafe can transform for intimate celebrations and creative nights.",
      item2: "Coffee moments that feel social, personal, and warmly lived-in rather than staged.",
      item3: "A gallery corner where paintings, seating, and color create a calm pause inside the cafe.",
      item4: "The storefront introduces Tarfay as a coffee house, art stop, and creative destination.",
      item5: "Artist-made details and collectible touches give the space a gallery personality.",
      item6: "A moving glimpse of the atmosphere inside, where coffee service and visual culture share the same room."
    },
    events: {
      eyebrow: "Events & Gatherings",
      title: "Made for intimate events, not oversized crowds.",
      text:
        "That smaller scale is part of the charm. Artist talks, launch evenings, Ramadan tables, and private gatherings can feel warm, elegant, and genuinely personal here.",
      point1Title: "Best fit",
      point1Text: "Creative gatherings, small celebrations, artist moments, and curated seasonal experiences.",
      point2Title: "Visual mood",
      point2Text: "Decor, flowers, table styling, and artwork can transform the room without losing its intimacy.",
      point3Title: "Guest experience",
      point3Text: "People feel hosted, close to the details, and connected to the purpose of the event."
    },
    visit: {
      eyebrow: "Visit Tarfay",
      title: "Meet us in Al Khobar.",
      text:
        "Find us on Prince Nasser Street in Al Khobar Al Shamalia for coffee, conversation, art, and a gallery-inspired pause from the rush.",
      addressLabel: "Address",
      addressText: "Prince Nasser St, Al Khobar Al Shamalia, Al Khobar 34427",
      phoneLabel: "Phone",
      instagramLabel: "Instagram",
      openMaps: "Open in Maps",
      followInstagram: "Follow on Instagram"
    },
    footer: {
      line2: "Crafted to introduce a warm cafe, art gallery, and intimate event space."
    }
  },
  ar: {
    meta: {
      title: "ترفاي | مقهى ومعرض فني",
      description:
        "ترفاي مقهى دافئ ومعرض فني ومساحة للفعاليات الحميمة على شارع الأمير ناصر في الخبر."
    },
    brand: {
      tagline: "بيت القهوة والفن"
    },
    ui: {
      menu: "القائمة"
    },
    nav: {
      story: "الحكاية",
      founder: "المؤسسة",
      menu: "القائمة",
      gallery: "المعرض",
      moments: "اللحظات",
      visit: "الزيارة",
      instagram: "إنستغرام"
    },
    hero: {
      eyebrow: "شارع الأمير ناصر، الخبر الشمالية",
      title: "قهوة وفن وفعاليات حميمة تحت سقف واحد أنيق.",
      text:
        "ترفاي وجهة دافئة في الخبر تجمع بين القهوة المختصة، وزوايا المعرض، واللقاءات الجميلة داخل أجواء ناعمة ومريحة.",
      primary: "خطط لزيارتك",
      secondary: "استكشف المكان",
      note1Title: "قهوة مختصة",
      note1Text: "مشروبات دافئة ولقيمات خفيفة وإيقاع أهدأ.",
      note2Title: "زوايا فنية",
      note2Text: "مساحة تمنح اللوحات والتفاصيل والخامات فرصة لتتكلم.",
      note3Title: "فعاليات صغيرة أنيقة",
      note3Text: "مثالية للإطلاقات الحميمة والأمسيات الإبداعية والتجمعات الخاصة.",
      stageLabel: "المقدمة",
      stageTitle: "مقهى ومعرض فني صُمم ليشعر الزائر بالهدوء والجمال والقرب.",
      stageText:
        "تأتي الحركة في الخلفية بخفة وشفافية منخفضة لتمنح الصفحة روحاً حية من دون أن تطغى على المحتوى.",
      stack1Label: "إحساس المعرض",
      stack1Text: "لوحات وألوان وجلسات مرتبة كأنها غرفة فنية معيشة.",
      stack2Label: "وجهة الحي",
      stack2Text: "واجهة تقول من اللحظة الأولى إن القهوة والإبداع يعيشان هنا معاً.",
      accentLabel: "ملكية سعودية",
      accentTitle: "قهوة. فن. مجتمع.",
      accentText: "مساحة حميمة في حجمها وغنية في أجوائها ومهيأة للفعاليات الراقية."
    },
    founder: {
      eyebrow: "المؤسسة والرئيسة التنفيذية",
      title: "رسالة من الشابة السعودية التي تقف خلف ترفاي.",
      text:
        "تشكّل ترفاي على أنه أكثر من مقهى. تخيلته غرفة ثقافية في الخبر يلتقي فيها القهوة والإبداع المحلي والضيافة في صورة واحدة جميلة.",
      point1Label: "الهوية",
      point1Text: "بيت قهوة سعودي التأسيس وله نظرة فنية واضحة.",
      point2Label: "الأجواء",
      point2Text: "دافئة وأنيقة ومقصودة في حميميتها بدلاً من اتساعها المبالغ فيه.",
      quote:
        '"أردتُ لتَرفاي أن يكون وقفة جميلة داخل المدينة. مكاناً تلتقي فيه القهوة المختصة، والإبداع المحلي، والضيافة الهادئة بصدق."',
      footer: "المؤسسة والرئيسة التنفيذية، ترفاي"
    },
    story: {
      eyebrow: "عن ترفاي",
      title: "مقهى بروح معرض وأجواء جاهزة للفعاليات الحميمة.",
      text:
        "التجربة مبنية على ثلاث طبقات: قهوة مختصة، وثقافة بصرية منسقة، وتجمعات صغيرة تشعر الزائر بالخصوصية منذ اللحظة الأولى.",
      card1Label: "القهوة أولاً",
      card1Title: "مكان يستقر فيه الزائر مع الكوب الذي بين يديه.",
      card1Text: "المشروبات واللقيمات جزء من الإحساس العام وليست مجرد قائمة فقط.",
      card2Label: "طبقة المعرض",
      card2Title: "جدران وزوايا وتفاصيل تشعر بأنها منسقة بعناية.",
      card2Text: "اللوحات والقطع الفنية والتفاصيل الملمسية تمنح المكان روح معرض صغير.",
      card3Label: "مزاج الفعالية",
      card3Title: "الأفضل للقاءات الصغيرة الراقية.",
      card3Text:
        "ترفاي ليس مساحة كبيرة، وهذا ما يجعل الإطلاقات والأمسيات الفنية واللقاءات الخاصة أكثر دفئاً وذكراً."
    },
    menu: {
      eyebrow: "قائمة مختارة",
      title: "مشروبات خاصة ولقيمات ناعمة لأمسيات هادئة.",
      group1: "طقوس القهوة",
      item1Name: "لاتيه الزعفران",
      item1Text: "حليب مخملي مع حلاوة زهرية ولمسة دافئة من التوابل.",
      item1Price: "22 ريال",
      item2Name: "فلات وايت المعرض",
      item2Text: "إسبريسو متوازن بلمسة شوكولاتة ناعمة.",
      item2Price: "19 ريال",
      item3Name: "كورتادو العسل",
      item3Text: "مشروب قصير وناعم بلمسة حلاوة كهرمانية.",
      item3Price: "18 ريال",
      group2: "أمسيات المعرض",
      item4Name: "موكا الهيل",
      item4Text: "كاكاو داكن يرفعه عبق التوابل.",
      item4Price: "24 ريال",
      item5Name: "كولد برو الحمضيات",
      item5Text: "مشروب مشرق ومنعش وهادئ الإحساس.",
      item5Price: "21 ريال",
      item6Name: "شريحة باسك بالفانيلا",
      item6Text: "كريمية ومحمصة ومثالية للمشاركة.",
      item6Price: "17 ريال",
      featureKicker: "مصممة للمكان",
      featureTitle: "يجب أن تشعر القائمة بأنها امتداد للأجواء بطبقاتها وهدوئها.",
      featureText:
        "يمكن استخدام هذا القسم كأساس لقائمتك الحقيقية وعروضك الموسمية وتجارب ليالي الفعاليات.",
      featureLink: "شاهد الجديد على إنستغرام"
    },
    gallery: {
      eyebrow: "المقهى + المعرض",
      title: "مساحة صغيرة في حجمها لكنها غنية بصرياً.",
      text:
        "ترفاي يمزج بين حميمية مقهى الحي وتنظيم معرض صغير. المكان يدعو الضيف إلى ملاحظة اللوحات والقطع والخامات والناس كجزء من تجربة واحدة.",
      point1Title: "عروض متجددة",
      point1Text: "تسليط الضوء على فنانين محليين ومجموعات صغيرة وحكايات بصرية متغيرة.",
      point2Title: "زوايا معيشة",
      point2Text: "الجلسات مرتبة لتشعر بأنها شخصية وفنية وسهلة العودة إليها.",
      point3Title: "ضيافة إبداعية",
      point3Text: "القهوة والهوية البصرية يعملان معاً بدلاً من أن يكون كل منهما منفصلاً.",
      frame1Label: "زاوية فنية",
      frame1Text: "جلسة تقرأ بصرياً كأنها غرفة معرض صغيرة.",
      frame2Label: "تفاصيل مبدعة",
      frame2Text: "قطع ولمسات فنية تبقى في الذاكرة.",
      frame3Label: "حضور الشارع",
      frame3Text: "حتى من الخارج تشعر العلامة بأنها تجمع القهوة والإبداع."
    },
    moments: {
      eyebrow: "لحظات حقيقية",
      title: "داخل ترفاي: قهوة، زوايا فنية، وأجواء تتحرك.",
      text:
        "هذه البطاقات تستخدم صورك وفيديوهاتك المحلية حتى يشعر الموقع بأنه نابع من المكان الحقيقي، مع إبقاء إنستغرام وخرائط Google قريبين.",
      sidebarEyebrow: "الزيارة والمتابعة",
      sidebarTitle: "انطباع أول أكثر نعومة قبل أن يصل الزائر.",
      sidebarText:
        "المعرض على اليسار يلتقط حميمية المكان، بينما تبقي هذه البطاقة الموقع والحضور الاجتماعي سهلَي الوصول.",
      mapLabel: "خرائط Google",
      mapTitle: "شارع الأمير ناصر، الخبر الشمالية",
      instagramLabel: "إنستغرام",
      phoneLabel: "الهاتف",
      openInstagram: "افتح إنستغرام",
      openMaps: "افتح الخرائط",
      mapAlt: "معاينة لموقع ترفاي على شارع الأمير ناصر في الخبر"
    },
    showcase: {
      photo: "صورة",
      video: "ريل",
      meta: "من داخل ترفاي",
      fallback: "ستظهر لحظات ترفاي هنا.",
      imageAlt: "صورة من ترفاي",
      item1: "ريل فعالية يوضح كيف يمكن للمقهى أن يتحول لاحتفالات حميمة وأمسيات إبداعية.",
      item2: "لحظات قهوة اجتماعية وشخصية ودافئة أكثر من كونها مصطنعة أو مبالغاً فيها.",
      item3: "زاوية معرض تتداخل فيها اللوحات مع الجلسات والألوان لتصنع وقفة هادئة داخل المقهى.",
      item4: "الواجهة تقدم ترفاي كبيت قهوة ومحطة فنية ووجهة إبداعية في الوقت نفسه.",
      item5: "تفاصيل وقطع فنية قابلة للاقتناء تمنح المكان شخصية معرض واضحة.",
      item6: "لقطة متحركة للأجواء الداخلية حيث تلتقي خدمة القهوة مع الثقافة البصرية في غرفة واحدة."
    },
    events: {
      eyebrow: "الفعاليات والتجمعات",
      title: "مهيأ للفعاليات الحميمة لا للحشود الكبيرة.",
      text:
        "هذا الحجم الأصغر جزء من سحر المكان. أحاديث الفنانين وأمسيات الإطلاق وموائد رمضان والتجمعات الخاصة تشعر هنا بدفء وأناقة وقرب حقيقي.",
      point1Title: "الأنسب له",
      point1Text: "التجمعات الإبداعية والاحتفالات الصغيرة واللحظات الفنية والتجارب الموسمية المنسقة.",
      point2Title: "المزاج البصري",
      point2Text: "الديكور والزهور وتنسيق الطاولات والأعمال الفنية يمكنها تحويل المساحة من دون أن تفقد حميميتها.",
      point3Title: "تجربة الضيف",
      point3Text: "يشعر الناس بأنهم مُحتفى بهم وقريبون من التفاصيل ومتصلون بهدف الفعالية."
    },
    visit: {
      eyebrow: "زيارة ترفاي",
      title: "نلتقي في الخبر.",
      text:
        "اعثر علينا في شارع الأمير ناصر بالخبر الشمالية لتعيش القهوة والفن والحوار واستراحة مستوحاة من المعارض.",
      addressLabel: "العنوان",
      addressText: "شارع الأمير ناصر، الخبر الشمالية، الخبر 34427",
      phoneLabel: "الهاتف",
      instagramLabel: "إنستغرام",
      openMaps: "افتح في الخرائط",
      followInstagram: "تابعنا على إنستغرام"
    },
    footer: {
      line2: "صُمم ليقدم مقهى دافئاً ومعرضاً فنياً ومساحة للفعاليات الحميمة."
    }
  }
};

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
    if (prefersReducedMotion) {
      video.pause();
      return;
    }

    if (!videoObserver) {
      return;
    }

    videoObserver.observe(video);
  });
}

function getInitialLanguage() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved && translations[saved]) {
      return saved;
    }
  } catch {
    // Ignore localStorage access issues.
  }

  return navigator.language && navigator.language.toLowerCase().startsWith("ar")
    ? "ar"
    : "en";
}

function getTranslation(language, key) {
  return key.split(".").reduce((value, segment) => value?.[segment], translations[language]);
}

function attachFallbackSource(element, sources) {
  let sourceIndex = 0;

  element.addEventListener("error", () => {
    sourceIndex += 1;

    if (sourceIndex < sources.length) {
      element.src = sources[sourceIndex];
    }
  });
}

function createImageElement(source, altText) {
  const image = document.createElement("img");
  image.src = source;
  image.alt = altText;
  image.loading = "lazy";
  attachFallbackSource(image, [source, "Logo.png"]);
  return image;
}

let currentLanguage = getInitialLanguage();

function createShowcaseCard(item, index) {
  const copy = translations[currentLanguage].showcase;
  const article = document.createElement("article");
  article.className = "showcase-card reveal";

  if (index === 0) {
    article.classList.add("is-feature");
  }

  if (item.kind === "video") {
    article.classList.add("is-video");
  }

  const frame = document.createElement(item.href ? "a" : "div");
  frame.className = "showcase-card-frame";

  if (item.href) {
    frame.href = item.href;
    frame.target = "_blank";
    frame.rel = "noreferrer";
  }

  if (item.kind === "video" && item.video && !prefersReducedMotion) {
    const video = document.createElement("video");
    video.src = item.video;
    video.poster = item.image;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = "metadata";
    video.className = "media-autoplay";
    video.addEventListener("error", () => {
      frame.replaceChildren(createImageElement(item.image, copy.imageAlt));
    });
    frame.appendChild(video);
  } else {
    frame.appendChild(createImageElement(item.image, copy.imageAlt));
  }

  const overlay = document.createElement("div");
  overlay.className = "showcase-card-body";

  const badge = document.createElement("span");
  badge.className = "showcase-card-badge";
  badge.textContent = item.kind === "video" ? copy.video : copy.photo;

  const caption = document.createElement("p");
  caption.className = "showcase-card-caption";
  caption.textContent = getTranslation(currentLanguage, item.titleKey) || copy.meta;

  const meta = document.createElement("p");
  meta.className = "showcase-card-meta";
  meta.textContent = copy.meta;

  overlay.append(badge, caption, meta);
  article.append(frame, overlay);

  return article;
}

function renderShowcase() {
  if (!showcaseGrid) {
    return;
  }

  const items = window.TARFAY_MEDIA?.showcase;

  if (!Array.isArray(items) || items.length === 0) {
    showcaseGrid.innerHTML = `
      <article class="showcase-card showcase-card-fallback reveal is-visible">
        <div class="showcase-card-empty">
          <p>${translations[currentLanguage].showcase.fallback}</p>
        </div>
      </article>
    `;
    return;
  }

  const cards = items.map((item, index) => createShowcaseCard(item, index));
  showcaseGrid.replaceChildren(...cards);
  registerReveal(cards);
  registerVideos(showcaseGrid.querySelectorAll(".media-autoplay"));
}

function applyLocationData() {
  const location = window.TARFAY_MEDIA?.location;

  if (!location) {
    return;
  }

  document.querySelectorAll("[data-location-link]").forEach((link) => {
    link.href = location.href;
  });

  document.querySelectorAll("[data-location-phone-text]").forEach((node) => {
    node.textContent = location.phone;
  });

  const telHref = `tel:${location.phone.replace(/[^\d+]/g, "")}`;

  document.querySelectorAll("[data-location-phone-link]").forEach((link) => {
    link.href = telHref;
    link.textContent = location.phone;
  });

  if (mapImage && location.image) {
    mapImage.src = location.image;
    attachFallbackSource(mapImage, [location.image, "Logo.png"]);
  }
}

function applyLanguage(language) {
  currentLanguage = translations[language] ? language : "en";
  const html = document.documentElement;
  const copy = translations[currentLanguage];

  html.lang = currentLanguage;
  html.dir = currentLanguage === "ar" ? "rtl" : "ltr";
  document.title = copy.meta.title;

  if (descriptionTag) {
    descriptionTag.setAttribute("content", copy.meta.description);
  }

  if (mapImage) {
    mapImage.alt = copy.moments.mapAlt;
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    const value = getTranslation(currentLanguage, key);
    if (typeof value === "string") {
      element.textContent = value;
    }
  });

  languageButtons.forEach((button) => {
    const isActive = button.getAttribute("data-lang-switch") === currentLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  try {
    window.localStorage.setItem(STORAGE_KEY, currentLanguage);
  } catch {
    // Ignore localStorage access issues.
  }

  renderShowcase();
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.getAttribute("data-lang-switch") || "en");
  });
});

applyLocationData();
registerVideos(document.querySelectorAll(".media-autoplay"));
applyLanguage(currentLanguage);
