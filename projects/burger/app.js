/* ============================================================
   8one BURGER — menu data + i18n + motion + branch selector
   Photos are local: img/<slug>/<file>
   Each item: tr/en/ar names, price (p), emoji fallback (e),
   image file (img), optional hot / badge / soldOut.
   Edit prices & names right here.
   ------------------------------------------------------------
   Menu data was recovered from the brand's minidine menu
   (categories → products → price + photos). Names are authored
   in 3 languages here because the source menu is monolingual.
   ============================================================ */

const IMG = "img/";

let MENU = [];
// Note: the source lists "Lotus" twice (one available at 330₺, one sold out at 250₺);
// both are kept as-is per the brand's data.

/* representative photo for each category's nav thumbnail */


/* ============================================================
   BRANCHES — the 5 locations. Selecting one sets the active
   WhatsApp number, Google Maps link and opening hours, and is
   saved in localStorage. The receipt's WhatsApp button orders
   the SELECTED branch. The menu is shared across all branches.
   ============================================================ */
// hours: scraped from each branch's Google Maps page (Jun 2026). All days identical;
// every branch opens 11:30. Edit here if the brand changes a branch's hours.
let BRANCHES = [];

/* ============================================================
   CONTACT — social links (shared). WhatsApp + Maps come from
   the SELECTED branch and are filled at runtime (see setBranch).
   ============================================================ */
let CONTACT = {
  instagram:"", tiktok:"", facebook:"", youtube:"",
  maps:"", whatsapp:"", whatsappSoon:false, phone:"",
};

/* ============================================================
   ANALYTICS — optional. Fill ONE to see menu views + popular items.
   Leave empty = no tracking, no external scripts (full privacy).
   ============================================================ */
const ANALYTICS = {
  ga4:       "",   // Google Analytics 4 ID, e.g. "G-XXXXXXXXXX"
  plausible: "",   // Plausible domain, e.g. "8oneburger.com"
};

/* ---------- build flat lookup + basket state ---------- */
const FLAT = {};
function indexData(){ FLAT_clear(); MENU.forEach(cat=>cat.items.forEach((it,idx)=>{ it._id = cat.id+"-"+idx; it._slug = cat.slug; FLAT[it._id] = it; })); }
function FLAT_clear(){ for(const k in FLAT) delete FLAT[k]; }
let basket = {};
try{ basket = JSON.parse(localStorage.getItem("8one_basket") || "{}"); }catch(e){ basket = {}; }
const saveBasket = ()=> localStorage.setItem("8one_basket", JSON.stringify(basket));

/* ---------- item descriptions (optional, by item id). ---------- */


/* ---------- i18n strings ---------- */
const I18N = {
  ar:{ dir:"rtl", scroll:"اسحب لرؤية القائمة", price:"الأسعار بالليرة التركية (₺)", made:"صُنع بكل 🔥 ولهب",
       receipt:"حسابي", total:"المجموع", note:"هذا مجرد ملخص للحساب — لا يوجد طلب أو دفع.", clear:"مسح", empty:"لم تُضف أي صنف بعد", call:"اتصل",
       soldout:"نفذ", waOrder:"أرسل الطلب عبر واتساب", waHello:"مرحبا 8one برجر! هذا طلبي:", soon:"قريباً", location:"الموقع",
       branch:"الفرع", chooseBranch:"اختر الفرع", branchAt:"فرع", orderFrom:"تطلب من فرع", daily:"يومياً" },
  tr:{ dir:"ltr", scroll:"menüye kaydır", price:"Fiyatlar ₺ (TL) cinsindendir", made:"🔥 ile sevgiyle yapıldı",
       receipt:"Hesabım", total:"Toplam", note:"Bu sadece bir hesap özetidir — sipariş veya ödeme yapılmaz.", clear:"Temizle", empty:"Henüz ürün eklemediniz", call:"Ara",
       soldout:"Tükendi", waOrder:"Siparişi WhatsApp'tan gönder", waHello:"Merhaba 8one Burger! Siparişim:", soon:"Yakında", location:"Konum",
       branch:"Şube", chooseBranch:"Şube seçin", branchAt:"şubesi", orderFrom:"Sipariş şubesi", daily:"Her gün" },
  en:{ dir:"ltr", scroll:"scroll to menu", price:"Prices in Turkish Lira (₺)", made:"Made with 🔥 & flame",
       receipt:"My Bill", total:"Total", note:"This is just a bill summary — no order or payment.", clear:"Clear", empty:"No items yet", call:"Call",
       soldout:"Sold out", waOrder:"Send order on WhatsApp", waHello:"Hello 8one Burger! My order:", soon:"Soon", location:"Location",
       branch:"Branch", chooseBranch:"Choose a branch", branchAt:"branch", orderFrom:"Ordering from", daily:"Daily" },
};

