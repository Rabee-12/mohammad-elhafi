/* Mohammad Elhafi — editorial portfolio */

/* TODO: set the real WhatsApp number (digits only, with country code) before launch */
const WHATSAPP_NUMBER = "";

/* ============================ data ============================ */

const CATEGORIES = [
  { id: "menus",  en: "Menus & Restaurants", ar: "قوائم ومطاعم" },
  { id: "shops",  en: "E-Commerce",          ar: "متاجر إلكترونية" },
  { id: "fitness",en: "Fitness",             ar: "لياقة" },
  { id: "cars",   en: "Car Rental",          ar: "تأجير سيارات" },
  { id: "agency", en: "Agency",              ar: "وكالة" },
];

const PROJECTS = [
  { id:"klyro", cat:"agency", img:"assets/work/klyro.png",
    en:{ name:"Klyro", desc:"My studio. Digital menus and websites for cafés and restaurants across Turkey and the Gulf — multilingual, mobile-first, always up to date. Launching soon." },
    ar:{ name:"كليرو", desc:"استوديوهي الخاص. قوائم رقمية ومواقع للمقاهي والمطاعم في تركيا والخليج — متعددة اللغات، وقريباً بحلّته الكاملة." },
    tags:["Founder","Agency","Launching soon"] },
  { id:"kickfit", cat:"fitness", img:"assets/work/kickfit.png",
    en:{ name:"Kickfit", desc:"A premium gym in Başakşehir led by a European kickboxing champion — dark and gold luxury, trilingual with full RTL, built to sell memberships." },
    ar:{ name:"كيك فيت", desc:"نادٍ رياضي فاخر في باشاك شهير يقوده بطل أوروبا في الكيك بوكسينغ — فخامة بالأسود والذهبي، ثلاثي اللغات بدعم كامل للعربية." },
    tags:["Fitness","TR · AR · EN","Luxury"] },
  { id:"noor", cat:"shops", img:"assets/work/noor.png",
    en:{ name:"NOOR", desc:"A luxury modest-fashion house in dark and gold — full e-commerce with cart and WhatsApp checkout, Arabic calligraphy details, and couture-level restraint." },
    ar:{ name:"نور", desc:"دار أزياء محتشمة فاخرة بالأسود والذهبي — متجر كامل بسلة شراء وإتمام الطلب عبر واتساب، مع لمسات خط عربي وأناقة هادئة." },
    tags:["E-commerce","Cart + WhatsApp","EN · TR · AR"] },
  { id:"asfalt", cat:"shops", img:"assets/work/asfalt.png",
    en:{ name:"ASFALT", desc:"Brutalist Istanbul streetwear — concrete grey and acid green, hard edges, limited drops. The deliberate opposite of NOOR, from the same keyboard." },
    ar:{ name:"أسفلت", desc:"ستريت وير إسطنبولي بروح خرسانية — رمادي إسمنتي وأخضر حمضي وحواف حادة. النقيض المتعمد لِنور، من نفس لوحة المفاتيح." },
    tags:["E-commerce","Brutalist","Limited drops"] },
  { id:"bhaleeb", cat:"menus", img:"assets/work/bhaleeb.png",
    en:{ name:"Bhaleeb", desc:"A trilingual QR menu for a milk-dessert café — soft blue and cream branding, product photography front and center, built to make you hungry before you sit down." },
    ar:{ name:"بحليب", desc:"قائمة QR ثلاثية اللغات لمقهى حلويات الحليب — هوية بألوان الأزرق والكريمي، مع تصوير المنتجات في الواجهة، صُممت لتفتح شهيتك قبل أن تجلس." },
    tags:["Menu","EN · TR · AR","Mobile-first"] },
  { id:"abusaleh", cat:"menus", img:"assets/work/abusaleh.png",
    en:{ name:"Abu Saleh", desc:"A juice café in Istanbul with a dark teal and gold identity — heavy motion graphics, Arabic-first right-to-left layout, designed to feel alive on every scroll." },
    ar:{ name:"أبو صالح", desc:"مقهى عصائر في إسطنبول بهوية تركواز داكن وذهبي — رسوم متحركة غنية، وتصميم عربي من اليمين إلى اليسار، يبعث الحياة في كل تمريرة." },
    tags:["Menu","RTL Arabic","Motion"] },
  { id:"juicetime", cat:"menus", img:"assets/work/juicetime.png",
    en:{ name:"Juice Time", desc:"94 items, one bold red-and-white menu. Arabic by default, scraped, structured and rebuilt from scratch for a juice & sweets cafe in Kayaşehir, Istanbul." },
    ar:{ name:"وقت العصير", desc:"٩٤ صنفاً في قائمة جريئة بالأحمر والأبيض. عربية افتراضياً، أُعيد بناؤها من الصفر لمقهى عصائر وحلويات في كاياشهير، إسطنبول." },
    tags:["Menu","94 items","AR default"] },
  { id:"burger", cat:"menus", img:"assets/work/burger.png",
    en:{ name:"8ONE Burger", desc:"A burger restaurant menu with big appetite energy — fast, photographic, and built for hungry thumbs on mobile." },
    ar:{ name:"8ONE برجر", desc:"قائمة مطعم برجر بطاقة شهية عالية — سريعة، مصوّرة، ومبنية لتُتصفح بسهولة على الجوال." },
    tags:["Menu","Mobile-first"] },
  { id:"cita", cat:"cars", img:"assets/work/cita.png",
    en:{ name:"ÇİTA Rent a Car", desc:"An Istanbul car-rental fleet of 16 cars — trilingual, WhatsApp booking in two taps, airport delivery, built for speed on mobile data." },
    ar:{ name:"تشيتا لتأجير السيارات", desc:"أسطول من ١٦ سيارة في إسطنبول — ثلاثي اللغات، حجز عبر واتساب بنقرتين، توصيل للمطار، وسرعة فائقة على بيانات الجوال." },
    tags:["Car rental","16 cars","WhatsApp booking"] },
  { id:"alsultan", cat:"cars", img:"assets/work/alsultan.png",
    en:{ name:"Al Sultan", desc:"A Başakşehir rental brand in red and black, Arabic-first — currently in progress, launching soon." },
    ar:{ name:"السلطان", desc:"علامة تأجير سيارات في باشاك شهير بالأحمر والأسود، عربية أولاً — قيد الإنجاز، قريباً." },
    tags:["Car rental","AR-first","In progress"] },
];

