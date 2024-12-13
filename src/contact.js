function loadContact() {
    const contact = document.createElement("div");
    
    const contacth1 = document.createElement("h1");
    const contactDiv = document.createElement("div");
    const hoursh1 = document.createElement("h1");
    const hoursDiv = document.createElement("div");

    contacth1.textContent = "Contact Us";
    contactDiv.classList.add("info");
    contactDiv.append(
        "Address: 123 Sushi Street, Roll City, Foodland 45678",
        document.createElement("br"),
        "Phone: (123) 456-7890",
        document.createElement("br"),
        "Email: hello@sushiworld.com"
    );
    hoursh1.textContent = "Operating Hours";
    hoursDiv.classList.add("info");
    hoursDiv.append(
        "Monday - Friday: 11:00 AM - 9:00 PM",
        document.createElement("br"),
        " Saturday - Sunday: 12:00 PM - 10:00 PM"
    );
    
    contact.append(contacth1, contactDiv, hoursh1, hoursDiv);

    //Attribution 
    const attributionDiv = document.createElement("div");
    const attributionSpan = document.createElement("span");
    const author = document.createElement("a");
    const site = document.createElement("a");
    author.setAttribute("href", "https://unsplash.com/@tamasp");
    author.textContent = "Tamas Pap";
    site.setAttribute("href", "https://unsplash.com");
    site.textContent = "Unsplash";
    attributionSpan.append("Photo by ", author, " on ", site);
    attributionDiv.append(attributionSpan);
    attributionDiv.setAttribute("id", "attribution");
    contact.append(attributionDiv);
    
    //Append #contact div to #content div
    const content = document.querySelector("#content");
    contact.classList.add("page");
    contact.setAttribute("id", "contact");
    content.append(contact);
};

export default loadContact;