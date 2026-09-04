/* Mohammad Elhafi — editorial portfolio */

const WHATSAPP_NUMBER = "971502634260"; // +971 50 263 4260

/* ============================ data ============================ */

const CATEGORIES = [
  { id: "nfc",    en: "NFC Smart Cards",    ar: "بطاقات NFC الذكية", tr: "NFC Akıllı Kartlar" },
  { id: "menus",  en: "Menus & Restaurants", ar: "قوائم ومطاعم", tr: "Menüler & Restoranlar" },
  { id: "shops",  en: "E-Commerce",          ar: "متاجر إلكترونية", tr: "E-Ticaret" },
  { id: "fitness",en: "Fitness",             ar: "لياقة", tr: "Fitness" },
  { id: "cars",   en: "Car Rental",          ar: "تأجير سيارات", tr: "Araç Kiralama" },
  { id: "agency", en: "Agency",              ar: "وكالة", tr: "Ajans" },
];

const PROJECTS = [
  { id:"nfc-smart-cards", cat:"nfc", img:"assets/work/nfc-smart-cards.png",
    en:{ name:"NFC Smart Cards", desc:"Tap-ready physical cards for frictionless digital actions — helping customers follow a brand on Instagram or leave a Google review without searching, typing or downloading an app." },
    ar:{ name:"بطاقات NFC الذكية", desc:"بطاقات ذكية تعمل بلمسة واحدة لتسهيل التفاعل الرقمي — تتيح للعملاء متابعة العلامة على إنستغرام أو كتابة تقييم على Google دون بحث أو كتابة أو تنزيل تطبيق." },
    tr:{ name:"NFC Akıllı Kartlar", desc:"Tek dokunuşla dijital etkileşim sağlayan fiziksel kartlar — müşteriler arama yapmadan, yazmadan veya uygulama indirmeden Instagram'da takip edebilir ya da Google yorumu bırakabilir." },
    tags:["NFC","Google Reviews","Instagram"] },
  { id:"klyro", cat:"agency", img:"assets/work/klyro.png",
    en:{ name:"Klyro", desc:"My SaaS platform. An AI assistant wired into a CRM — replies to customers on WhatsApp and Instagram in seconds, captures every lead and organizes the pipeline, 24/7." },
    ar:{ name:"كليرو", desc:"منصتي البرمجية. مساعد ذكي مدمج مع نظام CRM — يرد على العملاء عبر واتساب وإنستغرام في ثوانٍ، ويسجّل كل عميل محتمل وينظّم خط البيع، على مدار الساعة." },
    tr:{ name:"Klyro", desc:"Benim SaaS platformum. Bir CRM'e bağlı yapay zekâ asistanı — müşterilere WhatsApp ve Instagram'da saniyeler içinde yanıt verir, her potansiyel müşteriyi kaydeder ve satış hattını yönetir, 7/24." },
    tags:["Founder","SaaS","AI · WhatsApp"] },
  { id:"kickfit", cat:"fitness", img:"assets/work/kickfit.png",
    en:{ name:"Kickfit", desc:"A premium gym in Başakşehir led by a European kickboxing champion — dark and gold luxury, trilingual with full RTL, built to sell memberships." },
    ar:{ name:"كيك فيت", desc:"نادٍ رياضي فاخر في باشاك شهير يقوده بطل أوروبا في الكيك بوكسينغ — فخامة بالأسود والذهبي، ثلاثي اللغات بدعم كامل للعربية." },
    tr:{ name:"Kickfit", desc:"Başakşehir'de Avrupa kickboks şampiyonunun liderliğindeki premium bir salon — koyu ve altın lüks, tam RTL desteğiyle üç dilli, üyelik satmak için tasarlandı." },
    tags:["Fitness","TR · AR · EN","Luxury"] },
  { id:"noor", cat:"shops", img:"assets/work/noor.png",
    url:"https://lightcoral-monkey-900651.hostingersite.com/",
    en:{ name:"NOOR", desc:"A luxury modest-fashion house in dark and gold — full e-commerce with cart and WhatsApp checkout, Arabic calligraphy details, and couture-level restraint." },
    ar:{ name:"نور", desc:"دار أزياء محتشمة فاخرة بالأسود والذهبي — متجر كامل بسلة شراء وإتمام الطلب عبر واتساب، مع لمسات خط عربي وأناقة هادئة." },
    tr:{ name:"NOOR", desc:"Koyu ve altın tonda lüks bir mütevazı moda evi — sepet ve WhatsApp ödemeli tam e-ticaret, Arap kaligrafisi detayları ve couture seviyesinde sadelik." },
    tags:["E-commerce","Cart + WhatsApp","EN · TR · AR"] },
  { id:"asfalt", cat:"shops", img:"assets/work/asfalt.png",
    url:"https://forestgreen-mallard-673486.hostingersite.com/",
    en:{ name:"ASFALT", desc:"Brutalist Istanbul streetwear — concrete grey and acid green, hard edges, limited drops. The deliberate opposite of NOOR, from the same keyboard." },
    ar:{ name:"أسفلت", desc:"ستريت وير إسطنبولي بروح خرسانية — رمادي إسمنتي وأخضر حمضي وحواف حادة. النقيض المتعمد لِنور، من نفس لوحة المفاتيح." },
    tr:{ name:"ASFALT", desc:"Brütalist İstanbul sokak modası — beton grisi ve asit yeşili, keskin hatlar, sınırlı koleksiyonlar. Aynı klavyeden NOOR'un kasıtlı zıttı." },
    tags:["E-commerce","Brutalist","Limited drops"] },
  { id:"bhaleeb", cat:"menus", img:"assets/work/bhaleeb.png",
    url:"https://lightgray-koala-839125.hostingersite.com/",
    en:{ name:"Bhaleeb", desc:"A trilingual QR menu for a milk-dessert café — soft blue and cream branding, product photography front and center, built to make you hungry before you sit down." },
    ar:{ name:"بحليب", desc:"قائمة QR ثلاثية اللغات لمقهى حلويات الحليب — هوية بألوان الأزرق والكريمي، مع تصوير المنتجات في الواجهة، صُممت لتفتح شهيتك قبل أن تجلس." },
    tr:{ name:"Bhaleeb", desc:"Sütlü tatlı kafesi için üç dilli QR menü — yumuşak mavi ve krem marka kimliği, ürün fotoğrafları ön planda; oturmadan iştahınızı açacak şekilde tasarlandı." },
    tags:["Menu","EN · TR · AR","Mobile-first"] },
  { id:"abusaleh", cat:"menus", img:"assets/work/abusaleh.png",
    url:"https://olivedrab-armadillo-986029.hostingersite.com/",
    en:{ name:"Abu Saleh", desc:"A juice café in Istanbul with a dark teal and gold identity — heavy motion graphics, Arabic-first right-to-left layout, designed to feel alive on every scroll." },
    ar:{ name:"أبو صالح", desc:"مقهى عصائر في إسطنبول بهوية تركواز داكن وذهبي — رسوم متحركة غنية، وتصميم عربي من اليمين إلى اليسار، يبعث الحياة في كل تمريرة." },
    tr:{ name:"Abu Saleh", desc:"İstanbul'da koyu turkuaz ve altın kimlikli bir meyve suyu kafesi — yoğun motion graphics, Arapça öncelikli sağdan sola düzen, her kaydırmada canlı hisseden tasarım." },
    tags:["Menu","RTL Arabic","Motion"] },
  { id:"juicetime", cat:"menus", img:"assets/work/juicetime.png",
    url:"https://azure-sparrow-636168.hostingersite.com/",
    en:{ name:"Juice Time", desc:"94 items, one bold red-and-white menu. Arabic by default, scraped, structured and rebuilt from scratch for a juice & sweets cafe in Kayaşehir, Istanbul." },
    ar:{ name:"وقت العصير", desc:"٩٤ صنفاً في قائمة جريئة بالأحمر والأبيض. عربية افتراضياً، أُعيد بناؤها من الصفر لمقهى عصائر وحلويات في كاياشهير، إسطنبول." },
    tr:{ name:"Juice Time", desc:"94 ürün, tek bir iddialı kırmızı-beyaz menü. Varsayılan olarak Arapça; Kayaşehir, İstanbul'daki bir meyve suyu ve tatlı kafesi için sıfırdan yeniden inşa edildi." },
    tags:["Menu","94 items","AR default"] },
  { id:"burger", cat:"menus", img:"assets/work/burger.png",
    url:"https://lemonchiffon-newt-471300.hostingersite.com/",
    en:{ name:"8ONE Burger", desc:"A burger restaurant menu with big appetite energy — fast, photographic, and built for hungry thumbs on mobile." },
    ar:{ name:"8ONE برجر", desc:"قائمة مطعم برجر بطاقة شهية عالية — سريعة، مصوّرة، ومبنية لتُتصفح بسهولة على الجوال." },
    tr:{ name:"8ONE Burger", desc:"Büyük iştah enerjisi taşıyan bir burger restoranı menüsü — hızlı, fotoğraf ağırlıklı ve mobilde aç başparmaklar için tasarlandı." },
    tags:["Menu","Mobile-first"] },
  { id:"sable", cat:"menus", img:"assets/work/sable.png",
    url:"https://silver-dog-952485.hostingersite.com/",
    en:{ name:"SABLÉ", desc:"A patisserie & café in Jumeirah — Swiss minimal design. Paper, ink and one caramel accent; typographic list, hairlines, zero emojis. The quiet opposite of a loud menu." },
    ar:{ name:"سابل", desc:"باتيسري ومقهى في الجميرا — تصميم سويسري مينيمالي. ورق وحبر ولمسة كراميل واحدة؛ قائمة مطبعية بخطوط رفيعة وبلا أي رموز. النقيض الهادئ للقوائم الصاخبة." },
    tr:{ name:"SABLÉ", desc:"Jumeirah'da bir pastane ve kafe — İsviçre minimalizmi. Kağıt, mürekkep ve tek bir karamel vurgusu; tipografik liste, ince çizgiler, sıfır emoji. Gürültülü menülerin sessiz zıttı." },
    tags:["Menu","Swiss minimal","AED"] },
  { id:"cita", cat:"cars", img:"assets/work/cita.png",
    url:"https://slategrey-marten-118920.hostingersite.com/",
    en:{ name:"ÇİTA Rent a Car", desc:"An Istanbul car-rental fleet of 16 cars — trilingual, WhatsApp booking in two taps, airport delivery, built for speed on mobile data." },
    ar:{ name:"تشيتا لتأجير السيارات", desc:"أسطول من ١٦ سيارة في إسطنبول — ثلاثي اللغات، حجز عبر واتساب بنقرتين، توصيل للمطار، وسرعة فائقة على بيانات الجوال." },
    tr:{ name:"ÇİTA Rent a Car", desc:"İstanbul'da 16 araçlık kiralama filosu — üç dilli, iki dokunuşta WhatsApp rezervasyonu, havaalanı teslimatı ve mobil veride hız için tasarlandı." },
    tags:["Car rental","16 cars","WhatsApp booking"] },
  { id:"alsultan", cat:"cars", img:"assets/work/alsultan.png",
    url:"https://palegoldenrod-pheasant-942303.hostingersite.com/",
    en:{ name:"Al Sultan", desc:"A Başakşehir rental brand in red and black, Arabic-first — fast WhatsApp booking on a clean, mobile-first build." },
    ar:{ name:"السلطان", desc:"علامة تأجير سيارات في باشاك شهير بالأحمر والأسود، عربية أولاً — حجز سريع عبر واتساب على تصميم مبنٍ للجوال أولاً." },
    tr:{ name:"Al Sultan", desc:"Başakşehir'de kırmızı ve siyah renklerde, Arapça öncelikli bir kiralama markası — mobil öncelikli tasarımda hızlı WhatsApp rezervasyonu." },
    tags:["Car rental","AR-first","WhatsApp booking"] },
  { id:"davinci", cat:"agency", img:"assets/work/davinci.png",
    url:"https://davincigallery.ae/",
    en:{ name:"DaVinci Gallery", desc:"A Dubai architectural-lighting atelier — bespoke chandeliers for villas, palaces and five-star hotels. Trilingual showcase with a filterable portfolio, full RTL Arabic and WhatsApp inquiries." },
    ar:{ name:"دافنشي جاليري", desc:"أتيليه إضاءة معمارية في دبي — ثريات مخصّصة للفلل والقصور والفنادق الخمس نجوم. موقع عرض ثلاثي اللغات مع معرض أعمال قابل للتصفية ودعم كامل للعربية واستفسارات عبر واتساب." },
    tr:{ name:"DaVinci Gallery", desc:"Dubai'da mimari aydınlatma atölyesi — villalar, saraylar ve beş yıldızlı oteller için özel avizeler. Filtrelenebilir portföy, tam RTL Arapça ve WhatsApp iletişimiyle üç dilli tanıtım sitesi." },
    tags:["Lighting design","Dubai · UAE","EN · AR"] },
];

