/* ASFALT — product catalogue (demo data, images © Sixth June — portfolio use only) */
const CATS = {
  hoods:   { en: "Hoods & Crews", tr: "Hoodie & Sweat", ar: "هوديز وسويتشيرت" },
  tees:    { en: "Tees",          tr: "Tişörtler",      ar: "تيشيرتات" },
  jackets: { en: "Jackets",       tr: "Ceketler",       ar: "جاكيتات" },
  pants:   { en: "Pants & Denim", tr: "Pantolon & Denim", ar: "بناطيل ودنيم" },
  accs:    { en: "Accessories",   tr: "Aksesuar",       ar: "إكسسوارات" }
};

const PRODUCTS = [
  {
    id: "p01", cat: "hoods", price: 3150, sizes: ["XS","S","M","L","XL","XXL"], imgs: 4, tag: "drop",
    name: { en: "STARFALL Hoodie", tr: "STARFALL Hoodie", ar: "هودي STARFALL" },
    desc: {
      en: "Heavyweight fleece with an all-over night-sky print. Boxy cut, dropped shoulders, zero apologies.",
      tr: "Gece gökyüzü baskılı ağır gramaj polar. Bol kalıp, düşük omuz, özür yok.",
      ar: "فليس ثقيل بطبعة سماء الليل الكاملة. قصّة واسعة وأكتاف ساقطة — بلا اعتذار."
    }
  },
  {
    id: "p02", cat: "hoods", price: 3150, sizes: ["S","M","L","XL"], imgs: 4,
    name: { en: "DAYDREAM Hoodie", tr: "DAYDREAM Hoodie", ar: "هودي DAYDREAM" },
    desc: {
      en: "Front and back dream-print graphics on brushed 420gsm cotton. Built for headphone hours.",
      tr: "420 gr şardonlu pamuk üzerine ön-arka rüya baskısı. Kulaklıklı saatler için üretildi.",
      ar: "طبعات حالمة أمامية وخلفية على قطن مصقول 420 غم. صُنع لساعات السمّاعات الطويلة."
    }
  },
  {
    id: "p03", cat: "hoods", price: 3150, sizes: ["XS","S","M","L","XL"], imgs: 4,
    name: { en: "COASTLINE Back-Print Hoodie", tr: "COASTLINE Sırt Baskılı Hoodie", ar: "هودي COASTLINE بطبعة خلفية" },
    desc: {
      en: "Oversized hood, kangaroo pocket, full-back coastline graphic. The city ends where you say it does.",
      tr: "Oversize kapüşon, kanguru cebi, sırtta boydan boya sahil grafiği. Şehir sen nerede dersen orada biter.",
      ar: "قبعة واسعة وجيب أمامي وغرافيك ساحلي يغطي الظهر كاملاً. المدينة تنتهي حيث تقرر أنت."
    }
  },
  {
    id: "p04", cat: "hoods", price: 3600, sizes: ["S","M","L","XL"], imgs: 4, tag: "drop",
    name: { en: "HEARTLINE Zip Hoodie", tr: "HEARTLINE Fermuarlı Hoodie", ar: "هودي HEARTLINE بسحّاب" },
    desc: {
      en: "Full-zip with tonal heart embroidery at the chest. Soft inside, concrete outside.",
      tr: "Göğüste ton sür ton kalp nakışlı full fermuar. İçi yumuşak, dışı beton.",
      ar: "سحّاب كامل مع تطريز قلب بدرجة اللون على الصدر. ناعم من الداخل، إسمنت من الخارج."
    }
  },
  {
    id: "p05", cat: "hoods", price: 3150, sizes: ["S","M","L","XL"], imgs: 4,
    name: { en: "HEARTLINE Crewneck", tr: "HEARTLINE Bisiklet Yaka Sweat", ar: "سويتشيرت HEARTLINE" },
    desc: {
      en: "Clean crewneck, embroidered heart, ribbed everything. The quiet piece in a loud wardrobe.",
      tr: "Temiz bisiklet yaka, nakış kalp, ribana biyeler. Gürültülü bir gardırobun sessiz parçası.",
      ar: "ياقة دائرية نظيفة وقلب مطرّز وحواف مضلّعة. القطعة الهادئة في خزانة صاخبة."
    }
  },
  {
    id: "p06", cat: "hoods", price: 3150, sizes: ["S","M","L","XL"], imgs: 4,
    name: { en: "HEARTLINE Hoodie", tr: "HEARTLINE Hoodie", ar: "هودي HEARTLINE" },
    desc: {
      en: "The classic ASFALT silhouette with heart embroidery. One hoodie to outlive ten seasons.",
      tr: "Kalp nakışlı klasik ASFALT silüeti. On sezonu eskitecek tek hoodie.",
      ar: "قصّة أسفلت الكلاسيكية مع تطريز القلب. هودي واحد يعمّر عشرة مواسم."
    }
  },
  {
    id: "p07", cat: "tees", price: 2250, sizes: ["S","M","L","XL"], imgs: 4, tag: "last",
    name: { en: "TERRACE 90 Jersey Tee", tr: "TERRACE 90 Forma Tişört", ar: "تيشيرت TERRACE 90" },
    desc: {
      en: "Vintage football jersey energy — mesh-touch fabric, retro numbering, terrace attitude.",
      tr: "Vintage futbol forması enerjisi — file dokulu kumaş, retro numara, tribün duruşu.",
      ar: "طاقة قميص كرة القدم القديم — قماش شبكي وأرقام ريترو وروح المدرجات."
    }
  },
  {
    id: "p08", cat: "tees", price: 1500, sizes: ["XS","S","M","L","XL"], imgs: 4,
    name: { en: "MACHINE Tee", tr: "MACHINE Tişört", ar: "تيشيرت MACHINE" },
    desc: {
      en: "Robot graphic front print on heavy cotton. For the ones who refuse to become one.",
      tr: "Ağır pamuk üzerine robot baskı. Robotlaşmayı reddedenler için.",
      ar: "طبعة روبوت أمامية على قطن ثقيل. لمن يرفضون أن يصبحوا واحداً منها."
    }
  },
  {
    id: "p09", cat: "tees", price: 1250, sizes: ["XS","S","M","L","XL","XXL"], imgs: 4,
    name: { en: "STAMP Logo Tee", tr: "STAMP Logo Tişört", ar: "تيشيرت STAMP" },
    desc: {
      en: "Soft-washed cotton with tonal logo embroidery. The everyday unit of the uniform.",
      tr: "Ton sür ton logo nakışlı soft yıkamalı pamuk. Üniformanın günlük birimi.",
      ar: "قطن بغسلة ناعمة وتطريز شعار بدرجة اللون. القطعة اليومية من الزيّ."
    }
  },
  {
    id: "p10", cat: "tees", price: 2250, sizes: ["S","M","L","XL"], imgs: 4, tag: "drop",
    name: { en: "SCRIPT Heavy Tee", tr: "SCRIPT Heavy Tişört", ar: "تيشيرت SCRIPT الثقيل" },
    desc: {
      en: "Textured calligraphy logo on 280gsm carded cotton. Letters you can feel.",
      tr: "280 gr penye üzerinde dokulu kaligrafi logo. Dokunabildiğin harfler.",
      ar: "شعار خطّي بارز على قطن 280 غم. حروف تلمسها بيدك."
    }
  },
  {
    id: "p11", cat: "tees", price: 2000, sizes: ["S","M","L","XL"], imgs: 4,
    name: { en: "TROPIC STATIC Tee", tr: "TROPIC STATIC Tişört", ar: "تيشيرت TROPIC STATIC" },
    desc: {
      en: "Caribbean postcard print, oversized fall. Vacation for people who never log off.",
      tr: "Karayip kartpostal baskısı, oversize düşüş. Hiç kapanmayanlar için tatil.",
      ar: "طبعة بطاقة بريدية كاريبية بقصّة واسعة. إجازة لمن لا يسجّلون الخروج أبداً."
    }
  },
  {
    id: "p12", cat: "tees", price: 2000, sizes: ["S","M","L","XL"], imgs: 4,
    name: { en: "POSTCARD Tee", tr: "POSTCARD Tişört", ar: "تيشيرت POSTCARD" },
    desc: {
      en: "Playa Luquillo front graphic. Sun-faded palette on box-fit heavy jersey.",
      tr: "Playa Luquillo ön grafiği. Bol kalıp ağır örme üzerinde güneş solgunu palet.",
      ar: "غرافيك شاطئ لوكيّو الأمامي. ألوان باهتة بالشمس على قماش ثقيل بقصّة مربعة."
    }
  },
  {
    id: "p13", cat: "tees", price: 2000, sizes: ["S","M","L","XL"], imgs: 4,
    name: { en: "SOUL SYSTEM Tee", tr: "SOUL SYSTEM Tişört", ar: "تيشيرت SOUL SYSTEM" },
    desc: {
      en: "Caribbean soul print with back graphic. Loud colors, louder intentions.",
      tr: "Sırt baskılı Caribbean soul grafiği. Yüksek renkler, daha yüksek niyetler.",
      ar: "طبعة روح كاريبية مع غرافيك خلفي. ألوان صاخبة ونوايا أعلى صوتاً."
    }
  },
  {
    id: "p14", cat: "tees", price: 2000, sizes: ["S","M","L","XL"], imgs: 4,
    name: { en: "STREET MARKET Tee", tr: "STREET MARKET Tişört", ar: "تيشيرت STREET MARKET" },
    desc: {
      en: "Fruit-seller graphic — an ode to every corner stall in every city we love.",
      tr: "Manav grafiği — sevdiğimiz her şehrin her köşe tezgâhına bir selam.",
      ar: "غرافيك بائع الفواكه — تحية لكل بسطة زاوية في كل مدينة نحبها."
    }
  },
  {
    id: "p15", cat: "jackets", price: 4500, sizes: ["S","M","L","XL","XXL"], imgs: 4, tag: "drop",
    name: { en: "PANEL Denim Jacket", tr: "PANEL Denim Ceket", ar: "جاكيت PANEL دنيم" },
    desc: {
      en: "Kimono-cut denim with contrast panels. Workwear bones, gallery finish.",
      tr: "Kontrast panelli kimono kesim denim. İşçi ceketi iskeleti, galeri bitişi.",
      ar: "دنيم بقصّة كيمونو وألواح متباينة. هيكل ملابس العمل بلمسة معرض فني."
    }
  },
  {
    id: "p16", cat: "jackets", price: 3600, sizes: ["S","M","L"], imgs: 4, gender: "wom",
    name: { en: "RIGGER Workwear Jacket", tr: "RIGGER Workwear Ceket", ar: "جاكيت RIGGER وركوير" },
    desc: {
      en: "Carabiner-detail utility jacket. Pockets for everything, permission for nothing.",
      tr: "Karabina detaylı utility ceket. Her şey için cep, hiçbir şey için izin.",
      ar: "جاكيت عملي بتفاصيل الكارابينر. جيوب لكل شيء، وإذن لا لشيء."
    }
  },
  {
    id: "p17", cat: "jackets", price: 5050, sizes: ["S","M","L","XL"], imgs: 4,
    name: { en: "OVERSIZE HEART Jacket", tr: "OVERSIZE HEART Ceket", ar: "جاكيت OVERSIZE HEART" },
    desc: {
      en: "Textured jacquard heart across the back. Wear your heart at 200% scale.",
      tr: "Sırtta dokulu jakar kalp. Kalbini %200 ölçekte taşı.",
      ar: "قلب جاكار بارز يغطي الظهر. احمل قلبك بمقياس ٢٠٠٪."
    }
  },
  {
    id: "p18", cat: "jackets", price: 5050, sizes: ["S","M","L","XL"], imgs: 4,
    name: { en: "SPLIT Fabric Jacket", tr: "SPLIT Kumaş Ceket", ar: "جاكيت SPLIT" },
    desc: {
      en: "Two fabrics, one silhouette — nylon meets brushed cotton down the seam.",
      tr: "İki kumaş, tek silüet — dikişte naylon ile şardonlu pamuk buluşuyor.",
      ar: "قماشان في قصّة واحدة — النايلون يلتقي بالقطن المصقول عند الدرزة."
    }
  },
  {
    id: "p19", cat: "jackets", price: 4950, sizes: ["S","M","L"], imgs: 4, gender: "wom", tag: "last",
    name: { en: "RUNWAY Cropped Bomber", tr: "RUNWAY Crop Bomber", ar: "بومبر RUNWAY قصير" },
    desc: {
      en: "Cropped bomber with exaggerated collar. Lands somewhere between airfield and catwalk.",
      tr: "Abartılı yakalı crop bomber. Pist ile podyum arasında bir yere iniyor.",
      ar: "بومبر قصير بياقة مبالغ فيها. يهبط في مكانٍ ما بين المدرج والممشى."
    }
  },
  {
    id: "p20", cat: "pants", price: 3150, sizes: ["S","M","L","XL"], imgs: 4,
    name: { en: "BLOOM Oversized Shorts", tr: "BLOOM Oversize Şort", ar: "شورت BLOOM الواسع" },
    desc: {
      en: "All-over flower print shorts, knee-length, wide fall. Concrete garden uniform.",
      tr: "Komple çiçek baskılı, diz boyu, geniş kesim şort. Beton bahçe üniforması.",
      ar: "شورت بطبعة زهور كاملة بطول الركبة وقصّة واسعة. زيّ حديقة الإسمنت."
    }
  },
  {
    id: "p21", cat: "pants", price: 2000, sizes: ["S","M","L","XL"], imgs: 4,
    name: { en: "CONTRAST Logo Shorts", tr: "CONTRAST Logo Şort", ar: "شورت CONTRAST" },
    desc: {
      en: "Textured logo, contrast waistband, French terry weight that survives the summer.",
      tr: "Dokulu logo, kontrast bel, yazı atlatan iki iplik gramaj.",
      ar: "شعار بارز وحزام متباين وقماش فرنش تيري يصمد طوال الصيف."
    }
  },
  {
    id: "p22", cat: "pants", price: 3150, sizes: ["28","29","30","31","32","33","34","36"], imgs: 4,
    name: { en: "PINSTRIPE Baggy Denim Shorts", tr: "PINSTRIPE Baggy Denim Şort", ar: "شورت دنيم PINSTRIPE واسع" },
    desc: {
      en: "Striped baggy denim shorts, skate-cut. Falls loose, sits right.",
      tr: "Çizgili baggy denim şort, kaykay kesimi. Bol düşer, doğru oturur.",
      ar: "شورت دنيم مقلّم واسع بقصّة السكيت. ينسدل بحرية ويثبت في مكانه."
    }
  },
  {
    id: "p23", cat: "pants", price: 4050, sizes: ["S","M","L","XL"], imgs: 4, tag: "drop",
    name: { en: "CAMO PAISLEY Pants", tr: "CAMO PAISLEY Pantolon", ar: "بنطال CAMO PAISLEY" },
    desc: {
      en: "Camouflage rebuilt from paisley. Blend in nowhere, stand out everywhere.",
      tr: "Şal deseninden yeniden kurulan kamuflaj. Hiçbir yere karışma, her yerde fark edil.",
      ar: "تمويه أُعيد بناؤه من نقشة البيزلي. لا تختفِ في أي مكان، وابرز في كل مكان."
    }
  },
  {
    id: "p24", cat: "pants", price: 3150, sizes: ["28","29","30","31","32","33","34","36"], imgs: 4,
    name: { en: "BALLOON Cargo Denim", tr: "BALLOON Kargo Denim", ar: "دنيم BALLOON كارغو" },
    desc: {
      en: "Balloon-leg denim with 3D pockets. Volume is a design decision.",
      tr: "Üç boyutlu cepli balon paça denim. Hacim bir tasarım kararıdır.",
      ar: "دنيم بساق بالون وجيوب مجسّمة. الحجم قرار تصميمي."
    }
  },
  {
    id: "p25", cat: "pants", price: 4050, sizes: ["28","29","30","31","32","33","34","36"], imgs: 4, tag: "last",
    name: { en: "PATCHWORK Denim", tr: "PATCHWORK Denim", ar: "دنيم PATCHWORK" },
    desc: {
      en: "Multi-wash patchwork denim — every panel a different past life.",
      tr: "Çok yıkamalı patchwork denim — her panel ayrı bir eski hayat.",
      ar: "دنيم مرقّع بغسلات متعددة — كل قطعة منه حياة سابقة مختلفة."
    }
  },
  {
    id: "p26", cat: "accs", price: 1100, sizes: [], imgs: 4,
    name: { en: "SCRIPT Cap", tr: "SCRIPT Şapka", ar: "قبعة SCRIPT" },
    desc: {
      en: "Six-panel cap with calligraphy logo embroidery. Curved brim, adjustable strap.",
      tr: "Kaligrafi logo nakışlı altı panel şapka. Kavisli siper, ayarlanabilir bant.",
      ar: "قبعة سداسية بتطريز الشعار الخطّي. حافة منحنية وحزام قابل للتعديل."
    }
  },
  {
    id: "p27", cat: "accs", price: 650, sizes: ["35/38","39/42","43/46"], imgs: 4,
    name: { en: "CREW SOCKS 3-Pack", tr: "CREW Çorap 3'lü", ar: "جوارب CREW — ٣ أزواج" },
    desc: {
      en: "Three pairs, ribbed crew height, woven logo. The foundation layer.",
      tr: "Üç çift, ribana soket boy, dokuma logo. Temel katman.",
      ar: "ثلاثة أزواج بطول متوسط مضلّع وشعار منسوج. طبقة الأساس."
    }
  },
  {
    id: "p28", cat: "accs", price: 550, sizes: ["35/38","39/42","43/46"], imgs: 4,
    name: { en: "ANKLE SOCKS 3-Pack", tr: "ANKLE Çorap 3'lü", ar: "جوارب ANKLE — ٣ أزواج" },
    desc: {
      en: "Low-cut trio with woven logo. Invisible on the street, obvious in the details.",
      tr: "Dokuma logolu üçlü patik. Sokakta görünmez, detayda belli.",
      ar: "ثلاثي منخفض القصّة بشعار منسوج. غير مرئي في الشارع وواضح في التفاصيل."
    }
  }
];
