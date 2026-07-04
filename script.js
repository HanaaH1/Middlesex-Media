// =====================
// DATE
// =====================
const dateEl = document.getElementById("date");
if (dateEl) {
  dateEl.innerText = new Date().toDateString();
}

// =====================
// ELEMENTS
// =====================
const featureSection = document.querySelector(".feature");
const latestSection = document.querySelector(".latest");
const filteredSection = document.getElementById("filteredSection");
const filteredContainer = document.getElementById("filteredContainer");
const filteredTitle = document.getElementById("filteredTitle");
const articles = document.querySelectorAll("article");

// =====================
// FILTER FUNCTION
// =====================
function showHome() {
  if (!featureSection || !latestSection || !filteredSection) return;

  featureSection.style.display = "block";
  latestSection.style.display = "block";
  filteredSection.style.display = "none";
  filteredContainer.innerHTML = "";
}

function filterArticles(category) {
  if (!featureSection || !latestSection || !filteredSection) return;

  featureSection.style.display = "none";
  latestSection.style.display = "none";
  filteredSection.style.display = "block";
  filteredContainer.innerHTML = "";

  if (filteredTitle) {
    filteredTitle.innerText = category + " News";
  }

  articles.forEach(article => {
    const articleCategory = article.dataset.category;
    if (category === "All" || articleCategory === category) {
      const clone = article.cloneNode(true);
      filteredContainer.appendChild(clone);
    }
  });
}

// =====================
// READ URL HASH (on load + when it changes)
// =====================
function applyFromURL() {
  const hash = window.location.hash.replace("#", "");

  if (!hash) {
    showHome();              // no hash → homepage
  } else {
    filterArticles(hash);    // #Crime → filter
  }
}

window.addEventListener("load", applyFromURL);
window.addEventListener("hashchange", applyFromURL);

// =====================
// LOGO → HOME
// =====================
const homeLogo = document.getElementById("homeLogo");
if (homeLogo) {
  homeLogo.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "index.html"; // clears hash + shows home
  });
}