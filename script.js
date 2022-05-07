var form = document.querySelector('form');
var formData = new FormData(form);

function showCiclo() {
    let ciclo = document.querySelector('input[type="radio"]');
    let divCiclo = document.getElementById('cicloM');

    if (ciclo.checked) {
        divCiclo.style.display = "block";
    }
    else {
        divCiclo.style.display = "none";
    }
}

function calc() {
    let resultado = document.querySelectorAll('p');
    let divContent = document.querySelector('main');
    let dumValue = document.querySelector('input[name="DUM"]').value;

    let dumDate = new Date(dumValue);
    let today = new Date();
    let timeDiff = Math.abs(dumDate.getTime() - today.getTime());
    let diffDays = Math.ceil(timeDiff / (1000*3600*24));
    let idadeGestacionalSemana = Math.floor(diffDays / 7);
    let idadeGestacionalDia = diffDays % 7;

    if (dumValue.length == 0) {
        window.alert("Data em branco");
    }
    else if ((!resultado[0]) || (resultado[0].innerText != dumValue)) {
        divContent.insertAdjacentHTML('beforeend', `<p>${dumValue}</p><p>Idade Gestacional: ${idadeGestacionalSemana} Semana(s) e ${idadeGestacionalDia} Dia(s)</p>`);
        console.log(`${dumDate.getTime()} - ${today.getTime()} = ${timeDiff}`);
        resultado[0].remove();
        resultado[1].remove();

    }
}

document.querySelector('button').addEventListener('click', calc);
document.querySelectorAll('input[type="radio"]')[0].addEventListener('click', showCiclo);
document.querySelectorAll('input[type="radio"]')[1].addEventListener('click', showCiclo);