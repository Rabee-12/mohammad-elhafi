/* ============================================================================
   Al Sultan Rent a Car — site data + logic (vanilla JS, no build step)
   Edit data here; the page renders from these objects.
   ========================================================================== */

const CONFIG = {
  brand: "Al Sultan Rent a Car",
  /* Al Sultan's WhatsApp / phone — digits only, country code, no "+"/spaces.
     +90 552 366 66 69. Powers every WhatsApp button + form. */
  whatsapp: "905523666669",
  email: "info@alsultancars.com",
  addressLine: "Park Mavera 2, Gazi Yaşargil Cd, A2 Blok No:60, Kayabaşı, 34494 Başakşehir / İstanbul",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Park%20Mavera%202%20Gazi%20Ya%C5%9Fargil%20Cd%20Kayaba%C5%9F%C4%B1%20Ba%C5%9Fak%C5%9Fehir%20%C4%B0stanbul",
  mapEmbed:
    "https://www.google.com/maps?q=Park%20Mavera%202%2C%20Gazi%20Ya%C5%9Fargil%20Cd%2C%20Kayaba%C5%9F%C4%B1%2C%20Ba%C5%9Fak%C5%9Fehir%2C%20%C4%B0stanbul&output=embed",
};

/* Fleet — Al Sultan's real fleet (one clean photo per car).
   fuel: gasoline | diesel | hybrid · trans: automatic · cat: economy | sedan | suv
   photos: number of real photos in img/cars/<id>/<id>-N.jpg · hero: card image index */
const CARS = [
  { id: "nissan-xtrail",   brand: "Nissan",     model: "X-Trail",     cat: "suv",     fuel: "diesel",   seats: 5, trans: "automatic", photos: 1, hero: 1 },
  { id: "nissan-qashqai",  brand: "Nissan",     model: "Qashqai",     cat: "suv",     fuel: "diesel",   seats: 5, trans: "automatic", photos: 1, hero: 1 },
  { id: "renault-kadjar",  brand: "Renault",    model: "Kadjar",      cat: "suv",     fuel: "diesel",   seats: 5, trans: "automatic", photos: 1, hero: 1 },
  { id: "renault-captur",  brand: "Renault",    model: "Captur",      cat: "suv",     fuel: "gasoline", seats: 5, trans: "automatic", photos: 1, hero: 1 },

  { id: "vw-passat",       brand: "Volkswagen", model: "Passat",      cat: "sedan",   fuel: "diesel",   seats: 5, trans: "automatic", photos: 1, hero: 1 },
  { id: "vw-jetta",        brand: "Volkswagen", model: "Jetta",       cat: "sedan",   fuel: "gasoline", seats: 5, trans: "automatic", photos: 1, hero: 1 },
  { id: "toyota-corolla",  brand: "Toyota",     model: "Corolla",     cat: "sedan",   fuel: "hybrid",   seats: 5, trans: "automatic", photos: 1, hero: 1 },
  { id: "honda-civic",     brand: "Honda",      model: "Civic",       cat: "sedan",   fuel: "gasoline", seats: 5, trans: "automatic", photos: 1, hero: 1 },
  { id: "renault-megane",  brand: "Renault",    model: "Megane",      cat: "sedan",   fuel: "diesel",   seats: 5, trans: "automatic", photos: 1, hero: 1 },
  { id: "kia-cerato",      brand: "Kia",        model: "Cerato",      cat: "sedan",   fuel: "gasoline", seats: 5, trans: "automatic", photos: 1, hero: 1 },
  { id: "hyundai-elantra", brand: "Hyundai",    model: "Elantra",     cat: "sedan",   fuel: "gasoline", seats: 5, trans: "automatic", photos: 1, hero: 1 },

  { id: "hyundai-accent",  brand: "Hyundai",    model: "Accent Blue", cat: "economy", fuel: "diesel",   seats: 5, trans: "automatic", photos: 1, hero: 1 },
  { id: "fiat-egea",       brand: "Fiat",       model: "Egea",        cat: "economy", fuel: "diesel",   seats: 5, trans: "automatic", photos: 1, hero: 1 },
  { id: "renault-clio",    brand: "Renault",    model: "Clio",        cat: "economy", fuel: "diesel",   seats: 5, trans: "automatic", photos: 1, hero: 1 },
  { id: "hyundai-i30",     brand: "Hyundai",    model: "i30",         cat: "economy", fuel: "gasoline", seats: 5, trans: "automatic", photos: 1, hero: 1 },
  { id: "kia-picanto",     brand: "Kia",        model: "Picanto",     cat: "economy", fuel: "gasoline", seats: 4, trans: "automatic", photos: 1, hero: 1 },
];

/* ----------------------------------------------------------------------------
   Translations (Turkish / English / Arabic)
   -------------------------------------------------------------------------- */
