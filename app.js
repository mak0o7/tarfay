const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".site-nav a");
const showcaseGrid = document.querySelector("#showcase-grid");
const collectionGrid = document.querySelector("#collection-grid");
const collectionFilterButtons = document.querySelectorAll("[data-collection-filter]");
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
      collageLabel: "Little details",
      collageTitle: "Matcha color, tabletop moments, and soft bites keep the space feeling alive.",
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
      collageLabel: "Visual map",
      collageTitle: "Storefront scenes, art tables, and workshop moments make the identity feel lived-in.",
      collageText:
        "The atmosphere grows through real objects, artist details, and how guests move through the room.",
      card3Label: "Event mood",
      card3Title: "Best for elegant small-scale gatherings.",
      card3Text:
        "Tarfay is not a large venue, which makes launches, artist evenings, and private meetups feel warm and memorable."
    },
    culture: {
      eyebrow: "Art & Culture",
      title: "A small cultural room shaped by coffee, color, and local creative energy.",
      text:
        "Tarfay is not trying to be a giant venue. Its strength is a more intimate cultural scale where visual art, conversation, and hospitality can sit close together.",
      column1Title: "Living walls",
      column1Text:
        "Artwork is not treated as decoration alone. It becomes part of how guests move, pause, and remember the room.",
      column2Title: "Saudi creative voice",
      column2Text:
        "The space can hold local stories, regional references, and artist-led details without losing the calm feeling of a cafe.",
      photo1Label: "Inside the room",
      photo1Text: "Color, paintings, and tables come together like a neighborhood salon.",
      photo2Label: "Coffee detail",
      photo2Text: "Even the cup can carry a sense of occasion and visual identity.",
      noteLabel: "Cultural rhythm",
      noteTitle: "Exhibitions, coffee conversations, seasonal styling, and soft community gatherings."
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
      featureLink: "See the latest on Instagram",
      collageLabel: "Table mood",
      collageTitle: "From matcha to pound cake, the menu can look as curated as the walls.",
      collageText:
        "Use these moments to present signature pairings, seasonal specials, and shareable table styling."
    },
    coffee: {
      eyebrow: "Coffee Story",
      title: "Coffee here should feel intentional, comforting, and beautifully served.",
      text:
        "From the first cup to the last detail on the saucer, the coffee program can support the emotional tone of the space: warm, photogenic, and easy to return to.",
      point1Title: "Ritual",
      point1Text: "A service style that feels slow enough for conversation and quiet appreciation.",
      point2Title: "Signature profile",
      point2Text:
        "Drinks can blend familiar comfort with regional touches such as saffron, cardamom, or floral notes.",
      point3Title: "Visual finish",
      point3Text:
        "Presentation matters because the coffee is part of the gallery-like experience, not separate from it."
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
    collection: {
      eyebrow: "Coffee & Gallery Details",
      title: "A visual wall of drinks, details, styling, and art objects.",
      text:
        "This gallery uses the image library across themed moments so visitors can feel both the coffee menu and the cultural identity of the space.",
      filterAll: "All",
      filterMatcha: "Matcha",
      filterCoffee: "Coffee",
      filterPoundCake: "Pound cake",
      filterByOwner: "By owner",
      filterVideos: "Videos",
      openImage: "Open image",
      openVideo: "Open video",
      close: "Close viewer",
      item1Label: "Latte art",
      item1Title: "Soft pours and quiet coffee ritual.",
      item2Label: "Matcha",
      item2Title: "Colorful drinks that feel playful and collectible.",
      item3Label: "Mocha moment",
      item3Title: "A tray, a cup, and a styled pause in the day.",
      item4Label: "Seasonal decor",
      item4Title: "Special occasions become part of the visual identity.",
      item5Label: "Interior details",
      item5Title: "Hanging decor, paper forms, and small installation moments.",
      item6Label: "Creative objects",
      item6Title: "Artist-made pieces that extend the gallery feeling beyond the wall.",
      item7Label: "Pound cake",
      item7Title: "A quiet table pairing of cake, coffee, and sketchbook mood.",
      item8Label: "Art lounge",
      item8Title: "A lived-in corner where conversation and color share the room.",
      item9Label: "Intro video",
      item9Title: "A moving first impression of the cafe-gallery atmosphere.",
      item10Label: "Event video",
      item10Title: "A closer look at intimate event styling inside the space.",
      item11Label: "Gallery video",
      item11Title: "Motion, decor, and visual rhythm from inside Tarfay."
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
      point3Text: "People feel hosted, close to the details, and connected to the purpose of the event.",
      card1Label: "Art nights",
      card1Title: "Artist talks, openings, and small exhibition moments.",
      card1Text:
        "The room is well suited to intimate art gatherings where guests can move between coffee, conversation, and the work on display.",
      card2Label: "Seasonal styling",
      card2Title: "Ramadan tables, holiday decor, and branded activations.",
      card2Text:
        "Events feel memorable because the decor can transform the cafe without losing its warmth.",
      card3Label: "Creative community",
      card3Title: "Workshops, meetups, and culture-led collaborations.",
      card3Text:
        "The best events here feel curated and human-scaled rather than loud or overproduced."
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
      collageLabel: "تفاصيل صغيرة",
      collageTitle: "ألوان الماتشا، ولحظات الطاولة، واللقيمات الناعمة تبقي المكان حيّاً.",
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
      collageLabel: "خريطة بصرية",
      collageTitle: "الواجهة وطاولات الفن والورش الإبداعية تجعل الهوية تبدو معيشة وحقيقية.",
      collageText:
        "تنمو الأجواء من خلال الأشياء الحقيقية وتفاصيل الفنانين والطريقة التي يتحرك بها الضيف داخل الغرفة.",
      card3Label: "مزاج الفعالية",
      card3Title: "الأفضل للقاءات الصغيرة الراقية.",
      card3Text:
        "ترفاي ليس مساحة كبيرة، وهذا ما يجعل الإطلاقات والأمسيات الفنية واللقاءات الخاصة أكثر دفئاً وذكراً."
    },
    culture: {
      eyebrow: "الفن والثقافة",
      title: "غرفة ثقافية صغيرة تتشكل بالقهوة واللون والطاقة الإبداعية المحلية.",
      text:
        "ترفاي لا يحاول أن يكون مساحة ضخمة. قوته في حجمه الحميمي الذي يسمح للفن البصري والحوار والضيافة أن يجتمعوا بالقرب من بعضهم البعض.",
      column1Title: "جدران حيّة",
      column1Text:
        "الأعمال الفنية ليست مجرد زينة. إنها جزء من الطريقة التي يتحرك بها الضيف ويتوقف ويتذكر بها المكان.",
      column2Title: "صوت إبداعي سعودي",
      column2Text:
        "يمكن للمساحة أن تحمل قصصاً محلية وإشارات ثقافية وتفاصيل يقودها الفنانون من دون أن تفقد هدوء المقهى.",
      photo1Label: "داخل المساحة",
      photo1Text: "الألوان واللوحات والطاولات تجتمع كأنها صالون حيّ داخل الحي.",
      photo2Label: "تفصيل قهوة",
      photo2Text: "حتى الكوب نفسه يمكن أن يحمل إحساس المناسبة والهوية البصرية.",
      noteLabel: "الإيقاع الثقافي",
      noteTitle: "معارض، وحوارات على القهوة، وتنسيقات موسمية، وتجمعات مجتمعية ناعمة."
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
      featureLink: "شاهد الجديد على إنستغرام",
      collageLabel: "مزاج الطاولة",
      collageTitle: "من الماتشا إلى الباوند كيك، يمكن للقائمة أن تبدو منسقة مثل الجدران نفسها.",
      collageText:
        "يمكن استخدام هذه اللحظات لعرض التوليفات الخاصة والعروض الموسمية وتنسيق الطاولة القابل للمشاركة."
    },
    coffee: {
      eyebrow: "حكاية القهوة",
      title: "يجب أن تشعر القهوة هنا بأنها مقصودة، مريحة، ومقدمة بجمال.",
      text:
        "من أول كوب إلى آخر تفصيلة على الصحن، يمكن لبرنامج القهوة أن يدعم النبرة العاطفية للمكان: دفء، وصورة جميلة، وسهولة في العودة إليه.",
      point1Title: "الطقس",
      point1Text: "أسلوب خدمة بطيء بما يكفي للحوار والتأمل والجلوس الهادئ.",
      point2Title: "البصمة الخاصة",
      point2Text:
        "يمكن للمشروبات أن تجمع بين الراحة المألوفة ولمسات محلية مثل الزعفران أو الهيل أو النكهات الزهرية.",
      point3Title: "اللمسة البصرية",
      point3Text:
        "طريقة التقديم مهمة لأن القهوة جزء من التجربة الشبيهة بالمعرض وليست شيئاً منفصلاً عنها."
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
    collection: {
      eyebrow: "تفاصيل القهوة والمعرض",
      title: "جدار بصري للمشروبات والتفاصيل والتنسيقات والقطع الفنية.",
      text:
        "يعرض هذا القسم مكتبة الصور في لحظات مصنفة حتى يشعر الزائر بالقائمة وبالهوية الثقافية للمكان معاً.",
      filterAll: "الكل",
      filterMatcha: "ماتشا",
      filterCoffee: "قهوة",
      filterPoundCake: "باوند كيك",
      filterByOwner: "باختيار المالكة",
      filterVideos: "فيديوهات",
      openImage: "افتح الصورة",
      openVideo: "افتح الفيديو",
      close: "إغلاق العارض",
      item1Label: "لاتيه آرت",
      item1Title: "سكب ناعم وطقس قهوة هادئ.",
      item2Label: "ماتشا",
      item2Title: "مشروبات ملونة تشعر بأنها مرحة وقابلة للتذكر.",
      item3Label: "لحظة موكا",
      item3Title: "صينية وكوب ووقفة منسقة داخل اليوم.",
      item4Label: "ديكور موسمي",
      item4Title: "المناسبات الخاصة تصبح جزءاً من الهوية البصرية.",
      item5Label: "تفاصيل داخلية",
      item5Title: "عناصر معلقة وأشكال ورقية ولمسات تركيبية صغيرة.",
      item6Label: "قطع إبداعية",
      item6Title: "أعمال وقطع فنية تمد إحساس المعرض إلى ما بعد الجدار.",
      item7Label: "باوند كيك",
      item7Title: "تنسيق هادئ بين الكيك والقهوة وطاولة تشبه دفتر ملاحظات.",
      item8Label: "ركن فني",
      item8Title: "زاوية معيشة يلتقي فيها الحوار مع اللون داخل الغرفة.",
      item9Label: "فيديو المقدمة",
      item9Title: "انطباع متحرك عن أجواء المقهى والمعرض.",
      item10Label: "فيديو فعالية",
      item10Title: "نظرة أقرب إلى تنسيق الفعاليات الحميمة داخل المكان.",
      item11Label: "فيديو المعرض",
      item11Title: "حركة وديكور وإيقاع بصري من داخل ترفاي."
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
      point3Text: "يشعر الناس بأنهم مُحتفى بهم وقريبون من التفاصيل ومتصلون بهدف الفعالية.",
      card1Label: "ليالي الفن",
      card1Title: "أحاديث الفنانين والافتتاحات واللحظات المعرضية الصغيرة.",
      card1Text:
        "المكان مناسب للتجمعات الفنية الحميمة التي ينتقل فيها الضيف بين القهوة والحوار والعمل المعروض بسهولة.",
      card2Label: "التنسيق الموسمي",
      card2Title: "موائد رمضان والديكور الموسمي والتجارب ذات الهوية الخاصة.",
      card2Text:
        "تصبح الفعالية أكثر رسوخاً في الذاكرة لأن الديكور قادر على تحويل المقهى من دون أن يفقد دفئه.",
      card3Label: "المجتمع الإبداعي",
      card3Title: "ورش ولقاءات وتعاونات تقودها الثقافة.",
      card3Text:
        "أجمل الفعاليات هنا هي التي تشعر بأنها منسقة وعلى مقياس إنساني بعيداً عن الصخب أو المبالغة."
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

const collectionItems = [
  {
    kind: "image",
    image: "assets/instagram-05.jpg",
    titleKey: "collection.item1Title",
    labelKey: "collection.item1Label",
    categories: ["coffee"]
  },
  {
    kind: "image",
    image: "assets/instagram-01.jpg",
    titleKey: "collection.item2Title",
    labelKey: "collection.item2Label",
    categories: ["matcha", "by-owner"]
  },
  {
    kind: "image",
    image: "assets/instagram-03.jpg",
    titleKey: "collection.item3Title",
    labelKey: "collection.item3Label",
    categories: ["coffee"]
  },
  {
    kind: "image",
    image: "assets/instagram-04.jpg",
    titleKey: "collection.item4Title",
    labelKey: "collection.item4Label",
    categories: ["by-owner"]
  },
  {
    kind: "image",
    image: "assets/instagram-06.jpg",
    titleKey: "collection.item5Title",
    labelKey: "collection.item5Label",
    categories: ["by-owner"]
  },
  {
    kind: "image",
    image: "assets/event-merch.jpg",
    titleKey: "collection.item6Title",
    labelKey: "collection.item6Label",
    categories: ["by-owner"]
  },
  {
    kind: "image",
    image: "assets/pound-cake.jpg",
    titleKey: "collection.item7Title",
    labelKey: "collection.item7Label",
    categories: ["pound-cake", "coffee"]
  },
  {
    kind: "image",
    image: "assets/instagram-02.jpg",
    titleKey: "collection.item8Title",
    labelKey: "collection.item8Label",
    categories: ["coffee", "by-owner"]
  },
  {
    kind: "video",
    video: "assets/intro-video.mp4",
    image: "assets/storefront.jpg",
    titleKey: "collection.item9Title",
    labelKey: "collection.item9Label",
    categories: ["videos"]
  },
  {
    kind: "video",
    video: "assets/events-video.mp4",
    image: "assets/event-table.jpg",
    titleKey: "collection.item10Title",
    labelKey: "collection.item10Label",
    categories: ["videos"]
  },
  {
    kind: "video",
    video: "assets/gallery-video.mp4",
    image: "assets/event-detail.jpg",
    titleKey: "collection.item11Title",
    labelKey: "collection.item11Label",
    categories: ["videos", "by-owner"]
  },
  {
    kind: "image",
    image: "assets/matcha-heart.jpeg",
    label: {
      en: "Matcha signature",
      ar: "ماتشا مميزة"
    },
    title: {
      en: "A playful matcha moment with strong brand color and personality.",
      ar: "لحظة ماتشا مرحة تحمل لون العلامة وشخصيتها بوضوح."
    },
    categories: ["matcha", "by-owner"]
  },
  {
    kind: "image",
    image: "assets/matcha-minimal.jpeg",
    label: {
      en: "Matcha styling",
      ar: "تنسيق الماتشا"
    },
    title: {
      en: "Minimal product styling that feels young, collectible, and social.",
      ar: "تنسيق بصري بسيط يشعر الزائر بأنه شبابي وقابل للمشاركة والتذكر."
    },
    categories: ["matcha", "by-owner"]
  },
  {
    kind: "image",
    image: "assets/pour-over-detail.jpg",
    label: {
      en: "Pour-over detail",
      ar: "تفصيلة تحضير"
    },
    title: {
      en: "Brewing becomes part of the performance inside the room.",
      ar: "يتحول تحضير القهوة إلى جزء من المشهد داخل المكان."
    },
    categories: ["coffee", "by-owner"]
  },
  {
    kind: "image",
    image: "assets/art-workshop.jpeg",
    label: {
      en: "Art workshop",
      ar: "ورشة فنية"
    },
    title: {
      en: "Hands-on creative sessions deepen the gallery identity of Tarfay.",
      ar: "الجلسات الإبداعية العملية تعمق هوية ترفاي كمساحة فنية."
    },
    categories: ["by-owner"]
  },
  {
    kind: "image",
    image: "assets/latte-flower.jpeg",
    label: {
      en: "Latte flower",
      ar: "لاتيه آرت"
    },
    title: {
      en: "A clean cup and a floral pour keep the coffee story elegant.",
      ar: "كوب نظيف ورسمة ناعمة يحافظان على حكاية القهوة بأناقة."
    },
    categories: ["coffee"]
  },
  {
    kind: "image",
    image: "assets/autumn-latte.jpeg",
    label: {
      en: "Seasonal latte",
      ar: "لاتيه موسمي"
    },
    title: {
      en: "Seasonal flavors and table styling make even one drink feel event-ready.",
      ar: "النكهات الموسمية وتنسيق الطاولة يجعلان حتى المشروب الواحد جاهزاً للمناسبة."
    },
    categories: ["coffee", "by-owner"]
  },
  {
    kind: "image",
    image: "assets/cocoa-window.jpeg",
    label: {
      en: "Coffee & cake",
      ar: "قهوة وكيك"
    },
    title: {
      en: "A window-side cup with cake brings out the softer neighborhood feeling.",
      ar: "كوب بجانب النافذة مع الكيك يبرز الإحساس الحميمي للمكان داخل الحي."
    },
    categories: ["coffee", "pound-cake", "by-owner"]
  },
  {
    kind: "image",
    image: "assets/art-table.jpeg",
    label: {
      en: "Sketchbook table",
      ar: "طاولة الرسم"
    },
    title: {
      en: "Coffee, pound cake, watercolor, and notes on one creative table.",
      ar: "قهوة وباوند كيك وألوان مائية وملاحظات على طاولة إبداعية واحدة."
    },
    categories: ["coffee", "pound-cake", "by-owner"]
  },
  {
    kind: "image",
    image: "assets/streetfront-gallery.jpeg",
    label: {
      en: "Streetfront",
      ar: "الواجهة"
    },
    title: {
      en: "From the street, the shop already reads as coffee, art, and youth culture.",
      ar: "حتى من الشارع تبدو الواجهة وكأنها تجمع بين القهوة والفن والثقافة الشبابية."
    },
    categories: ["by-owner"]
  },
  {
    kind: "image",
    image: "assets/pour-over-bar.jpeg",
    label: {
      en: "Bar ritual",
      ar: "طقس البار"
    },
    title: {
      en: "The bar becomes a live coffee stage during service hours.",
      ar: "يتحول البار إلى مسرح حي للقهوة خلال ساعات الخدمة."
    },
    categories: ["coffee", "by-owner"]
  },
  {
    kind: "image",
    image: "assets/branded-cups.jpeg",
    label: {
      en: "Branded cups",
      ar: "أكواب العلامة"
    },
    title: {
      en: "Even the cups carry the playful visual identity of the house.",
      ar: "حتى الأكواب نفسها تحمل الهوية البصرية المرحة للمكان."
    },
    categories: ["coffee", "by-owner"]
  },
  {
    kind: "image",
    image: "assets/hot-chocolate.jpeg",
    label: {
      en: "Hot chocolate",
      ar: "هوت شوكليت"
    },
    title: {
      en: "Comfort drinks can sit beside the coffee menu without breaking the mood.",
      ar: "يمكن للمشروبات المريحة أن تعيش بجوار قائمة القهوة من دون أن تكسر أجواء المكان."
    },
    categories: ["coffee", "by-owner"]
  },
  {
    kind: "video",
    video: "assets/instagram-02.mp4",
    image: "assets/instagram-02.jpg",
    label: {
      en: "Interior reel",
      ar: "ريل داخلي"
    },
    title: {
      en: "A moving glance across the colorful interior and gallery atmosphere.",
      ar: "نظرة متحركة عبر الداخل الملون وأجواء المعرض داخل ترفاي."
    },
    categories: ["videos", "by-owner"]
  },
  {
    kind: "video",
    video: "assets/instagram-06.mp4",
    image: "assets/instagram-06.jpg",
    label: {
      en: "Decor reel",
      ar: "ريل الديكور"
    },
    title: {
      en: "Small decor gestures and visual rhythm captured in motion.",
      ar: "حركات الديكور الصغيرة والإيقاع البصري كما يظهران في الفيديو."
    },
    categories: ["videos", "by-owner"]
  }
];

const collectionSupportCards = {
  matcha: {
    label: {
      en: "Matcha board",
      ar: "لوحة الماتشا"
    },
    title: {
      en: "A brighter color story for guests who love playful, photogenic drinks.",
      ar: "حكاية لونية أكثر إشراقاً للضيوف الذين يحبون المشروبات المرحة والجميلة بصرياً."
    },
    text: {
      en: "Matcha can anchor a younger, more collectible side of the brand without losing elegance.",
      ar: "يمكن للماتشا أن يمنح العلامة جانباً أكثر شبابية وقابلية للمشاركة من دون أن يفقدها أناقتها."
    },
    images: ["assets/matcha-heart.jpeg", "assets/matcha-minimal.jpeg", "assets/instagram-01.jpg"]
  },
  coffee: {
    label: {
      en: "Coffee board",
      ar: "لوحة القهوة"
    },
    title: {
      en: "Latte art, brewing ritual, and branded cups make the coffee program feel designed.",
      ar: "رسومات اللاتيه وطقوس التحضير والأكواب المميزة تجعل برنامج القهوة يبدو مصمماً بعناية."
    },
    text: {
      en: "Use this area to show depth: espresso, slow coffee, comforting cups, and table styling.",
      ar: "يمكن لهذا القسم أن يظهر العمق: إسبريسو، وقهوة مختصة، وأكواب مريحة، وتنسيق للطاولة."
    },
    images: ["assets/latte-flower.jpeg", "assets/pour-over-detail.jpg", "assets/branded-cups.jpeg", "assets/hot-chocolate.jpeg"]
  },
  "pound-cake": {
    label: {
      en: "Cake pairing",
      ar: "تنسيق الكيك"
    },
    title: {
      en: "Soft bites deserve their own visual moment beside the drinks.",
      ar: "اللقيمات الناعمة تستحق لحظتها البصرية الخاصة إلى جانب المشروبات."
    },
    text: {
      en: "Pound cake works best when it is styled as part of the table mood, not as an afterthought.",
      ar: "يبدو الباوند كيك في أجمل صورة حين يقدَّم كجزء من مزاج الطاولة لا كإضافة ثانوية."
    },
    images: ["assets/pound-cake.jpg", "assets/art-table.jpeg", "assets/cocoa-window.jpeg"]
  },
  "by-owner": {
    label: {
      en: "Owner's edit",
      ar: "اختيار المالكة"
    },
    title: {
      en: "A mix of workshops, storefront scenes, and details that carry Tarfay's personality.",
      ar: "خليط من الورش والواجهة والتفاصيل التي تحمل شخصية ترفاي الخاصة."
    },
    text: {
      en: "This edit keeps the site feeling personal and hand-shaped rather than generic.",
      ar: "يحافظ هذا الاختيار على شعور الموقع بأنه شخصي ومصاغ بعناية لا أنه عام أو مكرر."
    },
    images: ["assets/art-workshop.jpeg", "assets/streetfront-gallery.jpeg", "assets/event-merch.jpg", "assets/art-table.jpeg"]
  },
  videos: {
    label: {
      en: "Storyboard",
      ar: "لوحة المشاهد"
    },
    title: {
      en: "The reels work best when still frames and atmosphere continue around them.",
      ar: "تظهر الريلات بشكل أفضل حين تستمر اللقطات الثابتة والأجواء البصرية من حولها."
    },
    text: {
      en: "Motion introduces the mood, while the surrounding stills keep the page rich instead of empty.",
      ar: "تقدم الحركة المزاج العام، بينما تبقي الصور المحيطة الصفحة غنية بصرياً بدلاً من الفراغ."
    },
    images: ["assets/instagram-02.jpg", "assets/instagram-06.jpg", "assets/storefront.jpg", "assets/gallery-lounge.jpg"]
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

function getCollectionText(item, field) {
  const directValue = item[field];
  if (typeof directValue === "string") {
    return directValue;
  }

  if (directValue && typeof directValue === "object") {
    return directValue[currentLanguage] || directValue.en || "";
  }

  const key = item[`${field}Key`];
  return key ? getTranslation(currentLanguage, key) || "" : "";
}

function getLocalizedContent(source, field) {
  const value = source?.[field];
  if (typeof value === "string") {
    return value;
  }

  if (value && typeof value === "object") {
    return value[currentLanguage] || value.en || "";
  }

  return "";
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
let currentCollectionFilter = "all";
let activeViewerItem = null;
let mediaViewer = null;

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

function ensureMediaViewer() {
  if (mediaViewer) {
    return mediaViewer;
  }

  const overlay = document.createElement("div");
  overlay.className = "media-viewer";
  overlay.setAttribute("aria-hidden", "true");
  overlay.innerHTML = `
    <div class="media-viewer-backdrop" data-viewer-close></div>
    <div class="media-viewer-panel" role="dialog" aria-modal="true" aria-label="Media viewer">
      <button class="media-viewer-close" type="button" data-viewer-close>
        <span aria-hidden="true">×</span>
      </button>
      <div class="media-viewer-content"></div>
      <div class="media-viewer-caption"></div>
    </div>
  `;

  overlay.addEventListener("click", (event) => {
    if (event.target instanceof HTMLElement && event.target.hasAttribute("data-viewer-close")) {
      closeMediaViewer();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMediaViewer();
    }
  });

  document.body.appendChild(overlay);
  mediaViewer = overlay;
  return overlay;
}

function closeMediaViewer() {
  if (!mediaViewer) {
    return;
  }

  const content = mediaViewer.querySelector(".media-viewer-content");
  if (content) {
    content.querySelectorAll("video").forEach((video) => video.pause());
    content.replaceChildren();
  }

  mediaViewer.classList.remove("is-open");
  mediaViewer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("viewer-open");
  activeViewerItem = null;
}

function openMediaViewer(item) {
  const viewer = ensureMediaViewer();
  const content = viewer.querySelector(".media-viewer-content");
  const caption = viewer.querySelector(".media-viewer-caption");
  const closeButton = viewer.querySelector(".media-viewer-close");
  const copy = translations[currentLanguage].collection;

  if (!content || !caption || !closeButton) {
    return;
  }

  activeViewerItem = item;
  content.replaceChildren();

  if (item.kind === "video" && item.video) {
    const video = document.createElement("video");
    video.src = item.video;
    video.poster = item.image;
    video.controls = true;
    video.autoplay = true;
    video.playsInline = true;
    video.preload = "metadata";
    content.appendChild(video);
  } else if (item.image) {
    content.appendChild(createImageElement(item.image, copy.openImage));
  }

  const label = document.createElement("span");
  label.className = "media-viewer-label";
  label.textContent = getCollectionText(item, "label");

  const title = document.createElement("strong");
  title.textContent = getCollectionText(item, "title");

  caption.replaceChildren(label, title);
  closeButton.setAttribute("aria-label", copy.close);
  viewer.classList.add("is-open");
  viewer.setAttribute("aria-hidden", "false");
  document.body.classList.add("viewer-open");
}

function createCollectionCard(item) {
  const copy = translations[currentLanguage].collection;
  const article = document.createElement("article");
  article.className = "collection-card reveal";

  const button = document.createElement("button");
  button.className = "collection-card-button";
  button.type = "button";
  button.setAttribute("aria-label", item.kind === "video" ? copy.openVideo : copy.openImage);
  button.addEventListener("click", () => {
    openMediaViewer(item);
  });

  if (item.kind === "video" && item.video) {
    const video = document.createElement("video");
    video.src = item.video;
    video.poster = item.image;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = "metadata";
    video.className = "media-autoplay";
    video.addEventListener("error", () => {
      button.replaceChildren(createImageElement(item.image, copy.openVideo));
    });
    button.appendChild(video);
  } else {
    button.appendChild(createImageElement(item.image, copy.openImage));
  }

  const overlay = document.createElement("div");
  overlay.className = "collection-card-copy";

  const badge = document.createElement("span");
  badge.textContent = getCollectionText(item, "label");

  const title = document.createElement("strong");
  title.textContent = getCollectionText(item, "title");

  overlay.append(badge, title);
  button.appendChild(overlay);
  article.appendChild(button);

  return article;
}

function createCollectionSupportCard(filter) {
  const support = collectionSupportCards[filter];
  if (!support) {
    return null;
  }

  const article = document.createElement("article");
  article.className = "collection-support-card reveal";

  const mosaic = document.createElement("div");
  mosaic.className = "collection-support-mosaic";

  support.images.forEach((source) => {
    mosaic.appendChild(createImageElement(source, getLocalizedContent(support, "title")));
  });

  const copy = document.createElement("div");
  copy.className = "collection-support-copy";

  const label = document.createElement("span");
  label.textContent = getLocalizedContent(support, "label");

  const title = document.createElement("strong");
  title.textContent = getLocalizedContent(support, "title");

  const text = document.createElement("p");
  text.textContent = getLocalizedContent(support, "text");

  copy.append(label, title, text);
  article.append(mosaic, copy);

  return article;
}

function renderCollection() {
  if (!collectionGrid) {
    return;
  }

  const items =
    currentCollectionFilter === "all"
      ? collectionItems
      : collectionItems.filter((item) => item.categories.includes(currentCollectionFilter));

  const cards = items.map((item) => createCollectionCard(item));
  const supportCard = currentCollectionFilter === "all" ? null : createCollectionSupportCard(currentCollectionFilter);
  const nodes = supportCard ? [...cards, supportCard] : cards;

  collectionGrid.replaceChildren(...nodes);
  registerReveal(nodes);
  registerVideos(collectionGrid.querySelectorAll(".media-autoplay"));
}

function setCollectionFilter(filter) {
  currentCollectionFilter = filter;
  collectionFilterButtons.forEach((button) => {
    const isActive = button.getAttribute("data-collection-filter") === filter;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  renderCollection();
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
  renderCollection();

  if (activeViewerItem) {
    openMediaViewer(activeViewerItem);
  }
}

collectionFilterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setCollectionFilter(button.getAttribute("data-collection-filter") || "all");
  });
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.getAttribute("data-lang-switch") || "en");
  });
});

applyLocationData();
registerVideos(document.querySelectorAll(".media-autoplay"));
applyLanguage(currentLanguage);
setCollectionFilter(currentCollectionFilter);
