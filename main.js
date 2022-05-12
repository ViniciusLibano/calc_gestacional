//SELECTORS

const formDUM = document.querySelector('form#formDUM');
const inputDateDUM = document.querySelector('input[name="DUM"]');
const resultDivDUM =  document.querySelectorAll('div.box')[0].children[2];

//FUNCOES

function diffDate(x, y) {
    let xDate = new Date(x);
    let yDate = new Date(y)
    let diffDays = Math.floor(Math.abs(xDate.getTime() - yDate.getTime()) / (1000*3600*24));

    return diffDays;
}

function filterDate(n) {
    let nISO = n.slice(0, -14);
    let dayDate = parseInt(nISO.slice(8));
    let monthDate = parseInt(nISO.slice(5).slice(0, -3));
    let yearDate = parseInt(nISO.slice(0, -6));

    let resultDate = [dayDate, monthDate, yearDate];

    return resultDate;
}

function idadeDUM() {
    let inputDate =  inputDateDUM.value;
    let todayDate = new Date();
    let diffDays = diffDate(inputDate, todayDate);

    if (inputDate.length != 0) {
        let iGestacionalSemana = Math.floor(diffDays / 7);
        let iGestacionalDia =  diffDays % 7;
        let dppMS = new Date(inputDate);
        let dpp = new Date(dppMS.getTime() + 24192000000);
        let resultIdade = `<p id="idadeResult" onclick="copyTXT('idadeResult')"><span>Idade Gestacional: </span>${iGestacionalSemana} Semana(s) e ${iGestacionalDia} Dia(s)</p> <p id="dppResult" onclick="copyTXT('dppResult')"><span>Data provavel do parto(DPP): </span>${dpp.toLocaleDateString()}</p>`;

        resultDivDUM.innerHTML = resultIdade;
        resultDivDUM.setAttribute('style', 'border-top: 1px solid #369;');
    }
    else {
        window.alert('Data Inválida')
    }
}

function copyTXT(txt) {
    let e = document.getElementById(`${txt}`);
    let spanTXT = e.firstChild.innerHTML.length;
    navigator.clipboard.writeText(e.innerText.slice(spanTXT));
}

//EVENTS

document.querySelector('button').addEventListener('click', idadeDUM);