const I18N = {
  tr: {
    dir: "ltr", langName: "Türkçe",
    "nav.fleet": "Araç Filosu", "nav.services": "Hizmetler", "nav.why": "Neden Biz",
    "nav.how": "Nasıl Çalışır", "nav.faq": "S.S.S", "nav.contact": "İletişim",
    "cta.whatsapp": "WhatsApp", "cta.book": "WhatsApp'tan Kirala", "cta.quote": "Fiyat Teklifi Al",
    "hero.kicker": "İstanbul · Başakşehir",
    "hero.title": "Nereye giderseniz gidin, yanınızdayız",
    "hero.sub": "Al Sultan Rent a Car ile İstanbul'da konforlu, güvenli ve uygun araç kiralama. 7/24 WhatsApp desteği, havalimanı teslimatı ve geniş araç filosu.",
    "hero.viewFleet": "Filoyu Gör", "hero.callUs": "Hemen Ara",
    "trust.support": "7/24 WhatsApp Desteği", "trust.airport": "Havalimanı Teslimatı",
    "trust.insured": "Tam Sigortalı Araçlar", "trust.delivery": "İstanbul İçi Teslimat",
    "fleet.title": "Araç Filomuz", "fleet.sub": "Ekonomik hatchback'lerden 7 kişilik SUV'lara kadar her ihtiyaca uygun araçlar.",
    "filter.all": "Tümü", "filter.economy": "Ekonomik", "filter.sedan": "Sedan", "filter.suv": "SUV",
    "spec.seats": "Koltuk", "spec.trans": "Vites", "spec.fuel": "Yakıt",
    "fuel.gasoline": "Benzin", "fuel.diesel": "Dizel", "fuel.hybrid": "Hibrit", "trans.automatic": "Otomatik",
    "card.price": "WhatsApp'tan fiyat al", "card.gallery": "Fotoğraflar",
    "card.book": "Kirala", "card.photos": "fotoğraf", "card.details": "Detaylar",
    "detail.spec": "Özellikler", "detail.feat": "Donanım", "detail.book": "Bu aracı WhatsApp'tan kirala",
    "feat.ac": "Klima", "feat.bt": "Bluetooth", "feat.insurance": "Tam Sigorta", "feat.delivery": "Ücretsiz Teslimat",
    "spec.category": "Sınıf",
    "desc.economy": "Şehir içi sürüş ve kolay park için ideal, ekonomik ve pratik bir araç.",
    "desc.sedan": "İş seyahatleri ve aile yolculukları için konforlu ve ferah bir sedan.",
    "desc.suv": "Geniş iç hacmiyle kalabalık, bagaj ve uzun yolculuklar için ideal bir SUV.",
    "services.title": "Hizmetlerimiz", "services.sub": "Kiralamadan fazlası.",
    "svc.airport.t": "Havalimanı Teslimatı", "svc.airport.d": "İstanbul (IST) ve Sabiha Gökçen (SAW) havalimanlarına araç teslim ve karşılama.",
    "svc.longterm.t": "Uzun Dönem Kiralama", "svc.longterm.d": "Haftalık ve aylık avantajlı kiralama seçenekleri.",
    "svc.delivery.t": "Adrese Teslim", "svc.delivery.d": "İstanbul içinde bulunduğunuz yere ücretsiz araç teslimatı.",
    "svc.support.t": "7/24 Destek", "svc.support.d": "Kiralama süresince WhatsApp üzerinden kesintisiz destek.",
    "why.title": "Neden Al Sultan Rent a Car?", "why.sub": "Güveninizi kazanmak için çalışıyoruz.",
    "why.1.t": "Şeffaf Fiyatlar", "why.1.d": "Gizli ücret yok — net ve dürüst fiyatlandırma.",
    "why.2.t": "Bakımlı & Yeni Araçlar", "why.2.d": "Temiz, bakımlı ve güncel model araç filosu.",
    "why.3.t": "Hızlı Yanıt", "why.3.d": "WhatsApp üzerinden dakikalar içinde dönüş.",
    "why.4.t": "Çok Dilli Hizmet", "why.4.d": "Türkçe, İngilizce ve Arapça destek.",
    "how.title": "Nasıl Çalışır?", "how.sub": "Üç basit adımda yola çıkın.",
    "how.1.t": "Aracınızı Seçin", "how.1.d": "Filomuzdan ihtiyacınıza uygun aracı belirleyin.",
    "how.2.t": "WhatsApp'tan Yazın", "how.2.d": "Tarih ve detayları iletin, fiyat teklifinizi anında alın.",
    "how.3.t": "Yola Çıkın", "how.3.d": "Aracınızı teslim alın veya adresinize getirelim.",
    "faq.title": "Sıkça Sorulan Sorular",
    "faq.1.q": "Araç kiralamak için hangi belgeler gerekli?",
    "faq.1.a": "Geçerli bir sürücü belgesi, kimlik/pasaport ve kredi kartı yeterlidir. Yabancı misafirlerimiz pasaport ve ehliyetleri ile kiralama yapabilir.",
    "faq.2.q": "Minimum yaş sınırı nedir?",
    "faq.2.a": "Genellikle 21 yaş ve en az 1 yıllık sürücü belgesi gereklidir. Detaylar için WhatsApp'tan bize ulaşın.",
    "faq.3.q": "Havalimanına araç teslimi yapıyor musunuz?",
    "faq.3.a": "Evet. İstanbul Havalimanı (IST) ve Sabiha Gökçen (SAW) dahil İstanbul'un her yerine teslimat yapıyoruz.",
    "faq.4.q": "Depozito alıyor musunuz?",
    "faq.4.a": "Araç sınıfına göre değişen iade edilebilir bir depozito uygulanabilir. Net bilgi için WhatsApp'tan yazın.",
    "faq.5.q": "Fiyatları nasıl öğrenebilirim?",
    "faq.5.a": "İstediğiniz aracın altındaki 'Kirala' butonuna basın; tarihlerinizi yazın, size en uygun fiyatı WhatsApp'tan iletelim.",
    "contact.title": "İletişim", "contact.sub": "Bize ulaşın, en kısa sürede dönüş yapalım.",
    "contact.address": "Adres", "contact.hours": "Çalışma Saatleri", "contact.hoursVal": "Her gün 10:00'dan itibaren · 7/24 WhatsApp",
    "contact.phone": "Telefon / WhatsApp", "contact.email": "E-posta",
    "form.title": "Hızlı Teklif İste", "form.name": "Adınız", "form.phone": "Telefon",
    "form.car": "Araç", "form.car.any": "Farketmez / Önerin", "form.pickup": "Alış Tarihi", "form.dropoff": "İade Tarihi",
    "form.note": "Not (opsiyonel)", "form.send": "WhatsApp'tan Gönder", "form.anycar": "Herhangi bir araç",
    "wa.greet": "Merhaba Al Sultan Rent a Car 👋, araç kiralamak istiyorum.",
    "wa.carMsg": "Merhaba Al Sultan Rent a Car 👋, {car} kiralamak istiyorum. Müsait mi ve fiyatı nedir?",
    "wa.formMsg": "Merhaba Al Sultan Rent a Car 👋\nİsim: {name}\nTelefon: {phone}\nAraç: {car}\nAlış: {pickup}\nİade: {dropoff}\nNot: {note}",
    "footer.tagline": "İstanbul'da güvenilir araç kiralama.",
    "footer.rights": "Tüm hakları saklıdır.",
    "footer.made": "Klyro tarafından hazırlanmıştır",
  },
  en: {
    dir: "ltr", langName: "English",
    "nav.fleet": "Fleet", "nav.services": "Services", "nav.why": "Why Us",
    "nav.how": "How It Works", "nav.faq": "FAQ", "nav.contact": "Contact",
    "cta.whatsapp": "WhatsApp", "cta.book": "Book on WhatsApp", "cta.quote": "Get a Quote",
    "hero.kicker": "Istanbul · Başakşehir",
    "hero.title": "With you, wherever you are",
    "hero.sub": "Comfortable, safe and affordable car rental across Istanbul with Al Sultan Rent a Car. 24/7 WhatsApp support, airport delivery and a wide fleet.",
    "hero.viewFleet": "View the Fleet", "hero.callUs": "Message Us",
    "trust.support": "24/7 WhatsApp Support", "trust.airport": "Airport Delivery",
    "trust.insured": "Fully Insured Cars", "trust.delivery": "Delivery Across Istanbul",
    "fleet.title": "Our Fleet", "fleet.sub": "From economical hatchbacks to 7-seater SUVs — a car for every need.",
    "filter.all": "All", "filter.economy": "Economy", "filter.sedan": "Sedan", "filter.suv": "SUV",
    "spec.seats": "Seats", "spec.trans": "Gearbox", "spec.fuel": "Fuel",
    "fuel.gasoline": "Petrol", "fuel.diesel": "Diesel", "fuel.hybrid": "Hybrid", "trans.automatic": "Automatic",
    "card.price": "Get price on WhatsApp", "card.gallery": "Photos",
    "card.book": "Book", "card.photos": "photos", "card.details": "Details",
    "detail.spec": "Specifications", "detail.feat": "Features", "detail.book": "Book this car on WhatsApp",
    "feat.ac": "Air Conditioning", "feat.bt": "Bluetooth", "feat.insurance": "Full Insurance", "feat.delivery": "Free Delivery",
    "spec.category": "Class",
    "desc.economy": "Compact and fuel-efficient — perfect for city driving and easy parking.",
    "desc.sedan": "Comfortable and spacious — ideal for business trips and family travel.",
    "desc.suv": "Roomy and commanding — great for groups, luggage and longer journeys.",
    "services.title": "Our Services", "services.sub": "More than just rentals.",
    "svc.airport.t": "Airport Delivery", "svc.airport.d": "Meet & greet and car delivery at Istanbul (IST) and Sabiha Gökçen (SAW) airports.",
    "svc.longterm.t": "Long-Term Rental", "svc.longterm.d": "Discounted weekly and monthly rental options.",
    "svc.delivery.t": "Door Delivery", "svc.delivery.d": "Free car delivery to your location anywhere in Istanbul.",
    "svc.support.t": "24/7 Support", "svc.support.d": "Uninterrupted WhatsApp support throughout your rental.",
    "why.title": "Why Al Sultan Rent a Car?", "why.sub": "We work to earn your trust.",
    "why.1.t": "Transparent Pricing", "why.1.d": "No hidden fees — clear, honest pricing.",
    "why.2.t": "Well-Kept & Newer Cars", "why.2.d": "A clean, maintained, up-to-date fleet.",
    "why.3.t": "Fast Response", "why.3.d": "Replies within minutes over WhatsApp.",
    "why.4.t": "Multilingual Service", "why.4.d": "Support in Turkish, English and Arabic.",
    "how.title": "How It Works", "how.sub": "On the road in three simple steps.",
    "how.1.t": "Choose Your Car", "how.1.d": "Pick the right vehicle from our fleet.",
    "how.2.t": "Message on WhatsApp", "how.2.d": "Send your dates and details, get your quote instantly.",
    "how.3.t": "Hit the Road", "how.3.d": "Collect your car or have it delivered to you.",
    "faq.title": "Frequently Asked Questions",
    "faq.1.q": "What documents do I need to rent a car?",
    "faq.1.a": "A valid driving licence, ID/passport and a credit card. International guests can rent with their passport and licence.",
    "faq.2.q": "What is the minimum age?",
    "faq.2.a": "Generally 21 years old with at least 1 year of driving experience. Message us on WhatsApp for details.",
    "faq.3.q": "Do you deliver to the airport?",
    "faq.3.a": "Yes. We deliver anywhere in Istanbul, including Istanbul Airport (IST) and Sabiha Gökçen (SAW).",
    "faq.4.q": "Is a deposit required?",
    "faq.4.a": "A refundable deposit may apply depending on the vehicle class. Message us on WhatsApp for exact details.",
    "faq.5.q": "How do I find out prices?",
    "faq.5.a": "Tap 'Book' on any car, send us your dates, and we'll reply with the best price on WhatsApp.",
    "contact.title": "Contact", "contact.sub": "Reach out and we'll get back to you quickly.",
    "contact.address": "Address", "contact.hours": "Opening Hours", "contact.hoursVal": "Daily from 10:00 · 24/7 on WhatsApp",
    "contact.phone": "Phone / WhatsApp", "contact.email": "Email",
    "form.title": "Request a Quick Quote", "form.name": "Your name", "form.phone": "Phone",
    "form.car": "Car", "form.car.any": "Any / Recommend one", "form.pickup": "Pick-up date", "form.dropoff": "Drop-off date",
    "form.note": "Note (optional)", "form.send": "Send on WhatsApp", "form.anycar": "Any car",
    "wa.greet": "Hello Al Sultan Rent a Car 👋, I'd like to rent a car.",
    "wa.carMsg": "Hello Al Sultan Rent a Car 👋, I'd like to rent the {car}. Is it available and what's the price?",
    "wa.formMsg": "Hello Al Sultan Rent a Car 👋\nName: {name}\nPhone: {phone}\nCar: {car}\nPick-up: {pickup}\nDrop-off: {dropoff}\nNote: {note}",
    "footer.tagline": "Trusted car rental in Istanbul.",
    "footer.rights": "All rights reserved.",
    "footer.made": "Made by Klyro",
  },
  ar: {
    dir: "rtl", langName: "العربية",
    "nav.fleet": "الأسطول", "nav.services": "الخدمات", "nav.why": "لماذا نحن",
    "nav.how": "كيف يعمل", "nav.faq": "الأسئلة", "nav.contact": "تواصل",
    "cta.whatsapp": "واتساب", "cta.book": "احجز عبر واتساب", "cta.quote": "اطلب عرض سعر",
    "hero.kicker": "إسطنبول · باشاك شهير",
    "hero.title": "معك أينما كنت",
    "hero.sub": "تأجير سيارات مريح وآمن وبأسعار مناسبة في إسطنبول مع Al Sultan Rent a Car. دعم على مدار الساعة عبر واتساب، توصيل للمطار وأسطول واسع.",
    "hero.viewFleet": "تصفّح الأسطول", "hero.callUs": "راسلنا",
    "trust.support": "دعم واتساب 24/7", "trust.airport": "توصيل للمطار",
    "trust.insured": "سيارات مؤمّنة بالكامل", "trust.delivery": "توصيل داخل إسطنبول",
    "fleet.title": "أسطول سياراتنا", "fleet.sub": "من السيارات الاقتصادية إلى سيارات الدفع الرباعي بسبعة مقاعد — سيارة لكل احتياج.",
    "filter.all": "الكل", "filter.economy": "اقتصادية", "filter.sedan": "سيدان", "filter.suv": "دفع رباعي",
    "spec.seats": "مقاعد", "spec.trans": "ناقل الحركة", "spec.fuel": "الوقود",
    "fuel.gasoline": "بنزين", "fuel.diesel": "ديزل", "fuel.hybrid": "هجين", "trans.automatic": "أوتوماتيك",
    "card.price": "اعرف السعر عبر واتساب", "card.gallery": "الصور",
    "card.book": "احجز", "card.photos": "صور", "card.details": "التفاصيل",
    "detail.spec": "المواصفات", "detail.feat": "المميزات", "detail.book": "احجز هذه السيارة عبر واتساب",
    "feat.ac": "تكييف", "feat.bt": "بلوتوث", "feat.insurance": "تأمين شامل", "feat.delivery": "توصيل مجاني",
    "spec.category": "الفئة",
    "desc.economy": "سيارة اقتصادية ومدمجة — مثالية للقيادة داخل المدينة وسهولة الركن.",
    "desc.sedan": "مريحة وواسعة — مثالية لرحلات العمل والعائلة.",
    "desc.suv": "رحبة وقوية — رائعة للمجموعات والأمتعة والرحلات الطويلة.",
    "services.title": "خدماتنا", "services.sub": "أكثر من مجرد تأجير.",
    "svc.airport.t": "توصيل للمطار", "svc.airport.d": "استقبال وتسليم السيارة في مطار إسطنبول (IST) ومطار صبيحة كوكجن (SAW).",
    "svc.longterm.t": "تأجير طويل الأمد", "svc.longterm.d": "خيارات تأجير أسبوعية وشهرية بأسعار مميزة.",
    "svc.delivery.t": "توصيل للعنوان", "svc.delivery.d": "توصيل مجاني للسيارة إلى موقعك في أي مكان داخل إسطنبول.",
    "svc.support.t": "دعم 24/7", "svc.support.d": "دعم متواصل عبر واتساب طوال فترة الإيجار.",
    "why.title": "لماذا Al Sultan Rent a Car؟", "why.sub": "نعمل لكسب ثقتك.",
    "why.1.t": "أسعار شفافة", "why.1.d": "بدون رسوم خفية — تسعير واضح وصادق.",
    "why.2.t": "سيارات حديثة ومُعتنى بها", "why.2.d": "أسطول نظيف وحديث ومُصان جيداً.",
    "why.3.t": "ردّ سريع", "why.3.d": "ردود خلال دقائق عبر واتساب.",
    "why.4.t": "خدمة بعدة لغات", "why.4.d": "دعم بالتركية والإنجليزية والعربية.",
    "how.title": "كيف يعمل", "how.sub": "على الطريق في ثلاث خطوات بسيطة.",
    "how.1.t": "اختر سيارتك", "how.1.d": "اختر السيارة المناسبة من أسطولنا.",
    "how.2.t": "راسلنا على واتساب", "how.2.d": "أرسل تواريخك والتفاصيل واحصل على عرض السعر فوراً.",
    "how.3.t": "انطلق", "how.3.d": "استلم سيارتك أو دعنا نوصلها إليك.",
    "faq.title": "الأسئلة الشائعة",
    "faq.1.q": "ما المستندات المطلوبة لتأجير سيارة؟",
    "faq.1.a": "رخصة قيادة سارية، هوية/جواز سفر وبطاقة ائتمان. يمكن لضيوفنا الأجانب الاستئجار بجواز السفر ورخصة القيادة.",
    "faq.2.q": "ما هو الحد الأدنى للعمر؟",
    "faq.2.a": "عادةً 21 عاماً مع خبرة قيادة لا تقل عن سنة. راسلنا على واتساب للتفاصيل.",
    "faq.3.q": "هل توصّلون إلى المطار؟",
    "faq.3.a": "نعم. نوصّل إلى أي مكان في إسطنبول، بما في ذلك مطار إسطنبول (IST) وصبيحة كوكجن (SAW).",
    "faq.4.q": "هل يُطلب تأمين (وديعة)؟",
    "faq.4.a": "قد تُطبّق وديعة قابلة للاسترداد حسب فئة السيارة. راسلنا على واتساب لمعرفة التفاصيل.",
    "faq.5.q": "كيف أعرف الأسعار؟",
    "faq.5.a": "اضغط 'احجز' على أي سيارة، أرسل لنا تواريخك، وسنردّ بأفضل سعر عبر واتساب.",
    "contact.title": "تواصل معنا", "contact.sub": "راسلنا وسنردّ عليك بسرعة.",
    "contact.address": "العنوان", "contact.hours": "ساعات العمل", "contact.hoursVal": "يومياً من 10:00 · واتساب 24/7",
    "contact.phone": "هاتف / واتساب", "contact.email": "البريد الإلكتروني",
    "form.title": "اطلب عرض سعر سريع", "form.name": "اسمك", "form.phone": "الهاتف",
    "form.car": "السيارة", "form.car.any": "أي سيارة / اقترحوا", "form.pickup": "تاريخ الاستلام", "form.dropoff": "تاريخ الإرجاع",
    "form.note": "ملاحظة (اختياري)", "form.send": "أرسل عبر واتساب", "form.anycar": "أي سيارة",
    "wa.greet": "مرحباً Al Sultan Rent a Car 👋، أريد استئجار سيارة.",
    "wa.carMsg": "مرحباً Al Sultan Rent a Car 👋، أريد استئجار {car}. هل هي متاحة وما السعر؟",
    "wa.formMsg": "مرحباً Al Sultan Rent a Car 👋\nالاسم: {name}\nالهاتف: {phone}\nالسيارة: {car}\nالاستلام: {pickup}\nالإرجاع: {dropoff}\nملاحظة: {note}",
    "footer.tagline": "تأجير سيارات موثوق في إسطنبول.",
    "footer.rights": "جميع الحقوق محفوظة.",
    "footer.made": "صُنع بواسطة Klyro",
  },
};

