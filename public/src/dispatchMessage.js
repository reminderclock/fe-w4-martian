import {inputDispatch, dispatchBtn} from './main.js';

let asciiArr = [];

function loadData() {
    inputDispatch.addEventListener('keyup', changeStr);
    }
loadData();
function changeStr() {
    let decAscii = inputDispatch.value.charCodeAt(inputDispatch.value.length-1);
    let hexAscii = Number(decAscii).toString(16)
    asciiArr.push(hexAscii);
    inputDispatch.value = asciiArr.join(' ');
    dispatchBtn.addEventListener('click', submitData);
}

function submitData(event) {
    event.preventDefault();
    const inputValue = inputDispatch.value;
    sendData(inputValue);
    inputDispatch.value = "";
}
function sendData(data) {
    console.log(data);
}