const ICONS = {
  code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6l-6 6 6 6M16 6l6 6-6 6"/></svg>`,
  web: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.5 3 14.5 0 18-3-3.5-3-14.5 0-18z"/></svg>`,
  security: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/><path d="M9 12l2 2 4-4" stroke-linecap="round"/></svg>`,
  ai: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.5l2.1 6.3 6.4 2.2-6.4 2.2L12 19.5l-2.1-6.3-6.4-2.2 6.4-2.2z"/><circle cx="19.5" cy="4.5" r="1.6"/></svg>`,
};

const SKILL_ICONS = {
  Python: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2c-4 0-4 2-4 4v2h4v1H7c-2.5 0-4.5 1.5-4.5 4.5S4.5 16 7 16h1v-2c0-2 2-4 4-4h4c2 0 3-1 3-3V6c0-2-1.5-4-4-4h-5z"/><circle cx="9.5" cy="5.5" r="1" fill="currentColor"/><path d="M12 22c4 0 4-2 4-4v-2h-4v-1h5c2.5 0 4.5-1.5 4.5-4.5S19.5 8 17 8h-1v2c0 2-2 4-4 4h-4c-2 0-3 1-3 3v3c0 2 1.5 4 4 4h5z"/><circle cx="14.5" cy="18.5" r="1" fill="currentColor"/></svg>`,
  Java: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 18c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2V6H8v12z"/><path d="M6 6h12"/><path d="M10 2c1 0 2 .5 2 2v2H8c-1 0-2-.5-2-2"/><path d="M9 11h2M9 14h2M13 11h2M13 14h2"/></svg>`,
  TypeScript: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 15V9l3 3 3-3v6"/><path d="M16 12h-2c0 1.5-1 2.5-2 2.5S10 13.5 10 12"/></svg>`,
  SQL: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>`,
  "HTML / CSS / JS": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6l-4 6 4 6"/><path d="M16 6l4 6-4 6"/><path d="M14 4l-4 16"/></svg>`,
  RTL: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8 8l4 4-4 4"/><path d="M16 8l-4 4 4 4"/></svg>`,
  Git: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="6" r="2.5"/><circle cx="12" cy="18" r="2.5"/><circle cx="18" cy="12" r="2.5"/><path d="M12 8.5v7M14.5 12H17"/></svg>`,
  "Network Security": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="11" width="10" height="8" rx="2"/><path d="M9 11V8a3 3 0 0 1 6 0v3"/><circle cx="12" cy="15" r="1" fill="currentColor"/></svg>`,
  Linux: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 8l3 3M8 11h3"/><path d="M14 14h3M17 11v6"/></svg>`,
  "Secure builds": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/><path d="M9 12l2 2 4-4"/></svg>`,
  "AI Tooling": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 6V3M15 6V3M9 21v-3M15 21v-3M6 9H3M6 15H3M21 9h-3M21 15h-3"/><circle cx="12" cy="12" r="2" fill="currentColor"/></svg>`,
  "Content creation": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3l4 4-12 12H5v-4L17 3z"/><path d="M15 5l4 4"/></svg>`,
  "Prompt craft": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 10h0M12 10h0M16 10h0"/></svg>`,
};

