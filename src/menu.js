function loadMenu() {
    const menu = document.createElement("div");

    //Headings and Flex containers for each card category 
    const headingsContent = ["Mugen Specialties", "Rolls", "Nigiri"];
    const categoryHeadings = [];
    const cardCategories = [];
    for (let i = 0; i < 3; i++) {
        const categoryHeading = document.createElement("h1");
        categoryHeading.classList.add("category-heading")
        categoryHeading.textContent = headingsContent[i];
        categoryHeadings.push(categoryHeading);

        const cardCategory = document.createElement("div");
        cardCategory.classList.add("card-category");
        cardCategories.push(cardCategory);
    }

    //Entry names
    const dishNameContent = [
        "Kagayaki", "Tenshi", "Sunrise", "Sunset", "Scarlet Ember", 
        "Ruby Tempest", "Crimson Bloom", "Sake", "Maguro", "Ebi", "Unagi"
    ];
    const cardWrappers = [];
    //Cards
    for (let i = 0; i < 11; i++) {
        //Entry name
        const dishName = document.createElement("span");
        dishName.classList.add("dish-name");
        dishName.textContent = dishNameContent[i];
        //Background
        const card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute("id", ("entry" + (i + 1)));
        card.append(dishName);
        //"Order Now" appears on hover
        const order = document.createElement("span");
        order.classList.add("order");
        order.textContent = "Order Now";
        //Wrappers for hover
        const cardWrapper = document.createElement("div");
        cardWrapper.classList.add("card-wrapper");
        cardWrapper.append(order, card);
        cardWrappers.push(cardWrapper);
    }
    
    //Category - Specialties
    for (let i = 0; i < 2; i++) {
        cardCategories[0].append(cardWrappers[i]);
    }
    //Category - Rolls
    for (let i = 2; i < 7; i++) {
        cardCategories[1].append(cardWrappers[i]);
    }
    //Category - Nigiri
    for (let i = 7; i < 11; i++) {
        cardCategories[2].append(cardWrappers[i]);
    }

    //Append each category to #menu div 
    for (let i = 0; i < 3; i++) {
        menu.append(categoryHeadings[i], cardCategories[i]);
    }

    //Attribution 
    const attributionDiv = document.createElement("div");
    const attributionSpan = document.createElement("span");
    const author = document.createElement("a");
    const site = document.createElement("a");
    author.setAttribute("href", "https://unsplash.com/@ahtziri");
    author.textContent = "Ahtziri Lagarde";
    site.setAttribute("href", "https://unsplash.com");
    site.textContent = "Unsplash";
    attributionSpan.append("Photos by ", author, " on ", site);
    attributionDiv.append(attributionSpan);
    attributionDiv.setAttribute("id", "attribution");
    menu.append(attributionDiv);
    
    //Append #menu div to #content div
    const content = document.querySelector("#content");
    menu.classList.add("page");
    menu.setAttribute("id", "menu");
    content.append(menu);
};

export default loadMenu;


