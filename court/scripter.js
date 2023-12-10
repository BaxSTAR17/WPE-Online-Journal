//SCRIPTER
let currentDesc = 1,
    alt = 0;


function selectChoice(btn, el) {
    const choices = document.querySelectorAll(".ans");
    const selects = document.querySelectorAll(".select");
    const fpics = document.querySelectorAll(".feudpic");
    choices.forEach(function (choice) {
        choice == document.querySelector(`.answer${el}`) ? choice.style.visibility = "visible" : choice.style.visibility = "hidden";
    });
    fpics.forEach(function (fpic) {
        fpic == document.querySelector(`.fp${el}`) ? fpic.style.visibility = "visible" : fpic.style.visibility = "hidden";
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

function shootBall(ball) {
    alt % 2 ? ball.style.animation = "shoot 1.2s linear" : ball.style.animation = "throw 1.2s linear";
    alt++;
}

function collide(a, b) {
    let aRect = a.getBoundingClientRect();
    let bRect = b.getBoundingClientRect();

    return !(
        ((aRect.top + aRect.height) < (bRect.top)) ||
        (aRect.top > (bRect.top + bRect.height)) ||
        ((aRect.left + aRect.width) < bRect.left) ||
        (aRect.left > (bRect.left + bRect.width))
    );
}

addEventListener("load", unloader);

function unloader() {
    document.getElementById("loader").style.display = "none";
}