const SKILLS = [
  { icon: "code",     label: { en: "Code",     ar: "برمجة", tr: "Kodlama" },
    items: [
      { name: "Python",          icon: "Python" },
      { name: "Java",            icon: "Java" },
      { name: "TypeScript",      icon: "TypeScript" },
      { name: "SQL",             icon: "SQL" },
    ] },
  { icon: "web",      label: { en: "Web",      ar: "ويب", tr: "Web" },
    items: [
      { name: "HTML / CSS / JS", icon: "HTML / CSS / JS" },
      { name: { en: "RTL & multilingual", ar: "مواقع متعددة اللغات RTL", tr: "RTL ve çok dillilik" }, icon: "RTL" },
      { name: "Git",             icon: "Git" },
    ] },
  { icon: "security", label: { en: "Security", ar: "أمن سيبراني", tr: "Güvenlik" },
    items: [
      { name: { en: "Network Security", ar: "أمن الشبكات", tr: "Ağ Güvenliği" }, icon: "Network Security" },
      { name: "Linux",           icon: "Linux" },
      { name: { en: "Secure builds", ar: "بناء آمن", tr: "Güvenli derlemeler" }, icon: "Secure builds" },
    ] },
  { icon: "ai",       label: { en: "AI",       ar: "ذكاء اصطناعي", tr: "YZ" },
    items: [
      { name: { en: "AI Tooling", ar: "أدوات الذكاء الاصطناعي", tr: "YZ araçları" },        icon: "AI Tooling" },
      { name: { en: "Content creation", ar: "صناعة المحتوى", tr: "İçerik üretimi" },       icon: "Content creation" },
      { name: { en: "Prompt craft", ar: "هندسة الأوامر", tr: "Prompt sanatı" },            icon: "Prompt craft" },
    ] },
];

