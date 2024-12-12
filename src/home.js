function loadHome() {
    const content = document.querySelector("#content");
    const home = document.createElement("div");
    const headline = document.createElement("h1");
    const attributionDiv = document.createElement("span");
    const attributionSpan = document.createElement("span");
    const author = document.createElement("a");
    const site = document.createElement("a");

    home.setAttribute("id", "home");
    headline.textContent = "Flavors That Evolve Without End.";

    author.setAttribute("href", "https://unsplash.com/@ahtziri");
    author.textContent = "Ahtziri Lagarde";
    site.setAttribute("href", "https://unsplash.com");
    site.textContent = "Unsplash";
    attributionSpan.append("Photo by ", author, " on ", site);
    attributionDiv.append(attributionSpan);
    
    home.append(headline, attributionDiv);
    content.append(home);
};

export default loadHome;