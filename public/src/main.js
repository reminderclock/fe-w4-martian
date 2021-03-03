
// function inputData() {
//     const inputDispatch = document.getElementById('dispatch');
//     inputDispatch.addEventListener('input', event =>limitRange(event));
// }

// function limitRange(event) {
//     let money = event.target.value;
//     console.log(money);
//     if(money === "가나") {
//         console.log('들어와')
//         money = 'didi';
//         return;
//     }
//     // calculateCnt(money);
// }
//  inputData();

    const inputDispatch = document.getElementById('dispatch');
    inputDispatch.addEventListener('keyup', changeStr);

    let asciiArr = [];
    let cnt = 0;
    // let newStr = inputDispatch.value.charCodeAt(inputDispatch.value.length-1);
    function changeStr() {
        // if(inputDispatch.value)
        // inputDispatch.value = inputDispatch.value.charCodeAt(inputDispatch.value.length-1);
        if(inputDispatch.value === "NaN") {
            return inputDispatch.value = '';
        }
        // console.log(inputDispatch.value.length);
        console.log(inputDispatch.value);
        console.log(inputDispatch.value.charCodeAt(inputDispatch.value.length-1));
        // if(inputDispatch.value.charCodeAt(inputDispatch.value.length-1) >= 10) {
        //     console.log((inputDispatch.value.charCodeAt(inputDispatch.value.length-1)+55));
        //     console.log(String.fromCharCode(152))
        // }
        asciiArr.push(inputDispatch.value.charCodeAt(inputDispatch.value.length-1));
        // console.log(asciiArr.join(' '));
        console.log(asciiArr);
        inputDispatch.value = asciiArr.join(' ');
    }