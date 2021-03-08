import {inputDispatch, dispatchBtn} from './main.js';

const asciiArr = [];

function getDispatchEvent() {
    inputDispatch.addEventListener('keyup', changeStringToHexAscii);
    }
getDispatchEvent();
function changeStringToHexAscii() {
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

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
let width = canvas.clientWidth;
let height = canvas.clientHeight;
const hexAsciiArr = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
function drawPie() {
    const radius = width/2;
    let degree = 0;
    let eachHexAngle = (360/hexAsciiArr.length);
    for(let i=0;i < hexAsciiArr.length;i++){
        // ctx.save();
        ctx.beginPath();
        ctx.moveTo(width/2, height/2);
        ctx.arc(width/2, height/2, radius, (Math.PI/180)*degree, (Math.PI/180)*(degree + eachHexAngle), false);
        ctx.moveTo(width/2, height/2);
        ctx.closePath();
        ctx.stroke();
        degree = degree + eachHexAngle;
        // ctx.restore();
    }
    drawhexAscii();
}
function drawhexAscii() {
    let underBar = "_";
    let numRadsPerLetter = 2*Math.PI / hexAsciiArr.length;
    let radius2 = 250;
    let startRotation = (Math.PI/180)*9;
    ctx.font = "bold 30px Serif";
    ctx.fillStyle = 'blue';
    ctx.save();
    ctx.translate(width/2,height/2);
    ctx.rotate(startRotation);
    for(var i=0;i<hexAsciiArr.length;i++){
    ctx.save();
    ctx.rotate(i*numRadsPerLetter);
    ctx.fillText(hexAsciiArr[i],0,-radius2);
    ctx.fillText(underBar,0,-(radius2-10));
    ctx.restore();
    }
    ctx.restore();
}
drawPie();

let sec =0;
function init(){
    arrow();
    setInterval(arrow,1000/60);
  }
  init();
  
  function arrow(){
    ctx.save();
    ctx.clearRect(230,230,140,140);
    ctx.translate(width/2,height/2);
    ctx.scale(0.4,0.4);

    sec++;
    if(sec === 360) {
        sec = 0;
    }
    console.log(sec)
    // 시간 표시 - 초
    ctx.save();
    ctx.rotate(sec * Math.PI/30);
    // ctx.strokeStyle = "#D40000";
    // ctx.fillStyle = "#D40000";
    ctx.lineWidth = 30;
    ctx.beginPath();
    ctx.moveTo(-50,0);
    ctx.lineTo(60,0);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0,0,10,0,Math.PI*2,true);
    ctx.fill();
    ctx.beginPath();
    // ctx.arc(95,0,10,0,Math.PI*2,true);
    ctx.moveTo(100, 0);
    ctx.lineTo(60, 30);
    ctx.lineTo(60, -30);
    ctx.fill();
    // ctx.stroke();
    ctx.fillStyle = "rgba(0,0,0,0)";
    // ctx.arc(0,0,3,0,Math.PI*2,true);
    ctx.fill();
    ctx.restore();
    ctx.beginPath();
    ctx.lineWidth = 14;
    ctx.strokeStyle = '#325FA2';
    ctx.arc(0,0,142,0,Math.PI*2,true);
    ctx.stroke();
    ctx.restore();
}
