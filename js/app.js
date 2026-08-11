// TorkScout Application Controller & UI Logic

document.addEventListener("DOMContentLoaded", () => {
  initTabs();
  initVariantSelectors();
  initClassifieds();
  initDiscoverReels();
  initPackages();
  initClub();
  initModalReader();
  initChatbot();

  // Load default preset vehicle (Volkswagen Golf 7 2016 1.6 TDI DSG) on load
  document.getElementById("selectBrand").value = "Volkswagen";
  onBrandChange();
});

// 1. Tab Navigation Controller
function initTabs() {
  const navBtns = document.querySelectorAll(".nav-item");
  const tabSections = document.querySelectorAll(".tab-section");

  navBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetTab = btn.getAttribute("data-tab");

      navBtns.forEach(b => b.classList.remove("active"));
      tabSections.forEach(s => s.classList.remove("active"));

      btn.classList.add("active");
      const targetSec = document.getElementById(`tab-${targetTab}`);
      if (targetSec) {
        targetSec.classList.add("active");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  });
}

// 2. Cascading Variant Selectors (8 Controls in Exact Requested Order)
function initVariantSelectors() {
  const brandSel = document.getElementById("selectBrand");
  const modelSel = document.getElementById("selectModel");
  const yearSel = document.getElementById("selectYear");

  // Populate Brands
  brandSel.innerHTML = `<option value="">-- Marka Seçin --</option>`;
  Object.keys(CAR_DATABASE).forEach(b => {
    brandSel.innerHTML += `<option value="${b}">${b}</option>`;
  });

  brandSel.addEventListener("change", onBrandChange);
  modelSel.addEventListener("change", onModelChange);
  yearSel.addEventListener("change", onYearChange);

  document.getElementById("btnInspectCar").addEventListener("click", runVehicleInspection);
}

function onBrandChange() {
  const brand = document.getElementById("selectBrand").value;
  const modelSel = document.getElementById("selectModel");

  modelSel.innerHTML = `<option value="">-- Model Ailesi --</option>`;
  resetSubDropdowns();

  if (brand && CAR_DATABASE[brand]) {
    Object.keys(CAR_DATABASE[brand]).forEach(m => {
      modelSel.innerHTML += `<option value="${m}">${m}</option>`;
    });
    modelSel.selectedIndex = 1;
    onModelChange();
  }
}

function onModelChange() {
  const brand = document.getElementById("selectBrand").value;
  const model = document.getElementById("selectModel").value;
  const yearSel = document.getElementById("selectYear");

  yearSel.innerHTML = `<option value="">-- Yıl --</option>`;
  resetSubDropdowns();

  if (brand && model && CAR_DATABASE[brand][model]) {
    Object.keys(CAR_DATABASE[brand][model]).forEach(y => {
      yearSel.innerHTML += `<option value="${y}">${y}</option>`;
    });
    yearSel.selectedIndex = 1;
    onYearChange();
  }
}

function resetSubDropdowns() {
  document.getElementById("selectBody").innerHTML = `<option value="">-- Kasa Tipi --</option>`;
  document.getElementById("selectEngine").innerHTML = `<option value="">-- Motor / Versiyon --</option>`;
  document.getElementById("selectFuel").innerHTML = `<option value="">-- Yakıt Türü --</option>`;
  document.getElementById("selectTrans").innerHTML = `<option value="">-- Şanzıman Tipi --</option>`;
  document.getElementById("selectTrim").innerHTML = `<option value="">-- Donanım Paketi --</option>`;
}

function onYearChange() {
  const brand = document.getElementById("selectBrand").value;
  const model = document.getElementById("selectModel").value;
  const year = document.getElementById("selectYear").value;

  const bodySel = document.getElementById("selectBody");
  const engineSel = document.getElementById("selectEngine");
  const fuelSel = document.getElementById("selectFuel");
  const transSel = document.getElementById("selectTrans");
  const trimSel = document.getElementById("selectTrim");

  resetSubDropdowns();

  if (brand && model && year && CAR_DATABASE[brand][model][year]) {
    const data = CAR_DATABASE[brand][model][year];

    // Populate Kasa Tipi
    if (data.Kasa) {
      data.Kasa.forEach(k => bodySel.innerHTML += `<option value="${k}">${k}</option>`);
      bodySel.selectedIndex = 1;
    }

    // Populate Motor / Versiyon
    if (data.Motor) {
      data.Motor.forEach(e => engineSel.innerHTML += `<option value="${e}">${e}</option>`);
      engineSel.selectedIndex = 1;
    }

    // Populate Yakıt Türü
    if (data.Yakıt) {
      data.Yakıt.forEach(f => fuelSel.innerHTML += `<option value="${f}">${f}</option>`);
      fuelSel.selectedIndex = 1;
    }

    // Populate Şanzıman Tipi
    if (data.Şanzıman) {
      data.Şanzıman.forEach(t => transSel.innerHTML += `<option value="${t}">${t}</option>`);
      transSel.selectedIndex = 1;
    }

    // Populate Donanım Paketi
    if (data.Donanım) {
      data.Donanım.forEach(d => trimSel.innerHTML += `<option value="${d}">${d}</option>`);
      trimSel.selectedIndex = 1;
    }
  }
}