const ICONS = {
  code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6l-6 6 6 6M16 6l6 6-6 6"/></svg>`,
  web: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.5 3 14.5 0 18-3-3.5-3-14.5 0-18z"/></svg>`,
  security: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/><path d="M9 12l2 2 4-4" stroke-linecap="round"/></svg>`,
  ai: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.5l2.1 6.3 6.4 2.2-6.4 2.2L12 19.5l-2.1-6.3-6.4-2.2 6.4-2.2z"/><circle cx="19.5" cy="4.5" r="1.6"/></svg>`,
};

const SKILLS = [
  { icon: "code",     label: { en: "Code",     ar: "برمجة" },        items: ["Python", "Java", "TypeScript", "SQL"] },
  { icon: "web",      label: { en: "Web",      ar: "ويب" },          items: ["HTML / CSS / JS", { en: "RTL & multilingual", ar: "مواقع متعددة اللغات RTL" }, "Git"] },
  { icon: "security", label: { en: "Security", ar: "أمن سيبراني" },  items: [{ en: "Network Security", ar: "أمن الشبكات" }, "Linux", { en: "Secure builds", ar: "بناء آمن" }] },
  { icon: "ai",       label: { en: "AI",       ar: "ذكاء اصطناعي" }, items: [{ en: "AI Tooling", ar: "أدوات الذكاء الاصطناعي" }, { en: "Content creation", ar: "صناعة المحتوى" }, { en: "Prompt craft", ar: "هندسة الأوامر" }] },
];

/* ============================ i18n ============================ */

const I18N = {
  en: {
    "tb.loc":"Dubai, UAE — 25.2°N 55.3°E",
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
    "ticker":["Websites","E-Commerce","QR Menus","Cybersecurity","AI Content","Arabic + English","Dubai → the world"],
  },
  ar: {
    "tb.loc":"دبي، الإمارات — °25.2 شمالاً °55.3 شرقاً",
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
    "ticker":["مواقع","متاجر إلكترونية","قوائم QR","أمن سيبراني","محتوى ذكاء اصطناعي","عربي + إنجليزي","من دبي إلى العالم"],
  },
};

