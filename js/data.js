// TorkScout Vehicle Database & Content Datasets

const CAR_DATABASE = {
  "Volkswagen": {
    "Golf": {
      "2016": {
        "Kasa": ["Hatchback (5 Kapı)"],
        "Motor": ["1.6 TDI (110 HP)", "1.4 TSI (125 HP)", "2.0 TSI GTI (220 HP)"],
        "Yakıt": ["Dizel", "Benzin"],
        "Şanzıman": ["7 İleri Kuru Çift Kavrama (DSG DQ200)", "6 İleri Manuel"],
        "Donanım": ["Comfortline", "Highline", "Midline Plus"]
      },
      "2019": {
        "Kasa": ["Hatchback (5 Kapı)"],
        "Motor": ["1.6 TDI (115 HP)", "1.5 TSI ACT (150 HP)"],
        "Yakıt": ["Dizel", "Benzin"],
        "Şanzıman": ["7 İleri DSG (DQ200)", "6 İleri Manuel"],
        "Donanım": ["Comfortline", "Highline", "R-Line"]
      }
    },
    "Passat": {
      "2017": {
        "Kasa": ["Sedan"],
        "Motor": ["1.6 TDI (120 HP)", "2.0 TDI (150 HP)", "1.4 TSI (125 HP)"],
        "Yakıt": ["Dizel", "Benzin"],
        "Şanzıman": ["7 İleri DSG", "6 İleri DSG (DQ250)", "Manuel"],
        "Donanım": ["Trendline", "Comfortline", "Highline"]
      }
    }
  },
  "BMW": {
    "3 Serisi": {
      "2015": {
        "Kasa": ["Sedan (F30)"],
        "Motor": ["320i EfficientDynamics (1.6 N13 - 170 HP)", "316i (1.6 N13 - 136 HP)", "320d (2.0 B47 - 190 HP)"],
        "Yakıt": ["Benzin", "Dizel"],
        "Şanzıman": ["8 İleri Tork Konvertörlü (ZF 8HP)", "6 İleri Manuel"],
        "Donanım": ["Techno Plus", "Sport Line", "M Sport", "Luxury Line"]
      },
      "2020": {
        "Kasa": ["Sedan (G20)"],
        "Motor": ["320i (1.6 B48 - 170 HP)", "330i (2.0 B48 - 258 HP)"],
        "Yakıt": ["Benzin"],
        "Şanzıman": ["8 İleri Spor Otomatik (ZF 8HP)"],
        "Donanım": ["First Edition Sport Line", "First Edition M Sport"]
      }
    }
  },
  "Fiat": {
    "Egea": {
      "2021": {
        "Kasa": ["Sedan", "Hatchback", "Cross"],
        "Motor": ["1.3 Multijet II (95 HP)", "1.6 Multijet II (130 HP)", "1.4 Fire (95 HP)"],
        "Yakıt": ["Dizel", "Benzin"],
        "Şanzıman": ["5 İleri Manuel", "6 İleri Manuel", "6 İleri Çift Kavrama (DCT)"],
        "Donanım": ["Easy", "Urban", "Lounge", "Street"]
      }
    }
  },
  "Renault": {
    "Megane": {
      "2018": {
        "Kasa": ["Sedan", "Hatchback"],
        "Motor": ["1.5 dCi (110 HP)", "1.2 TCe (130 HP)", "1.6 16V (115 HP)"],
        "Yakıt": ["Dizel", "Benzin"],
        "Şanzıman": ["6 İleri Islak Çift Kavrama (EDC)", "6 İleri Manuel"],
        "Donanım": ["Joy", "Touch", "Icon"]
      }
    }
  },
  "Peugeot": {
    "308": {
      "2019": {
        "Kasa": ["Hatchback"],
        "Motor": ["1.5 BlueHDi (130 HP)", "1.2 PureTech (130 HP)"],
        "Yakıt": ["Dizel", "Benzin"],
        "Şanzıman": ["8 İleri Otomatik (EAT8)", "6 İleri Manuel"],
        "Donanım": ["Active", "Allure", "GT-Line"]
      }
    }
  }
};

