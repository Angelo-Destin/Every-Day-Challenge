const panels = document.querySelectorAll('.panel');
const head = document.querySelector('.header');
const body = document.querySelector('.body');

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        removeActiveHead();
        panel.classList.add('active');
        panel.style.height = "70vh";
    });
});

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    });
}

function removeActiveHead() {
    head.classList.remove('active');
}

head.addEventListener('click', () => {
    removeActiveClasses();
    panels.forEach(panel => {
        panel.style.height = "10vh";
        panel.style.transition = " 0.7s ease-in";
        panel.style.marginTop = "-10px";
    });
    head.classList.add('active');
});