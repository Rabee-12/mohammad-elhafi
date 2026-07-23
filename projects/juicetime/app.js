/* ============================================================
   عصير تايم · Aseer Time — menu data + i18n + motion
   Photos are local: img/<slug>/<file>  (display order → 1.jpg, 2.jpg …)
   Each item: ar/tr/en names, price (p, in ₺), emoji fallback (e),
   image file (img), optional hot / badge / soldOut.
   Edit prices & names right here. Data pulled from the café's old
   qrlist menu (store 191); English/Turkish translated & cleaned.
   ============================================================ */

const IMG = "img/";

const MENU = [
  {
    id:"juices", slug:"juices", emo:"🍊",
    t:{ ar:"عصائر طبيعية", tr:"Doğal Meyve Suları", en:"Natural Juices" },
    items:[
      { img:"1.jpg",  e:"🥕", p:115,           ar:"عصير جزر",     tr:"Havuç Suyu",       en:"Carrot Juice" },
      { img:"2.jpg",  e:"🍊", p:125,           ar:"عصير برتقال",  tr:"Portakal Suyu",    en:"Orange Juice" },
      { img:"3.jpg",  e:"🥭", p:165, hot:true, ar:"عصير مانجو",   tr:"Mango Suyu",       en:"Mango Juice" },
      { img:"4.jpg",  e:"🥑", p:175,           ar:"عصير أفوكادو", tr:"Avokado Suyu",     en:"Avocado Juice" },
      { img:"5.jpg",  e:"🧃", p:115,           ar:"عصير شمندر",   tr:"Pancar Suyu",      en:"Beetroot Juice" },
      { img:"6.jpg",  e:"🧃", p:175,           ar:"عصير رمان",    tr:"Nar Suyu",         en:"Pomegranate Juice" },
      { img:"7.jpg",  e:"🍋", p:160,           ar:"ليمون ونعناع", tr:"Limon & Nane",     en:"Lemon & Mint" },
      { img:"8.jpg",  e:"🥝", p:135,           ar:"عصير كيوي",    tr:"Kivi Suyu",        en:"Kiwi Juice" },
      { img:"9.jpg",  e:"🍍", p:155,           ar:"عصير أناناس",  tr:"Ananas Suyu",      en:"Pineapple Juice" },
      { img:"10.jpg", e:"🍎", p:120,           ar:"عصير تفاح",    tr:"Elma Suyu",        en:"Apple Juice" },
      { img:"11.jpg", e:"🍓", p:135,           ar:"عصير فراولة",  tr:"Çilek Suyu",       en:"Strawberry Juice" },
      { img:"12.jpg", e:"🍌", p:135,           ar:"موز وحليب",    tr:"Muz & Süt",        en:"Banana & Milk" },
      { img:"13.jpg", e:"🍊", p:114,           ar:"برتقال وجزر",  tr:"Portakal & Havuç", en:"Orange & Carrot" },
      { img:"14.jpg", e:"🍉", p:140,           ar:"عصير بطيخ",    tr:"Karpuz Suyu",      en:"Watermelon Juice" },
      { img:"15.jpg", e:"🍈", p:140,           ar:"عصير شمام",    tr:"Kavun Suyu",       en:"Melon Juice" },
      { img:"16.jpg", e:"🍈", p:120,           ar:"شمام وموز",    tr:"Kavun & Muz",      en:"Melon & Banana" },
    ]
  },
  {
    id:"cocktails", slug:"cocktails", emo:"🍹",
    t:{ ar:"كوكتيلات", tr:"Kokteyller", en:"Cocktails" },
    items:[
      { img:"1.jpg",  e:"🥑", p:175,           ar:"أفوكادو بالعسل والمكسرات", tr:"Avokado, Bal & Kuruyemiş", en:"Avocado, Honey & Nuts" },
      { img:"2.jpg",  e:"👑", p:200, hot:true, ar:"في آي بي",     tr:"VIP",            en:"VIP Cocktail" },
      { img:"3.jpg",  e:"🍹", p:160,           ar:"ميكس فروت",    tr:"Karışık Meyve",  en:"Mixed Fruit" },
      { img:"4.jpg",  e:"✨", p:230, hot:true, ar:"كوكتيل سبيشل", tr:"Özel Kokteyl",   en:"Special Cocktail" },
      { img:"5.jpg",  e:"💘", p:160,           ar:"عوار قلب",     tr:"Kalp Ağrısı",    en:"Heartache" },
      { img:"6.jpg",  e:"😋", p:170,           ar:"شي ثاني",      tr:"Bir Başka Şey",  en:"Something Else" },
      { img:"7.jpg",  e:"🫐", p:160,           ar:"بيري سموذي",   tr:"Berry Smoothie", en:"Berry Smoothie" },
      { img:"8.jpg",  e:"🐯", p:230,           ar:"تايجر",        tr:"Kaplan",         en:"Tiger" },
      { img:"9.jpg",  e:"💪", p:210,           ar:"ميكس برو جوس", tr:"Mix Pro Juice",  en:"Mix Pro Juice" },
      { img:"10.jpg", e:"🧭", p:200,           ar:"ابن بطوطة",    tr:"İbn Battuta",    en:"Ibn Battuta" },
      { img:"11.jpg", e:"🥤", p:200,           ar:"عصير جي",      tr:"G Juice",        en:"G Juice" },
      { img:"12.jpg", e:"⏱️", p:220,          ar:"جي تايم",      tr:"G Time",         en:"G Time" },
      { img:"13.jpg", e:"🥗", p:160,           ar:"دايت جوس",     tr:"Diyet Suyu",     en:"Diet Juice" },
      { img:"14.jpg", e:"🍹", p:180,           ar:"معاريس",       tr:"Maares",         en:"Maares" },
      { img:"15.jpg", e:"👑", p:200,           ar:"الملك",        tr:"Kral",           en:"The King" },
    ]
  },
  {
    id:"smoothie", slug:"smoothie", emo:"🥤",
    t:{ ar:"سموذي وميلك شيك", tr:"Smoothie & Milkshake", en:"Smoothies & Shakes" },
    items:[
      { img:"1.jpg",  e:"🍓", p:145,           ar:"موز وفراولة وحليب", tr:"Muz, Çilek & Süt",  en:"Banana, Strawberry & Milk" },
      { img:"2.jpg",  e:"🧠", p:175,           ar:"اينشتاين",      tr:"Einstein",          en:"Einstein" },
      { img:"3.jpg",  e:"🍪", p:195, hot:true, ar:"لوتس شيك",      tr:"Lotus Shake",       en:"Lotus Shake" },
      { img:"4.jpg",  e:"🍓", p:160,           ar:"إمبراطور فراولة", tr:"Çilek İmparatoru", en:"Strawberry Emperor" },
      { img:"5.jpg",  e:"🎬", p:175,           ar:"فلم بوبو",      tr:"Film Bobo",         en:"Film Bobo" },
      { img:"6.jpg",  e:"🍫", p:185,           ar:"تويكس شيك",     tr:"Twix Shake",        en:"Twix Shake" },
      { img:"7.jpg",  e:"🥣", p:200,           ar:"سيريلاك",       tr:"Cerelac Shake",     en:"Cerelac Shake" },
      { img:"8.jpg",  e:"😍", p:200,           ar:"هرمون السعادة", tr:"Mutluluk Hormonu",  en:"Happiness Hormone" },
      { img:"9.jpg",  e:"🍫", p:195,           ar:"سنيكرز شيك",    tr:"Snickers Shake",    en:"Snickers Shake" },
      { img:"10.jpg", e:"🖤", p:185,           ar:"أوريو شيك",     tr:"Oreo Shake",        en:"Oreo Shake" },
      { img:"11.jpg", e:"🥤", p:175,           ar:"ميلك شيك جوجو", tr:"Jojo Milkshake",    en:"Jojo Milkshake" },
      { img:"12.jpg", e:"🦸", p:185,           ar:"سوبر بوبو",     tr:"Süper Bobo",        en:"Super Bobo" },
      { img:"13.jpg", e:"🏆", p:185,           ar:"عادل الأسطورة", tr:"Adel Efsane",       en:"Adel the Legend" },
      { img:"14.jpg", e:"🥭", p:175,           ar:"إمبراطور مانجو", tr:"Mango İmparatoru", en:"Mango Emperor" },
      { img:"15.jpg", e:"🥤", p:175,           ar:"فروحة",         tr:"Farouha",           en:"Farouha" },
      { img:"16.jpg", e:"🍫", p:195,           ar:"ميلك شيك كيندر", tr:"Kinder Milkshake", en:"Kinder Milkshake" },
      { img:"17.jpg", e:"🥣", p:175,           ar:"كرانولا ميلك شيك", tr:"Granola Milkshake", en:"Granola Milkshake" },
    ]
  },
  {
    id:"mojito", slug:"mojito", emo:"🌿",
    t:{ ar:"موهيتو", tr:"Mojito", en:"Mojito" },
    items:[
      { img:"1.jpg",  e:"🪽", p:200,             ar:"ريد بُل نكهات",                tr:"Red Bull Mojito",            en:"Red Bull Mojito" },
      { img:"2.jpg",  e:"💛", p:215, badge:"NEW", ar:"ريد بُل فواكه استوائية · Yellow", tr:"Red Bull Tropical · Yellow", en:"Red Bull Tropical · Yellow" },
      { img:"3.jpg",  e:"🫐", p:215, badge:"NEW", ar:"ريد بُل توت أزرق · Blue",       tr:"Red Bull Blueberry · Blue",  en:"Red Bull Blueberry · Blue" },
      { img:"4.jpg",  e:"💜", p:215,             ar:"ريد بُل لافندر · Mojito",       tr:"Red Bull Lavender · Mojito", en:"Red Bull Lavender · Mojito" },
      { img:"5.jpg",  e:"🍓", p:215, badge:"NEW", ar:"ريد بُل توت أحمر · Pink",       tr:"Red Bull Red Berry · Pink",  en:"Red Bull Red Berry · Pink" },
      { img:"6.jpg",  e:"🥥", p:215,             ar:"ريد بُل جوز الهند · White",     tr:"Red Bull Coconut · White",   en:"Red Bull Coconut · White" },
      { img:"7.jpg",  e:"🍑", p:215,             ar:"ريد بُل دراق · Peach",          tr:"Red Bull Peach",             en:"Red Bull Peach" },
      { img:"8.jpg",  e:"🍉", p:215,             ar:"ريد بُل بطيخ · Red",            tr:"Red Bull Watermelon · Red",  en:"Red Bull Watermelon · Red" },
    ]
  },
  {
    id:"icecream", slug:"icecream", emo:"🍦",
    t:{ ar:"آيس كريم", tr:"Dondurma", en:"Ice Cream" },
    items:[
      { img:"1.jpg",  e:"🍦", p:140,           ar:"آيس كريم اينشتاين", tr:"Einstein Dondurma", en:"Einstein Ice Cream" },
      { img:"2.jpg",  e:"🍪", p:140, hot:true, ar:"آيس كريم لوتس",    tr:"Lotus Dondurma",    en:"Lotus Ice Cream" },
      { img:"3.jpg",  e:"🖤", p:140,           ar:"آيس كريم أوريو",   tr:"Oreo Dondurma",     en:"Oreo Ice Cream" },
      { img:"4.jpg",  e:"🍫", p:140,           ar:"آيس كريم نوتيلا",  tr:"Nutella Dondurma",  en:"Nutella Ice Cream" },
      { img:"5.jpg",  e:"🍫", p:140,           ar:"آيس كريم سنيكرز",  tr:"Snickers Dondurma", en:"Snickers Ice Cream" },
      { img:"6.jpg",  e:"🍫", p:140,           ar:"آيس كريم كيندر",   tr:"Kinder Dondurma",   en:"Kinder Ice Cream" },
      { img:"7.jpg",  e:"🍨", p:125,           ar:"آيس كريم فانيلا",  tr:"Vanilya Dondurma",  en:"Vanilla Ice Cream" },
      { img:"8.jpg",  e:"💘", p:130,           ar:"آيس كريم عوار قلب", tr:"Kalp Ağrısı Dondurma", en:"Heartache Ice Cream" },
      { img:"9.jpg",  e:"🍓", p:125,           ar:"آيس كريم فراولة",  tr:"Çilek Dondurma",    en:"Strawberry Ice Cream" },
      { img:"10.jpg", e:"🥭", p:125,           ar:"آيس كريم مانجو",   tr:"Mango Dondurma",    en:"Mango Ice Cream" },
      { img:"11.jpg", e:"🍋", p:125,           ar:"آيس كريم ليمون",   tr:"Limon Dondurma",    en:"Lemon Ice Cream" },
      { img:"12.jpg", e:"🌰", p:140,           ar:"آيس كريم فستق",    tr:"Antep Fıstıklı Dondurma", en:"Pistachio Ice Cream" },
      { img:"13.jpg", e:"🍭", p:120,           ar:"آيس كريم شعر بنات", tr:"Pamuk Şeker Dondurma", en:"Cotton Candy Ice Cream" },
      { img:"14.jpg", e:"🍉", p:125,           ar:"آيس كريم بطيخ",    tr:"Karpuz Dondurma",   en:"Watermelon Ice Cream" },
      { img:"15.jpg", e:"🫧", p:140,           ar:"آيس كريم بابل",    tr:"Bubble Dondurma",   en:"Bubble Ice Cream" },
    ]
  },
  {
    id:"sweets", slug:"sweets", emo:"🥞",
    t:{ ar:"حلويات وكريب", tr:"Tatlılar & Krep", en:"Sweets & Crepes" },
    items:[
      { img:"1.jpg",  e:"🌯", p:315,           ar:"كريب فواكه رول",  tr:"Meyveli Rulo Krep", en:"Fruit Roll Crepe" },
      { img:"2.jpg",  e:"🥞", p:285,           ar:"كريب",            tr:"Krep",              en:"Crepe" },
      { img:"3.jpg",  e:"🥞", p:300, hot:true, ar:"ميني بان كيك",    tr:"Mini Pancake",      en:"Mini Pancakes" },
      { img:"4.jpg",  e:"🧇", p:270,           ar:"وافل",            tr:"Waffle",            en:"Waffle" },
      { img:"5.jpg",  e:"🍯", p:160,           ar:"تكميم (ميني بان كيك)", tr:"Takmim (Mini Pancake)", en:"Takmeem (Mini Pancakes)" },
      { img:"6.jpg",  e:"🍝", p:300,           ar:"فوتوتشيني كريب",  tr:"Fettuccine Krep",   en:"Fettuccine Crepe" },
      { img:"7.jpg",  e:"🥞", p:300,           ar:"بان كيك",         tr:"Pankek",            en:"Pancake" },
      { img:"8.jpg",  e:"🍫", p:365,           ar:"ابن فلاته",       tr:"İbn Falata",        en:"Ibn Falata" },
      { img:"9.jpg",  e:"🌯", p:300, hot:true, ar:"كريب دبي",        tr:"Dubai Krep",        en:"Dubai Crepe" },
      { img:"10.jpg", e:"🍪", p:165,           ar:"كوكيز",           tr:"Kurabiye",          en:"Cookies" },
      { img:"11.jpg", e:"🍰", p:215,           ar:"كريمي كيك",       tr:"Kremalı Kek",       en:"Creamy Cake" },
      { img:"12.jpg", e:"🍓", p:65,            ar:"بوكس فراولة بالشوكولاتة", tr:"Çikolatalı Çilek Kutusu", en:"Chocolate Strawberries Box" },
      { img:"13.jpg", e:"🍩", p:115,           ar:"دونات",           tr:"Donut",             en:"Donut" },
    ]
  },
  {
    id:"coffee", slug:"coffee", emo:"☕",
    t:{ ar:"قهوة ومشروبات ساخنة", tr:"Kahve & Sıcak İçecekler", en:"Coffee & Hot Drinks" },
    items:[
      { img:"1.jpg",  e:"☕", p:100,           ar:"إسبريسو",       tr:"Espresso",       en:"Espresso" },
      { img:"2.jpg",  e:"☕", p:100,           ar:"إسبريسو لونغو", tr:"Espresso Lungo", en:"Espresso Lungo" },
      { img:"3.jpg",  e:"☕", p:110,           ar:"قهوة",          tr:"Kahve",          en:"Coffee" },
      { img:"4.jpg",  e:"☕", p:125,           ar:"أمريكانو",      tr:"Americano",      en:"Americano" },
      { img:"5.jpg",  e:"☕", p:125,           ar:"كابتشينو",      tr:"Cappuccino",     en:"Cappuccino" },
      { img:"6.jpg",  e:"☕", p:125,           ar:"لاتيه",         tr:"Latte",          en:"Latte" },
      { img:"7.jpg",  e:"🥛", p:80,            ar:"رغوة حليب",     tr:"Süt Köpüğü",     en:"Milk Froth" },
      { img:"8.jpg",  e:"☕", p:110,           ar:"ريستريتو",      tr:"Ristretto",      en:"Ristretto" },
      { img:"9.jpg",  e:"☕", p:125,           ar:"فلات وايت",     tr:"Flat White",     en:"Flat White" },
      { img:"10.jpg", e:"🥛", p:100,           ar:"سحلب",          tr:"Salep",          en:"Sahlep" },
    ]
  },
];