// Comprehensive Preset Intelligence Reports
const PRESET_REPORTS = {
  "Volkswagen-Golf-2016-1.6 TDI (110 HP)-7 İleri Kuru Çift Kavrama (DSG DQ200)": {
    title: "Volkswagen Golf 7 (2016) 1.6 TDI 110 HP DSG (DQ200)",
    character: "VW Golf 7, C segmentinin referans noktasını oluşturan son derece rafine, izole ve dengeli bir sürüş karakterine sahiptir. 1.6 TDI motor (110 HP / 250 Nm tork) ile 7 ileri kuru tip DSG şanzıman ikilisi, vites geçişlerini neredeyse hissettirmeden pürüzsüz aktarır ve şehir içi yakıt ekonomisinde sınıfının en iddialı araçlarındandır.",
    strengths: [
      "Olağanüstü Şehir İçi ve Şehir Dışı Yakıt Ekonomisi (Ort. 4.2 - 5.1 L/100km)",
      "Yüksek Sürüş İzolasyonu ve Sınıfının Üzerinde Kabin Sessizliği",
      "Hızlı ve Pürüzsüz Vites Geçiş Dinamiği (DSG Vites Oranları)",
      "İkinci El Piyasasında En Yüksek Likidite ve Kolay Satılabilirlik"
    ],
    compromises: [
      "Kuru Tip DQ200 DSG Şanzıman Mechatronic ve Kavrama Hassasiyeti (Yoğun trafikte ısınma eğilimi)",
      "1.6 TDI Motorun Alt Devirlerdeki Hafif Turbo Gecikmesi (Turbo Lag)",
      "DPF (Dizel Partikül Filtresi) ve EGR Resirkülasyon Valfinin Şehir İçi Kısa Mesafelerde Tıkanma Riski",
      "Arka Süspansiyonda 1.6 TDI Versiyonlarda Torsiyon Çubuğu Kullanılması (1.4 TSI'daki Çok Noktadan Bağımsız Süspansiyona Göre Daha Sert Cümleler)"
    ],
    whoIsItFor: "Yılda 15.000 km üzeri yol yapan, sürüş konforuna önem veren, araç içi ergonomi ve yüksek ikinci el değerini ön planda tutan bireysel ve aile kullanıcıları için idealdir.",
    whoIsNotFor: "Sadece çok kısa mesafeli (günlük 2-3 km) dur-kalk şehir içi trafiğinde araç kullananlar (DPF riski) veya sert performanslı agrasif kalkış yapan sürücüler için uygun olmayabilir.",
    positiveConditions: [
      "DSG Şanzıman Mechatronic yağ değişimleri ve yazılım güncellemeleri yetkili/özelleşmiş serviste belgelenmişse",
      "Triger seti (Zamanlama Kayışı) değişimi 120.000 km veya 5 yaş altında tamamlanmışsa",
      "Enjektör ve DPF basınç sensörü değerleri diagnostik cihazda fabrikanın tolerans aralığındaysa"
    ],
    dealbreakers: [
      "Vites D pozisyonundayken veya geri viteste belirgin bir titreme, vuruntu veya 'DSG mechatronic pompası aşırı basınç hatası' kodu bulunması",
      "Soğutma suyunda yağ birikintisi veya EGR soğutucusu kaçak izleri",
      "Partikül filtresi iptal edilmiş ve yazılımla katalizör boşaltılmış araçlar"
    ],
    checklist: [
      "Ekspertizde aracı 1. vites düşük hızda dur-kalk yaparken kavrama kaçırması ve silkeleme açısından teste sokun.",
      "Diagnostik cihazda DPF doluluk oranı (Soot Mass) ve rejenere sıklığını inceletin.",
      "Devirdaim pompası ve Triger bölgesinde antifriz/yağ kaçağı olup olmadığını alt muhafazayı söktürerek kontrol ettirin.",
      "DQ200 mechatronic kartının basınç tüpü etrafında kılcal çatlak veya yağ terlemesi kontrolü yaptırın."
    ],
    questionsForSeller: [
      "DSG şanzıman kavraması veya mechatronic ünitesi daha önce değişti mi? Değiştiyse hangi servis belgesi ve garantiyle yapıldı?",
      "Triger kayışı ve devirdaim pompası en son kaç kilometrede ve hangi tarihte değiştirildi?",
      "Dizel partikül filtresi (DPF) ve EGR sistemi orijinal durumunda mı, hiç temizlik veya yazılımsal iptal işlemi gördü mü?",
      "Son 3 bakımda kullanılan motor yağı VW 507.00 onaylı 5W-30 spesifikasyonunda mıydı?"
    ],
    specs: {
      "Motor Hacmi": "1598 cc (4 Silindir Dizel)",
      "Güç": "110 HP @ 3200-4000 rpm",
      "Tork": "250 Nm @ 1500-3000 rpm",
      "Şanzıman": "7 İleri Kuru Çift Kavrama DSG (DQ200)",
      "0-100 km/s": "10.5 saniye",
      "Maksimum Hız": "195 km/s",
      "Ortalama Tüketim": "3.9 - 4.4 L / 100 km",
      "Bagaj Hacmi": "380 Litre",
      "Ağırlık": "1310 kg"
    }
  },
  "BMW-3 Serisi-2015-320i EfficientDynamics (1.6 N13 - 170 HP)-8 İleri Tork Konvertörlü (ZF 8HP)": {
    title: "BMW 320i ED F30 (2015) 1.6 N13 170 HP ZF 8HP",
    character: "BMW F30 320i ED, arkadan itişli sürüş dinamiğini 1.6 litrelik turbo beslemeli N13 motor ve sektörün altın standardı kabul edilen 8 İleri ZF tork konvertörlü şanzımanla buluşturur. 170 HP güç ve 250 Nm tork üretir. Sürüş modu seçenekleri (Eco Pro, Comfort, Sport) ile hem günlük konfor hem de üstün spor sürüş hissi sunar.",
    strengths: [
      "Arkadan İtiş Dinamiği, Kusursuz 50:50 Ağırlık Dağılımı ve Doğrudan Direksiyon Hissi",
      "ZF 8HP Şanzımanın Dayanıklılığı, Hızlı Tepkisi ve Pürüzsüz Vites Geçişleri",
      "1.6 Litre Vergi Avantajına Rağmen 170 HP Yüksek Performans Verimi",
      "Premium Kabin Kalitesi ve iDrive Bilgi-Eğlence Ergonomisi"
    ],
    compromises: [
      "N13 Motorun Plastik/Körük Hortumlarının Zamanla Gevşeyerek Plastik Geri Dönüşüm Borularında Kırılma Eğilimi",
      "Termostat, Devirdaim ve Su Flanşlarında Hararet Öncesi Plastik Aşınması Riski",
      "Külbütör Kapağı ve Conta Bölgesinden Yağ Sızdırma Eğilimi (N13 Kronik Yağ Terlemesi)",
      "Sert RFT (Run-Flat) Lastiklerin Kabin İçine Yol Sesi Aktarma Etkisi"
    ],
    whoIsItFor: "Performanslı, keyifli ve dinamik sürüş arayan, arkadan itiş tutkunu olan ve periyodik bakımlarını aksatmadan orijinal yedek parça kullanmayı kabul eden bilinçli sürücüler için idealdir.",
    whoIsNotFor: "Bakım maliyetlerini en düşük seviyede tutmak isteyen, kalitesiz yan sanayi parça veya usta takibi yapamayacak sürücüler için riskli olabilir.",
    positiveConditions: [
      "Devirdaim pompası, termostat ve genleşme kabı hortumları orijinal BMW logolu parçalarla yenilenmişse",
      "Külbütör kapak contası ve karter contası kurusa dahi sızıntı yapmayacak şekilde kontrol edilip yenilenmişse",
      "ZF 8HP şanzıman karter filtresi ve yağı 80.000 - 100.000 km aralığında yenilenmişse"
    ],
    dealbreakers: [
      "Motor soğutma suyunda eksilme ve hararet göstergesinde uyarısız dalgalanma geçmişi",
      "Turboda aşırı ötme sesi (Turbodaki wastegate boşluğu riski)",
      "Yazılımla güç artırımı (Stage 1/2) yapılmış ve aşırı zorlanmış motorlar"
    ],
    checklist: [
      "Ekspertizde motor plastik su flanşlarını ve turboya giden su/yağ borularını kontrol ettirin.",
      "Külbütör kapağının buji yuvalarına yağ sızdırıp sızdırmadığını inceletin.",
      "ZF 8HP şanzıman karterinde yağ terlemesi ve D'den R'ye geçişte sarsıntı olup olmadığını test edin.",
      "Ön ve arka salıncak burçları ile diferansiyel takozundaki çatlak durumunu lifte kaldırarak kontrol edin."
    ],
    questionsForSeller: [
      "Genleşme kabı, devirdaim pompası ve plastik su boruları hiç değişti mi? Su eksiltme durumu var mı?",
      "ZF 8HP şanzıman yağı ve filtresi değiştirildi mi?",
      "Araçta herhangi bir Chiptuning (Yazılım), Downpipe veya mekanik modifikasyon uygulandı mı?",
      "Külbütör kapak contasında veya turbo yağ besleme borularında yağ terlemesi var mı?"
    ],
    specs: {
      "Motor Hacmi": "1598 cc (4 Silindir Turbo Benzin N13)",
      "Güç": "170 HP @ 4800 rpm",
      "Tork": "250 Nm @ 1500-4500 rpm",
      "Şanzıman": "8 İleri Tork Konvertörlü Otomatik (ZF 8HP)",
      "0-100 km/s": "7.6 saniye",
      "Maksimum Hız": "230 km/s",
      "Ortalama Tüketim": "5.4 - 6.0 L / 100 km",
      "Bagaj Hacmi": "480 Litre",
      "Ağırlık": "1465 kg"
    }
  }
};

