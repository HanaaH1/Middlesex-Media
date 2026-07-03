// date
document.getElementById("date").innerText = new Date().toDateString();

// sections
const featureSection = document.querySelector(".feature");
const latestSection = document.querySelector(".latest");
const filteredSection = document.getElementById("filteredSection");
const filteredContainer = document.getElementById("filteredContainer");
const filteredTitle = document.getElementById("filteredTitle");

// elements
const navLinks = document.querySelectorAll(".nav a");
const articles = document.querySelectorAll("article");

// NAV CLICK
navLinks.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();

        const category = this.dataset.category;

        // hide homepage sections
        featureSection.style.display = "none";
        latestSection.style.display = "none";

        // show filtered section
        filteredSection.style.display = "block";
        filteredContainer.innerHTML = ""; // clear old results

        // loop through articles
        articles.forEach(article => {
            const articleCategory = article.dataset.category;

            if (category === "All" || articleCategory === category) {
                const clone = article.cloneNode(true);
                filteredContainer.appendChild(clone);
            }
        });
    });
});

// LOGO CLICK → HOME RESET
const homeLogo = document.getElementById("homeLogo");

homeLogo.addEventListener("click", function(event) {
    event.preventDefault();

    // show homepage
    featureSection.style.display = "block";
    latestSection.style.display = "block";

    // hide filtered section
    filteredSection.style.display = "none";
});