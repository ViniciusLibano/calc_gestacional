//SELECTORS

const formDUM = document.querySelector('form#formDUM');
const inputDateDUM = document.querySelector('input[name="DUM"]');

//FUNCOES

//verifica se o numero eh par ou impar
function OddEven(n) {
    if (n % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}

function diffDate(n) {
    let nDate = new Date(n);
    let todayDate = new Date();
    let diffDays = Math.floor(Math.abs(nDate.getTime() - todayDate.getTime()) / (1000*3600*24));

    return diffDays;
}

function idadeDUM() {
    let inputDate =  inputDateDUM.value;

    if (inputDate.length != 0) {
        let iGestacionalSemana = Math.floor(diffDate(inputDate) / 7);
        let iGestacionalDia =  diffDate(inputDate) % 7;
        let mainBlock =  document.querySelector('main');
        let resultIdade = `<p><span>Idade Gestacional: </span>${iGestacionalSemana} Semana(s) e ${iGestacionalDia} Dia(s)</p>`;

        if (mainBlock.children.length >= 3) {
            mainBlock.insertAdjacentHTML('beforeend', resultIdade);
            mainBlock.children[2].remove();
        }
        else {
            mainBlock.insertAdjacentHTML('beforeend', resultIdade);
        }
    }
    else {
        window.alert('Data em branco')
    }
}

document.querySelector('button').addEventListener('click', idadeDUM);