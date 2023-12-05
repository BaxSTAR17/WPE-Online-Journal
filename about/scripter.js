const rotatecheckVis = new IntersectionObserver(
    (elements) => {
        elements.forEach((element) => {
            if (element.isIntersecting) {
                element.target.classList.add("rotateShow")
            }
        });
    }
);

const stretchcheckVis = new IntersectionObserver(
    (elements) => {
        elements.forEach((element) => {
            if (element.isIntersecting) {
                element.target.classList.add("stretchShow")
            }
        });
    }
);

const spincheckVis = new IntersectionObserver(
    (elements) => {
        elements.forEach((element) => {
            if (element.isIntersecting) {
                element.target.classList.add("spinShow")
            }
        });
    }
);

document.addEventListener("scroll", () => {
    document.querySelector(".backdrop").classList.add("filter");
});

const rotatables = document.querySelectorAll('.constellate');
const stretchables = document.querySelectorAll('.constellator');
const spinnables = document.querySelectorAll('.constie');

rotatables.forEach((el) => rotatecheckVis.observe(el));
stretchables.forEach((el) => stretchcheckVis.observe(el));
spinnables.forEach((el) => spincheckVis.observe(el));