var mod_contents = {
    "mod1": {
        "title": "Mod 1",
        "taken": false
    },
    "mod2": {
        "title": "Mod 2",
        "taken": false
    },
    "mod3": {
        "title": "Mod 3",
        "taken": false
    },
    "mod4": {
        "title": "Mod 4",
        "taken": false
    },
    "mod5": {
        "title": "Mod 5",
        "taken": false
    }
}

function selectMods() {
    let mod1 = getRandomInt(5);
    console.log(mod1);
    document.getElementById("mod1").innerHTML += '<h1>'+mod_contents["mod"+mod1]["title"]+'</h1>'
    mod_contents["mod"+mod1]["taken"] = true;

    let mod2 = getRandomInt(5);
    console.log(mod2);
    document.getElementById("mod2").innerHTML += '<h1>'+mod_contents["mod"+mod2]["title"]+'</h1>'
    mod_contents["mod"+mod2]["taken"] = true;

    let mod3 = getRandomInt(5);
    console.log(mod3);
    document.getElementById("mod3").innerHTML += '<h1>'+mod_contents["mod"+mod3]["title"]+'</h1>'
    mod_contents["mod"+mod3]["taken"] = true;
}

function getRandomInt(max) {
    let num = Math.floor(Math.random() * max)+1;

    while(mod_contents["mod"+num]["taken"] === true) {
        num = Math.floor(Math.random() * max)+1;
    }

    return num;
}