// 3. Autonomous AI Vehicle Inspection Runner
async function runVehicleInspection() {
  const brand = document.getElementById("selectBrand").value || "Volkswagen";
  const model = document.getElementById("selectModel").value || "Golf";
  const year = document.getElementById("selectYear").value || "2016";
  const body = document.getElementById("selectBody").value || "Hatchback (5 Kapı)";
  const engine = document.getElementById("selectEngine").value || "1.6 TDI (110 HP)";
  const fuel = document.getElementById("selectFuel").value || "Dizel";
  const trans = document.getElementById("selectTrans").value || "7 İleri Kuru Çift Kavrama (DSG DQ200)";
  const trim = document.getElementById("selectTrim").value || "Highline";

  const variant = { brand, model, year, body, engine, fuel, trans, trim };

  const progressCard = document.getElementById("aiProgressCard");
  const progressText = document.getElementById("progressStepText");
  const progressList = document.getElementById("progressList");
  const reportResults = document.getElementById("reportResults");

  progressCard.style.display = "block";
  reportResults.style.display = "none";
  progressList.innerHTML = "";

  const report = await torkAi.generateReport(variant, (stepIndex, totalSteps, stepText) => {
    progressText.innerText = stepText;
    progressList.innerHTML += `
      <div class="step-item done">
        <div class="step-icon">✓</div>
        <div>${stepText}</div>
      </div>
    `;
  });

  progressCard.style.display = "none";
  reportResults.style.display = "block";

  renderReport(report);
}

