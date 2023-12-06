//SCRIPTER

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