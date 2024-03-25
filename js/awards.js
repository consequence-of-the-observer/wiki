var awards = {
    "welcome_home": false,
    "norse_mythology": false,
    "lost_era": false,
    "first_attempt": false
};

function checkAwards() {
    let find = localStorage.getItem("awards");
    let parseFind = JSON.parse(find);
    for(let i in awards) {
        if(find === null) {
            awards[i] = false;
        }else if(parseFind[i] === null) {
            awards[i] = false;
        }else {
            awards[i] = parseFind[i];
            console.log("yo");
        }
    }

    updateAwards();
}

function updateAwards() {
    localStorage.removeItem("awards");
    localStorage.setItem("awards", JSON.stringify(awards));
}