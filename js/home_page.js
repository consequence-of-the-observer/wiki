function homePage() {
    checkAwards();
    updateAwards();
    selectMods();
    welcomeHome();
}

function welcomeHome() {
    if(awards["welcome_home"] === false) {
        awards["welcome_home"] = true;
        localStorage.setItem("awards", JSON.stringify(awards));
    }
}