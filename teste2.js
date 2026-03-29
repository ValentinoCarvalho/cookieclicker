const infoMostrada = document.getElementById('h2_voceClicou');
const cookie = document.getElementById('cookieImg');
const reset_button = document.getElementById('button');
var cliqueState = 1;

const powerUps = {

    powerUp2x: {
        state: (false),
        element: document.getElementById('powerUp2x')
    },

    powerUp4x: {
        state: (false),
        element: document.getElementById('powerUp4x')
    },

    powerUp6x: {
        state: (false),
        element: document.getElementById('powerUp6x')
    },

    powerUp8x: {
        state: (false),
        element: document.getElementById('powerUp8x')
    },

    powerUp10x: {
        state: (false),
        element: document.getElementById('powerUp10x')
    },

}

const data = { cliques: 0, };



data.cliques = Number(localStorage.getItem('cliquetes'));

infoMostrada.textContent = `VOCÊ TEM ${localStorage.getItem('cliquetes')} COOKIES`;

powerUpFun()


/* Clique do botão */

cookie.addEventListener('click', function () {

    powerUpFun();

    (data.cliques) += 1 * cliqueState;

    infoMostrada.textContent = `VOCÊ TEM ${data.cliques} COOKIES`;
    localStorage.setItem('cliquetes', JSON.stringify(data.cliques));

})

/* PowerUps */

function powerUpFun() {
    

    if ((powerUps.powerUp10x.state === false) || (powerUps.powerUp10x.state === false) || (powerUps.powerUp10x.state === false) || (powerUps.powerUp10x.state === false) || (powerUps.powerUp10x.state === false)) { cliqueState = 1 };

    if
        (powerUps.powerUp2x.state === true) {
            cliqueState = 2; powerUps.powerUp2x.element.style.backgroundColor = '#24ff5b';
    }
    else { powerUps.powerUp2x.element.style.backgroundColor = '#efefef' };

    if
        (powerUps.powerUp4x.state === true) {
            cliqueState = 4; powerUps.powerUp4x.element.style.backgroundColor = '#24ff5b';
    }
    else { powerUps.powerUp4x.element.style.backgroundColor = '#efefef'; };

    if
        (powerUps.powerUp6x.state === true) {
            cliqueState = 6; powerUps.powerUp6x.element.style.backgroundColor = '#24ff5b';
    }
    else { powerUps.powerUp6x.element.style.backgroundColor = '#efefef' };

    if
        (powerUps.powerUp8x.state === true) {
            cliqueState = 8; powerUps.powerUp8x.element.style.backgroundColor = '#24ff5b';
    }
    else { powerUps.powerUp8x.element.style.backgroundColor = '#efefef' };

    if
        (powerUps.powerUp10x.state === true) {
            cliqueState = 10; powerUps.powerUp10x.element.style.backgroundColor = '#24ff5b';
    }
    else { powerUps.powerUp10x.element.style.backgroundColor = '#efefef' };

};

powerUps.powerUp2x.element.addEventListener('click', function () {

    (powerUps.powerUp2x.state === false) ? (powerUps.powerUp2x.state = true) : (powerUps.powerUp2x.state = false);

    (powerUps.powerUp10x.state = false);
    (powerUps.powerUp6x.state = false);
    (powerUps.powerUp8x.state = false);
    (powerUps.powerUp4x.state = false);

    powerUpFun()

})

powerUps.powerUp4x.element.addEventListener('click', function () {

    (powerUps.powerUp4x.state === false) ? (powerUps.powerUp4x.state = true) : (powerUps.powerUp4x.state = false);

    (powerUps.powerUp2x.state = false);
    (powerUps.powerUp6x.state = false);
    (powerUps.powerUp8x.state = false);
    (powerUps.powerUp10x.state = false);

    powerUpFun()

})

powerUps.powerUp6x.element.addEventListener('click', function () {

    (powerUps.powerUp6x.state === false) ? (powerUps.powerUp6x.state = true) : (powerUps.powerUp6x.state = false);

    (powerUps.powerUp2x.state = false);
    (powerUps.powerUp10x.state = false);
    (powerUps.powerUp8x.state = false);
    (powerUps.powerUp4x.state = false);

    powerUpFun()

})

powerUps.powerUp8x.element.addEventListener('click', function () {

    (powerUps.powerUp8x.state === false) ? (powerUps.powerUp8x.state = true) : (powerUps.powerUp8x.state = false);

    (powerUps.powerUp2x.state = false);
    (powerUps.powerUp6x.state = false);
    (powerUps.powerUp10x.state = false);
    (powerUps.powerUp4x.state = false);

    powerUpFun();

})

powerUps.powerUp10x.element.addEventListener('click', function () {

    (powerUps.powerUp10x.state === false) ? (powerUps.powerUp10x.state = true) : (powerUps.powerUp10x.state = false);

    (powerUps.powerUp2x.state = false);
    (powerUps.powerUp6x.state = false);
    (powerUps.powerUp8x.state = false);
    (powerUps.powerUp4x.state = false);

    powerUpFun();

})

/* Resetar */

reset_button.addEventListener('click', function () {

    data.cliques = 0;
    localStorage.setItem('cliquetes', JSON.stringify(data.cliques));
    infoMostrada.textContent = `VOCÊ TEM ${localStorage.getItem('cliquetes')} COOKIES`;

})