/* ----------------------------------------------------------------------------
   State + helpers
   -------------------------------------------------------------------------- */
let LANG = localStorage.getItem("alsultan-lang") || "ar";
let FILTER = "all";
const t = (key) => (I18N[LANG] && I18N[LANG][key]) || I18N.en[key] || key;
const carName = (c) => `${c.brand} ${c.model}`;
const photoPath = (c, n) => `img/cars/${c.id}/${c.id}-${n}.jpg`;
const heroPath = (c) => photoPath(c, c.hero);

function waLink(text) {
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;
}
function fill(tpl, vars) {
  return tpl.replace(/\{(\w+)\}/g, (_, k) => (vars[k] != null && vars[k] !== "" ? vars[k] : "—"));
}

/* ----------------------------------------------------------------------------
   Rendering
   -------------------------------------------------------------------------- */
function applyI18n() {
  const dict = I18N[LANG];
  document.documentElement.lang = LANG;
  document.documentElement.dir = dict.dir;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.getAttribute("data-i18n"));
  });
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    el.setAttribute("placeholder", t(el.getAttribute("data-i18n-ph")));
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria")));
  });
  // direct-WhatsApp buttons (header + floating) — localized greeting
  document.querySelectorAll("[data-wa-greet]").forEach((el) => {
    el.href = waLink(t("wa.greet"));
  });
  // language button label
  const cur = document.getElementById("langCurrent");
  if (cur) cur.textContent = LANG.toUpperCase();
}