/* representative photo for each category's nav thumbnail */
const CAT_THUMB = {
  juices:"3.jpg", cocktails:"4.jpg", smoothie:"3.jpg", mojito:"5.jpg",
  icecream:"2.jpg", sweets:"9.jpg", coffee:"5.jpg",
};

/* ============================================================
   CONTACT — social / contact pills + WhatsApp order button.
   Empty fields stay hidden, so nothing looks broken.
   ============================================================ */
const CONTACT = {
  instagram: "https://www.instagram.com/juicetime.istanbul/",
  tiktok:    "",     // an older @39ertime.istanbul TikTok exists — confirm with client before linking
  snapchat:  "",
  maps:      "https://www.google.com/maps/place/Aseer+Time/@41.1189756,28.7725161,17z/data=!3m1!4b1!4m6!3m5!1s0x14cabb7f6187910f:0xfa02b95ac2627e96!8m2!3d41.1189756!4d28.7725161",
  whatsapp:  "905389119999",  // live order button
  whatsappSoon: false,        // we have a real number, so show the live button
  phone:     "+90 538 911 9999",
};

/* ============================================================
   ANALYTICS — optional. Fill ONE to see menu views + popular items.
   Leave empty = no tracking, no external scripts (full privacy).
   ============================================================ */
const ANALYTICS = {
  ga4:       "",   // Google Analytics 4 ID, e.g. "G-XXXXXXXXXX"
  plausible: "",   // Plausible domain, e.g. "juicetime.com"
};

