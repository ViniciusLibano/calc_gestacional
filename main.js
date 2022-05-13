//mensagem de erro
const error1 = 'Data Inválida';

//SELECTORS

const formDUM = document.querySelector('form#formDUM');
const inputDateDUM = document.querySelector('input[name=DUM]');
const inputDateUSG = document.querySelector('input[name=USG]');
const inputSemUSG = document.querySelector('input[name=usgSem]');
const inputDiaUSG = document.querySelector('input[name=usgDia]');
const resultDivDUM = document.querySelectorAll('div.box')[0].children[2];
const resultDivUSG = document.querySelectorAll('div.box')[1].children[2];

//FUNCOES
function checkDate(date) {
    if (date.length != 0) {
        let todayDate = new Date();
        let inputDate = new Date(date);
        console.log(inputDate);
        if (inputDate.getTime() <= todayDate.getTime()) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function diffDate(x, y) {
    let xDate = new Date(x);
    let yDate = new Date(y)
    let diffDays = Math.floor(Math.abs(xDate.getTime() - yDate.getTime()) / (1000*3600*24));

    return diffDays;
}

function idadeDUM() {
    let inputDate =  inputDateDUM.value;
    let todayDate = new Date();
    let diffDays = diffDate(inputDate, todayDate);

    if (checkDate(inputDate) == true) {
        let iGestacionalSemana = Math.floor(diffDays / 7);
        let iGestacionalDia =  diffDays % 7;
        let dppMS = new Date(inputDate);
        let dpp = new Date(dppMS.getTime() + 24192000000);
        let resultIdade = `<p id="idadeResultDUM" onclick="copyTXT('idadeResultDUM')"><span>Idade Gestacional: </span>${iGestacionalSemana} Semana(s) e ${iGestacionalDia} Dia(s)</p> <p id="dppResultDUM" onclick="copyTXT('dppResultDUM')"><span>Data provavel do parto(DPP): </span>${dpp.toLocaleDateString()}</p>`;

        resultDivDUM.innerHTML = resultIdade;
        resultDivDUM.setAttribute('style', 'border-top: 1px solid #369;');
    }
    else {
        window.alert(error1)
    }
}

function copyTXT(txt) {
    let e = document.getElementById(`${txt}`);
    let spanTXT = e.firstChild.innerHTML.length;
    navigator.clipboard.writeText(e.innerText.slice(spanTXT));
}

function idadeUSG() {
    let inputDate = inputDateUSG.value;
    let todayDate = new Date();
    let usgDate = new Date(inputDate);
    let idadeSem = inputSemUSG.value * 86400000 * 7;
    let idadeDia = inputDiaUSG.value * 86400000;

    if (checkDate(inputDate) == true) {

        let resultDate = (diffDate(inputDate, todayDate) * 86400000) + idadeSem + idadeDia;
        let resultString = `<p id="idadeResultUSG" onclick="copyTXT('idadeResultUSG')"><span>Idade Gestacional: </span>${Math.floor((resultDate / 86400000) / 7)} Semana(s) e ${Math.floor(resultDate / 86400000) % 7} Dia(s)</p>`;

        resultDivUSG.innerHTML = resultString;
        resultDivUSG.setAttribute('style', 'border-top: 1px solid #369;');
    } else {
        window.alert(error1);
    }
}

//EVENTS

document.querySelector('button#DUM').addEventListener('click', idadeDUM);
document.querySelector('button#USG').addEventListener('click', idadeUSG);