function carCard(c) {
  return `
  <article class="car" data-cat="${c.cat}" data-id="${c.id}" tabindex="0" role="button" aria-label="${carName(c)} — ${t("card.details")}">
    <div class="car__media">
      <img src="${heroPath(c)}" alt="${carName(c)}" loading="lazy" width="800" height="800">
      <span class="car__badge">${t("filter." + c.cat)}</span>
      <span class="car__gallery">
        <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="M4 6h16v12H4zM2 4v16h20V4zm6 7l2.5 3 2-2.5L16 16H6z"/></svg>
        ${c.photos} ${t("card.photos")}
      </span>
    </div>
    <div class="car__body">
      <h3 class="car__name">${carName(c)}</h3>
      <ul class="car__specs">
        <li title="${t("spec.fuel")}"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M3 22V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v18zm2-11h6V4H5zM19 8l-2-2 1-1 4 4v9a2 2 0 0 1-4 0v-5h-1V8z"/></svg>${t("fuel." + c.fuel)}</li>
        <li title="${t("spec.seats")}"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 18v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2h-2v-2a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v2zm8-8a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/></svg>${c.seats}</li>
        <li title="${t("spec.trans")}"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6 4a2 2 0 1 1-1 3.7V11h6V7.7a2 2 0 1 1 2 0V11h2a3 3 0 0 0 3-3V7.7A2 2 0 1 1 20 4a2 2 0 0 1-1 1.7V8a5 5 0 0 1-5 5h-1v3.3a2 2 0 1 1-2 0V13H5V7.7A2 2 0 0 1 6 4"/></svg>${t("trans." + c.trans)}</li>
      </ul>
      <div class="car__foot">
        <span class="car__price">${t("card.price")}</span>
        <a class="btn btn--wa" href="${waLink(fill(t("wa.carMsg"), { car: carName(c) }))}" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2m5.3 13.9c-.2.6-1.3 1.2-1.8 1.2s-1.2.2-3.9-1.2a9 9 0 0 1-3.4-3.5c-.3-.5-1-1.6-1-3s.7-2 1-2.3c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2 0 .4 0 .5l-.4.5c-.2.2-.4.4-.2.7s.7 1.2 1.5 1.9c1 .9 1.8 1.1 2.1 1.3s.5.1.7-.1l.8-1c.2-.3.4-.2.6-.1l1.9.9c.2.1.4.2.4.3z"/></svg>
          ${t("card.book")}
        </a>
      </div>
    </div>
  </article>`;
}