/* ---------- build flat lookup + basket state ---------- */
const FLAT = {};
MENU.forEach(cat=>cat.items.forEach((it,idx)=>{ it._id = cat.id+"-"+idx; it._slug = cat.slug; FLAT[it._id] = it; }));
let basket = {};
try{ basket = JSON.parse(localStorage.getItem("juicetime_basket") || "{}"); }catch(e){ basket = {}; }
const saveBasket = ()=> localStorage.setItem("juicetime_basket", JSON.stringify(basket));

/* ---------- item descriptions (optional, by item id). Add more anytime. ---------- */
const DESC = {
  "cocktails-0": { ar:"أفوكادو كريمي مع العسل والمكسرات.", tr:"Bal ve kuruyemişle kremalı avokado.", en:"Creamy avocado with honey and mixed nuts." },
  "cocktails-1": { ar:"كوكتيل في آي بي: أفوكادو، عسل، كاجو وقشطة.", tr:"VIP: avokado, bal, kaju ve kaymak.", en:"VIP: avocado, honey, cashews and cream." },
  "cocktails-3": { ar:"كوكتيل المحل المميّز — مزيج فواكه غني.", tr:"İmza özel kokteyl — zengin meyve karışımı.", en:"Our signature special — a rich fruit blend." },
  "cocktails-4": { ar:"كوكتيل فواكه وتوت بطبقات — حلو ومنعش.", tr:"Katmanlı meyve & berry kokteyli — tatlı ve ferah.", en:"Layered fruit & berry cocktail — sweet and refreshing." },
  "smoothie-2":  { ar:"ميلك شيك كريمي بنكهة بسكويت اللوتس.", tr:"Lotus bisküvili kremalı milkshake.", en:"Creamy milkshake with Lotus biscuit." },
  "smoothie-4":  { ar:"ميلك شيك القهوة والبوشار بالكراميل.", tr:"Kahve ve karamelli mısır milkshake.", en:"Coffee & caramel-corn shake." },
  "smoothie-6":  { ar:"ميلك شيك كريمي بنكهة سيريلاك.", tr:"Cerelac aromalı kremalı milkshake.", en:"Creamy Cerelac-flavoured milkshake." },
  "mojito-2":    { ar:"ريد بُل بالتوت الأزرق وشراب فاكهة العاطفة والليمون (بدون كحول).", tr:"Red Bull blueberry, passion fruit & limon şurubu (Alkolsüz).", en:"Red Bull with blueberry, passion-fruit & lemon syrup (alcohol-free)." },
  "mojito-4":    { ar:"ريد بُل بالتوت الأحمر والفراولة وفاكهة العاطفة (بدون كحول).", tr:"Red Bull kırmızı meyve, çilek & passion fruit şurubu (Alkolsüz).", en:"Red Bull with red berry, strawberry & passion-fruit syrup (alcohol-free)." },
  "sweets-4":    { ar:"٦ قطع ميني بان كيك مع الصوصات.", tr:"6 adet soslu mini pancake.", en:"6 mini pancakes with sauces." },
  "sweets-8":    { ar:"كريب على الطريقة الدبيّة بالفستق والشوكولاتة.", tr:"Dubai usulü fıstıklı çikolatalı krep.", en:"Dubai-style crepe with pistachio and chocolate." },
};