let lang = "en";
let activeFilter = "all";

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
    const items = g.items
      .map(it => `<li>${typeof it === "string" ? it : it[lang]}</li>`)
      .join("");
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
    b.textContent = label;
    b.classList.toggle("active", activeFilter === id);
    b.addEventListener("click", () => { activeFilter = id; renderFilters(); renderWork(); });
    wrap.appendChild(b);
  };
  mk("all", I18N[lang]["filter.all"]);
  CATEGORIES.forEach(c => mk(c.id, c[lang]));
}

function renderWork() {
  const grid = document.getElementById("workGrid");
  grid.innerHTML = "";
  const list = PROJECTS.filter(p => activeFilter === "all" || p.cat === activeFilter);
  list.forEach((p, i) => {
    const cat = CATEGORIES.find(c => c.id === p.cat);
    const num = String(i + 1).padStart(2, "0");
    const card = document.createElement("button");
    card.style.animationDelay = (i * 70) + "ms";

    if (i === 0) {
      // cover story
      card.className = "wcard feature pop";
      card.innerHTML =
        `<div class="im"><img src="${p.img}" alt="${p[lang].name}" loading="lazy"></div>` +
        `<div class="f-text">` +
          `<p class="mono f-top"><span class="num">${num}</span><span class="cat">${cat[lang]}</span></p>` +
          `<h3 class="display">${p[lang].name}</h3>` +
          `<p class="f-desc">${p[lang].desc}</p>` +
          `<ul class="tags mono">${p.tags.map(t => `<li>${t}</li>`).join("")}</ul>` +
          `<span class="f-cta mono">${I18N[lang]["work.open"]} ↗</span>` +
        `</div>`;
    } else {
      card.className = "wcard pop";
      card.innerHTML =
        `<div class="im"><img src="${p.img}" alt="${p[lang].name}" loading="lazy"></div>` +
        `<div class="meta">` +
          `<span class="num mono">${num}</span>` +
          `<h3 class="display">${p[lang].name}</h3>` +
          `<span class="cat mono">${cat[lang]}</span>` +
        `</div>` +
        `<p class="w-desc">${p[lang].desc}</p>`;
    }
    card.addEventListener("click", () => openModal(p.id));
    grid.appendChild(card);
  });
}

/* ============================ modal ============================ */

let openId = null;
const modal = document.getElementById("modal");

function fillModal(id) {
  const p = PROJECTS.find(x => x.id === id);
  if (!p) return;
  const cat = CATEGORIES.find(c => c.id === p.cat);
  document.getElementById("modalImg").src = p.img;
  document.getElementById("modalImg").alt = p[lang].name;
  document.getElementById("modalCat").textContent = cat[lang];
  document.getElementById("modalTitle").textContent = p[lang].name;
  document.getElementById("modalDesc").textContent = p[lang].desc;
  const tags = document.getElementById("modalTags");
  tags.innerHTML = "";
  p.tags.forEach(t => { const li = document.createElement("li"); li.textContent = t; tags.appendChild(li); });
}
function openModal(id) {
  openId = id;
  fillModal(id);
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function closeModal() {
  openId = null;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
document.getElementById("modalClose").addEventListener("click", closeModal);
modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

/* ============================ toggles & links ============================ */

document.getElementById("langToggle").addEventListener("click", () => {
  lang = lang === "en" ? "ar" : "en";
  applyLang();
});

(function initWa() {
  const href = WHATSAPP_NUMBER
    ? "https://wa.me/" + WHATSAPP_NUMBER.replace(/\D/g, "") +
      "?text=" + encodeURIComponent("Hi Mohammad! I saw your portfolio.")
    : "mailto:mohamadhafee11@gmail.com"; // fallback until number is set
  const wa1 = document.getElementById("waLink");
  const wa2 = document.getElementById("waLink2");
  if (WHATSAPP_NUMBER) { wa1.target = wa2.target = "_blank"; wa1.rel = wa2.rel = "noopener"; }
  wa1.href = wa2.href = href;
})();

/* ============================ reveal on scroll ============================ */

const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
}, { threshold: 0.12 });

function observeReveals() {
  document.querySelectorAll(".reveal:not(.in)").forEach(el => io.observe(el));
}

/* ============================ init ============================ */
applyLang();
observeReveals();
