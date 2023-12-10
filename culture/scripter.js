//SCRIPTER

let selected = false;
let selectedCard;

function cardSelect(el, iden) {
    if (!selected && document.getElementById(iden).checked == true) {
        el.classList.add("flipped");
        el.classList.remove("hovery");
        document.getElementById("labelwrap").style.visibility = "hidden";
        document.getElementById("entrywrap").style.visibility = "hidden";
        document.querySelector(`.${el.className.split(" ")[2]} .cardA`).classList.add('pstyle1');
        document.querySelector(`.${el.className.split(" ")[2]} .cardB`).classList.add('pstyle1');
        document.querySelector(`.${el.className.split(" ")[2]} .cardC`).classList.add('pstyle1');
        document.querySelector(`.${el.className.split(" ")[2]} .cardD`).classList.add('pstyle1');
        document.querySelector('.fleft').style.backgroundImage = `url(./images/CULTURE/${iden}/pic1.jpg)`;
        document.querySelector('.fright').style.backgroundImage = `url(./images/CULTURE/${iden}/pic2.jpg)`;
        if (iden == 'two') {
            document.querySelector('.fleft').style.backgroundImage = "url(./images/CULTURE/two/pic1.JPG)";
            document.querySelector('.fright').style.backgroundImage = "url(./images/CULTURE/two/pic2.JPG)";
        }
        selectedCard = el;
        selected = true;
    }
    else if(selected && el == selectedCard) {
        el.classList.remove("flipped");
        el.classList.add("hovery");
        document.getElementById("labelwrap").style.visibility = "visible";
        document.getElementById("entrywrap").style.visibility = "visible";
        document.querySelector(`.${el.className.split(" ")[2]} .cardA`).classList.remove('pstyle1');
        document.querySelector(`.${el.className.split(" ")[2]} .cardB`).classList.remove('pstyle1');
        document.querySelector(`.${el.className.split(" ")[2]} .cardC`).classList.remove('pstyle1');
        document.querySelector(`.${el.className.split(" ")[2]} .cardD`).classList.remove('pstyle1');
        document.querySelector('.fleft').style.backgroundImage = `url(./images/black.jpg)`;
        document.querySelector('.fright').style.backgroundImage = `url(./images/black.jpg)`;
        selectedCard = null;
        selected = false;
    }
}

function nextHand(dir, num) {
    if(!selected) {
        switch (dir) {
            case "l":
                document.getElementById('one').checked ? document.querySelector('.cb8').checked = true : document.querySelector(`.cb${--num}`).checked = true;
                break;
            case "r":
                document.getElementById('eight').checked ? document.querySelector('.cb1').checked = true : document.querySelector(`.cb${++num}`).checked = true;
                break;
        }
    }
}