/* ---------- icons ---------- */
const SVG = {
  ig:`<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M12 2.2c3.2 0 3.6 0 4.9.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.86s0 3.6-.07 4.86c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.86.07s-3.6 0-4.86-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.21 15.6 2.2 15.22 2.2 12s0-3.6.07-4.86c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.4 2.21 8.8 2.2 12 2.2m0 5.6A4.2 4.2 0 1 0 16.2 12 4.2 4.2 0 0 0 12 7.8m0 6.93A2.73 2.73 0 1 1 14.73 12 2.73 2.73 0 0 1 12 14.73m5.35-7.14a.98.98 0 1 0 .98.98.98.98 0 0 0-.98-.98"/></svg>`,
  wa:`<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zM6.597 20.13c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.82 9.82 0 0 0 1.523 5.27l-.999 3.648 3.965-.617zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/></svg>`,
  tel:`<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>`,
  tk:`<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.2v12.27a2.41 2.41 0 1 1-2.41-2.41c.25 0 .49.04.71.11V9.7a5.7 5.7 0 0 0-.71-.05 5.66 5.66 0 1 0 5.66 5.66V8.9a7.43 7.43 0 0 0 4.35 1.39V7.09a4.28 4.28 0 0 1-3.34-1.27z"/></svg>`,
  fb:`<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z"/></svg>`,
  yt:`<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8zM9.55 15.57V8.43L15.82 12l-6.27 3.57z"/></svg>`,
  map:`<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg>`,
  pin:`<svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true"><path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg>`,
};

let LANG = localStorage.getItem("8one_lang") || "ar";
if(!I18N[LANG]) LANG = "ar";

const subFor = (it)=> LANG==="tr" ? it.en : LANG==="en" ? it.tr : it.en;

