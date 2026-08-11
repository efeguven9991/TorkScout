// TorkScout AI Research Engine & Vehicle Intelligence Chatbot

class TorkScoutAIEngine {
  constructor() {
    this.currentReport = null;
    this.chatHistory = [];
  }

  // Simulate Multi-Stage Autonomous Research Workflow
  async generateReport(variant, progressCallback) {
    const steps = [
      "TorkScout Araç Veritabanı ve Varyant Ağacı İncelemesi Başlatıldı...",
      "Marka/Model/Motor Spesifikasyonları Çapraz Kontrol Ediliyor...",
      "İnternet, Forum ve Kullanıcı Şikayet Kaynakları Taranıyor...",
      "Karşıt Kanıt Taraması (Yanlış Model Karıştırma Önleme) Çalıştırılıyor...",
      "Recall (Geri Çağırma) ve Teknik Servis Bültenleri Analiz Ediliyor...",
      "10 Bölümlü Özelleştirilmiş Kullanılmış Araç Raporu Oluşturuluyor..."
    ];

    for (let i = 0; i < steps.length; i++) {
      if (progressCallback) {
        progressCallback(i + 1, steps.length, steps[i]);
      }
      await new Promise(r => setTimeout(r, 600)); // 600ms per step
    }

    // Try finding preset exact key
    const key = `${variant.brand}-${variant.model}-${variant.year}-${variant.engine}-${variant.trans}`;
    let report = PRESET_REPORTS[key];

    if (!report) {
      // Dynamically synthesize a customized report for any custom inputs!
      report = this.synthesizeDynamicReport(variant);
    }

    this.currentReport = { ...report, variant };
    this.chatHistory = [
      {
        sender: "bot",
        text: `Merhaba! ${variant.brand} ${variant.model} (${variant.engine}) aracı için araştırmamı tamamladım. Raporla ilgili aklınıza takılan her türlü soruyu (örneğin: LPG uyumu, şanzıman bakım maliyeti veya kronik arızaların çözümü) bana sorabilirsiniz.`
      }
    ];

    return this.currentReport;
  }

  synthesizeDynamicReport(v) {
    const title = `${v.brand} ${v.model} (${v.year}) ${v.engine} ${v.trans}`;
    return {
      title: title,
      character: `${title} aracı, ${v.fuel} yakıtlı ${v.engine} motoru ve ${v.trans} şanzımanı ile kendi segmentinde özel bir varyanttır. TorkScout AI motoru, bu aracın güç aktarma organları ve elektrik altyapısını ayrıntılı olarak incelemiş ve araca özel kullanım dinamiğini doğrulamıştır.`,
      strengths: [
        `${v.engine} motor seçeneğinin sunduğu optimal güç/tork dengesi`,
        `${v.trans} şanzıman yapısı ile dengeli vites aralıkları`,
        `${v.brand} markasının yaygın servis ağı ve kolay yedek parça tedariki`,
        `Sınıfındaki ergonomik iç kabin düzeni ve genel sürüş dengesi`
      ],
      compromises: [
        `Şehir içi yoğun trafikte ${v.trans} şanzımanın periyodik bakım gereksinimi`,
        `${v.year} yılı üretim grubu araçlarda yaşa bağlı kauçuk/hortum yıpranma riski`,
        `Yetkili servis bakımı aksatıldığında ortaya çıkabilecek elektrik aksamı terleme riskleri`
      ],
      whoIsItFor: `Bilinçli kullanım yapan, bakımlarını aksatmayan ve ${v.brand} sürüş karakterini tercih eden sürücüler için ideal bir seçimdir.`,
      whoIsNotFor: `Periyodik bakımlarını zamanında yaptırmayacak veya yan sanayi kalitesiz sıvı ve filtre kullanmayı düşünen sürücüler için tavsiye edilmez.`,
      positiveConditions: [
        `Şanzıman yağı ve filtre değişimlerinin servis kayıtlarıyla belgelenmiş olması`,
        `Periyodik bakımların üretici onaylı yağlar ve filtrelerle yapılmış olması`,
        `Aracın geçmişinde ciddi bir hararet veya yağsız kalma uyarısının bulunmaması`
      ],
      dealbreakers: [
        `Test sürüşünde şanzımandan gelen aşırı vuruntu veya vites kararsızlığı`,
        `Motor bloğu etrafında yoğun yağ kaçakları veya soğutma suyuna yağ karışma emareleri`,
        `Şasi numarası sorgusunda ağır hasar veya eksik servis geçmişi bulunması`
      ],
      checklist: [
        `Ekspertizde ${v.trans} şanzıman kavrama geçişlerini ve alt yağ sızıntılarını detaylı inceletin.`,
        `Motor kompresyon testini ve soğutma suyu basınç testini yaptırın.`,
        `Diagnostik taramada beyinde saklı kalmış arıza kodlarını (DTC) taratın.`
      ],
      questionsForSeller: [
        `${v.trans} şanzıman bakımı en son ne zaman yapıldı, faturası veya servis kaydı var mı?`,
        `Triger ve devirdaim gibi kritik ağır bakım parçaları kaç kilometrede değişti?`,
        `Araçta soğutma suyu eksiltme veya motor yağ eksiltme durumu yaşandı mı?`
      ],
      specs: {
        "Motor": v.engine || "Standart Motor",
        "Yakıt Türü": v.fuel || "Benzin/Dizel",
        "Şanzıman": v.trans || "Otomatik/Manuel",
        "Kasa Tipi": v.body || "Sedan/Hatchback",
        "Donanım Paketi": v.trim || "Standart",
        "Ortalama Tüketim": "5.2 - 6.5 L / 100 km",
        "Bagaj Hacmi": "380 - 450 Litre"
      }
    };
  }

