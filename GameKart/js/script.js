const prun = document.querySelector(".prun");
const obstaculo = document.querySelector(".obstaculo");
let gameover = document.querySelector(".gameover");
var pont = 0;
let score = document.querySelector(".score");



const jump = () => {
    prun.classList.add('jump');
    prun.src = './images/pjump.gif';
    setTimeout (() => {
        prun.src = './images/prun.gif';
        prun.classList.remove('jump');
    }, 700);
}

const loop = setInterval(() => {
    const obsPosition = obstaculo.offsetLeft;
    const prunPosition = +window.getComputedStyle(prun).bottom.replace('px', '');
    let pos = obsPosition;
    score.innerHTML = `Pontuação ${pont}`;

    if (obsPosition <= 110 && obsPosition > 0 && prunPosition < 72){
        obstaculo.style.animation = 'none';
        obstaculo.style.left = `${obsPosition}px`;

        prun.style.animation = 'none';
        prun.style.bottom = `${prunPosition}px`;

        gameover.innerHTML = "VOCÊ PERDEU !";
        
    }
}, 10)
document.addEventListener('keydown', jump);