/* ---------- i18n strings ---------- */
const I18N = {
  ar:{ dir:"rtl", scroll:"اسحب لرؤية القائمة", price:"الأسعار بالليرة التركية (₺)", made:"صُنع بكل 🧡",
       receipt:"حسابي", total:"المجموع", note:"هذا مجرد ملخص للحساب — لا يوجد طلب أو دفع.", clear:"مسح", empty:"لم تُضف أي صنف بعد", call:"اتصل",
       soldout:"نفذ", waOrder:"أرسل الطلب عبر واتساب", waHello:"مرحبا عصير تايم! هذا طلبي:", soon:"قريباً", location:"الموقع" },
  tr:{ dir:"ltr", scroll:"menüye kaydır", price:"Fiyatlar ₺ (TL) cinsindendir", made:"🧡 ile yapıldı",
       receipt:"Hesabım", total:"Toplam", note:"Bu sadece bir hesap özetidir — sipariş veya ödeme yapılmaz.", clear:"Temizle", empty:"Henüz ürün eklemediniz", call:"Ara",
       soldout:"Tükendi", waOrder:"Siparişi WhatsApp'tan gönder", waHello:"Merhaba Aseer Time! Siparişim:", soon:"Yakında", location:"Konum" },
  en:{ dir:"ltr", scroll:"scroll to menu", price:"Prices in Turkish Lira (₺)", made:"Made with 🧡",
       receipt:"My Bill", total:"Total", note:"This is just a bill summary — no order or payment.", clear:"Clear", empty:"No items yet", call:"Call",
       soldout:"Sold out", waOrder:"Send order on WhatsApp", waHello:"Hello Aseer Time! My order:", soon:"Soon", location:"Location" },
};

