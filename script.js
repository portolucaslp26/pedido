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
const txt1 = 'Desenvolvi este pequeno sistema para lhe apresentar algumas propostas, onde você terá o livre arbítrio para decidir se aceita ou não. Preparada?';
const txt2 = 'Quer se juntar a mim em um compromisso eterno de amor e lealdade como marido e mulher?';
const txt3 = 'Vamos selar nossa união com um sim no altar e construir uma vida juntos?';
const txt4 = 'Quer se tornar minha esposa e passar o resto de nossos dias juntos como parceiros?';
const txt5 = 'Vamos compartilhar todos os altos e baixos da vida como marido e esposa?';
const txt6 = 'Quer construir uma família (Pets e Lorenzo) juntos como marido e mulher?';
const txt7 = 'Se você está lendo esta última mensagem, é porque você tem fé em nosso amor e no nosso futuro juntos, <br> Parabéns!!'
const wrapper = document.querySelector('.wrapper');
const progressBar = document.querySelector('#progress-bar');
content.innerHTML = txt1;

function nextStep() {
    step ++;
    if (step == 1) {
        content.innerHTML = txt2
        progressBar.style.width = '16%'
    } else if (step == 2) {
        content.innerHTML = txt3
        progressBar.style.width = '32%'
    } else if (step == 3) {
        content.innerHTML = txt4
        progressBar.style.width = '48%'
        progressBar.classList.add('bg-success')
    } else if (step == 4) {
        content.innerHTML = txt5
        progressBar.style.width = '64%'
        progressBar.classList.add('bg-warning')
    } else if (step == 5) {
        content.innerHTML = txt6
        progressBar.style.width = '80%'
        progressBar.classList.add('bg-warning')
    } else if (step >= 6) {
        wrapper.classList.remove('d-none');
        progressBar.style.width = '100%'
        progressBar.classList.add('bg-danger')
        content.innerHTML = txt7
    }
}