function renderFleet() {
  const grid = document.getElementById("fleetGrid");
  const list = CARS.filter((c) => FILTER === "all" || c.cat === FILTER);
  grid.innerHTML = list.map(carCard).join("");
}

function renderCarSelect() {
  const sel = document.getElementById("formCar");
  if (!sel) return;
  sel.innerHTML =
    `<option value="">${t("form.car.any")}</option>` +
    CARS.map((c) => `<option value="${carName(c)}">${carName(c)}</option>`).join("");
}

/* ----------------------------------------------------------------------------
   Car detail modal (gallery + specs + features + book)
   -------------------------------------------------------------------------- */
let modalCar = null, modalIndex = 1, lightboxOpen = false;
const FEATURES = ["feat.ac", "feat.bt", "feat.insurance", "feat.delivery"];

function renderThumbs(container) {
  container.innerHTML = Array.from({ length: modalCar.photos }, (_, i) =>
    `<button class="gthumb" data-i="${i + 1}"><img src="${photoPath(modalCar, i + 1)}" alt="" loading="lazy"></button>`
  ).join("");
}
// scroll a thumbnail strip HORIZONTALLY only (never the page) to centre the active thumb
function centerActiveThumb(container) {
  if (!container) return;
  const active = container.querySelector(".gthumb.active");
  if (!active) return;
  const c = container.getBoundingClientRect(), th = active.getBoundingClientRect();
  container.scrollBy({ left: (th.left + th.width / 2) - (c.left + c.width / 2), behavior: "smooth" });
}
function paintThumbs(container) {
  if (!container) return;
  container.querySelectorAll(".gthumb").forEach((b) => b.classList.toggle("active", +b.dataset.i === modalIndex));
  centerActiveThumb(container);
}
// reflect the current photo everywhere it is shown (detail modal + lightbox)
function syncPhoto() {
  const cap = `${modalIndex} / ${modalCar.photos}`;
  const cdMain = document.getElementById("cdMain");
  cdMain.src = photoPath(modalCar, modalIndex);
  cdMain.alt = `${carName(modalCar)} — ${modalIndex}`;
  document.getElementById("cdCount").textContent = cap;
  paintThumbs(document.getElementById("cdThumbs"));
  if (lightboxOpen) {
    const lbMain = document.getElementById("lbMain");
    lbMain.src = cdMain.src; lbMain.alt = cdMain.alt;
    document.getElementById("lbCount").textContent = cap;
    paintThumbs(document.getElementById("lbThumbs"));
  }
}
function carStep(d) {
  modalIndex = ((modalIndex - 1 + d + modalCar.photos) % modalCar.photos) + 1;
  syncPhoto();
}