/* ============================ i18n ============================ */

const I18N = {
  en: {
    "tb.loc":"Dubai, UAE",
    "nav.work":"Work","nav.about":"About","nav.services":"Services","nav.contact":"Contact",
    "hero.kicker":"Open for projects — worldwide",
    "hero.l1":"Cybersecurity,","hero.l2":"design","hero.amp":" & ","hero.l3":"AI.",
    "hero.sub":"I'm Mohammad Elhafi — founder of Klyro, cybersecurity student in Dubai, and the person businesses call when they want a website that actually wins customers.",
    "cta.start":"Start a project ↗","cta.work":"See the work ↓",
    "hero.stamp1":"Founder","hero.stamp2":"Est. Dubai",
    "hero.cap":"Mohammad Elhafi — cybersecurity analyst · web developer · AI creator",
    "stat.1":"Projects shipped","stat.2":"Languages — EN AR TR","stat.3":"Countries served","stat.4":"Studio founded — Klyro",
    "work.title1":"Selected","work.title2":"work",
    "work.note":"+ cybersecurity & AI projects joining the shelf soon.",
    "work.open":"View project",
    "filter.all":"All",
    "about.title1":"About","about.title2":"me","about.cap":"Off duty — rarely.",
    "about.cap2":"On a call — probably about your project.",
    "about.pull":"“I believe the web can be <em>safer</em> and <em>more beautiful</em> at the same time.”",
    "about.p1":"I'm a cybersecurity student at the University of Wollongong in Dubai and the founder of Klyro — a studio building bilingual websites for cafés, restaurants and brands across Turkey and the Gulf.",
    "about.p2":"Every site I ship is fast, multilingual — Arabic, English, Turkish — and designed to sell, not just to sit there looking pretty. On the side, I create AI-driven content and tell stories about the tools shaping the future.",
    "about.skills":"Toolbox",
    "quote.1":"The menu website paid for itself in the first month — customers order more when it looks this good.",
    "quote.1c":"— Café owner, Istanbul",
    "quote.2":"Fast, bilingual, exactly what we asked for — and he thought of details we didn't.",
    "quote.2c":"— Business owner, Dubai",
    "svc.title1":"What I","svc.title2":"do",
    "svc.1":"Websites that win customers","svc.1d":"Custom-designed, hand-coded sites — no templates. Built to load fast and convert visitors into clients.",
    "svc.2":"Menus & e-commerce","svc.2d":"QR menu sites for cafés and restaurants, and online stores with cart and WhatsApp checkout.",
    "svc.3":"Arabic + English, done right","svc.3d":"True right-to-left layouts, not mirrored afterthoughts. Turkish too, when you need it.",
    "svc.4":"AI content & brand presence","svc.4d":"AI-assisted content for social media that actually gets seen — scripts, visuals, strategy.",
    "svc.5":"Security-minded builds","svc.5d":"A cybersecurity analyst's eye on every project — clean code, safe forms, no leaky corners.",
    "c.kicker":"04 — Have a project in mind?",
    "c.title1":"Let's make","c.title2":"something.",
    "c.wa":"WhatsApp ↗","c.loc":"Dubai, United Arab Emirates","c.rights":"© 2026 Mohammad Elhafi",
    "close":"Close",
    "modal.visit":"Visit site ↗",
    "ticker":["Websites","E-Commerce","QR Menus","Cybersecurity","AI Content","Arabic + English","Dubai → the world"],
  },
  ar: {
    "tb.loc":"دبي، الإمارات",
    "nav.work":"الأعمال","nav.about":"عنّي","nav.services":"الخدمات","nav.contact":"تواصل",
    "hero.kicker":"متاح للمشاريع — حول العالم",
    "hero.l1":"أمن سيبراني،","hero.l2":"تصميم","hero.amp":" و","hero.l3":"ذكاء اصطناعي.",
    "hero.sub":"أنا محمد الحافي — مؤسس كليرو، طالب أمن سيبراني في دبي، والشخص الذي تتصل به الشركات عندما تريد موقعاً يجذب العملاء فعلاً.",
    "cta.start":"ابدأ مشروعك ↗","cta.work":"شاهد الأعمال ↓",
    "hero.stamp1":"مؤسس","hero.stamp2":"دبي",
    "hero.cap":"محمد الحافي — محلل أمن سيبراني · مطوّر مواقع · صانع محتوى بالذكاء الاصطناعي",
    "stat.1":"مشروعاً منجزاً","stat.2":"لغات — عربي إنجليزي تركي","stat.3":"دولتان","stat.4":"استوديو أسسته — كليرو",
    "work.title1":"أعمال","work.title2":"مختارة",
    "work.note":"+ مشاريع الأمن السيبراني والذكاء الاصطناعي قادمة قريباً.",
    "work.open":"شاهد المشروع",
    "filter.all":"الكل",
    "about.title1":"من","about.title2":"أنا","about.cap":"خارج العمل — نادراً.",
    "about.cap2":"على مكالمة — غالباً عن مشروعك.",
    "about.pull":"«أؤمن أن الويب يمكن أن يكون <em>أكثر أماناً</em> و<em>أكثر جمالاً</em> في آنٍ واحد.»",
    "about.p1":"أنا طالب أمن سيبراني في جامعة ولونغونغ في دبي ومؤسس كليرو — استوديو يبني مواقع ثنائية اللغة للمقاهي والمطاعم والعلامات التجارية في تركيا والخليج.",
    "about.p2":"كل موقع أبنيه سريع ومتعدد اللغات — عربي، إنجليزي، تركي — ومصمم ليبيع، لا ليقف جميلاً فحسب. وإلى جانب ذلك أصنع محتوى بالذكاء الاصطناعي وأروي قصص الأدوات التي تشكّل المستقبل.",
    "about.skills":"الأدوات",
    "quote.1":"موقع القائمة دفع تكلفته من أول شهر — الزبائن يطلبون أكثر عندما تكون بهذا الجمال.",
    "quote.1c":"— صاحب مقهى، إسطنبول",
    "quote.2":"سريع، ثنائي اللغة، تماماً كما طلبنا — وفكّر بتفاصيل لم تخطر لنا.",
    "quote.2c":"— صاحب عمل، دبي",
    "svc.title1":"ماذا","svc.title2":"أقدّم",
    "svc.1":"مواقع تجذب العملاء","svc.1d":"مواقع مصممة خصيصاً ومكتوبة يدوياً — بلا قوالب جاهزة. سريعة التحميل ومصممة لتحويل الزوار إلى عملاء.",
    "svc.2":"قوائم ومتاجر إلكترونية","svc.2d":"مواقع قوائم QR للمقاهي والمطاعم، ومتاجر إلكترونية بسلة شراء وإتمام الطلب عبر واتساب.",
    "svc.3":"عربي + إنجليزي، بإتقان","svc.3d":"تصميم حقيقي من اليمين إلى اليسار، لا مجرد انعكاس. والتركية أيضاً عند الحاجة.",
    "svc.4":"محتوى ذكاء اصطناعي وحضور رقمي","svc.4d":"محتوى بمساعدة الذكاء الاصطناعي لوسائل التواصل يصل فعلاً — نصوص ومرئيات واستراتيجية.",
    "svc.5":"بناء بعينٍ أمنية","svc.5d":"عين محلل أمن سيبراني على كل مشروع — كود نظيف، نماذج آمنة، ولا ثغرات منسية.",
    "c.kicker":"04 — لديك مشروع؟",
    "c.title1":"لنصنع","c.title2":"شيئاً معاً.",
    "c.wa":"واتساب ↗","c.loc":"دبي، الإمارات العربية المتحدة","c.rights":"© 2026 محمد الحافي",
    "close":"إغلاق",
    "modal.visit":"زيارة الموقع ↗",
    "ticker":["مواقع","متاجر إلكترونية","قوائم QR","أمن سيبراني","محتوى ذكاء اصطناعي","عربي + إنجليزي","من دبي إلى العالم"],
  },
  tr: {
    "tb.loc":"Dubai, BAE",
    "nav.work":"İşler","nav.about":"Hakkımda","nav.services":"Hizmetler","nav.contact":"İletişim",
    "hero.kicker":"Projelere açığım — dünyanın her yerinden",
    "hero.l1":"Siber güvenlik,","hero.l2":"tasarım","hero.amp":" ve ","hero.l3":"YZ.",
    "hero.sub":"Ben Mohammad Elhafi — Klyro'nun kurucusu, Dubai'de siber güvenlik öğrencisi ve işletmelerin gerçekten müşteri kazandıran bir web sitesi istediğinde aradığı kişi.",
    "cta.start":"Proje başlat ↗","cta.work":"İşleri gör ↓",
    "hero.stamp1":"Kurucu","hero.stamp2":"Dubai",
    "hero.cap":"Mohammad Elhafi — siber güvenlik analisti · web geliştirici · YZ içerik üreticisi",
    "stat.1":"Teslim edilen proje","stat.2":"Dil — EN AR TR","stat.3":"Ülke","stat.4":"Kurulan stüdyo — Klyro",
    "work.title1":"Seçilmiş","work.title2":"işler",
    "work.note":"+ siber güvenlik ve YZ projeleri yakında rafta.",
    "work.open":"Projeyi gör",
    "filter.all":"Tümü",
    "about.title1":"Ben","about.title2":"kimim?","about.cap":"İş dışında — nadiren.",
    "about.cap2":"Telefonda — muhtemelen projeniz hakkında.",
    "about.pull":"«İnternetin aynı anda <em>daha güvenli</em> ve <em>daha güzel</em> olabileceğine inanıyorum.»",
    "about.p1":"Dubai'deki Wollongong Üniversitesi'nde siber güvenlik öğrencisiyim ve Klyro'nun kurucusuyum — Türkiye ve Körfez genelinde kafelere, restoranlara ve markalara iki dilli web siteleri yapan bir stüdyo.",
    "about.p2":"Yayınladığım her site hızlı ve çok dilli — Arapça, İngilizce, Türkçe — ve sadece güzel durmak için değil, satmak için tasarlandı. Bir yandan da yapay zekâ destekli içerik üretiyor, geleceği şekillendiren araçların hikâyelerini anlatıyorum.",
    "about.skills":"Araçlar",
    "quote.1":"Menü sitesi ilk ay kendini ödedi — böyle görünen bir yerde müşteriler daha çok sipariş veriyor.",
    "quote.1c":"— Kafe sahibi, İstanbul",
    "quote.2":"Hızlı, iki dilli, tam istediğimiz gibi — ve bizim düşünmediğimiz detayları o düşündü.",
    "quote.2c":"— İşletme sahibi, Dubai",
    "svc.title1":"Ne","svc.title2":"yaparım?",
    "svc.1":"Müşteri kazandıran web siteleri","svc.1d":"Özel tasarım, elle kodlanmış siteler — şablon yok. Hızlı yüklenir ve ziyaretçileri müşteriye dönüştürür.",
    "svc.2":"Menüler ve e-ticaret","svc.2d":"Kafeler ve restoranlar için QR menü siteleri; sepet ve WhatsApp ödemeli online mağazalar.",
    "svc.3":"Arapça + İngilizce, doğru yapılmış","svc.3d":"Yansıtma sonrası değil, gerçek sağdan sola düzenler. İhtiyacınızda Türkçe de.",
    "svc.4":"YZ içeriği ve marka varlığı","svc.4d":"Gerçekten görülen sosyal medya için yapay zekâ destekli içerik — metin, görsel, strateji.",
    "svc.5":"Güvenlik odaklı yapım","svc.5d":"Her projede bir siber güvenlik analistininki gözü — temiz kod, güvenli formlar, sızdırılmış köşe yok.",
    "c.kicker":"04 — aklınızda bir proje mi var?",
    "c.title1":"Birlikte","c.title2":"üretelim.",
    "c.wa":"WhatsApp ↗","c.loc":"Dubai, Birleşik Arap Emirlikleri","c.rights":"© 2026 Mohammad Elhafi",
    "close":"Kapat",
    "modal.visit":"Siteyi ziyaret et ↗",
    "ticker":["Web Siteleri","E-Ticaret","QR Menüler","Siber Güvenlik","YZ İçeriği","Arapça + İngilizce","Dubai → dünya"],
  },
};

