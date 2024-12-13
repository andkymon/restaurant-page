function loadAbout() {
    const about = document.createElement("div");
    
    const abouth1 = document.createElement("h1");
    const aboutDiv = document.createElement("div");


    abouth1.textContent = "About Mugen";
    aboutDiv.classList.add("info");
    aboutDiv.append(
        `At Mugen, we believe in the infinite possibilities of flavor. 
        Founded in 2023, our journey began with a simple goal: to 
        blend the artistry of traditional Japanese sushi with 
        bold, modern creativity. Inspired by the word "Mugen," 
        meaning "infinity," we’re proud to serve dishes that 
        reflect our passion for quality and innovation.`,
        document.createElement("br"),
        `Join us and experience sushi like never before—crafted 
        with care, creativity, and boundless imagination.`
    );
    about.append(abouth1, aboutDiv);

    //Attribution 
    const attributionDiv = document.createElement("div");
    const attributionSpan = document.createElement("span");
    const author = document.createElement("a");
    const site = document.createElement("a");
    author.setAttribute("href", "https://unsplash.com/@kazuo513");
    author.textContent = "Kazuo Ota";
    site.setAttribute("href", "https://unsplash.com");
    site.textContent = "Unsplash";
    attributionSpan.append("Photo by ", author, " on ", site);
    attributionDiv.append(attributionSpan);
    attributionDiv.setAttribute("id", "attribution");
    about.append(attributionDiv);
    
    //Append #contact div to #content div
    const content = document.querySelector("#content");
    about.classList.add("page");
    about.setAttribute("id", "about");
    content.append(about);
};

export default loadAbout;