/* ---------- branch state ---------- */
let BRANCH = null;
function applyBranch(){
  CONTACT.whatsapp = BRANCH.wa;
  CONTACT.maps     = BRANCH.maps;
}
function setBranch(id){
  const b = BRANCHES.find(x=>x.id===id); if(!b) return;
  BRANCH = b;
  localStorage.setItem("8one_branch", id);
  applyBranch();
  updateBranchUI();
  applyStatic();
  if(sheetOpen) renderReceipt();
  track("set_branch", { branch: id });
}

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
    receiptEl.innerHTML = `<div class="receipt-empty">${I18N[LANG].empty} 🍔</div>`;
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

  // branch line on the receipt
  const bl = document.getElementById("sheetBranch");
  if(bl){ bl.innerHTML = `${SVG.pin}<span>${I18N[LANG].orderFrom}: <b>8one ${BRANCH.t[LANG]}</b> · 🕒 ${BRANCH.hours}</span>`; }

  // WhatsApp "send order" button → SELECTED branch
  const wa = document.getElementById("sheetWhats");
  const t = I18N[LANG];
  if(CONTACT.whatsapp && ids.length){
    let msg = t.waHello + "\n";
    ids.forEach(id=>{ const it = FLAT[id]; msg += `• ${it[LANG]} × ${basket[id]} = ${it.p*basket[id]}₺\n`; });
    msg += `${t.total}: ${basketTotal()}₺\n— ${t.branch}: 8one ${BRANCH.t[LANG]}`;
    wa.href = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(msg)}`;
    wa.classList.remove("soon");
    wa.innerHTML = `${SVG.wa}<span>${t.waOrder}</span>`;
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
  if(CONTACT.facebook)  h += cpill("fb",  "Facebook",  CONTACT.facebook);
  if(CONTACT.youtube)   h += cpill("yt",  "YouTube",   CONTACT.youtube);
  if(CONTACT.maps)      h += cpill("map", t.location,  CONTACT.maps);
  if(CONTACT.whatsapp)  h += cpill("wa",  "WhatsApp",  "https://wa.me/"+CONTACT.whatsapp);
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
document.getElementById("sheetWhats").addEventListener("click", ()=>track("whatsapp_order",{ total: basketTotal(), branch: BRANCH.id }));

/* ---------- item detail modal ---------- */
const itemModal = document.getElementById("itemModal");
const itemBack  = document.getElementById("itemBack");
function openItem(id){
  const it = FLAT[id]; if(!it) return;
  const img = document.getElementById("itemImg");
  if(it.img){
    img.style.display = "";
    img.src = `${IMG}${it._slug}/${it.img}`;
    img.alt = it[LANG];
    img.onerror = ()=>{ img.style.display = "none"; };
  } else { img.style.display = "none"; }
  document.getElementById("itemEmoji").textContent = it.e;
  document.getElementById("itemFlame").hidden = !it.hot;
  document.getElementById("itemName").textContent  = it[LANG];
  document.getElementById("itemPrice").textContent = it.p + "₺";
  document.getElementById("itemSub").textContent   = subFor(it);
  document.getElementById("itemDesc").textContent  = it.desc ? (it.desc[LANG] || "") : "";
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
document.addEventListener("keydown",(e)=>{ if(e.key==="Escape"){ closeItem(); if(sheetOpen) closeSheet(); closeLangMenu(); closeBranchMenu(); } });

/* ---------- build / rebuild the whole menu in current language ---------- */
function render(){
  document.documentElement.lang = LANG;
  document.documentElement.dir  = I18N[LANG].dir;
  document.body.dir             = I18N[LANG].dir;

  catsTrack.innerHTML = "";
  menuEl.innerHTML = "";

  MENU.forEach((cat,i)=>{
    const pill = document.createElement("button");
    pill.className = "cat-pill" + (i===0?" active":"");
    pill.dataset.target = cat.id;
    pill.title = cat.t[LANG];
    const thumb = `${IMG}${cat.slug}/${cat.thumb || cat.items[0]?.img || ""}`;
    pill.innerHTML = `<span class="cp-img" style="background-image:url('${thumb}')"></span><span class="cp-label">${cat.t[LANG]}</span>`;
    pill.addEventListener("click",()=>{
      document.getElementById(cat.id).scrollIntoView({behavior:"smooth",block:"start"});
    });
    catsTrack.appendChild(pill);

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
      card.className = "pcard" + (it.hot?" hot":"") + (it.soldOut?" out":"") + (basket[it._id]?" has":"") + (it.img?"":" noimg");
      card.dataset.id = it._id;
      const src = it.img ? `${IMG}${cat.slug}/${it.img}` : "";
      card.innerHTML = `
        <div class="ph">
          ${it.badge?`<span class="badge">${it.badge}</span>`:""}
          ${it.hot?`<span class="flame">🔥</span>`:""}
          ${it.soldOut?`<span class="soldout">${I18N[LANG].soldout}</span>`:""}
          <div class="ph-fallback">${it.e}</div>
          ${it.img?`<img alt="${it[LANG]}" loading="lazy" decoding="async" src="${src}">`:""}
          <span class="shine"></span>
          <div class="price">${it.p}<span class="cur">₺</span></div>
          ${it.soldOut?"":`<div class="addwrap" data-id="${it._id}">${controlHTML(it._id)}</div>`}
        </div>
        <div class="meta">
          <div class="name">${it[LANG]}</div>
          <div class="sub">${subFor(it)}</div>
        </div>`;
      const img = card.querySelector("img");
      if(img){
        const done = ()=>img.classList.add("loaded");
        if(img.complete && img.naturalWidth>0){ done(); }
        else{
          img.addEventListener("load", done);
          img.addEventListener("error", ()=>card.classList.add("noimg"));
        }
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
  localStorage.setItem("8one_lang", l);
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
  updateBranchUI();
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
  closeBranchMenu();
});
langMenu.querySelectorAll("button").forEach(b=>{
  b.addEventListener("click",()=>{ setLang(b.dataset.l); closeLangMenu(); });
});
document.addEventListener("click",(e)=>{ if(!e.target.closest(".lang")) closeLangMenu(); });

/* ---------- branch dropdown ---------- */
const branchBtn  = document.getElementById("branchBtn");
const branchMenu = document.getElementById("branchMenu");
function updateBranchUI(){
  const cur = document.getElementById("branchCur");
  if(cur) cur.textContent = BRANCH.t[LANG];
  const lbl = document.getElementById("branchLabel");
  if(lbl) lbl.textContent = I18N[LANG].branch;
  if(branchMenu){
    branchMenu.innerHTML = BRANCHES.map(b=>
      `<button data-b="${b.id}" role="option" class="${b.id===BRANCH.id?"active":""}">${SVG.pin}<span class="bm-meta"><b>8one ${b.t[LANG]}</b><small>🕒 ${I18N[LANG].daily} ${b.hours}</small></span></button>`
    ).join("");
    branchMenu.querySelectorAll("button").forEach(btn=>{
      btn.addEventListener("click",()=>{ setBranch(btn.dataset.b); closeBranchMenu(); });
    });
  }
}
function closeBranchMenu(){
  if(!branchMenu) return;
  branchMenu.hidden = true;
  branchBtn.setAttribute("aria-expanded","false");
  branchBtn.classList.remove("open");
}
if(branchBtn){
  branchBtn.addEventListener("click",(e)=>{
    e.stopPropagation();
    const willOpen = branchMenu.hidden;
    branchMenu.hidden = !willOpen;
    branchBtn.setAttribute("aria-expanded", String(willOpen));
    branchBtn.classList.toggle("open", willOpen);
    closeLangMenu();
  });
  document.addEventListener("click",(e)=>{ if(!e.target.closest(".branch")) closeBranchMenu(); });
}

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
  const picks = [
    "burger/egg-buster-double.jpg","combo/squad-combo.jpg","burger/prime-burger-double.jpg",
    "fries/animal-fries.jpg","burger/smash-onion-double.jpg","sweets/pistachio-tiramisu.jpg",
    "burger/truffle-double.jpg","sides/mozzarella-sticks.jpeg","burger/mushmore-double.jpg",
    "kids/boy-s-meal-burger.jpeg","burger/spicy-burger-double.jpg","combo/couple-combo.jpg"
  ];
  const build = ()=> picks.map(p=>`<span class="hm" style="background-image:url('${IMG}${p}')"></span>`).join("");
  // defer the decorative photo strip so it doesn't compete with first paint on slow wifi
  const go = ()=>{ m.innerHTML = build() + build(); };
  if("requestIdleCallback" in window) requestIdleCallback(go,{timeout:2200}); else setTimeout(go,1200);
})();

/* ---------- floating emojis (burger/fries/sizzle) ---------- */
(function floaties(){
  const wrap = document.getElementById("floaties");
  if(!wrap) return;
  const set = ["🍔","🍟","🧀","🥓","🌶️","🥤","🧅","🍗","🔥","🥩","🍅","🥒"];
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

/* ---------- rising embers (warm particles) ---------- */
(function embers(){
  if(window.matchMedia("(prefers-reduced-motion:reduce)").matches) return;
  const cv = document.getElementById("embers");
  if(!cv) return;
  const ctx = cv.getContext("2d");
  let w,h,dpr,parts=[];
  function size(){
    dpr = Math.min(window.devicePixelRatio||1, 2);
    w = cv.width = innerWidth*dpr; h = cv.height = innerHeight*dpr;
    cv.style.width = innerWidth+"px"; cv.style.height = innerHeight+"px";
  }
  function spawn(){
    const count = innerWidth<500 ? 24 : 42;
    parts = Array.from({length:count},()=>({
      x:Math.random()*w, y:Math.random()*h,
      r:(1.5+Math.random()*3.5)*dpr, sp:(0.3+Math.random()*0.9)*dpr,
      drift:(Math.random()-0.5)*0.5*dpr, a:0.12+Math.random()*0.4,
      hue: 30 + Math.random()*22
    }));
  }
  function frame(){
    ctx.clearRect(0,0,w,h);
    parts.forEach(p=>{
      p.y -= p.sp; p.x += p.drift;
      if(p.y < -10){ p.y = h+10; p.x = Math.random()*w; }
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle = `hsla(${p.hue},95%,60%,${p.a})`; ctx.fill();
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
  if(!path) return;
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

/* ---------- go: load the menu data, then boot ---------- */
function boot(){
  indexData();
  // pick the saved branch (or the first) now that BRANCHES is loaded
  BRANCH = BRANCHES.find(b=>b.id===localStorage.getItem("8one_branch")) || BRANCHES[0] || null;
  if(BRANCH) applyBranch();
  loadAnalytics();
  updateLangUI(LANG);
  updateBranchUI();
  applyStatic();
  render();
  updateBasketBtn();
}
fetch("data/menu.json?v=" + Date.now(), { cache: "no-store" })   // ?v= busts any browser/server cache
  .then(r => r.json())
  .then(d => {
    MENU = d.categories || [];
    BRANCHES = d.branches || [];
    CONTACT = Object.assign(CONTACT, d.contact || {});
    if(d.analytics){ ANALYTICS.ga4 = d.analytics.ga4 || ""; ANALYTICS.plausible = d.analytics.plausible || ""; }
    boot();
  })
  .catch(e => { console.error(e); document.getElementById("menu").innerHTML =
    "<p style='padding:2rem;text-align:center;color:#2B2E4A'>تعذّر تحميل القائمة · Menü yüklenemedi · Menu failed to load</p>"; });

/* ---------- offline + faster repeat loads (weak wifi) ---------- */
if("serviceWorker" in navigator){
  addEventListener("load", ()=> navigator.serviceWorker.register("sw.js").catch(()=>{}));
}
