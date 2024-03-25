function selectMods() {
    let mod1 = getRandomInt(Object.keys(mod_contents).length);
    console.log(mod1);
    document.getElementById("mod1").innerHTML += '<img src='+mod_contents["mod"+mod1]["logo"]+'>'
    mod_contents["mod"+mod1]["taken"] = true;

    let mod2 = getRandomInt(Object.keys(mod_contents).length);
    console.log(mod2);
    document.getElementById("mod2").innerHTML += '<img src='+mod_contents["mod"+mod2]["logo"]+'>'
    mod_contents["mod"+mod2]["taken"] = true;

    let mod3 = getRandomInt(Object.keys(mod_contents).length);
    console.log(mod3);
    document.getElementById("mod3").innerHTML += '<img src='+mod_contents["mod"+mod3]["logo"]+'>'
    mod_contents["mod"+mod3]["taken"] = true;
}

function getRandomInt(max) {
    let num = Math.floor(Math.random() * max)+1;

    while(mod_contents["mod"+num]["taken"] === true) {
        num = Math.floor(Math.random() * max)+1;
    }

    return num;
}