let lang = "en";
let activeFilter = "all";
const LANG_KEY = "elhafi-lang";

(function initLang() {
  let saved = null;
  try { saved = localStorage.getItem(LANG_KEY); } catch (e) {}
  if (saved === "en" || saved === "ar" || saved === "tr") { lang = saved; return; }
  const nav = (navigator.language || "").toLowerCase();
  if (nav.startsWith("ar")) lang = "ar";
  else if (nav.startsWith("tr")) lang = "tr";
})();

function saveLang() {
  try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
}

function applyLang() {
  const dict = I18N[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const k = el.getAttribute("data-i18n");
    if (dict[k] === undefined) return;
    if (k === "about.pull") el.innerHTML = dict[k];
    else el.textContent = dict[k];
  });
  document.querySelectorAll("#langToggle span[data-lang]").forEach(s =>
    s.classList.toggle("on", s.dataset.lang === lang));
  buildTicker();
  renderFilters();
  renderWork();
  renderToolbox();
  if (openId) fillModal(openId);
}

/* ============================ toolbox ============================ */

function renderToolbox() {
  const wrap = document.getElementById("toolbox");
  wrap.innerHTML = "";
  SKILLS.forEach(g => {
    const div = document.createElement("div");
    div.className = "tgroup";
    const items = g.items.map(it => {
      const label = typeof it.name === "string" ? it.name : (it.name[lang] || it.name.en);
      const iconSvg = SKILL_ICONS[it.icon] || "";
      return `<li><span class="skill-icon">${iconSvg}</span>${label}</li>`;
    }).join("");
    div.innerHTML = `<h4 class="mono"><span class="ticon">${ICONS[g.icon]}</span>${g.label[lang]}</h4><ul>${items}</ul>`;
    wrap.appendChild(div);
  });
}

