const b = document.querySelector('#btn-cancel');
b.addEventListener("mouseenter", change);

function change() {
    b.style.display = 'block';
    b.style.position = 'absolute';
    var i = Math.floor(Math.random()*500)+1;
    var j = Math.floor(Math.random()*500)+1;
    b.style.left = i+"px";
    b.style.top = j+"px";
}

let step = 0;
const content = document.querySelector('#content');
const txt1 = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when';
const txt2 = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when222';
const txt3 = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when333';
const txt4 = 'texto 4';
const txt5 = 'texto 5';
const wrapper = document.querySelector('.wrapper');
const progressBar = document.querySelector('#progress-bar');
content.innerHTML = txt1;

function nextStep() {
    step ++;
    if (step == 1) {
        content.innerHTML = txt2
    } else if (step == 2) {
        content.innerHTML = txt3
    } else if (step == 3) {
        content.innerHTML = txt4
    } else if (step == 4) {
        content.innerHTML = txt5
    } else if (step >= 5) {
        wrapper.classList.remove('d-none');
    }
}