  // Answer Follow-Up Chatbot Questions
  answerChatbot(userMessage) {
    const msg = userMessage.toLowerCase();
    this.chatHistory.push({ sender: "user", text: userMessage });

    let botResponse = "";
    const report = this.currentReport;

    if (!report) {
      botResponse = "Lütfen önce yukarıdaki 'Aracı İncele & Al Raporu Al' butonuna basarak bir araç incelemesi başlatın.";
    } else if (msg.includes("lpg") || msg.includes("tüp")) {
      botResponse = `${report.variant.brand} ${report.variant.model} (${report.variant.engine}) için LPG uyumu: Direk enjeksiyonlu (TSI/TCe/N13) motorlarda direkt likit veya kombi karma LPG kitleri gerekir ve maliyeti yüksektir. Atmosferik motorlarda ise LPG uyumu yüksektir ancak sübap erimesine karşı Yağlamalı Kit önerilir.`;
    } else if (msg.includes("şanzıman") || msg.includes("vites") || msg.includes("dsg") || msg.includes("zf") || msg.includes("bakım")) {
      botResponse = `Bu araçtaki ${report.variant.trans} şanzımanı için kritik nokta: Her 60.000 km'de bir şanzıman yağının ve filtresinin yenilenmesidir. Aksatılırsa kavrama ve mechatronic/valf gövdesi aşınması hızlanır.`;
    } else if (msg.includes("ekspertiz") || msg.includes("kontrol")) {
      botResponse = `Ekspertizde özellikle dikkat etmeniz gerekenler: ${report.checklist[0]} Ayrıca ${report.checklist[1]}`;
    } else if (msg.includes("kronik") || msg.includes("arıza") || msg.includes("sorun")) {
      botResponse = `Araştırmamıza göre bu varyantın bilinen başlıca taviz ve risk noktaları: ${report.compromises.join('; ')}`;
    } else if (msg.includes("fiyat") || msg.includes("piyasa") || msg.includes("alınır mı")) {
      botResponse = `TorkScout Değerlendirmesi: ${report.whoIsItFor} Eğer ekspertizde reddetme sebeplerinden (${report.dealbreakers[0]}) biri çıkmazsa güvenle değerlendirebilirsiniz.`;
    } else {
      botResponse = `${report.variant.brand} ${report.variant.model} hakkındaki araştırmama göre: ${report.character} Detaylı sorularınız için şanzıman, ekspertiz uyarısı veya bakım periyotlarını sorabilirsiniz.`;
    }

    this.chatHistory.push({ sender: "bot", text: botResponse });
    return botResponse;
  }
}

const torkAi = new TorkScoutAIEngine();
