/* ASFALT — app: language, cart, rendering */
(() => {
  const WA_NUMBER = "905000000000"; // demo number — replace with client's

  /* ---------- language ---------- */
  const LANGS = ["en", "tr", "ar"];
  let lang = localStorage.getItem("asfalt_lang");
  if (!LANGS.includes(lang)) lang = "en";

  const t = (key) => (I18N[key] && I18N[key][lang]) || key;

  function applyLang() {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.querySelectorAll("[data-i18n]").forEach(el => {
      el.textContent = t(el.dataset.i18n);
    });
    document.querySelectorAll(".lang-sw button").forEach(b =>
      b.classList.toggle("on", b.dataset.lang === lang));
    document.title = document.body.dataset.title
      ? `${document.body.dataset.title} — ASFALT`
      : "ASFALT — " + ({ en: "Istanbul Streetwear", tr: "İstanbul Streetwear", ar: "ستريت وير إسطنبول" }[lang]);
  }

  window.setLang = (l) => {
    lang = l;
    localStorage.setItem("asfalt_lang", l);
    applyLang();
    document.dispatchEvent(new CustomEvent("asfalt:lang"));
  };

  /* ---------- helpers ---------- */
  const fmt = (n) => "₺" + n.toLocaleString("tr-TR");
  const img = (p, i) => `images/products/${p.id}-${i}.jpg`;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  window.ASFALT = { t, fmt, img, get lang() { return lang; } };

  /* ---------- cart ---------- */
  let cart = [];
  try { cart = JSON.parse(localStorage.getItem("asfalt_cart")) || []; } catch (e) {}

  const saveCart = () => localStorage.setItem("asfalt_cart", JSON.stringify(cart));
  const cartCount = () => cart.reduce((s, i) => s + i.qty, 0);
  const cartTotal = () => cart.reduce((s, i) => {
    const p = PRODUCTS.find(p => p.id === i.id);
    return s + (p ? p.price * i.qty : 0);
  }, 0);

  window.addToCart = (id, size, qty = 1) => {
    const line = cart.find(i => i.id === id && i.size === size);
    if (line) line.qty += qty;
    else cart.push({ id, size, qty });
    saveCart(); renderCart(); updateBadge();
    toast(t("p_added"));
    openCart();
  };

  function updateBadge() {
    const n = cartCount();
    $$(".bag-count").forEach(b => {
      b.textContent = n;
      b.classList.toggle("show", n > 0);
    });
  }

  function renderCart() {
    const box = $("#cartItems");
    if (!box) return;
    if (!cart.length) {
      box.innerHTML = `
        <div class="cart-empty">
          <div>
            <div class="big">${t("cart_empty")}</div>
            <a class="btn ghost" style="margin-top:18px" href="shop.html">${t("cart_empty_cta")}</a>
          </div>
        </div>`;
    } else {
      box.innerHTML = cart.map((line, idx) => {
        const p = PRODUCTS.find(p => p.id === line.id);
        if (!p) return "";
        const sizeTxt = line.size ? `${t("cart_size")}: ${line.size}` : t("p_onesize");
        return `
        <div class="ci">
          <a href="product.html?id=${p.id}"><img src="${img(p, 1)}" alt="${p.name[lang]}"></a>
          <div>
            <div class="ci-name">${p.name[lang]}</div>
            <div class="ci-meta">${sizeTxt}</div>
            <div class="ci-price">${fmt(p.price)}</div>
            <span class="ci-qty">
              <button onclick="cartQty(${idx},-1)">−</button><span>${line.qty}</span><button onclick="cartQty(${idx},1)">+</button>
            </span>
          </div>
          <button class="ci-rm" onclick="cartRemove(${idx})" aria-label="remove">×</button>
        </div>`;
      }).join("");
    }
    const totalEl = $("#cartTotal");
    if (totalEl) totalEl.textContent = fmt(cartTotal());
    const foot = $("#cartFoot");
    if (foot) foot.style.display = cart.length ? "" : "none";
  }

  window.cartQty = (idx, d) => {
    cart[idx].qty += d;
    if (cart[idx].qty <= 0) cart.splice(idx, 1);
    saveCart(); renderCart(); updateBadge();
  };
  window.cartRemove = (idx) => {
    cart.splice(idx, 1);
    saveCart(); renderCart(); updateBadge();
  };

  window.openCart = () => { $("#cartDrawer").classList.add("open"); $("#overlay").classList.add("show"); };
  window.closeCart = () => { $("#cartDrawer").classList.remove("open"); $("#overlay").classList.remove("show"); };

  window.checkoutWA = () => {
    if (!cart.length) return;
    let msg = t("wa_greet") + "\n\n";
    cart.forEach(line => {
      const p = PRODUCTS.find(p => p.id === line.id);
      if (!p) return;
      msg += `• ${p.name[lang]}`;
      if (line.size) msg += ` (${t("wa_size")}: ${line.size})`;
      msg += ` ×${line.qty} — ${fmt(p.price * line.qty)}\n`;
    });
    msg += `\n${t("wa_total")}: ${fmt(cartTotal())}`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  /* ---------- toast ---------- */
  let toastTimer;
  function toast(text) {
    let el = $("#toast");
    if (!el) {
      el = document.createElement("div");
      el.id = "toast"; el.className = "toast";
      document.body.appendChild(el);
    }
    el.textContent = text;
    requestAnimationFrame(() => el.classList.add("show"));
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("show"), 2400);
  }

  /* ---------- product card ---------- */
  window.productCard = (p, revealDelay = 0) => `
    <a class="p-card rv ${revealDelay ? "rv-d" + revealDelay : ""}" href="product.html?id=${p.id}">
      <div class="p-media">
        ${p.tag ? `<span class="p-tag ${p.tag}">${t("tag_" + p.tag)}</span>` : ""}
        <img class="im1" src="${img(p, 1)}" alt="${p.name[lang]}" loading="lazy">
        <img class="im2" src="${img(p, 2)}" alt="" loading="lazy">
        <button class="p-quick" onclick="event.preventDefault();event.stopPropagation();addToCart('${p.id}', ${p.sizes.length ? `'${p.sizes[0]}'` : "null"})">+ ${t("p_add")}</button>
      </div>
      <div class="p-info">
        <span class="p-cat">${CATS[p.cat][lang]}</span>
        <span class="p-name">${p.name[lang]}</span>
        <span class="p-price">${fmt(p.price)}</span>
      </div>
    </a>`;

  /* ---------- reveal observer ---------- */
  function watchReveals() {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    $$(".rv:not(.in)").forEach(el => io.observe(el));
  }
  window.watchReveals = watchReveals;

  /* ---------- header / shell ---------- */
  function initShell() {
    const head = $(".site-head");
    if (head) {
      const onScroll = () => head.classList.toggle("scrolled", scrollY > 40);
      addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    }
    $$(".lang-sw button").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));
    const burger = $(".burger"), mnav = $("#mnav");
    if (burger && mnav) {
      burger.addEventListener("click", () => mnav.classList.add("open"));
      $(".m-close", mnav).addEventListener("click", () => mnav.classList.remove("open"));
      $$("a", mnav).forEach(a => a.addEventListener("click", () => mnav.classList.remove("open")));
    }
    $("#overlay")?.addEventListener("click", closeCart);
    document.addEventListener("keydown", e => { if (e.key === "Escape") closeCart(); });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initShell();
    applyLang();
    renderCart();
    updateBadge();
    document.dispatchEvent(new CustomEvent("asfalt:ready"));
    watchReveals();
  });

  document.addEventListener("asfalt:lang", () => { renderCart(); });
})();