function openCar(id, start = 1) {
  modalCar = CARS.find((c) => c.id === id);
  if (!modalCar) return;
  modalIndex = start;
  const m = document.getElementById("carModal");
  m.querySelector("#cdBadge").textContent = t("filter." + modalCar.cat);
  m.querySelector("#cdTitle").textContent = carName(modalCar);
  m.querySelector("#cdDesc").textContent = t("desc." + modalCar.cat);
  m.querySelector("#cdSpecs").innerHTML = [
    [t("spec.fuel"), t("fuel." + modalCar.fuel)],
    [t("spec.seats"), modalCar.seats],
    [t("spec.trans"), t("trans." + modalCar.trans)],
    [t("spec.category"), t("filter." + modalCar.cat)],
  ].map(([k, v]) => `<li><span>${k}</span><strong>${v}</strong></li>`).join("");
  m.querySelector("#cdFeatures").innerHTML = FEATURES.map(
    (k) => `<li><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="m9.6 16.2-3.8-3.8 1.4-1.4 2.4 2.4 6-6 1.4 1.4z"/></svg>${t(k)}</li>`
  ).join("");
  const book = m.querySelector("#cdBook");
  book.href = waLink(fill(t("wa.carMsg"), { car: carName(modalCar) }));
  book.querySelector("span").textContent = t("detail.book");
  renderThumbs(document.getElementById("cdThumbs"));
  syncPhoto();
  m.classList.add("open");
  const panel = m.querySelector(".cdmodal__panel");
  if (panel) panel.scrollTop = 0;
  document.body.style.overflow = "hidden";
}
function closeCar() {
  closeLightbox();
  document.getElementById("carModal").classList.remove("open");
  document.body.style.overflow = "";
}