/* ---------- icons ---------- */
const SVG = {
  ig:`<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M12 2.2c3.2 0 3.6 0 4.9.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.86s0 3.6-.07 4.86c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.86.07s-3.6 0-4.86-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.21 15.6 2.2 15.22 2.2 12s0-3.6.07-4.86c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.4 2.21 8.8 2.2 12 2.2m0 5.6A4.2 4.2 0 1 0 16.2 12 4.2 4.2 0 0 0 12 7.8m0 6.93A2.73 2.73 0 1 1 14.73 12 2.73 2.73 0 0 1 12 14.73m5.35-7.14a.98.98 0 1 0 .98.98.98.98 0 0 0-.98-.98"/></svg>`,
  wa:`<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zM6.597 20.13c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.82 9.82 0 0 0 1.523 5.27l-.999 3.648 3.965-.617zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/></svg>`,
  tel:`<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>`,
  tk:`<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.2v12.27a2.41 2.41 0 1 1-2.41-2.41c.25 0 .49.04.71.11V9.7a5.7 5.7 0 0 0-.71-.05 5.66 5.66 0 1 0 5.66 5.66V8.9a7.43 7.43 0 0 0 4.35 1.39V7.09a4.28 4.28 0 0 1-3.34-1.27z"/></svg>`,
  snap:`<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M12 2c2.5 0 4.3 2 4.4 4.4 0 .5 0 1 .1 1.5.4.2.9.1 1.3-.1.5-.2 1 0 1.2.4.2.5 0 1-.5 1.2-.5.2-1 .3-1.4.6.3 1.5 1.4 2.7 2.9 3.1.5.1.6.7.2 1-.6.5-1.4.6-2.1.8-.1.4-.2.8-.7.9-.4 0-.8-.2-1.2-.2-.6 0-1 .4-1.4.8-.7.7-1.6 1.1-2.8 1.1s-2.1-.4-2.8-1.1c-.4-.4-.8-.8-1.4-.8-.4 0-.8.2-1.2.2-.5-.1-.6-.5-.7-.9-.7-.2-1.5-.3-2.1-.8-.4-.3-.3-.9.2-1 1.5-.4 2.6-1.6 2.9-3.1-.4-.3-.9-.4-1.4-.6-.5-.2-.7-.7-.5-1.2.2-.4.7-.6 1.2-.4.4.2.9.3 1.3.1.1-.5.1-1 .1-1.5C7.7 4 9.5 2 12 2z"/></svg>`,
  map:`<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg>`,
};

let LANG = localStorage.getItem("juicetime_lang") || "ar";
if(!I18N[LANG]) LANG = "ar";

/* secondary subtitle language: ar→en, tr→en, en→ar */
const subFor = (it)=> LANG==="ar" ? it.en : LANG==="tr" ? it.en : it.ar;

/* ---------- analytics (loads only if configured) ---------- */
function loadAnalytics(){
  if(ANALYTICS.ga4){
    const s = document.createElement("script");
    s.async = true; s.src = "https://www.googletagmanager.com/gtag/js?id=" + ANALYTICS.ga4;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function(){ dataLayer.push(arguments); };
    gtag("js", new Date()); gtag("config", ANALYTICS.ga4);
  }
  if(ANALYTICS.plausible){
    const s = document.createElement("script");
    s.defer = true; s.dataset.domain = ANALYTICS.plausible;
    s.src = "https://plausible.io/js/script.tagged-events.js";
    document.head.appendChild(s);
  }
}
function track(ev, props){
  try{
    if(window.gtag) gtag("event", ev, props || {});
    if(window.plausible) window.plausible(ev, { props: props || {} });
  }catch(e){}
}

/* ---------- elements ---------- */
const catsTrack  = document.getElementById("catsTrack");
const menuEl     = document.getElementById("menu");
const basketBtn  = document.getElementById("basketBtn");
const sheetEl    = document.getElementById("sheet");
const sheetBack  = document.getElementById("sheetBack");
const receiptEl  = document.getElementById("receiptList");
let cardObserver, spyObserver, sheetOpen = false;

/* ---------- basket helpers ---------- */
const qtyOf = (id)=> basket[id] || 0;
function controlHTML(id){
  const q = qtyOf(id);
  return q>0
    ? `<div class="qty"><button class="q-minus" aria-label="-">−</button><b>${q}</b><button class="q-plus" aria-label="+">＋</button></div>`
    : `<button class="add" aria-label="add">＋</button>`;
}
const basketCount = ()=> Object.values(basket).reduce((a,b)=>a+b,0);
const basketTotal = ()=> Object.entries(basket).reduce((s,[id,q])=> s + ((FLAT[id]?FLAT[id].p:0)*q), 0);

