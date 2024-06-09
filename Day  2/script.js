let step = document.querySelectorAll('.step');
let line = document.querySelectorAll('hr');
let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let currentStep = 0;

btn2.addEventListener('click', () => {
    if (currentStep < step.length) {
        step[currentStep].classList.add('active');
        if (currentStep > 0) {
            line[currentStep - 1].classList.add('active');
        }
        currentStep++;
    }
    btn2.classList.add('active');
    btn1.classList.remove('active');
});

btn1.addEventListener('click', () => {
    if (currentStep > 0) {
        currentStep--;
        step[currentStep].classList.remove('active');
        if (currentStep > 0) {
            line[currentStep - 1].classList.remove('active');
        }
    }
    btn1.classList.add('active');
    btn2.classList.remove('active');
});