/* ============================ ticker ============================ */

function buildTicker() {
  const words = I18N[lang]["ticker"];
  const track = document.getElementById("tickerTrack");
  let one = words.map(w => `<span>${w}</span><i>✳</i>`).join("");
  one = one.repeat(3);
  track.innerHTML = one + one; // two halves for the -50% loop
}

/* ============================ work ============================ */

function renderFilters() {
  const wrap = document.getElementById("filters");
  wrap.innerHTML = "";
  const mk = (id, label) => {
    const b = document.createElement("button");
    b.type = "button";
    b.textContent = label;
    b.setAttribute("aria-pressed", String(activeFilter === id));
    b.classList.toggle("active", activeFilter === id);
    b.addEventListener("click", () => { activeFilter = id; renderFilters(); renderWork(); });
    wrap.appendChild(b);
  };
  mk("all", I18N[lang]["filter.all"]);
  CATEGORIES.forEach(c => mk(c.id, c[lang] || c.en));
}

function renderWork() {
  const grid = document.getElementById("workGrid");
  grid.innerHTML = "";
  const list = PROJECTS.filter(p => activeFilter === "all" || p.cat === activeFilter);
  list.forEach((p, i) => {
    const cat = CATEGORIES.find(c => c.id === p.cat);
    const catLabel = cat[lang] || cat.en;
    const num = String(i + 1).padStart(2, "0");
    const card = document.createElement("button");
    card.style.animationDelay = (i * 70) + "ms";

    if (i === 0) {
      // cover story
      card.className = "wcard feature pop";
      card.innerHTML =
        `<div class="im"><img src="${p.img}" alt="${p[lang].name}" loading="lazy" decoding="async"></div>` +
        `<div class="f-text">` +
          `<p class="mono f-top"><span class="num">${num}</span><span class="cat">${catLabel}</span></p>` +
          `<h3 class="display">${p[lang].name}</h3>` +
          `<p class="f-desc">${p[lang].desc}</p>` +
          `<ul class="tags mono">${p.tags.map(t => `<li>${t}</li>`).join("")}</ul>` +
          `<span class="f-cta mono">${I18N[lang]["work.open"]} ↗</span>` +
        `</div>`;
    } else {
      card.className = "wcard pop";
      card.innerHTML =
        `<div class="im"><img src="${p.img}" alt="${p[lang].name}" loading="lazy" decoding="async"></div>` +
        `<div class="meta">` +
          `<span class="num mono">${num}</span>` +
          `<h3 class="display">${p[lang].name}</h3>` +
          `<span class="cat mono">${catLabel}</span>` +
        `</div>` +
        `<p class="w-desc">${p[lang].desc}</p>`;
    }
    card.type = "button";
    card.addEventListener("click", () => openModal(p.id));
    grid.appendChild(card);
  });
}

