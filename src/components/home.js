
export default function home() {
    //horrible stuff, go to the next project but never do this shit again.
    const div = () => document.createElement("div");
    const home = div();
    const background = div();
    const title = div();
    const subtitle = div();
    const subtitleChefs = div();
    const desc = div();
    const chefs = div();
    const portrait = div();
    const descContainer = div();
    const chefName = div();
    const descCarmy = div();
    const portraitSydney = div();
    const descContainerSydney = div();
    const chefNameSydney = div();
    const descSydney = div();

    home.classList.add("home");
    background.classList.add("background");
    title.classList.add("title");
    subtitle.classList.add("subtitle");
    desc.classList.add("desc");
    subtitleChefs.classList.add("subtitle");
    chefs.classList.add("chefs");
    portrait.classList.add("portrait");
    descContainer.classList.add("desc-container");
    chefName.classList.add("chef-name");
    descCarmy.classList.add("desc-carmy");
    portraitSydney.classList.add("portrait");
    portraitSydney.classList.add("sydney");
    descContainerSydney.classList.add("desc-container");
    descContainerSydney.classList.add("sydney");
    chefNameSydney.classList.add("chef-name");
    descSydney.classList.add("desc-sydney");

    subtitle.textContent = "A different menu, everyday.";
    desc.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.";
    subtitleChefs.textContent = "Meet the chefs."
    chefName.textContent = 'Chef Carmen "Bear" Berzatto.';
    chefNameSydney.textContent = 'Sous Chef Sydney "Syd" Adamu.';
    descCarmy.textContent = '"It’s about consistency and being consistent. We can’t operate at a higher level without consistency".';
    descSydney.textContent = '"You are an excellent chef, you are also a piece of shit".';

    background.appendChild(title);

    descContainer.appendChild(chefName);
    descContainer.appendChild(descCarmy);

    descContainerSydney.appendChild(chefNameSydney);
    descContainerSydney.appendChild(descSydney);

    chefs.appendChild(portrait);
    chefs.appendChild(descContainer);
    chefs.appendChild(portraitSydney);
    chefs.appendChild(descContainerSydney);

    home.appendChild(background);
    home.appendChild(subtitle);
    home.appendChild(desc);
    home.appendChild(subtitleChefs);
    home.appendChild(chefs);

    return home;
}

