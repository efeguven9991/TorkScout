// TorkScout Vehicle Database & Content Datasets

const CAR_DATABASE = {
  "Volkswagen": {
    "Golf": {
      "2016": {
        "Kasa": ["Hatchback (5 Kapı)"],
        "Motor": ["1.6 TDI (110 HP)", "1.4 TSI (125 HP)"],
        "Yakıt": ["Dizel", "Benzin"],
        "Şanzıman": ["7 İleri Kuru Çift Kavrama (DSG DQ200)", "6 İleri Manuel"],
        "Donanım": ["Comfortline", "Highline"]
      }
    },
    "Passat": {
      "2017": {
        "Kasa": ["Sedan"],
        "Motor": ["1.6 TDI (120 HP)", "2.0 TDI (150 HP)"],
        "Yakıt": ["Dizel"],
        "Şanzıman": ["7 İleri DSG", "6 İleri Manuel"],
        "Donanım": ["Comfortline", "Highline"]
      }
    }
  },
  "BMW": {
    "3 Serisi": {
      "2015": {
        "Kasa": ["Sedan (F30)"],
        "Motor": ["320i EfficientDynamics (1.6 N13 - 170 HP)", "320d (2.0 B47 - 190 HP)"],
        "Yakıt": ["Benzin", "Dizel"],
        "Şanzıman": ["8 İleri Tork Konvertörlü (ZF 8HP)"],
        "Donanım": ["M Sport", "Sport Line"]
      }
    }
  },
  "Mercedes-Benz": {
    "C Serisi": {
      "2020": {
        "Kasa": ["Sedan (W205)"],
        "Motor": ["C 200 d (1.6 OM626 - 160 HP)", "C 180 (1.5 M264 - 156 HP)"],
        "Yakıt": ["Dizel", "Benzin"],
        "Şanzıman": ["9 İleri Otomatik (9G-TRONIC)"],
        "Donanım": ["AMG", "Exclusive"]
      }
    }
  },
  "Renault": {
    "Megane": {
      "2018": {
        "Kasa": ["Sedan", "Hatchback"],
        "Motor": ["1.5 dCi (110 HP)", "1.2 TCe (130 HP)"],
        "Yakıt": ["Dizel", "Benzin"],
        "Şanzıman": ["6 İleri Islak Çift Kavrama (EDC)"],
        "Donanım": ["Touch", "Icon"]
      }
    }
  }
};

const PRESET_REPORTS = {
  "Volkswagen-Golf-2016-1.6 TDI (110 HP)-7 İleri Kuru Çift Kavrama (DSG DQ200)": {
    title: "Volkswagen Golf 7 (2016) 1.6 TDI 110 HP DSG (DQ200)",
    character: "VW Golf 7, C segmentinin referans noktasını oluşturan son derece rafine, izole ve dengeli bir sürüş karakterine sahiptir. 1.6 TDI motor (110 HP / 250 Nm tork) ile 7 ileri kuru tip DSG şanzıman ikilisi, vites geçişlerini pürüzsüz aktarır.",
    strengths: [
      "Şehir İçi ve Şehir Dışı Yakıt Ekonomisi (4.2 - 5.1 L/100km)",
      "Yüksek Sürüş İzolasyonu ve Kabin Sessizliği",
      "Pürüzsüz Vites Geçiş Dinamiği",
      "Yüksek İkinci El Likiditesi"
    ],
    compromises: [
      "Kuru Tip DQ200 DSG Mechatronic ve Kavrama Hassasiyeti",
      "Alt Devirlerde Hafif Turbo Lag",
      "DPF ve EGR Kısa Mesafe Tıkanma Riski"
    ],
    whoIsItFor: "Yılda 15.000 km üzeri yol yapan, konfora ve yakıt ekonomisine önem veren sürücüler için idealdir.",
    whoIsNotFor: "Sadece çok kısa mesafeli dur-kalk trafiğinde araç kullanan sürücüler.",
    positiveConditions: [
      "DSG Mechatronic yağ değişimleri yetkili serviste belgelenmişse",
      "Triger kayışı değişimi zamanında yapılmışsa"
    ],
    dealbreakers: [
      "Vites geçişlerinde aşırı vuruntu veya Mechatronic basınç hatası",
      "Soğutma suyunda yağ birikintisi izleri"
    ],
    checklist: [
      "Ekspertizde aracı 1. vites düşük hızda dur-kalk yaparken silkeleme açısından test edin.",
      "Diagnostik cihazda DPF doluluk oranını inceletin."
    ],
    questionsForSeller: [
      "DSG mechatronic ünitesi daha önce değişti mi?",
      "Triger kayışı ve devirdaim en son kaç kilometrede değişti?"
    ],
    specs: {
      "Motor Hacmi": "1598 cc (4 Silindir Dizel)",
      "Güç": "110 HP @ 3200-4000 rpm",
      "Tork": "250 Nm @ 1500-3000 rpm",
      "Şanzıman": "7 İleri DSG (DQ200)",
      "0-100 km/s": "10.5 saniye"
    }
  }
};

