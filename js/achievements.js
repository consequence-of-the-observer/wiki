var achievements = {
    "welcome_home": false
}

function checkAchievements() {
    let find = localStorage.getItem("awards");
    let parseFind = JSON.parse(find);
    for(let i in achievements) {
        if(find === null) {
            achievements[i] = false;
        }else if(parseFind[i] === null) {
            achievements[i] = false;
        }else {
            achievements[i] = parseFind[i];
            console.log("yo");
        }
    }
}

function giveAchievement(award, console_message) {
    if(achievements[award] === false) {
        achievements[award] = true;
        console.log(console_message);
    }
}

function updateAchievements() {
    localStorage.setItem("awards", JSON.stringify(achievements));
}