// Classifieds Data
const CLASSIFIEDS_DATA = [
  {
    id: "LIST-101",
    title: "2016 Volkswagen Golf 7 1.6 TDI Highline DSG",
    price: "845.000 ₺",
    km: "138.000 km",
    city: "İstanbul / Kadıköy",
    year: "2016",
    brand: "Volkswagen",
    model: "Golf",
    engine: "1.6 TDI (110 HP)",
    trans: "7 İleri Kuru Çift Kavrama (DSG DQ200)",
    fuel: "Dizel",
    hasAiReport: true,
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=600&q=80",
    desc: "Sahibinden çok temiz Golf 7 Highline. Tüm bakımları yetkili serviste yapılmıştır. Cam tavan, sürüş modları mevcut. TorkScout AI analizi tamamlanmıştır."
  },
  {
    id: "LIST-102",
    title: "2015 BMW 320i ED 1.6 M Sport ZF 8HP",
    price: "1.180.000 ₺",
    km: "142.000 km",
    city: "Ankara / Çankaya",
    year: "2015",
    brand: "BMW",
    model: "3 Serisi",
    engine: "320i EfficientDynamics (1.6 N13 - 170 HP)",
    trans: "8 İleri Tork Konvertörlü (ZF 8HP)",
    fuel: "Benzin",
    hasAiReport: true,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=600&q=80",
    desc: "Orijinal M Sport paket. Harman Kardon ses sistemi, N13 su flanşları yenilenmiştir. TorkScout doğrulanmış araç."
  },
  {
    id: "LIST-103",
    title: "2021 Fiat Egea Cross 1.6 Multijet DCT Urban",
    price: "790.000 ₺",
    km: "62.000 km",
    city: "İzmir / Bornova",
    year: "2021",
    brand: "Fiat",
    model: "Egea",
    engine: "1.6 Multijet II (130 HP)",
    trans: "6 İleri Çift Kavrama (DCT)",
    fuel: "Dizel",
    hasAiReport: false,
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=600&q=80",
    desc: "İlk sahibinden hatasız Egea Cross. Garanti devam ediyor."
  }
];