/* fullscreen photo-only lightbox (opens when the main image is clicked) */
function openLightbox() {
  if (!modalCar) return;
  lightboxOpen = true;
  renderThumbs(document.getElementById("lbThumbs"));
  document.getElementById("lightbox").classList.add("open");
  syncPhoto();
}
function closeLightbox() {
  lightboxOpen = false;
  document.getElementById("lightbox").classList.remove("open");
}

/* ----------------------------------------------------------------------------
   Events + init
   -------------------------------------------------------------------------- */
function setLang(lang) {
  LANG = lang;
  localStorage.setItem("alsultan-lang", lang);
  applyI18n();
  renderFleet();
  renderCarSelect();
  document.getElementById("langMenu").classList.remove("open");
  if (modalCar && document.getElementById("carModal").classList.contains("open")) openCar(modalCar.id, modalIndex);
}

function init() {
  applyI18n();
  renderFleet();
  renderCarSelect();

  // language switcher
  const langBtn = document.getElementById("langBtn");
  const langMenu = document.getElementById("langMenu");
  langBtn.addEventListener("click", (e) => { e.stopPropagation(); langMenu.classList.toggle("open"); });
  document.addEventListener("click", () => langMenu.classList.remove("open"));
  langMenu.querySelectorAll("[data-lang]").forEach((b) =>
    b.addEventListener("click", () => setLang(b.dataset.lang))
  );

  // filters
  document.getElementById("filters").addEventListener("click", (e) => {
    const b = e.target.closest("[data-filter]");
    if (!b) return;
    FILTER = b.dataset.filter;
    document.querySelectorAll("#filters [data-filter]").forEach((x) => x.classList.toggle("active", x === b));
    renderFleet();
  });

  // car detail modal (event delegation)
  const grid = document.getElementById("fleetGrid");
  grid.addEventListener("click", (e) => {
    if (e.target.closest("a.btn--wa")) return; // Book link goes straight to WhatsApp
    const card = e.target.closest(".car");
    if (card) openCar(card.dataset.id);
  });
  grid.addEventListener("keydown", (e) => {
    const card = e.target.closest(".car");
    if (card && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); openCar(card.dataset.id); }
  });
  const cm = document.getElementById("carModal");
  cm.addEventListener("click", (e) => {
    if (e.target.closest("[data-close]") || e.target === cm) return closeCar();
    if (e.target.id === "cdMain") return openLightbox();          // tap photo -> fullscreen
    const tb = e.target.closest(".gthumb");
    if (tb) { modalIndex = +tb.dataset.i; syncPhoto(); return; }
    if (e.target.closest("[data-prev]")) carStep(-1);
    if (e.target.closest("[data-next]")) carStep(1);
  });
  const lb = document.getElementById("lightbox");
  lb.addEventListener("click", (e) => {
    if (e.target.closest("[data-lbclose]")) return closeLightbox();
    if (e.target.closest("[data-prev]")) return carStep(-1);
    if (e.target.closest("[data-next]")) return carStep(1);
    const tb = e.target.closest(".gthumb");
    if (tb) { modalIndex = +tb.dataset.i; syncPhoto(); return; }
    // tap on the empty backdrop / letterbox closes (but not the photo itself)
    if (e.target === lb || e.target.classList.contains("lightbox__stage")) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (lightboxOpen) {
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowRight") carStep(1);
      else if (e.key === "ArrowLeft") carStep(-1);
      return;
    }
    if (!cm.classList.contains("open")) return;
    if (e.key === "Escape") closeCar();
    if (e.key === "ArrowRight") carStep(1);
    if (e.key === "ArrowLeft") carStep(-1);
  });

  // quote form -> WhatsApp
  document.getElementById("quoteForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const f = e.target;
    const msg = fill(t("wa.formMsg"), {
      name: f.name.value, phone: f.phone.value,
      car: f.car.value || t("form.anycar"),
      pickup: f.pickup.value, dropoff: f.dropoff.value, note: f.note.value,
    });
    window.open(waLink(msg), "_blank", "noopener");
  });

  // mobile nav
  const burger = document.getElementById("burger");
  const nav = document.getElementById("siteNav");
  burger.addEventListener("click", () => nav.classList.toggle("open"));
  nav.addEventListener("click", (e) => { if (e.target.closest("a")) nav.classList.remove("open"); });

  // header shadow + reveal on scroll
  const header = document.getElementById("siteHeader");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
  onScroll(); window.addEventListener("scroll", onScroll, { passive: true });

  // threshold 0 (+ small rootMargin) so even very tall elements (e.g. the full
  // single-column fleet grid on mobile) reveal — a % threshold can be impossible
  // to meet when the element is taller than the viewport.
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0, rootMargin: "0px 0px -40px 0px" });
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    // safety net: never leave content hidden if something prevents the observer firing
    setTimeout(() => document.querySelectorAll(".reveal:not(.in)").forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add("in");
    }), 1500);
  } else {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
  }

  // year
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", init);
