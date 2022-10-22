let billInput = document.querySelector('.input');
let inputPercent = document.querySelector('.input-percent');
let inputPeople = document.querySelector('.input-orange');

const pecent_5 = document.querySelector('#btn-5');
const pecent_10 = document.querySelector('#btn-10');
const pecent_15 = document.querySelector('#btn-15');
const pecent_25 = document.querySelector('#btn-25');
const pecent_50 = document.querySelector('#btn-50');

const resstBtn = document.querySelector('.result-btn');

const warning = document.querySelector('.title-warning');
const tipResult = document.querySelector('.tip-result');
const totalResult = document.querySelector('.total-result');




function customPercent () {
    let percent = inputPercent.value;
    let billCount = billInput.value;
    let peopleCount = inputPeople.value;
    let total = ((Number(billCount) + ( (Number(billCount) / 100) * percent )) / Number(peopleCount));
    let tip = ( (Number(billCount) / 100) * percent ) / Number(peopleCount)
    tipResult.innerHTML = `$${tip.toFixed(1)}`
    totalResult.innerHTML = `$${total.toFixed(1)}`
}


function reset() {
    inputPercent.value = "";
    billInput.value = "";
    inputPeople.value = "";
    tipResult.innerHTML = `$0.00`
    totalResult.innerHTML = `$0.00`
}



function fivePercent(){
    let billCount = billInput.value;
    let peopleCount = inputPeople.value;
    let total = ((Number(billCount) + ( (Number(billCount) / 100) * 5 )) / Number(peopleCount));
    let tip = ( (Number(billCount) / 100) * 5 ) / Number(peopleCount)
    tipResult.innerHTML = `$${tip.toFixed(1)}`
    totalResult.innerHTML = `$${total.toFixed(1)}`
}

function tenPercent(){
    let billCount = billInput.value;
    let peopleCount = inputPeople.value;
    let total = ((Number(billCount) + ( (Number(billCount) / 100) * 10 )) / Number(peopleCount));
    let tip = ( (Number(billCount) / 100) * 10 ) / Number(peopleCount)
    tipResult.innerHTML = `$${tip.toFixed(1)}`
    totalResult.innerHTML = `$${total.toFixed(1)}`
}

function fifteenPercent(){
    let billCount = billInput.value;
    let peopleCount = inputPeople.value;
    let total = ((Number(billCount) + ( (Number(billCount) / 100) * 15 )) / Number(peopleCount));
    let tip = ( (Number(billCount) / 100) * 15 ) / Number(peopleCount)
    tipResult.innerHTML = `$${tip.toFixed(1)}`
    totalResult.innerHTML = `$${total.toFixed(1)}`
}


function twentyFivePercent(){
    let billCount = billInput.value;
    let peopleCount = inputPeople.value;
    let total = ((Number(billCount) + ( (Number(billCount) / 100) * 25 )) / Number(peopleCount));
    let tip = ( (Number(billCount) / 100) * 25 ) / Number(peopleCount)
    tipResult.innerHTML = `$${tip.toFixed(1)}`
    totalResult.innerHTML = `$${total.toFixed(1)}`
}

function fiftyPercent() {
    let billCount = billInput.value;
    let peopleCount = inputPeople.value;
    let total = ((Number(billCount) + ( (Number(billCount) / 100) * 50 )) / Number(peopleCount));
    let tip = ( (Number(billCount) / 100) * 50 ) / Number(peopleCount)
    tipResult.innerHTML = `$${tip.toFixed(1)}`
    totalResult.innerHTML = `$${total.toFixed(1)}`
}