// Discover Reels Data
const DISCOVER_REELS = [
  {
    title: "Golf 7 DSG DQ200 Alırken Neye Bakılmalı?",
    subtitle: "Volkswagen Golf 7 1.6 TDI",
    badge: "Kronik Analiz",
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=800&q=80",
    summary: "7 İleri kuru tip DSG şanzımanlarda mechatronic kartı basınç tüpü çatlaması ve kavrama aşınması en çok bilinen durumdur. TorkScout ile aracı almadan önce mechatronic geçmişini kontrol edin.",
    linkBrand: "Volkswagen",
    linkModel: "Golf"
  },
  {
    title: "BMW N13 Motor Hararet ve Su Flanşı Gerçeği",
    subtitle: "BMW 320i ED (F30)",
    badge: "Motor Rehberi",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80",
    summary: "1.6 N13 motorlar yüksek termal verimle çalışır. Plastik devirdaim su flanşları 100.000 km sonrası gevreğe dönüşür. Hararet yemeden yenilenmesi hayati önem taşır.",
    linkBrand: "BMW",
    linkModel: "3 Serisi"
  },
  {
    title: "Renault 1.5 dCi & EDC Islak Kavrama Dayanıklılığı",
    subtitle: "Renault Megane 4",
    badge: "Şanzıman Karşılaştırma",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80",
    summary: "Renault'nun EDC şanzımanı ıslak tip kavramaya geçtiğinden bu yana DSG'ye kıyasla yüksek tork ve ısı dayanıklılığı gösterir.",
    linkBrand: "Renault",
    linkModel: "Megane"
  }
];

