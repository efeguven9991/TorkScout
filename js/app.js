// TorkScout Main UI Controller & Screenshot Replica Renderer

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initVariantSelectors();
  renderFeaturedListings();
  renderSubscriptionPackages();
  renderOneTimePackages();
  initModalReader();
  initChatbot();

  // Load default preset vehicle (Volkswagen Golf 7 2016 1.6 TDI DSG) on load
  document.getElementById("selectBrand").value = "Volkswagen";
  onBrandChange();
});

// Navigation Link Switcher
function initNav() {
  const links = document.querySelectorAll(".header-nav-link");
  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = link.getAttribute("data-tab");
      links.forEach(l => l.classList.remove("active"));
      link.classList.add("active");

      if (target === "sorgula") {
        window.scrollTo({ top: 200, behavior: "smooth" });
      } else if (target === "paketler") {
        const el = document.getElementById("tab-paketler");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else if (target === "ilanlar") {
        const el = document.getElementById("featuredListingsContainer");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

// Cascading Selectors for 8 Dropdowns
function initVariantSelectors() {
  const brandSel = document.getElementById("selectBrand");

  brandSel.innerHTML = `<option value="">Seçiniz...</option>`;
  Object.keys(CAR_DATABASE).forEach(b => {
    brandSel.innerHTML += `<option value="${b}">${b}</option>`;
  });

  brandSel.addEventListener("change", onBrandChange);
  document.getElementById("selectModel").addEventListener("change", onModelChange);
  document.getElementById("selectYear").addEventListener("change", onYearChange);
  document.getElementById("btnInspectCar").addEventListener("click", runVehicleInspection);
}

function onBrandChange() {
  const brand = document.getElementById("selectBrand").value;
  const modelSel = document.getElementById("selectModel");

  modelSel.innerHTML = `<option value="">Seçiniz...</option>`;
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

  yearSel.innerHTML = `<option value="">Seçiniz...</option>`;
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
  document.getElementById("selectBody").innerHTML = `<option value="">Seçiniz...</option>`;
  document.getElementById("selectEngine").innerHTML = `<option value="">Seçiniz...</option>`;
  document.getElementById("selectFuel").innerHTML = `<option value="">Seçiniz...</option>`;
  document.getElementById("selectTrans").innerHTML = `<option value="">Seçiniz...</option>`;
  document.getElementById("selectTrim").innerHTML = `<option value="">Seçiniz...</option>`;
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

    if (data.Kasa) {
      data.Kasa.forEach(k => bodySel.innerHTML += `<option value="${k}">${k}</option>`);
      bodySel.selectedIndex = 1;
    }
    if (data.Motor) {
      data.Motor.forEach(e => engineSel.innerHTML += `<option value="${e}">${e}</option>`);
      engineSel.selectedIndex = 1;
    }
    if (data.Yakıt) {
      data.Yakıt.forEach(f => fuelSel.innerHTML += `<option value="${f}">${f}</option>`);
      fuelSel.selectedIndex = 1;
    }
    if (data.Şanzıman) {
      data.Şanzıman.forEach(t => transSel.innerHTML += `<option value="${t}">${t}</option>`);
      transSel.selectedIndex = 1;
    }
    if (data.Donanım) {
      data.Donanım.forEach(d => trimSel.innerHTML += `<option value="${d}">${d}</option>`);
      trimSel.selectedIndex = 1;
    }
  }
}

// Inspection Runner
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
      <div style="display:flex; align-items:center; gap:8px; font-size:0.85rem; color:#34D399;">
        <span>✓</span> <span>${stepText}</span>
      </div>
    `;
  });

  progressCard.style.display = "none";
  reportResults.style.display = "block";

  renderReport(report);
}

// Render Report Cards Grid
function renderReport(report) {
  document.getElementById("reportTitle").innerText = report.title;

  const grid = document.getElementById("reportGrid");
  grid.innerHTML = `
    <div class="dark-card report-card" onclick="openModalReader('Bu Araç Nasıl Bir Otomobil?', \`${report.character}\`)">
      <div class="dark-card-title">🚗 Bu Araç Nasıl Bir Otomobil?</div>
      <p style="color: #94A3B8; font-size: 0.88rem;">${report.character.substring(0, 140)}...</p>
    </div>

    <div class="dark-card report-card" onclick="openModalReader('Güçlü Nedenler', \`${report.strengths.join('<br>')}\`)">
      <div class="dark-card-title">⭐ Güçlü Nedenler</div>
      <ul style="color: #94A3B8; font-size: 0.88rem; padding-left: 16px;">
        ${report.strengths.slice(0, 2).map(s => `<li>${s}</li>`).join('')}
      </ul>
    </div>

    <div class="dark-card report-card" onclick="openModalReader('Bilinecek Tavizler', \`${report.compromises.join('<br>')}\`)">
      <div class="dark-card-title">⚠️ Bilinecek Tavizler</div>
      <ul style="color: #94A3B8; font-size: 0.88rem; padding-left: 16px;">
        ${report.compromises.slice(0, 2).map(c => `<li>${c}</li>`).join('')}
      </ul>
    </div>

    <div class="dark-card report-card" onclick="openModalReader('Ekspertiz Kontrol Listesi', \`${report.checklist.join('<br>')}\`)">
      <div class="dark-card-title">🛠️ Ekspertiz Kontrol Listesi</div>
      <p style="color: #94A3B8; font-size: 0.88rem;">${report.checklist[0]}</p>
    </div>
  `;

  renderChatbotHistory();
}

// Render 8 Featured Listings Grid
function renderFeaturedListings() {
  const container = document.getElementById("featuredListingsContainer");
  if (!container) return;

  container.innerHTML = FEATURED_LISTINGS.map(item => `
    <div class="listing-card-dark" onclick="inspectFeaturedListing('${item.brand}')">
      <img src="${item.image}" alt="${item.title}" class="listing-card-img" />
      <div class="listing-card-body">
        <div>
          <div class="listing-meta">${item.yearCity}</div>
          <h3 class="listing-title">${item.title}</h3>
          <div class="listing-km">${item.km}</div>
        </div>
        <div class="listing-price-row">
          <div class="listing-price-val">${item.price}</div>
          <div class="listing-brand-tag">${item.brand}</div>
        </div>
      </div>
    </div>
  `).join('');
}

function inspectFeaturedListing(brand) {
  document.getElementById("selectBrand").value = brand;
  onBrandChange();
  window.scrollTo({ top: 200, behavior: "smooth" });
  runVehicleInspection();
}

// Render 3 Subscription Packages
function renderSubscriptionPackages() {
  const container = document.getElementById("subscriptionPackagesContainer");
  if (!container) return;

  container.innerHTML = SUBSCRIPTION_PACKAGES.map(pkg => `
    <div class="plan-card-dark ${pkg.isPopular ? 'popular' : ''}">
      ${pkg.topBadge ? `<div class="popular-badge-top">${pkg.topBadge}</div>` : ''}
      <div>
        <span class="plan-badge-pill">${pkg.badge}</span>
        <h3 class="plan-title">${pkg.name}</h3>
        <div class="plan-price-num">${pkg.price} <span>${pkg.period}</span></div>
        
        <ul class="plan-feature-list">
          ${pkg.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
      </div>
      
      <button class="${pkg.isPopular ? 'btn-orange-lg' : 'btn-card-outline'}" style="margin-top:20px;" onclick="alert('${pkg.name} seçildi.')">
        ${pkg.buttonText}
      </button>
    </div>
  `).join('');
}

// Render 3 One-Time Buyer Packages
function renderOneTimePackages() {
  const container = document.getElementById("oneTimePackagesContainer");
  if (!container) return;

  container.innerHTML = ONE_TIME_BUYER_PACKAGES.map(pkg => `
    <div class="plan-card-dark ${pkg.isPopular ? 'popular' : ''}">
      ${pkg.topBadge ? `<div class="popular-badge-top">${pkg.topBadge}</div>` : ''}
      <div>
        <span class="plan-badge-pill">${pkg.badge}</span>
        <h3 class="plan-title">${pkg.title}</h3>
        <div class="plan-price-num">${pkg.price} <span>${pkg.period}</span></div>
        
        <ul class="plan-feature-list">
          ${pkg.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
      </div>
      
      <button class="${pkg.isPopular ? 'btn-orange-lg' : 'btn-card-outline'}" style="margin-top:20px;" onclick="alert('${pkg.title} satın alınıyor.')">
        ${pkg.buttonText}
      </button>
    </div>
  `).join('');
}

// Modal Reader
function initModalReader() {
  const modal = document.getElementById("modalReader");
  const closeBtn = document.getElementById("modalCloseBtn");
  closeBtn.addEventListener("click", () => modal.classList.remove("active"));
}

function openModalReader(title, body) {
  const modal = document.getElementById("modalReader");
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalBody").innerHTML = body;
  modal.classList.add("active");
}

// Chatbot
function initChatbot() {
  document.getElementById("btnSendChat").addEventListener("click", sendChatMessage);
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
    <div style="align-self: ${m.sender === 'user' ? 'flex-end' : 'flex-start'}; background: ${m.sender === 'user' ? 'linear-gradient(135deg, #FF6B00, #E65100)' : '#152238'}; padding: 10px 14px; border-radius: 10px; font-size: 0.88rem; max-width: 85%;">
      ${m.text}
    </div>
  `).join('');
}
