let pic1 = document.querySelector('.pic1');
let pic2 = document.querySelector('.pic2');
let pic3 = document.querySelector('.pic3');
let pic4 = document.querySelector('.pic4');
let pic5 = document.querySelector('.pic5');

function setWidths(activePic) {
    [pic1, pic2, pic3, pic4, pic5].forEach((pic, index) => {
        pic.style.width = (index === activePic) ? "700px" : "100px";
    });
}
function click1() { setWidths(0); }
function click2() { setWidths(1); }
function click3() { setWidths(2); }
function click4() { setWidths(3); }
function click5() { setWidths(4); }