// 4. Render 10-Section Report Cards
function renderReport(report) {
  document.getElementById("reportTitle").innerText = report.title;

  const grid = document.getElementById("reportGrid");
  grid.innerHTML = `
    <!-- 1. Bu Araç Nasıl Bir Otomobil? -->
    <div class="dark-card report-card" onclick="openModalReader('Bu Araç Nasıl Bir Otomobil?', \`${report.character}\`, 'cyan')">
      <span class="badge-tag badge-cyan"><i class="ph ph-car"></i> Sürüş & Karakter</span>
      <div class="dark-card-title"><i class="ph ph-steering-wheel"></i> Bu Araç Nasıl Bir Otomobil?</div>
      <p style="color: var(--text-card-muted); font-size: 0.9rem; margin-top: 8px;">
        ${report.character.substring(0, 140)}...
      </p>
    </div>

    <!-- 2. Tercih Etmek İçin Güçlü Nedenler -->
    <div class="dark-card report-card" onclick="openModalReader('Tercih Etmek İçin Güçlü Nedenler', \`${report.strengths.map(s => '• ' + s).join('<br><br>')}\`, 'emerald')">
      <span class="badge-tag badge-emerald"><i class="ph ph-thumbs-up"></i> Avantajlar</span>
      <div class="dark-card-title"><i class="ph ph-sparkle"></i> Güçlü Nedenler</div>
      <ul style="color: var(--text-card-muted); font-size: 0.88rem; margin-top: 8px; padding-left: 16px;">
        ${report.strengths.slice(0, 2).map(s => `<li>${s}</li>`).join('')}
      </ul>
    </div>

    <!-- 3. Satın Almadan Önce Bilinecek Tavizler -->
    <div class="dark-card report-card" onclick="openModalReader('Satın Almadan Önce Bilinecek Tavizler', \`${report.compromises.map(c => '• ' + c).join('<br><br>')}\`, 'amber')">
      <span class="badge-tag badge-amber"><i class="ph ph-warning-circle"></i> Dikkat Tavizler</span>
      <div class="dark-card-title"><i class="ph ph-scales"></i> Bilinecek Tavizler</div>
      <ul style="color: var(--text-card-muted); font-size: 0.88rem; margin-top: 8px; padding-left: 16px;">
        ${report.compromises.slice(0, 2).map(c => `<li>${c}</li>`).join('')}
      </ul>
    </div>

    <!-- 4. Kimler İçin Mantıklı? -->
    <div class="dark-card report-card" onclick="openModalReader('Kimler İçin Mantıklı?', \`${report.whoIsItFor}\`, 'emerald')">
      <span class="badge-tag badge-emerald"><i class="ph ph-user-check"></i> Doğru Profil</span>
      <div class="dark-card-title"><i class="ph ph-user-circle-plus"></i> Kimler İçin Mantıklı?</div>
      <p style="color: var(--text-card-muted); font-size: 0.88rem; margin-top: 8px;">
        ${report.whoIsItFor}
      </p>
    </div>

    <!-- 5. Kimler İçin Uygun Olmayabilir? -->
    <div class="dark-card report-card" onclick="openModalReader('Kimler İçin Uygun Olmayabilir?', \`${report.whoIsNotFor}\`, 'rose')">
      <span class="badge-tag badge-rose"><i class="ph ph-user-minus"></i> Yanlış Profil</span>
      <div class="dark-card-title"><i class="ph ph-user-circle-minus"></i> Uygun Olmayabilir</div>
      <p style="color: var(--text-card-muted); font-size: 0.88rem; margin-top: 8px;">
        ${report.whoIsNotFor}
      </p>
    </div>

    <!-- 6. Hangi Şartlarda Değerlendirilebilir? -->
    <div class="dark-card report-card" onclick="openModalReader('Hangi Şartlarda Değerlendirilebilir?', \`${report.positiveConditions.map(p => '✔ ' + p).join('<br><br>')}\`, 'emerald')">
      <span class="badge-tag badge-emerald"><i class="ph ph-check-square"></i> Olumlu Şartlar</span>
      <div class="dark-card-title"><i class="ph ph-list-checks"></i> Değerlendirme Şartları</div>
      <p style="color: var(--text-card-muted); font-size: 0.88rem; margin-top: 8px;">
        ${report.positiveConditions[0]}
      </p>
    </div>

    <!-- 7. Hangi Durumda Satın Almaktan Vazgeçilmeli? -->
    <div class="dark-card report-card" onclick="openModalReader('Hangi Durumda Satın Almaktan Vazgeçilmeli?', \`${report.dealbreakers.map(d => '❌ ' + d).join('<br><br>')}\`, 'rose')">
      <span class="badge-tag badge-rose"><i class="ph ph-x-circle"></i> Kırmızı Çizgiler</span>
      <div class="dark-card-title"><i class="ph ph-shield-warning"></i> Vazgeçme Nedenleri</div>
      <p style="color: var(--text-card-muted); font-size: 0.88rem; margin-top: 8px;">
        ${report.dealbreakers[0]}
      </p>
    </div>

    <!-- 8. Ekspertiz Kontrol Listesi (Varyanta Özel) -->
    <div class="dark-card report-card" onclick="openModalReader('Satın Alma Öncesi Ekspertiz Kontrol Listesi', \`${report.checklist.map((c, i) => (i+1) + '. ' + c).join('<br><br>')}\`, 'cyan')">
      <span class="badge-tag badge-cyan"><i class="ph ph-wrench"></i> Ekspertiz Rehberi</span>
      <div class="dark-card-title"><i class="ph ph-clipboard-text"></i> Ekspertiz Kontrol Listesi</div>
      <p style="color: var(--text-card-muted); font-size: 0.88rem; margin-top: 8px;">
        Özellikle bakılması gereken ${report.checklist.length} kritik nokta tespit edildi.
      </p>
    </div>

    <!-- 9. Satıcıya Sorulacak Kritik Sorular -->
    <div class="dark-card report-card" onclick="openModalReader('Satıcıya Sorulacak Kritik Sorular', \`${report.questionsForSeller.map((q, i) => (i+1) + '. ' + q).join('<br><br>')}\`, 'amber')">
      <span class="badge-tag badge-amber"><i class="ph ph-question"></i> Satıcı İletişimi</span>
      <div class="dark-card-title"><i class="ph ph-chat-circle-dots"></i> Satıcıya Sorulacaklar</div>
      <p style="color: var(--text-card-muted); font-size: 0.88rem; margin-top: 8px;">
        Satıcıyla konuşurken kanıt isteyeceğiniz ${report.questionsForSeller.length} somut soru.
      </p>
    </div>

    <!-- 10. Teknik Özellikler -->
    <div class="dark-card report-card" onclick="openModalReader('Teknik Özellikler', \`${Object.entries(report.specs).map(([k,v]) => '<b>' + k + ':</b> ' + v).join('<br>')}\`, 'cyan')">
      <span class="badge-tag badge-cyan"><i class="ph ph-cpu"></i> Fabrika Verileri</span>
      <div class="dark-card-title"><i class="ph ph-gauge"></i> Teknik Özellikler</div>
      <p style="color: var(--text-card-muted); font-size: 0.88rem; margin-top: 8px;">
        Motor, Tork, Vites Oranları ve Performans verileri doğrulanmıştır.
      </p>
    </div>
  `;

  renderChatbotHistory();
}