// 8 Featured Listings matching user screenshots!
const FEATURED_LISTINGS = [
  {
    yearCity: "2020 • İSTANBUL",
    title: "RENAULT R 19 TERTEMİZ DÜŞÜK KM...",
    km: "109.000 km",
    price: "1.110.000 TRY",
    brand: "Renault",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&q=80"
  },
  {
    yearCity: "2025 • İSTANBUL",
    title: "MERCEDES-BENZ C SERISI TERTEMİZ...",
    km: "69.000 km",
    price: "885.000 TRY",
    brand: "Mercedes-Benz",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=600&q=80"
  },
  {
    yearCity: "2020 • KOCAELİ",
    title: "acil deneme",
    km: "239.998 km",
    price: "500.000 TRY",
    brand: "Subaru",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80"
  },
  {
    yearCity: "2018 • İSTANBUL",
    title: "OPEL VECTRA TERTEMİZ...",
    km: "85.000 km",
    price: "975.000 TRY",
    brand: "Opel",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80"
  },
  {
    yearCity: "2013 • İSTANBUL",
    title: "MAZDA PREMACY TERTEMİZ DÜŞÜK KM...",
    km: "117.000 km",
    price: "1.155.000 TRY",
    brand: "Mazda",
    image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=600&q=80"
  },
  {
    yearCity: "2026 • İSTANBUL",
    title: "CITROEN C2 TERTEMİZ DÜŞÜK KM...",
    km: "53.000 km",
    price: "795.000 TRY",
    brand: "Citroen",
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=600&q=80"
  },
  {
    yearCity: "2022 • İSTANBUL",
    title: "HYUNDAI TUCSON TERTEMİZ DÜŞÜK...",
    km: "93.000 km",
    price: "1.020.000 TRY",
    brand: "Hyundai",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80"
  },
  {
    yearCity: "2006 • İSTANBUL",
    title: "BMW 3 SERISI TERTEMİZ...",
    km: "61.000 km",
    price: "840.000 TRY",
    brand: "BMW",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=600&q=80"
  }
];

const SUBSCRIPTION_PACKAGES = [
  {
    name: "Tanışma Paketi",
    badge: "TANIŞMA",
    price: "0 TL",
    period: "/ aylık",
    buttonText: "Ücretsiz Başla",
    features: [
      "Ayda 3 AI araç raporu",
      "Ayda 3 chatbot mesajı",
      "1 aktif ilan",
      "30 gün ilan yayın süresi",
      "Ayda 3 karşılaştırma",
      "Karşılaştırma başına 2 araç"
    ]
  },
  {
    name: "Yetkin Paket",
    badge: "YETKİN",
    topBadge: "EN ÇOK TERCİH EDİLEN",
    isPopular: true,
    price: "499 TL",
    period: "/ aylık",
    buttonText: "Yetkin Paketi Al",
    features: [
      "Ayda 10 AI araç raporu",
      "Ayda 30 chatbot mesajı",
      "Her raporda satıcıya sorulacak sorular",
      "Her raporda ekspertiz kontrol listesi",
      "10 aktif ilan",
      "30 gün ilan yayın süresi",
      "Ayda 10 karşılaştırma",
      "Karşılaştırma başına 5 araç",
      "Ayda 1 vitrin hakkı"
    ]
  },
  {
    name: "Profesyonel Paket",
    badge: "PROFESYONEL",
    price: "1.499 TL",
    period: "/ aylık",
    buttonText: "Profesyonel Paketi Al",
    features: [
      "Ayda 50 AI araç raporu",
      "Ayda 150 chatbot mesajı",
      "Her raporda satıcıya sorulacak sorular",
      "Her raporda ekspertiz kontrol listesi",
      "50 aktif ilan",
      "45 gün ilan yayın süresi",
      "Ayda 30 karşılaştırma",
      "Karşılaştırma başına 10 araç",
      "Ayda 5 vitrin hakkı",
      "Kurumsal satıcı profili",
      "Öncelikli destek",
      "Çoklu kullanıcı ve ekip erişimi"
    ]
  }
];

const ONE_TIME_BUYER_PACKAGES = [
  {
    title: "Alıcı Mini",
    badge: "MİNİ",
    price: "149 TL",
    period: "/ tek seferlik",
    buttonText: "Alıcı Mini Satın Al",
    features: [
      "5 AI araç raporu",
      "15 chatbot mesajı",
      "30 gün kullanım süresi",
      "Her raporda satıcıya sorulacak sorular",
      "Her raporda ekspertiz kontrol listesi"
    ]
  },
  {
    title: "Alıcı Plus",
    badge: "PLUS",
    topBadge: "EN ÇOK TERCİH EDİLEN",
    isPopular: true,
    price: "249 TL",
    period: "/ tek seferlik",
    buttonText: "Alıcı Plus Satın Al",
    features: [
      "10 AI araç raporu",
      "30 chatbot mesajı",
      "30 gün kullanım süresi",
      "Her raporda satıcıya sorulacak sorular",
      "Her raporda ekspertiz kontrol listesi"
    ]
  },
  {
    title: "Alıcı Max",
    badge: "MAX",
    price: "399 TL",
    period: "/ tek seferlik",
    buttonText: "Alıcı Max Satın Al",
    features: [
      "20 AI araç raporu",
      "60 chatbot mesajı",
      "60 gün kullanım süresi",
      "Her raporda satıcıya sorulacak sorular",
      "Her raporda ekspertiz kontrol listesi"
    ]
  }
];