// Pricing Packages Data
const PACKAGES_DATA = [
  {
    name: "Tanışma",
    price: "Ücretsiz",
    period: "Sonsuza Dek",
    quota: "3 Araç Raporu / Ay",
    badge: "Başlangıç",
    features: [
      "Temel Araç Raporu Erişimi",
      "Varyant Bazlı Kronik İnceleme",
      "Sorgula Sekmesi Kullanımı",
      "Tork Scout Club Okuma Erişimi"
    ],
    buttonText: "Mevcut Planınız",
    isCurrent: true
  },
  {
    name: "Yetkin",
    price: "299 ₺",
    period: "/ ay",
    quota: "25 Araç Raporu + Chatbot",
    badge: "En Popüler",
    featured: true,
    features: [
      "Sınırsız Varyant Bazlı Detaylı Rapor",
      "AI Vehicle Intelligence Chatbot Erişimi",
      "Özelleştirilmiş Ekspertiz & Satıcı Listeleri",
      "Tork Scout Club Yorum & Gönderi Hakkı",
      "İlan Bazlı Hızlı AI Analizi"
    ],
    buttonText: "Yetkin Plana Geç",
    isCurrent: false
  },
  {
    name: "Profesyonel",
    price: "899 ₺",
    period: "/ ay",
    quota: "Sınırsız Rapor + Ekip Erişimi",
    badge: "Kurumsal & Galeri",
    features: [
      "Sınırsız Tüm Araç Raporları",
      "Kurumsal Profil Rozeti (`TS-PRO`)",
      "Öncelikli AI Araştırma Sunucusu",
      "Ekip İçi Rapor Paylaşımı & PDF İndirme",
      "API Entegrasyonu (Yakında)"
    ],
    buttonText: "Profesyonel Plana Geç",
    isCurrent: false
  }
];

// Tork Scout Club Community Threads
const CLUB_THREADS = [
  {
    id: 1,
    author: "TorkScout Admin",
    userNum: "TS-2608-000001",
    role: "admin",
    roleBadge: "ADMIN",
    planBadge: "PRO",
    time: "2 saat önce",
    title: "1.6 TDI vs 1.6 Multijet: Hangi Dizel Motor İkinci Elde Daha Az Üzer?",
    content: "TorkScout veritabanı analizlerine göre Volkswagen 1.6 TDI ile Fiat 1.6 Multijet motorların bakım maliyetleri ve uzun dönem enjektör dayanıklılıklarını karşılaştırdık. Sizce hangisi?",
    comments: [
      {
        author: "Ahmet Yılman",
        userNum: "TS-2608-000412",
        roleBadge: "MOD",
        planBadge: "YETKİN",
        time: "1 saat önce",
        text: "1.6 Multijet zincir setini zamanında değiştirirseniz 400.000 km rahat deviriyor. Ancak 1.6 TDI DSG ile birleşince sürüş konforu bambaşka."
      },
      {
        author: "Mehmet Can",
        userNum: "TS-2608-000891",
        roleBadge: "ÜYE",
        planBadge: "TANIŞMA",
        time: "30 dakika önce",
        text: "Egea 1.6 Multijet DCT sahibiyim, TorkScout raporundaki şanzıman yağı uyarısına uyarak bakımı yaptırdım. Çok faydalı bilgi."
      }
    ]
  }
];
