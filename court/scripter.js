//SCRIPTER
currentDesc = 1;


function selectChoice(btn, el) {
    const choices = document.querySelectorAll(".ans");
    const selects = document.querySelectorAll(".select");
    choices.forEach(function (choice) {
        choice == el ? choice.style.visibility = "visible" : choice.style.visibility = "hidden";
    });
    selects.forEach(function (select) {
        select == btn ? select.classList.add("selected") : select.classList.remove("selected");
    });
}

function nextDesc() {
    const descripts = document.querySelectorAll(".desc");
    const cuts = document.querySelectorAll(".cut");
    const pics = document.querySelectorAll(".abilitypic");
    currentDesc++;
    currentDesc == 5 ? currentDesc = 1 : currentDesc = currentDesc;
    for(i = 0; i < cuts.length; i++) {
        descripts[i] == document.querySelector(`.ab${currentDesc}`) ? descripts[i].style.opacity = 1 : descripts[i].style.opacity = 0;
        cuts[i] == document.querySelector(`.off${currentDesc}`) ? cuts[i].style.opacity = 1 : cuts[i].style.opacity = 0;
        pics[i] == document.querySelector(`.abpic${currentDesc}`) ? pics[i].style.opacity = 1 : pics[i].style.opacity = 0;
        document.querySelector(".abilityico").textContent = `PARAGRAPH ${currentDesc}`;
    }
}
