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

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
let width = canvas.clientWidth;
let height = canvas.clientHeight;
function drawPie() {
    let value = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
    let degree = 360;
    const radius = 300;
    // 총합계
    let sum = value.reduce((a, b) => a + b);
    console.log(sum)
    //conv_array는 비율이 담긴 배열
    let conv_array = value.slice().map((data)=>{  
        //값을 총합계로 나누어 비율을 구함
        let rate = data / sum;  
        //비율을 360을(degree) 곱해 비율에 따른 도(degree)를 구함.
        let myDegree = degree * rate;  
        return myDegree;
    });
    console.log(conv_array);
    //초기화
    degree = 0;
    for(let i=0;i < conv_array.length;i++){
        let item = conv_array[i];
        // 이전에 그렸던 스타일을 저장
        ctx.save();
        // 새로운 경로 만들기
        ctx.beginPath();
        // 시작점 이동
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
        // 현재 하위 경로의 시작부분과 연결된 직선을 추가합니다 .
        ctx.closePath();
        // 윤곽선을 이용하여 도형을 그립니다.
        ctx.stroke();
        // 이전 상태 복원하기
        ctx.restore();
    }

    // 원판안의 원
    // ctx.beginPath();
    // // x, y, 반지름, 각도 시각점 , 각도 끝나는 점, 기본값 false 시계 방향
    // ctx.arc(width/2,height/2,70,0,(Math.PI*2),true);
    // // ctx.arc(width/2,height/2,70,(Math.PI/180)*90,(Math.PI/180)*135,true);
    // // 경로의 내부를 채워서 내부가 체워진 도형을 그린다. 
    // ctx.fill();
    // ctx.closePath();

    // 16진수 문자 그리기
    let text = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    let underBar = "_";
    let numRadsPerLetter = 2*Math.PI / text.length;
    let radius2 = 250;
    // 시작각도에서 문자가 써지므로 각 색션 중간보다 조금 앞으로 설정
    let startRotation = (Math.PI/180)*9;
    ctx.font = "bold 30px Serif";
    ctx.fillStyle = 'blue';
    ctx.save();
    // 중심점으로 이동
    ctx.translate(width/2,height/2);
    // 라디안 값을 사용하여 이동 (Math.PI/180)*degress
    ctx.rotate(startRotation);
    for(var i=0;i<text.length;i++){
    ctx.save();
    ctx.rotate(i*numRadsPerLetter);
    ctx.fillText(text[i],0,-radius2);
    ctx.fillText(underBar,0,-(radius2-10));
    ctx.restore();
    }
    ctx.restore();

    // let time = new Date();
    // ctx.beginPath();
    // ctx.strokeStyle = "yellow";
    // ctx.lineWidth = 5;
    // // ctx.save();
    // // x, y, 반지름, 각도 시각점 , 각도 끝나는 점, 기본값 false 시계 방향
    // ctx.moveTo(width/2,height/2);
    // ctx.lineTo(width/2,(height/2)-70);
    // ctx.stroke();
    // ctx.translate(width/2,height/2);
    // ctx.rotate((Math.PI/180)*time.getSeconds());
    // ctx.save();
    // ctx.closePath();
}
function drawHandle () {
    let time = new Date();
    ctx.beginPath();
    // ctx.strokeStyle = "yellow";
    // ctx.lineWidth = 5;
    // // ctx.save();
    // // x, y, 반지름, 각도 시각점 , 각도 끝나는 점, 기본값 false 시계 방향
    // ctx.moveTo(width/2,height/2);
    // ctx.lineTo(width/2,(height/2)-70);
    // ctx.stroke();
    ctx.arc(width/2,height/2,70,0,(Math.PI),true);
    // ctx.arc(width/2,height/2,70,(Math.PI/180)*90,(Math.PI/180)*135,true);
    // 경로의 내부를 채워서 내부가 체워진 도형을 그린다. 
    
    ctx.translate(width/2,height/2);
    ctx.rotate((Math.PI/180)*time.getSeconds());
    ctx.fill();
    ctx.save();
    ctx.closePath();
}
drawPie();
// setInterval(drawHandle,100);

let sec =0;
function init(){
    clock();
    setInterval(clock,1000/60);
  }
  init();
  
  function clock(){
    var now = new Date();
    // var ctx = document.getElementById('myCanvas').getContext('2d');
    ctx.save();
    ctx.clearRect(230,230,140,140);
    ctx.translate(width/2,height/2);
    ctx.scale(0.4,0.4);
    // ctx.rotate(-Math.PI/2);
    ctx.strokeStyle = "black";
    ctx.fillStyle = "white";
    ctx.lineWidth = 8;
    ctx.lineCap = "round";

    sec++;
    if(sec === 360) {
        sec = 0;
    }
    console.log(sec)
    // 시간 표시 - 초
    ctx.save();
    ctx.rotate(sec * Math.PI/30);
    ctx.strokeStyle = "#D40000";
    ctx.fillStyle = "#D40000";
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(-30,0);
    ctx.lineTo(83,0);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0,0,10,0,Math.PI*2,true);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(95,0,10,0,Math.PI*2,true);
    ctx.stroke();
    ctx.fillStyle = "rgba(0,0,0,0)";
    ctx.arc(0,0,3,0,Math.PI*2,true);
    ctx.fill();
    ctx.restore();
  
    ctx.beginPath();
    ctx.lineWidth = 14;
    ctx.strokeStyle = '#325FA2';
    ctx.arc(0,0,142,0,Math.PI*2,true);
    ctx.stroke();
  
    ctx.restore();
  }

