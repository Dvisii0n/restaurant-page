
export default function menu() {
    const items = [
        { title: "Lemon Chicken Piccata", desc: "Carmy breaks down his piccata recipe step-by-step in one of the show's most hands-on sequences, but sometimes you still want to follow a written recipe. Our Lemon Chicken Piccata uses mostly pantryingredients for a quick 20-minute dinner you can pair with a favorite Caesar salad and a piece of crusty bread." },
        { title: "Sydney's Cola-Braised Short Rib and Risotto", desc: "While Sydney finishes figuring out how to loosen up her soda-based short rib sauce, we can offer you a simpler recipe. These balsamic short ribs let the slow cooker do all the work, so you can have something that tastes like a million bucks without all the work. Pair it with this Basic Risotto for a simple and delicious meal." },
        { title: "Ravioli", desc: "Ravioli are a type of stuffed pasta comprising a filling enveloped in thin pasta dough. Usually served in broth or with a sauce, they originated as a traditional food in Italian cuisine. Ravioli are commonly square, though other forms are also used, including circular and semi-circular." },
        { title: "Italian Beef Sandwich", desc: " The Italian beef sandwich is what the whole show is about. At least that's what it wants you to think until the very end of Season 1." }
    ]

    const div = () => document.createElement("div");
    const menuContainer = div();
    const menuTitle = div();
    const menuCard = div();

    menuContainer.classList.add("menu-container");
    menuTitle.classList.add("menu-title");
    menuCard.classList.add("menu-card");

    menuTitle.textContent = "Today's Menu";

    menuContainer.appendChild(menuTitle);

    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        let currentFoodImg = div();
        currentFoodImg.className = "food"
        currentFoodImg.setAttribute("pos", `${i}`);
        let currentDescContainer = div();
        currentDescContainer.className = "food-desc-container"
        let currentFoodTitle = div();
        currentFoodTitle.className = "food-title";
        let currentFoodDesc = div();
        currentFoodDesc.className = "food-desc";

        currentFoodTitle.textContent = item.title;
        currentFoodDesc.textContent = item.desc;

        currentDescContainer.appendChild(currentFoodTitle);
        currentDescContainer.appendChild(currentFoodDesc);

        menuCard.appendChild(currentFoodImg);
        menuCard.appendChild(currentDescContainer);
    }

    menuContainer.appendChild(menuCard);
    return menuContainer;














}