let bchurch = document.querySelector(".bchurch"), 
    church = document.querySelector("church"),
    bclassroom = document.querySelector(".bclassroom"),
    bcommunity = document.querySelector(".bcommunity"),
    bculture = document.querySelector(".bculture"),
    bcourt = document.querySelector(".bcourt"),
    btnwrapper = document.querySelector(".btnwrap"),
    wrapper = document.querySelector(".mainwrap"),
    p1 = document.querySelector(".p1"),
    p2 = document.querySelector(".p2"),
    tbox1 = document.querySelector(".tbox1"),
    tbox2 = document.querySelector(".tbox2"),
    lbox1 = document.querySelector(".lbox1"),
    lbox2 = document.querySelector(".lbox2"),
    bbox = document.querySelector(".btnbox"),
    linkStyle = document.getElementById('linkstyle'),
    styler = document.head.appendChild(document.createElement("style"));
    bgMusic = new Audio("./assets/music/church.ogg");

bgMusic.addEventListener("ended", repeatBg);
bgMusic.volume = 0.1;

// document.addEventListener("load", () => 
//     setTimeout(function(){
//         document.getElementById("preloader").style.opacity = 0;
//         // document.getElementById("preloader").style.display = "none";
//         // document.getElementById("preloader").style.visibility = "hidden";
//         document.getElementById("preloader").style.zIndex = -3;
//         document.removeEventListener("load", setTimeout(deload, 2000));
//     }, 2000)
// );

function repeatBg(e) {
    e.target.currentTime = 0;
    e.target.play();
}

function playBg(n) {
    bgMusic.pause();
    switch(n) {
        case 1:
            bgMusic = new Audio("./assets/music/church.ogg");
            break;
        case 2:
            bgMusic = new Audio("./assets/music/classroom.ogg");
            break;
        case 3:
            bgMusic = new Audio("./assets/music/culture.ogg");
            break;
        case 4:
            bgMusic = new Audio("./assets/music/community.ogg");
            break;
        case 5:
            bgMusic = new Audio("./assets/music/court.ogg");
            break;
    }
    bgMusic.play();
    bgMusic.volume = 0.08;
}

bchurch.addEventListener("click", function() {
    if (bbox.textContent == "GO☨BACK") {
        bboxfunc() //go back function
    }
    else {
        linkStyle.href = "./stylers/church.css"; 
        bchurch.classList.add("selected");
        bbox.textContent = "GO☨BACK";
        lbox1.textContent = "Points in total: 9 points";
        lbox2.textContent = "Entries in total: 8 entries";
        lbox1.style.fontWeight = "1";
        tbox1.innerHTML = "&nbsp&nbsp&nbsp&nbspThe first C is Church! This records all religious events I've attended within the semester that helped shape my spiritual well-being, faith, and devotion to God. The activities included in this portion can range from religious masses, fellowship services, worship services, devotions, and other more eucharistic celebrations. In order to see my events, press the 'GO' button displayed on the left!"
        tbox2.style.fontSize = "13.5px";
        tbox2.innerHTML = "FUN FACTS ABOUT SU CHURCH: <br /> <ul> <li> It is the tallest building of the university </li> <li> It is a protestant church </li> <li> Its view of the sunrise is not obstructed by anything </li> </ul>"
        playBg(1);
    }
});

bclassroom.addEventListener("click", function() {
    if (bbox.textContent == "GO✓BACK") {
        bboxfunc()
    }
    else {
        linkStyle.href = "./stylers/classroom.css"; 
        bbox.textContent = "GO✓BACK";
        lbox1.textContent = "Total Points: 9";
        lbox2.textContent = "Total Entries: 8";
        lbox1.style.fontWeight = "1";
        tbox1.innerHTML = "&nbsp&nbsp&nbsp&nbspThe second C is classroom! This promotes education and learning as it is the central core of any school in the world. Events under classroom enhances and improves our knowledge and mental prowess so that we could put it to good use in the future! In order to view my classroom events, press the 'GO' button on the left!"
        tbox2.innerHTML = "The Activities Under Classroom can be as follows: <br /> <ul> <li> Lectures, and sypmosiums </li> <li> orientations and discussions </li> <li> workshops and talks </li> <li> classroom activities and educational activities </li> </ul>"
        tbox2.style.fontSize = "21px";
        playBg(2);
    }
});