// 5. Fullscreen Report Modal Reader (Mobile Friendly Touch Reader)
function initModalReader() {
  const modal = document.getElementById("modalReader");
  const closeBtn = document.getElementById("modalCloseBtn");

  closeBtn.addEventListener("click", closeModalReader);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModalReader();
  });
}

function openModalReader(title, bodyHtml, badgeType) {
  const modal = document.getElementById("modalReader");
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalBody").innerHTML = bodyHtml;
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModalReader() {
  const modal = document.getElementById("modalReader");
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

// 6. Chatbot Controller
function initChatbot() {
  const sendBtn = document.getElementById("btnSendChat");
  const inputEl = document.getElementById("inputChat");

  sendBtn.addEventListener("click", sendChatMessage);
  inputEl.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendChatMessage();
  });
}

function sendChatMessage() {
  const inputEl = document.getElementById("inputChat");
  const text = inputEl.value.trim();
  if (!text) return;

  inputEl.value = "";
  torkAi.answerChatbot(text);
  renderChatbotHistory();
}

function renderChatbotHistory() {
  const chatMessages = document.getElementById("chatMessages");
  if (!chatMessages) return;

  chatMessages.innerHTML = torkAi.chatHistory.map(m => `
    <div class="chat-bubble ${m.sender}">
      ${m.text}
    </div>
  `).join('');

  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// 7. Keşfet (Discover Reels) Loader
function initDiscoverReels() {
  const container = document.getElementById("discoverReelsContainer");
  if (!container) return;

  container.innerHTML = DISCOVER_REELS.map(r => `
    <div class="reel-card">
      <div class="reel-image-box">
        <img src="${r.image}" alt="${r.title}" />
        <span class="reel-badge"><i class="ph ph-lightning"></i> ${r.badge}</span>
      </div>
      <div class="reel-body">
        <h3 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700; margin-bottom: 4px;">${r.title}</h3>
        <p style="color: var(--text-card-muted); font-size: 0.85rem; margin-bottom: 12px;">${r.subtitle}</p>
        <p style="font-size: 0.9rem; color: #CBD5E1; margin-bottom: 16px; line-height: 1.5;">${r.summary}</p>
        <button class="btn-primary" style="padding: 10px 16px; font-size: 0.9rem;" onclick="loadVariantInQuery('${r.linkBrand}', '${r.linkModel}')">
          <i class="ph ph-magnifying-glass"></i> Bu Aracı Sorgula
        </button>
      </div>
    </div>
  `).join('');
}

// Jump from Discover or Classifieds into Sorgula tab
function loadVariantInQuery(brand, model) {
  document.getElementById("selectBrand").value = brand;
  onBrandChange();
  document.getElementById("selectModel").value = model;
  onModelChange();

  // Switch tab to Sorgula
  document.querySelector('.nav-item[data-tab="sorgula"]').click();
  runVehicleInspection();
}

// 8. İlanlar (Classifieds) Loader
function initClassifieds() {
  const container = document.getElementById("classifiedsContainer");
  if (!container) return;

  container.innerHTML = CLASSIFIEDS_DATA.map(item => `
    <div class="listing-card">
      <img src="${item.image}" alt="${item.title}" class="listing-thumb" />
      <div class="listing-content">
        <div>
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
            ${item.hasAiReport ? '<span class="badge-tag badge-cyan"><i class="ph ph-robot"></i> AI Analizi Hazır</span>' : '<span class="badge-tag badge-amber">Yeni İlan</span>'}
            <span style="font-size: 0.8rem; color: var(--text-card-muted);">${item.city}</span>
          </div>
          <h3 style="font-family: var(--font-heading); font-size: 1.15rem; font-weight: 700;">${item.title}</h3>
          <p style="color: var(--text-card-muted); font-size: 0.85rem; margin-top: 4px;">${item.km} • ${item.trans} • ${item.fuel}</p>
          <div class="listing-price">${item.price}</div>
        </div>
        <div style="margin-top: 16px;">
          <button class="btn-primary" style="padding: 10px 16px; font-size: 0.85rem; width: 100%;" onclick="loadVariantInQuery('${item.brand}', '${item.model}')">
            <i class="ph ph-shield-check"></i> TorkScout İntelligence Raporunu Aç
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// 9. Paketler (Pricing Tiers) Loader
function initPackages() {
  const container = document.getElementById("packagesContainer");
  if (!container) return;

  container.innerHTML = PACKAGES_DATA.map(p => `
    <div class="plan-card ${p.featured ? 'featured' : ''}">
      <div>
        <span class="badge-tag ${p.featured ? 'badge-amber' : 'badge-cyan'}">${p.badge}</span>
        <h3 style="font-family: var(--font-heading); font-size: 1.5rem; font-weight: 800; margin-top: 8px;">${p.name}</h3>
        <div class="plan-price">${p.price} <span style="font-size: 0.9rem; font-weight: 400; color: var(--text-card-muted);">${p.period}</span></div>
        <p style="color: var(--accent-cyan); font-size: 0.85rem; font-weight: 600; margin-bottom: 16px;">${p.quota}</p>
        <ul class="plan-features">
          ${p.features.map(f => `<li><i class="ph ph-check-circle"></i> ${f}</li>`).join('')}
        </ul>
      </div>
      <button class="${p.featured ? 'btn-primary' : 'custom-select'}" style="text-align: center; text-decoration: none;" onclick="alert('${p.name} paketi seçildi.')">
        ${p.buttonText}
      </button>
    </div>
  `).join('');
}

// 10. Tork Scout Club (Community Forum)
function initClub() {
  const container = document.getElementById("clubContainer");
  if (!container) return;

  renderClubThreads();

  document.getElementById("btnPostComment").addEventListener("click", () => {
    const input = document.getElementById("inputClubComment");
    const text = input.value.trim();
    if (!text) return;

    CLUB_THREADS[0].comments.push({
      author: "Efe Güven (Siz)",
      userNum: "TS-2608-000001",
      roleBadge: "ÜYE",
      planBadge: "YETKİN",
      time: "Şimdi",
      text: text
    });

    input.value = "";
    renderClubThreads();
  });
}

function renderClubThreads() {
  const container = document.getElementById("clubContainer");
  if (!container) return;

  container.innerHTML = CLUB_THREADS.map(t => `
    <div class="club-thread">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <strong style="color: var(--accent-cyan); font-size: 0.95rem;">${t.author}</strong>
          <span style="font-size: 0.75rem; color: var(--text-card-muted);">${t.userNum}</span>
          <span class="user-badge badge-mod">${t.roleBadge}</span>
          <span class="user-badge badge-pro">${t.planBadge}</span>
        </div>
        <span style="font-size: 0.75rem; color: var(--text-card-muted);">${t.time}</span>
      </div>
      <h3 style="font-family: var(--font-heading); font-size: 1.2rem; font-weight: 700; margin-bottom: 8px;">${t.title}</h3>
      <p style="font-size: 0.9rem; color: #CBD5E1; line-height: 1.5; margin-bottom: 16px;">${t.content}</p>

      <!-- Comments List -->
      <div style="background: rgba(15, 23, 42, 0.6); padding: 14px; border-radius: var(--radius-md); border-left: 3px solid var(--accent-cyan);">
        <h4 style="font-size: 0.85rem; color: var(--text-card-muted); margin-bottom: 10px;">Topluluk Yorumları (${t.comments.length})</h4>
        ${t.comments.map(c => `
          <div style="margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 8px;">
            <div style="display: flex; align-items: center; gap: 6px; font-size: 0.8rem; margin-bottom: 2px;">
              <strong style="color: white;">${c.author}</strong>
              <span style="color: var(--text-card-muted); font-size: 0.7rem;">${c.userNum}</span>
              <span class="user-badge badge-pro">${c.planBadge}</span>
              <span style="color: var(--text-card-muted); font-size: 0.7rem; margin-left: auto;">${c.time}</span>
            </div>
            <p style="font-size: 0.85rem; color: #E2E8F0;">${c.text}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}
