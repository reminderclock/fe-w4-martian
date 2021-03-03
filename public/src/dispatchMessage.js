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

function drawPie() {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    let width = canvas.clientWidth;
    let height = canvas.clientHeight;
    let value = [22.5, 22.5, 22.5, 22.5 ,22.5, 22.5, 22.5, 22.5,22.5, 22.5, 22.5, 22.5,22.5, 22.5, 22.5, 22.5];
    let degree = 360;
    const radius = 300;
    let sum = value.reduce((a, b) => a + b);  //총합계
    let conv_array = value.slice().map((data)=>{  //conv_array는 비율이 담긴 배열
        let rate = data / sum;  //값을 총합계로 나누어 비율을 구함
        let myDegree = degree * rate;  //비율을 360을(degree) 곱해 비율에 따른 도(degree)를 구함.
        return myDegree;
    });

    degree = 0;  //초기화
    for(let i=0;i < conv_array.length;i++){
        let item = conv_array[i];
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(width/2, height/2);
        if(i == 0){
            ctx.arc(width/2, height/2, radius, (Math.PI/180)*0, (Math.PI/180)* item , false);
            degree = item;
            console.log(0, degree);
        } else {
            ctx.arc(width/2, height/2, radius, (Math.PI/180)*degree, (Math.PI/180)*(degree + item), false);
            console.log(degree, degree + item);
            ctx.moveTo(width/2, height/2);
            degree =  degree + item;
        }
        ctx.closePath();
        ctx.stroke();
        ctx.restore();
    }
    ctx.beginPath();
    // x, y, 반지름, 각도 시각점 , 각도 끝나는 점, 기본값 false 시계 방향
    ctx.arc(width/2,height/2,70,0,Math.PI*2,true);
    ctx.fill();
    ctx.closePath();
    let text = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    let numRadsPerLetter = 2*Math.PI / text.length;
    let radius2 = 250;
    let startRotation = 0.16;
    ctx.font = "bold 30px Serif";
    ctx.fillStyle = 'blue';
    ctx.save();
    ctx.translate(width/2,height/2);
    ctx.rotate(startRotation);

    for(var i=0;i<text.length;i++){
    ctx.save();
    ctx.rotate(i*numRadsPerLetter);

    ctx.fillText(text[i],0,-radius2);
    ctx.restore();
    }
    ctx.restore();
}
drawPie();