bcommunity.addEventListener("click", function() {
    if (bbox.textContent == "GO⚧BACK") {
        bboxfunc()
    }
    else {
        linkStyle.href = "./stylers/community.css"; 
        bbox.textContent = "GO⚧BACK";
        lbox1.textContent = "About Community:";
        lbox2.textContent = "Activities under Community:";
        lbox1.style.fontWeight = "1";
        tbox1.innerHTML = "&nbsp&nbsp&nbsp&nbspActivities and events under community can include anything related to community service. This includes fundraiser events that collects funds for a greater cause. Outreaches that gives you the chance to directly connect and serve a certain community. Even donations and white gift distributions can be included under community."
        tbox2.innerHTML = "&nbsp&nbsp&nbsp&nbspThe fourth C is community! It covers community service events that promote good advocacies and practice beneficial events that helps out different communities and allows us to connect to them more and be with them. There are a total of 8 entries and 8 points total for this journal portion. If you want to see the events for community, Press the 'GO' button displayed at the bottom right!"
        tbox2.style.fontSize = "16px";
        playBg(4);
    }
});

bculture.addEventListener("click", function() {
    if (bbox.textContent == "GO⍟BACK") {
        bboxfunc()
    }
    else {
        linkStyle.href = "./stylers/culture.css"; 
        bbox.textContent = "GO⍟BACK";
        lbox1.textContent = "Entry Count: 8 ENTRIES";
        lbox2.textContent = "Point Tally: 12 PTS.";
        lbox1.style.fontWeight = "1";
        tbox1.innerHTML = "&nbsp&nbsp&nbsp&nbspThe third C is culture! The C with one of tne of the most colorful, intriguing, fun and unique events that are part of the culture of the place that can also promote culture of anything whether it may be of other countries or even organizations and communities. If you want to look at the events, navigate to the 'GO' button displayed at the bottom!"
        tbox2.innerHTML = "The Events inside Culture can be as follows: <br /> <ul> <li> Festivals and Fiestas </li> <li> Parades and Walks </li> <li> Traditional events </li> <li> International events </li> </ul>"
        tbox2.style.fontSize = "20px";
        playBg(3);
    }
});

bcourt.addEventListener("click", function() {
    if (bbox.textContent == "GO◍BACK") {
        bboxfunc()
    }
    else {
        linkStyle.href = "./stylers/court.css"; 
        bbox.textContent = "GO◍BACK";
        lbox1.textContent = "EXAMPLES OF SPORTS IN SILLIMAN ARE: ";
        lbox1.style.fontWeight = "550";
        lbox2.textContent = "Basketball, Badminton, Chess, Volleyball, Swimming, Softball, Football, E-Sports, etc. ";
        tbox1.innerHTML = "&nbsp&nbsp&nbsp&nbspVENUES IN SILLIMAN UNIVERSITY FOR SPORT EVENTS: <br /> <ul> <li> RAVELLO BALLFIELD </li> <li> CIMAFRANCA BALLFIELD </li> <li> ALASKA COURT </li> <li> LAWN TENNIS COURT </li> <li> SHAW MEMORIAL POOL </li> <li> MONAPIL COURT </li> </ul>"
        tbox2.innerHTML = "&nbsp&nbsp&nbsp&nbspThe fiftth C is Court! It refers to the usual venue and place of most sports and physical competitions that promotes sportsmanship, excellenece, skill, teamwork, physical ability and strategy all in one! The Court portion of my journal has a total of 7 entries and 8s points. If you want my different sports events to be shown, press the 'GO' button on the right!"
        tbox2.style.fontSize = "18px";
        playBg(5);
    }
});

bbox.addEventListener("click", bboxfunc);

function bboxfunc() {
    if (bbox.textContent == "ABOUT ME") {
        window.location.href = "./about/index.htm";
    }
    else {
        linkStyle.href = "./stylers/goback.css";
        bbox.textContent = "ABOUT ME";
        lbox1.textContent = "Made by: Baxter Bao-As GE10A-O © 2023";
        lbox2.textContent = "Welcome to my WPE Online Journal! where fun comes alive!";
        tbox1.innerHTML = "&nbsp&nbsp&nbsp&nbspIn this Online Journal, you'll be able to discover and view events that I've participated in and experienced that helped shape me as a person. This helps me live and practice the 5 Cs of Silliman University. In order to see these events per C, navigate through the buttons in the button widget above. If you wanna learn more about me, See 'About Me', Hope you enjoy my online journal! Let the fun commence!";
        tbox2.innerHTML = "";
        lbox1.style.fontWeight = "1";
        bgMusic.pause();
    }
}

//TODO rotate widgetholder 
document.addEventListener("mousemove", function(e){
    let x = e.clientX;
    let y = e.clientY;
    const middleX = window.innerWidth / 2;
    const middleY = window.innerHeight / 2;
    let offsetX = ((x - middleX) / middleX) * 45;
    let offsetY = ((y - middleY) / middleY) * 45;
    roble(offsetX, offsetY, btnwrapper);
});

function roble(x, y, element) {
    element.style.setProperty("--rotX", -1 * y + "deg");
    element.style.setProperty("--rotY", x + "deg");
}