/* ============================ modal ============================ */

let openId = null;
let lastFocus = null;
const modal = document.getElementById("modal");
const modalLink = document.getElementById("modalLink");

function fillModal(id) {
  const p = PROJECTS.find(x => x.id === id);
  if (!p) return;
  openId = id;
  const cat = CATEGORIES.find(c => c.id === p.cat);
  document.getElementById("modalImg").src = p.img;
  document.getElementById("modalImg").alt = p[lang].name;
  document.getElementById("modalCat").textContent = cat[lang] || cat.en;
  document.getElementById("modalTitle").textContent = p[lang].name;
  document.getElementById("modalDesc").textContent = p[lang].desc;
  const tags = document.getElementById("modalTags");
  tags.innerHTML = "";
  p.tags.forEach(t => { const li = document.createElement("li"); li.textContent = t; tags.appendChild(li); });
  modalLink.textContent = I18N[lang]["modal.visit"];
  if (p.url) { modalLink.href = p.url; modalLink.hidden = false; }
  else { modalLink.hidden = true; }
  const i = PROJECTS.indexOf(p);
  document.getElementById("modalCount").textContent =
    String(i + 1).padStart(2, "0") + " / " + String(PROJECTS.length).padStart(2, "0");
}
function stepProject(dir) {
  if (!openId) return;
  const d = document.documentElement.dir === "rtl" ? -dir : dir;
  const i = PROJECTS.findIndex(x => x.id === openId);
  fillModal(PROJECTS[(i + d + PROJECTS.length) % PROJECTS.length].id);
  document.querySelector(".modal-card").scrollTop = 0;
}
function openModal(id) {
  lastFocus = document.activeElement;
  fillModal(id);
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  document.getElementById("modalClose").focus();
}
function closeModal() {
  if (!openId) return;
  openId = null;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  if (lastFocus && lastFocus.focus) lastFocus.focus();
}
document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("modalPrev").addEventListener("click", () => stepProject(-1));
document.getElementById("modalNext").addEventListener("click", () => stepProject(1));
modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", e => {
  if (!openId) return;
  if (e.key === "Escape") closeModal();
  else if (e.key === "ArrowRight") stepProject(1);
  else if (e.key === "ArrowLeft") stepProject(-1);
  else if (e.key === "Tab") {
    const f = [...modal.querySelectorAll("button,a")]
      .filter(el => !el.hidden && el.offsetParent !== null);
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});

/* ============================ toggles & links ============================ */

document.querySelectorAll("#langToggle span[data-lang]").forEach(s =>
    s.addEventListener("click", e => {
      e.stopPropagation();
      if (s.dataset.lang === lang) return;
      lang = s.dataset.lang;
      applyLang();
      saveLang();
    }));

