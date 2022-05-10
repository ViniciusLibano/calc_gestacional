var form = document.querySelector('form');
var formData = new FormData(form);
var dppResDia;
var dppResMes;

function par(n) {
    if (n % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}

function calc() {
    let resultado = document.querySelectorAll('p');
    let divContent = document.querySelector('main');
    var dumValue = document.querySelector('input[name="DUM"]').value;

    let dumDate = new Date(dumValue);
    let today = new Date();
    let timeDiff = Math.abs(dumDate.getTime() - today.getTime());
    let diffDays = Math.ceil(timeDiff / (1000*3600*24));
    let idadeGestacionalSemana = Math.floor(diffDays / 7);
    let idadeGestacionalDia = diffDays % 7;

    let dppDtDia = parseInt(dumValue.slice(8));
    let dppDtMes = parseInt(dumValue.slice(5).slice(0, -3));

    // vou ter que criar uma funcao nova e mais eficiente, if n vai ajudar sao mts variaveis essa logica eh uma merda
    /*
    if (dppDtDia + 7 > 31 && par(dppDtMes) - 3 == false && dppDtMes > 3) {
        console.log(dppDtDia + 7 - 31);
        console.log(dppDtMes - 3)
    } else if (dppDtDia + 7 > 30 && par(dppDtMes) - 3 == true && dppDtMes > 3) {
        console.log(dppDtDia + 7 - 30);
        console.log(dppDtMes - 3)
    } else {
        console.log('dppDtDia');
        console.log('dppDtMes');
    }
    */

    if (dumValue.length == 0) {
        window.alert("Data em branco");
    }
    else if ((!resultado[0]) || (resultado[0].innerText != dumValue)) {
        divContent.insertAdjacentHTML('beforeend', `<p>${dumValue}</p><p><span style="font-weight: bold">Idade Gestacional:</span> ${idadeGestacionalSemana} Semana(s) e ${idadeGestacionalDia} Dia(s)</p>`);
        document.querySelector('.btn').classList.add('bottom-line');
        resultado[0].remove();
        resultado[1].remove();

    }
}

//document.querySelector('button').addEventListener('click', idadeDUM);