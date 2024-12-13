function loadHome() {
    const home = document.createElement("div");
    const headline = document.createElement("h1");
    headline.textContent = "Flavors That Evolve Without End.";
    home.append(headline);
    
    //Attribution 
    const attributionDiv = document.createElement("div");
    const attributionSpan = document.createElement("span");
    const author = document.createElement("a");
    const site = document.createElement("a");
    author.setAttribute("href", "https://unsplash.com/@ahtziri");
    author.textContent = "Ahtziri Lagarde";
    site.setAttribute("href", "https://unsplash.com");
    site.textContent = "Unsplash";
    attributionSpan.append("Photo by ", author, " on ", site);
    attributionDiv.append(attributionSpan);
    attributionDiv.setAttribute("id", "attribution");
    home.append(attributionDiv);
    
    //Append #home div to #content div
    const content = document.querySelector("#content");
    home.classList.add("page");
    home.setAttribute("id", "home");
    content.append(home);
};

export default loadHome;