(function initContactCard() {
  const email = "mohamadhafee11" + "@" + "gmail.com";
  const phone = "+971 50 263 4260";
  const vcard = [
    "BEGIN:VCARD", "VERSION:3.0", "FN:Mohammad Elhafi",
    "N:Elhafi;Mohammad;;;", "TITLE:Cybersecurity Student | Web Developer | AI Content Creator",
    "ORG:Klyro", "TEL;TYPE=CELL:" + phone, "EMAIL;TYPE=WORK:" + email,
    "URL:https://mohammadelhafi.me/", "URL;TYPE=Instagram:https://www.instagram.com/mohammad.elhafi/",
    "URL;TYPE=LinkedIn:https://www.linkedin.com/in/mohammad-elhafi/",
    "END:VCARD"
  ].join("\r\n");
  const cardHref = URL.createObjectURL(new Blob([vcard], { type: "text/vcard;charset=utf-8" }));
  [document.getElementById("waLink"), document.getElementById("waLink2")].forEach(link => {
    if (!link) return;
    link.classList.add("contact-card-link");
    link.removeAttribute("data-i18n");
    link.textContent = "Save my contact";
  });
  const heroLink = document.getElementById("waLink");
  if (heroLink) {
    const call = document.createElement("a");
    call.className = "btn btn-line phone-link";
    call.href = "tel:+971502634260";
    call.textContent = "Call me";
    heroLink.insertAdjacentElement("afterend", call);
  }
  const footerLink = document.getElementById("waLink2");
  if (footerLink) {
    const call = document.createElement("a");
    call.className = "btn btn-lineinv phone-link";
    call.href = "tel:+971502634260";
    call.textContent = "+971 50 263 4260";
    footerLink.insertAdjacentElement("afterend", call);
  }
  document.querySelectorAll(".contact-card-link").forEach(link => {
    link.href = cardHref;
    link.download = "Mohammad-Elhafi.vcf";
    link.setAttribute("aria-label", "Save Mohammad Elhafi as a contact");
  });
  document.querySelectorAll(".phone-link").forEach(link => {
    link.href = "tel:+971502634260";
    link.setAttribute("aria-label", "Call Mohammad Elhafi at +971 50 263 4260");
  });
  const mail = document.getElementById("mailLink");
  mail.href = "mailto:" + email;
  mail.textContent = email;
})();

/* ============================ reveal on scroll ============================ */

const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
}, { threshold: 0.12 });

function observeReveals() {
  document.querySelectorAll(".reveal:not(.in)").forEach(el => io.observe(el));
}

/* ============================ wow layer ============================ */

const finePointer = matchMedia("(pointer:fine)").matches;
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

(function initCursor() {
  if (!finePointer || reduceMotion) return;
  const dot = document.createElement("div"); dot.className = "cursor-dot";
  const ring = document.createElement("div"); ring.className = "cursor-ring";
  document.body.append(dot, ring);
  document.documentElement.classList.add("cursor-on");
  let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my;
  addEventListener("mousemove", e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + "px"; dot.style.top = my + "px";
  });
  (function loop() {
    rx += (mx - rx) * .16; ry += (my - ry) * .16;
    ring.style.left = rx + "px"; ring.style.top = ry + "px";
    requestAnimationFrame(loop);
  })();
  addEventListener("mouseover", e => { if (e.target.closest("a,button")) ring.classList.add("grow"); });
  addEventListener("mouseout", e => { if (e.target.closest("a,button")) ring.classList.remove("grow"); });
})();

(function initMagnetic() {
  if (!finePointer || reduceMotion) return;
  document.querySelectorAll(".btn").forEach(b => {
    b.addEventListener("mousemove", e => {
      const r = b.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) / r.width;
      const y = (e.clientY - r.top - r.height / 2) / r.height;
      b.style.transform = `translate(${x * 10}px,${y * 8}px)`;
    });
    b.addEventListener("mouseleave", () => { b.style.transform = ""; });
  });
})();

(function initCountUp() {
  if (reduceMotion) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      io.unobserve(en.target);
      const b = en.target;
      const m = b.textContent.match(/^(\d+)(.*)$/);
      if (!m) return;
      const end = +m[1], suf = m[2], t0 = performance.now();
      (function tick(t) {
        const p = Math.min((t - t0) / 1100, 1);
        const e = 1 - Math.pow(1 - p, 3);
        b.textContent = Math.round(end * e) + suf;
        if (p < 1) requestAnimationFrame(tick);
      })(t0);
    });
  }, { threshold: .5 });
  document.querySelectorAll(".stat b").forEach(b => io.observe(b));
})();

(function initCardFx() {
  if (!finePointer || reduceMotion) return;
  const grid = document.getElementById("workGrid");
  grid.addEventListener("mousemove", e => {
    if (!matchMedia("(min-width:981px)").matches) return;
    const card = e.target.closest(".wcard");
    if (!card) return;
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    card.style.setProperty("--mx", (x * 100) + "%");
    card.style.setProperty("--my", (y * 100) + "%");
    card.style.transform = `perspective(900px) rotateX(${((y - .5) * -5).toFixed(2)}deg) rotateY(${((x - .5) * 5).toFixed(2)}deg)`;
  });
  grid.addEventListener("mouseout", e => {
    const card = e.target.closest(".wcard");
    if (card && !card.contains(e.relatedTarget)) card.style.transform = "";
  });
})();

/* ============================ init ============================ */
applyLang();
observeReveals();