function changeQty(id, delta){
  const q = qtyOf(id) + delta;
  if(q<=0) delete basket[id]; else basket[id] = q;
  saveBasket();
  refreshControl(id);
  updateBasketBtn();
  if(sheetOpen) renderReceipt();
  if(delta > 0) track("add_to_basket", { item: FLAT[id] ? FLAT[id].en : id });
}
function refreshControl(id){
  // update every copy of this control: menu card, receipt row, item modal
  document.querySelectorAll(`.addwrap[data-id="${id}"]`).forEach(wrap=>{
    wrap.innerHTML = controlHTML(id);
    const card = wrap.closest(".pcard");
    if(card) card.classList.toggle("has", !!basket[id]);
  });
}
function updateBasketBtn(){
  const c = basketCount();
  basketBtn.classList.toggle("show", c>0);
  document.getElementById("basketCount").textContent = c;
  document.getElementById("basketTotal").textContent = basketTotal()+"₺";
}
function renderReceipt(){
  const ids = Object.keys(basket);
  if(!ids.length){
    receiptEl.innerHTML = `<div class="receipt-empty">${I18N[LANG].empty} 🍹</div>`;
  } else {
    receiptEl.innerHTML = ids.map(id=>{
      const it = FLAT[id], q = basket[id];
      return `<div class="r-row" data-id="${id}">
        <div class="r-info"><span class="r-name">${it[LANG]}</span><small>${it.p}₺ × ${q}</small></div>
        <div class="r-line">${it.p*q}₺</div>
        <div class="addwrap r-ctrl" data-id="${id}">${controlHTML(id)}</div>
      </div>`;
    }).join("");
  }
  document.getElementById("totalVal").textContent = basketTotal()+"₺";

  // WhatsApp "send order" button (only when basket has items)
  const wa = document.getElementById("sheetWhats");
  const t = I18N[LANG];
  if(CONTACT.whatsapp && ids.length){
    let msg = t.waHello + "\n";
    ids.forEach(id=>{ const it = FLAT[id]; msg += `• ${it[LANG]} × ${basket[id]} = ${it.p*basket[id]}₺\n`; });
    msg += `${t.total}: ${basketTotal()}₺`;
    wa.href = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(msg)}`;
    wa.classList.remove("soon");
    wa.innerHTML = `${SVG.wa}<span>${t.waOrder}</span>`;
    wa.hidden = false;
  } else if(CONTACT.whatsappSoon && ids.length){
    wa.removeAttribute("href");
    wa.classList.add("soon");
    wa.innerHTML = `${SVG.wa}<span>${t.waOrder} · ${t.soon}</span>`;
    wa.hidden = false;
  } else {
    wa.hidden = true;
  }
}
function openSheet(){
  renderReceipt();
  sheetBack.hidden = false;
  requestAnimationFrame(()=>{ sheetEl.classList.add("open"); sheetBack.classList.add("show"); });
  sheetEl.setAttribute("aria-hidden","false");
  sheetOpen = true; document.body.style.overflow = "hidden";
}
function closeSheet(){
  sheetEl.classList.remove("open"); sheetBack.classList.remove("show");
  sheetEl.setAttribute("aria-hidden","true");
  sheetOpen = false; document.body.style.overflow = "";
  setTimeout(()=>{ if(!sheetOpen) sheetBack.hidden = true; }, 300);
}
function clearBasket(){
  basket = {}; saveBasket();
  menuEl.querySelectorAll(".addwrap").forEach(w=>{ w.innerHTML = controlHTML(w.dataset.id); });
  menuEl.querySelectorAll(".pcard.has").forEach(c=>c.classList.remove("has"));
  updateBasketBtn(); renderReceipt();
}
function cpill(cls, label, href){
  return `<a class="cpill ${cls}" href="${href}" target="_blank" rel="noopener">${SVG[cls]||""}<span>${label}</span></a>`;
}
function contactHTML(){
  const t = I18N[LANG];
  let h = "";
  if(CONTACT.instagram) h += cpill("ig",  "Instagram", CONTACT.instagram);
  if(CONTACT.tiktok)    h += cpill("tk",  "TikTok",    CONTACT.tiktok);
  if(CONTACT.snapchat)  h += cpill("snap","Snapchat",  CONTACT.snapchat);
  if(CONTACT.maps)      h += cpill("map", t.location,  CONTACT.maps);
  if(CONTACT.whatsapp)  h += cpill("wa",  "WhatsApp",  "https://wa.me/"+CONTACT.whatsapp);
  else if(CONTACT.whatsappSoon)
    h += `<span class="cpill wa soon">${SVG.wa}<span>WhatsApp</span><i class="soontag">${t.soon}</i></span>`;
  if(CONTACT.phone)     h += cpill("tel", t.call, "tel:"+CONTACT.phone.replace(/[^0-9+]/g,""));
  return h;
}

/* one delegated +/- handler for menu cards, receipt rows AND the item modal */
document.addEventListener("click",(e)=>{
  const wrap = e.target.closest(".addwrap"); if(!wrap) return;
  const id = wrap.dataset.id; if(!id) return;
  if(e.target.closest(".add") || e.target.closest(".q-plus")) changeQty(id, +1);
  else if(e.target.closest(".q-minus")) changeQty(id, -1);
});

/* tap a card (anywhere but its +/- control) to open the item detail */
menuEl.addEventListener("click",(e)=>{
  if(e.target.closest(".addwrap")) return;
  const card = e.target.closest(".pcard"); if(!card) return;
  openItem(card.dataset.id);
});

basketBtn.addEventListener("click", openSheet);
document.getElementById("sheetClose").addEventListener("click", closeSheet);
sheetBack.addEventListener("click", closeSheet);
document.getElementById("sheetClear").addEventListener("click", clearBasket);
document.getElementById("sheetWhats").addEventListener("click", ()=>track("whatsapp_order",{ total: basketTotal() }));

/* ---------- item detail modal ---------- */
const itemModal = document.getElementById("itemModal");
const itemBack  = document.getElementById("itemBack");
function openItem(id){
  const it = FLAT[id]; if(!it) return;
  const img = document.getElementById("itemImg");
  img.style.display = "";
  img.src = `${IMG}${it._slug}/${it.img}`;
  img.alt = it[LANG];
  img.onerror = ()=>{ img.style.display = "none"; };
  document.getElementById("itemEmoji").textContent = it.e;
  document.getElementById("itemFlame").hidden = !it.hot;
  document.getElementById("itemName").textContent  = it[LANG];
  document.getElementById("itemPrice").textContent = it.p + "₺";
  document.getElementById("itemSub").textContent   = subFor(it);
  document.getElementById("itemDesc").textContent  = DESC[id] ? (DESC[id][LANG] || "") : "";
  const out  = document.getElementById("itemOut");
  const ctrl = document.getElementById("itemCtrl");
  if(it.soldOut){
    out.textContent = I18N[LANG].soldout; out.hidden = false;
    ctrl.hidden = true; ctrl.removeAttribute("data-id"); ctrl.innerHTML = "";
  } else {
    out.hidden = true; ctrl.hidden = false;
    ctrl.dataset.id = id; ctrl.innerHTML = controlHTML(id);
  }
  itemBack.hidden = false;
  requestAnimationFrame(()=>{ itemModal.classList.add("open"); itemBack.classList.add("show"); });
  itemModal.setAttribute("aria-hidden","false");
  document.body.style.overflow = "hidden";
  track("view_item", { item: it.en });
}
function closeItem(){
  itemModal.classList.remove("open"); itemBack.classList.remove("show");
  itemModal.setAttribute("aria-hidden","true");
  if(!sheetOpen) document.body.style.overflow = "";
  setTimeout(()=>{ itemBack.hidden = true; }, 280);
}
document.getElementById("itemClose").addEventListener("click", closeItem);
itemBack.addEventListener("click", closeItem);
document.addEventListener("keydown",(e)=>{ if(e.key==="Escape"){ closeItem(); if(sheetOpen) closeSheet(); } });

/* ---------- build / rebuild the whole menu in current language ---------- */
function render(){
  document.documentElement.lang = LANG;
  document.documentElement.dir  = I18N[LANG].dir;
  document.body.dir             = I18N[LANG].dir;

  catsTrack.innerHTML = "";
  menuEl.innerHTML = "";

  MENU.forEach((cat,i)=>{
    // pill (image-first: round photo + small label)
    const pill = document.createElement("button");
    pill.className = "cat-pill" + (i===0?" active":"");
    pill.dataset.target = cat.id;
    pill.title = cat.t[LANG];
    const thumb = `${IMG}${cat.slug}/${CAT_THUMB[cat.id] || cat.items[0].img}`;
    pill.innerHTML = `<span class="cp-img" style="background-image:url('${thumb}')"></span><span class="cp-label">${cat.t[LANG]}</span>`;
    pill.addEventListener("click",()=>{
      document.getElementById(cat.id).scrollIntoView({behavior:"smooth",block:"start"});
    });
    catsTrack.appendChild(pill);

    // section
    const sec = document.createElement("section");
    sec.className = "sec";
    sec.id = cat.id;
    const otherTitle = LANG==="ar" ? cat.t.en : cat.t.ar;
    sec.innerHTML = `
      <div class="sec-head">
        <span class="ic">${cat.emo}</span>
        <h2>${cat.t[LANG]}<small>${otherTitle}</small></h2>
      </div>
      <div class="grid"></div>`;
    const grid = sec.querySelector(".grid");

    cat.items.forEach(it=>{
      const card = document.createElement("article");
      card.className = "pcard" + (it.hot?" hot":"") + (it.soldOut?" out":"") + (basket[it._id]?" has":"");
      card.dataset.id = it._id;
      const src = `${IMG}${cat.slug}/${it.img}`;
      card.innerHTML = `
        <div class="ph">
          ${it.badge?`<span class="badge">${it.badge}</span>`:""}
          ${it.hot?`<span class="flame">🔥</span>`:""}
          ${it.soldOut?`<span class="soldout">${I18N[LANG].soldout}</span>`:""}
          <div class="ph-fallback">${it.e}</div>
          <img alt="${it[LANG]}" loading="lazy" decoding="async" src="${src}">
          <span class="shine"></span>
          <div class="price">${it.p}<span class="cur">₺</span></div>
          ${it.soldOut?"":`<div class="addwrap" data-id="${it._id}">${controlHTML(it._id)}</div>`}
        </div>
        <div class="meta">
          <div class="name">${it[LANG]}</div>
          <div class="sub">${subFor(it)}</div>
        </div>`;
      const img = card.querySelector("img");
      const done = ()=>img.classList.add("loaded");
      if(img.complete && img.naturalWidth>0){ done(); }
      else{
        img.addEventListener("load", done);
        img.addEventListener("error", ()=>card.classList.add("noimg"));
      }
      grid.appendChild(card);
    });

    menuEl.appendChild(sec);
  });

  initObservers();
}

/* ---------- reveal + scrollspy ---------- */
function initObservers(){
  if(cardObserver) cardObserver.disconnect();
  if(spyObserver)  spyObserver.disconnect();

  const cards = document.querySelectorAll(".pcard");
  cardObserver = new IntersectionObserver((entries)=>{
    entries.forEach((en)=>{
      if(en.isIntersecting){
        const sibs = [...en.target.parentElement.children];
        en.target.style.transitionDelay = (Math.min(sibs.indexOf(en.target),5)*55)+"ms";
        en.target.classList.add("in");
        cardObserver.unobserve(en.target);
      }
    });
  },{threshold:.12, rootMargin:"0px 0px -6% 0px"});
  cards.forEach(c=>cardObserver.observe(c));

  const pills = [...document.querySelectorAll(".cat-pill")];
  const sections = MENU.map(c=>document.getElementById(c.id));
  spyObserver = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{
      if(en.isIntersecting){
        const id = en.target.id;
        pills.forEach(p=>p.classList.toggle("active", p.dataset.target===id));
        const active = pills.find(p=>p.dataset.target===id);
        if(active) active.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"});
      }
    });
  },{threshold:.2, rootMargin:"-35% 0px -55% 0px"});
  sections.forEach(s=>spyObserver.observe(s));
}

/* ---------- language switch ---------- */
function setLang(l){
  if(!I18N[l]) return;
  LANG = l;
  localStorage.setItem("juicetime_lang", l);
  updateLangUI(l);
  applyStatic();
  render();
  track("set_language", { lang: l });
}
function applyStatic(){
  const t = I18N[LANG];
  const set = (id,v)=>{ const el=document.getElementById(id); if(el) el.textContent = v; };
  set("scrollCueText", t.scroll);
  set("priceNote", t.price);
  set("madeNote", t.made);
  set("sheetTitle", t.receipt);
  set("totalLabel", t.total);
  set("totalVal", basketTotal()+"₺");
  set("sheetNote", t.note);
  set("sheetClear", t.clear);
  document.getElementById("footContact").innerHTML  = contactHTML();
  document.getElementById("sheetContact").innerHTML = contactHTML();
  if(sheetOpen) renderReceipt();
}
/* language dropdown */
const LANG_CODE = { ar:"ع", tr:"TR", en:"EN" };
const langBtn  = document.getElementById("langBtn");
const langMenu = document.getElementById("langMenu");
function updateLangUI(l){
  document.getElementById("langCur").textContent = LANG_CODE[l] || l.toUpperCase();
  langMenu.querySelectorAll("button").forEach(b=>b.classList.toggle("active", b.dataset.l===l));
}
function closeLangMenu(){
  langMenu.hidden = true;
  langBtn.setAttribute("aria-expanded","false");
  langBtn.classList.remove("open");
}
langBtn.addEventListener("click",(e)=>{
  e.stopPropagation();
  const willOpen = langMenu.hidden;
  langMenu.hidden = !willOpen;
  langBtn.setAttribute("aria-expanded", String(willOpen));
  langBtn.classList.toggle("open", willOpen);
});
langMenu.querySelectorAll("button").forEach(b=>{
  b.addEventListener("click",()=>{ setLang(b.dataset.l); closeLangMenu(); });
});
document.addEventListener("click",(e)=>{ if(!e.target.closest(".lang")) closeLangMenu(); });

/* ---------- scroll progress + to-top ---------- */
const fill  = document.getElementById("scrollFill");
const toTop = document.getElementById("toTop");
function onScroll(){
  const h = document.documentElement;
  const max = h.scrollHeight - h.clientHeight;
  fill.style.width = (max>0 ? (h.scrollTop/max)*100 : 0) + "%";
  toTop.classList.toggle("show", h.scrollTop > 500);
}
document.addEventListener("scroll", onScroll, {passive:true});
toTop.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));

/* ---------- tap splash ---------- */
document.addEventListener("pointerdown",(e)=>{
  if(window.matchMedia("(prefers-reduced-motion:reduce)").matches) return;
  const s = document.createElement("span");
  s.className = "splash";
  s.style.left = e.clientX+"px"; s.style.top = e.clientY+"px";
  document.body.appendChild(s);
  setTimeout(()=>s.remove(),650);
},{passive:true});

/* ---------- hero photo marquee ---------- */
(function heroStrip(){
  const m = document.getElementById("heroMarquee");
  if(!m) return;
  // a tasty spread across categories
  const picks = [
    "juices/3.jpg","cocktails/4.jpg","smoothie/3.jpg","mojito/5.jpg","icecream/2.jpg",
    "sweets/9.jpg","coffee/5.jpg","juices/9.jpg","smoothie/7.jpg","cocktails/8.jpg",
    "sweets/3.jpg","icecream/10.jpg"
  ];
  const build = ()=> picks.map(p=>`<span class="hm" style="background-image:url('${IMG}${p}')"></span>`).join("");
  m.innerHTML = build() + build(); // duplicate for seamless loop
})();

/* ---------- floating emojis ---------- */
(function floaties(){
  const wrap = document.getElementById("floaties");
  const set = ["🍊","🍓","🥭","🍋","🥝","🍍","🫐","🍉","🍹","🥤","🍦","🌿","🍪","🥥"];
  const n = window.innerWidth < 500 ? 9 : 16;
  for(let i=0;i<n;i++){
    const s = document.createElement("span");
    s.textContent = set[i % set.length];
    s.style.left = Math.random()*100 + "%";
    s.style.fontSize = (1.4 + Math.random()*2.2) + "rem";
    const dur = 14 + Math.random()*16;
    s.style.animationDuration = dur + "s";
    s.style.animationDelay = (-Math.random()*dur) + "s";
    wrap.appendChild(s);
  }
})();

/* ---------- rising bubbles ---------- */
(function bubbles(){
  if(window.matchMedia("(prefers-reduced-motion:reduce)").matches) return;
  const cv = document.getElementById("bubbles");
  const ctx = cv.getContext("2d");
  let w,h,dpr,parts=[];
  function size(){
    dpr = Math.min(window.devicePixelRatio||1, 2);
    w = cv.width = innerWidth*dpr; h = cv.height = innerHeight*dpr;
    cv.style.width = innerWidth+"px"; cv.style.height = innerHeight+"px";
  }
  function spawn(){
    const count = innerWidth<500 ? 26 : 46;
    parts = Array.from({length:count},()=>({
      x:Math.random()*w, y:Math.random()*h,
      r:(2+Math.random()*5)*dpr, sp:(0.3+Math.random()*0.9)*dpr,
      drift:(Math.random()-0.5)*0.4*dpr, a:0.1+Math.random()*0.35
    }));
  }
  function frame(){
    ctx.clearRect(0,0,w,h);
    parts.forEach(p=>{
      p.y -= p.sp; p.x += p.drift;
      if(p.y < -10){ p.y = h+10; p.x = Math.random()*w; }
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle = `rgba(255,255,255,${p.a})`; ctx.fill();
    });
    requestAnimationFrame(frame);
  }
  size(); spawn(); frame();
  let to; addEventListener("resize",()=>{ clearTimeout(to); to=setTimeout(()=>{size();spawn();},200); });
})();

/* ---------- morphing hero wave ---------- */
(function wave(){
  if(window.matchMedia("(prefers-reduced-motion:reduce)").matches) return;
  const path = document.getElementById("wavePath");
  let t = 0;
  function step(){
    t += 0.02;
    const a = 40 + Math.sin(t)*18, b = 40 + Math.cos(t*1.3)*22, c = 50 + Math.sin(t*0.8)*16;
    path.setAttribute("d",
      `M0,${a} C240,${a+60} 480,${b-30} 720,${b} C960,${b+40} 1200,${c-40} 1440,${c} L1440,120 L0,120 Z`);
    requestAnimationFrame(step);
  }
  step();
})();

/* ---------- go ---------- */
loadAnalytics();
updateLangUI(LANG);
applyStatic();
render();
updateBasketBtn();
