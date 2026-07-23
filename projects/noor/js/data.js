/* NOOR — product catalogue (demo data, images © AbayaButh — portfolio use only) */
const PRODUCTS = [
  {
    id: "p01", cat: "embellished", price: 5950, sizes: ["52"], imgs: 4, tag: "limited",
    name: { en: "Lulua Pearl Cape", tr: "Lulua İnci Kap Abaya", ar: "كاب لؤلؤة المرصّع" },
    desc: {
      en: "Hand-set pearls cascade over feather-light chiffon — a cape made for moonlit evenings.",
      tr: "El işçiliği incilerin süslediği tüy hafifliğinde şifon — mehtaplı akşamlar için tasarlandı.",
      ar: "لآلئ مرصّعة يدويًا تنساب على شيفون خفيف كالريشة — كاب صُمم لأمسيات مقمرة."
    }
  },
  {
    id: "p02", cat: "embellished", price: 5400, sizes: ["54","56","58","60","62"], imgs: 4, tag: "limited",
    name: { en: "Sadaf Mist Cape", tr: "Sadaf Sis Kap Abaya", ar: "كاب صدف الضباب" },
    desc: {
      en: "A pearl-mist veil of embellishment over flowing silk-touch fabric, finished with a matching hijab.",
      tr: "Akışkan ipek dokulu kumaş üzerinde inci sisi işlemeler, takım eşarbıyla tamamlanır.",
      ar: "غلالة من ضباب اللؤلؤ فوق قماش انسيابي بلمسة الحرير، مع حجاب مطابق."
    }
  },
  {
    id: "p03", cat: "embellished", price: 5150, sizes: ["56","58","60","62"], imgs: 4, tag: "limited",
    name: { en: "Safir Noir Cape", tr: "Safir Noir Kap Abaya", ar: "كاب سفير الليل" },
    desc: {
      en: "Deep sapphire teal, midnight embellishment — drama measured in shimmer.",
      tr: "Derin safir yeşili, gece yakut işlemeler — ışıltıyla ölçülen bir zarafet.",
      ar: "أزرق ياقوتي عميق وتطريز ليلي — فخامة تُقاس بالبريق."
    }
  },
  {
    id: "p04", cat: "embellished", price: 5150, sizes: ["52","54","56","58","60","62"], imgs: 4, tag: "limited",
    name: { en: "Asala Sapphire Cape", tr: "Asala Safir Kap Abaya", ar: "كاب أصالة الياقوت" },
    desc: {
      en: "A legacy piece: dense hand embellishment on sapphire, cut to sweep the floor.",
      tr: "Bir miras parçası: safir üzerine yoğun el işlemesi, zemine süzülen kesim.",
      ar: "قطعة إرث: تطريز يدوي كثيف على الياقوتي، بقصّة تنساب حتى الأرض."
    }
  },
  {
    id: "p05", cat: "embellished", price: 4850, sizes: ["52","54","56","58","60","62"], imgs: 4, tag: "limited",
    name: { en: "Malika Ruby Cape", tr: "Malika Yakut Kap Abaya", ar: "كاب ملكة الياقوت" },
    desc: {
      en: "Empress energy in deep ruby — regal embellishment tracing the shoulders and hem.",
      tr: "Derin yakut kırmızısında imparatoriçe duruşu — omuzları ve etekleri saran asil işlemeler.",
      ar: "حضور ملكي بلون الياقوت الأحمر — تطريز فاخر يرسم الكتفين والأطراف."
    }
  },
  {
    id: "p06", cat: "embellished", price: 4850, sizes: ["52","54","56","58","60","62"], imgs: 4, tag: "limited",
    name: { en: "Zumurrud Cape", tr: "Zümrüt Kap Abaya", ar: "كاب الزمرّد" },
    desc: {
      en: "Emerald depths, golden light — the signature NOOR cape in its richest colourway.",
      tr: "Zümrüt derinliği, altın ışıltı — NOOR imza kapının en zengin rengi.",
      ar: "أعماق الزمرّد وضوء الذهب — كاب نور الموقّع بأغنى ألوانه."
    }
  },
  {
    id: "p07", cat: "embellished", price: 3500, sizes: ["52","54","56","58","60","62"], imgs: 4,
    name: { en: "Hams Organza Cape", tr: "Hams Organze Kap Abaya", ar: "كاب همس الأورجانزا" },
    desc: {
      en: "A whisper of pearl organza with hand-knotted tassels that move as you do.",
      tr: "İnci organzenin fısıltısı, her adımda salınan el düğümlü püsküller.",
      ar: "همسة من الأورجانزا اللؤلؤي مع شراشيب معقودة يدويًا تتمايل مع خطاك."
    }
  },
  {
    id: "p08", cat: "embellished", price: 3500, sizes: ["52","54","56","58","60","62","64"], imgs: 4,
    name: { en: "Qamar Organza Cape", tr: "Kamer Organze Kap Abaya", ar: "كاب قمر الأورجانزا" },
    desc: {
      en: "Moonstruck silk organza, embellished to catch every glance of light.",
      tr: "Ay ışığına vurulmuş ipek organze, her ışık huzmesini yakalayan işlemeler.",
      ar: "أورجانزا حريرية مسحورة بالقمر، مطرزة لتلتقط كل لمحة ضوء."
    }
  },
  {
    id: "p09", cat: "open", price: 2450, sizes: ["54"], imgs: 4,
    name: { en: "Zaytun Lace Abaya", tr: "Zeytun Dantel Abaya", ar: "عباية زيتون الدانتيل" },
    desc: {
      en: "Olive dusk traced in lace — quiet opulence for the everyday.",
      tr: "Dantelle çizilmiş zeytin alacakaranlığı — gündelik sessiz bir lüks.",
      ar: "غسق زيتوني مرسوم بالدانتيل — فخامة هادئة لكل يوم."
    }
  },
  {
    id: "p10", cat: "open", price: 3500, sizes: ["52","54","56","58","60","62"], imgs: 4, tag: "limited",
    name: { en: "Layl Muse Abaya", tr: "Leyl Muse Abaya", ar: "عباية ملهمة الليل" },
    desc: {
      en: "Midnight muse: fluid black layers with a glint of gold at the cuff.",
      tr: "Gece yarısı ilhamı: bileklerde altın parıltılı akışkan siyah katmanlar.",
      ar: "ملهمة منتصف الليل: طبقات سوداء انسيابية مع لمعة ذهب عند الأساور."
    }
  },
  {
    id: "p11", cat: "open", price: 2450, sizes: ["52","54","56","58","60","62"], imgs: 4,
    name: { en: "Maiya Aqua Abaya", tr: "Maiya Aqua Abaya", ar: "عباية مياه الفيروز" },
    desc: {
      en: "Aqua bloom chiffon that moves like water — light, cool, effortless.",
      tr: "Su gibi akan aqua şifon — hafif, serin, zahmetsiz.",
      ar: "شيفون فيروزي يتحرك كالماء — خفيف ومنعش وسلس."
    }
  },
  {
    id: "p12", cat: "open", price: 2850, sizes: ["52","54","56","58","60","62"], imgs: 4,
    name: { en: "Amira Mauve Abaya", tr: "Amira Leylak Abaya", ar: "عباية أميرة الموف" },
    desc: {
      en: "Majestic textured mauve with a sculpted drape — softness with structure.",
      tr: "Heykelsi dökümlü dokulu leylak — yapıyla buluşan yumuşaklık.",
      ar: "موف محبوك بملمس فاخر وانسدال منحوت — نعومة ببنية راقية."
    }
  },
  {
    id: "p13", cat: "open", price: 2150, sizes: ["52","54","56","58","60","62"], imgs: 4,
    name: { en: "Ward Sage Abaya", tr: "Ward Adaçayı Abaya", ar: "عباية ورد الميرمية" },
    desc: {
      en: "Rosefall embellishment on sage green — a garden at golden hour.",
      tr: "Adaçayı yeşili üzerine gül işlemeleri — altın saatte bir bahçe.",
      ar: "تطريز ورود متساقطة على أخضر الميرمية — حديقة في الساعة الذهبية."
    }
  },
  {
    id: "p14", cat: "open", price: 2150, sizes: ["52","54","56","58","60","62"], imgs: 4,
    name: { en: "Riwa Plum Abaya", tr: "Riwa Mürdüm Abaya", ar: "عباية روى البرقوقية" },
    desc: {
      en: "Midnight plum luxe crepe — deep colour, clean lines, zero effort.",
      tr: "Gece mürdümü lüks krep — derin renk, temiz çizgiler, zahmetsiz duruş.",
      ar: "كريب فاخر بلون البرقوق الليلي — لون عميق وخطوط نقية بلا تكلّف."
    }
  },
  {
    id: "p15", cat: "open", price: 4300, sizes: ["52","54","56","58","60","62"], imgs: 4,
    name: { en: "Najma Taupe Abaya", tr: "Necma Vizon Abaya", ar: "عباية نجمة التوب" },
    desc: {
      en: "Starlit taupe, scattered with hand-sewn crystal — the night sky, worn.",
      tr: "Yıldızlı vizon, el dikimi kristallerle serpili — gece göğünü giymek gibi.",
      ar: "توب مضاء بالنجوم، منثور بكريستال مخيّط يدويًا — سماء الليل تُلبس."
    }
  },
  {
    id: "p16", cat: "open", price: 4300, sizes: ["52","54","56"], imgs: 4, tag: "limited",
    name: { en: "Reesha Sage Abaya", tr: "Rişa Adaçayı Abaya", ar: "عباية ريشة الميرمية" },
    desc: {
      en: "Feather-mist layers in sage bloom — air made into fabric.",
      tr: "Adaçayı tonlarında tüy sisi katmanlar — kumaşa dönüşmüş hava.",
      ar: "طبقات من ضباب الريش بلون الميرمية — هواءٌ صار قماشًا."
    }
  },
  {
    id: "p17", cat: "open", price: 2550, sizes: ["52","54","56","58","60","62"], imgs: 4,
    name: { en: "Samawi Frost Abaya", tr: "Semavi Buz Abaya", ar: "عباية سماوي الصقيع" },
    desc: {
      en: "Royal frosted pastel blue with crystal-dusted sleeves.",
      tr: "Kristal serpiştirilmiş kollarıyla asil buzlu pastel mavi.",
      ar: "أزرق باستيلي مصقّع بلمسة ملكية وأكمام منثورة بالكريستال."
    }
  },
  {
    id: "p18", cat: "open", price: 2150, sizes: ["52","54","56","58","60","62"], imgs: 4,
    name: { en: "Sahra Chiffon Abaya", tr: "Sahra Şifon Abaya", ar: "عباية صحراء الشيفون" },
    desc: {
      en: "Desert-toned embellished chiffon that floats with every step.",
      tr: "Her adımda süzülen çöl tonlarında işlemeli şifon.",
      ar: "شيفون مطرز بألوان الصحراء يطفو مع كل خطوة."
    }
  },
  {
    id: "p19", cat: "closed", price: 4300, sizes: ["52","54","56","58","60","62"], imgs: 4, tag: "limited",
    name: { en: "Thurayya Noir Set", tr: "Süreyya Noir Set", ar: "طقم ثريا الليل" },
    desc: {
      en: "Three-piece stardust veil set in midnight noir — abaya, inner and hijab.",
      tr: "Gece siyahında üç parça yıldız tozu set — abaya, iç elbise ve eşarp.",
      ar: "طقم غبار النجوم من ثلاث قطع بأسود منتصف الليل — عباية وفستان داخلي وحجاب."
    }
  },
  {
    id: "p20", cat: "closed", price: 4850, sizes: ["52","54","56","58","60","62"], imgs: 4, tag: "limited",
    name: { en: "Zahra Rose Set", tr: "Zehra Gül Set", ar: "طقم زهرة الورد" },
    desc: {
      en: "Rose-bloom three-piece set — soft colour, ceremonial finish.",
      tr: "Gül tomurcuğu üç parça set — yumuşak renk, törensel şıklık.",
      ar: "طقم من ثلاث قطع بتفتّح الورد — لون ناعم ولمسة احتفالية."
    }
  },
  {
    id: "p21", cat: "closed", price: 1900, sizes: ["52","54","56","58","60","62"], imgs: 4,
    name: { en: "Layla Lace Abaya", tr: "Leyla Dantel Abaya", ar: "عباية ليلى الدانتيل" },
    desc: {
      en: "Black umbrella-cut closed abaya edged in fine lace.",
      tr: "İnce dantelle çevrili siyah şemsiye kesim kapalı abaya.",
      ar: "عباية مغلقة بقصّة المظلة، مطرزة بحواف دانتيل رفيعة."
    }
  },
  {
    id: "p22", cat: "closed", price: 1850, sizes: ["52","54","56","58","60","62"], imgs: 4,
    name: { en: "Farasha Noir Abaya", tr: "Feraşa Noir Abaya", ar: "عباية فراشة الليل" },
    desc: {
      en: "Butterfly silhouette in deep black, trimmed with lace wings.",
      tr: "Derin siyahta kelebek silüeti, dantel kanat detayları.",
      ar: "قصّة الفراشة بأسود عميق مع أجنحة من الدانتيل."
    }
  },
  {
    id: "p23", cat: "closed", price: 1700, sizes: ["52","54","56","58","60","62"], imgs: 4,
    name: { en: "Raya Rose Abaya", tr: "Raya Gül Abaya", ar: "عباية راية الوردية" },
    desc: {
      en: "Twilight-rose butterfly abaya — one piece, endless grace.",
      tr: "Alacakaranlık gülü kelebek abaya — tek parça, sonsuz zarafet.",
      ar: "عباية فراشة بلون ورد الشفق — قطعة واحدة وأناقة بلا حدود."
    }
  },
  {
    id: "p24", cat: "closed", price: 1950, sizes: ["52","54","56","58","60","62"], imgs: 4,
    name: { en: "Amani Mosaic Abaya", tr: "Amani Mozaik Abaya", ar: "عباية أماني الفسيفساء" },
    desc: {
      en: "Mosaic-print closed abaya — pattern with poise.",
      tr: "Mozaik desenli kapalı abaya — duruş sahibi bir desen.",
      ar: "عباية مغلقة بنقشة الفسيفساء — زخرفة برصانة."
    }
  },
  {
    id: "p25", cat: "closed", price: 1350, sizes: ["62"], imgs: 4,
    name: { en: "Anbar Auburn Abaya", tr: "Anber Kızıl Abaya", ar: "عباية عنبر الكستنائي" },
    desc: {
      en: "Rich auburn classic with dainty detailing — the everyday icon.",
      tr: "Zarif detaylı zengin kızıl klasik — her günün ikonu.",
      ar: "كلاسيكية بلون كستنائي غني وتفاصيل دقيقة — أيقونة الأيام كلها."
    }
  },
  {
    id: "p26", cat: "hijab", price: 250, sizes: [], imgs: 3,
    name: { en: "Modal Hijab — Truffle", tr: "Modal Eşarp — Trüf", ar: "حجاب مودال — ترافل" },
    desc: {
      en: "Premium matt modal in deep truffle — breathable, opaque, drapes perfectly.",
      tr: "Derin trüf tonunda mat modal — nefes alır, dökümü kusursuz.",
      ar: "مودال مطفي فاخر بلون الترافل — قماش يتنفس وانسدال مثالي."
    }
  },
  {
    id: "p27", cat: "hijab", price: 550, sizes: [], imgs: 3,
    name: { en: "Crush Hijab — Mocha", tr: "Crush Eşarp — Moka", ar: "حجاب كراش — موكا" },
    desc: {
      en: "Luxury soft-crush texture in muted mocha — grip without pins.",
      tr: "Yumuşak kırışık dokulu lüks moka — iğnesiz duruş.",
      ar: "ملمس كراش ناعم فاخر بلون الموكا — ثبات بلا دبابيس."
    }
  }
];

const CATS = {
  open:        { en: "Open Abayas",  tr: "Önü Açık Abayalar", ar: "عبايات مفتوحة" },
  closed:      { en: "Closed Abayas",tr: "Kapalı Abayalar",   ar: "عبايات مغلقة" },
  embellished: { en: "Embellished",  tr: "İşlemeli",          ar: "مطرزة" },
  hijab:       { en: "Hijabs",       tr: "Eşarplar",          ar: "حجابات" }
};
