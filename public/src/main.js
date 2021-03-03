
    const inputDispatch = document.getElementById('dispatch');
    inputDispatch.addEventListener('keyup', changeStr);

    let asciiArr = [];
    function changeStr() {
        // console.log(inputDispatch.value);
        let decAscii = inputDispatch.value.charCodeAt(inputDispatch.value.length-1);
        let hexAscii = Number(decAscii).toString(16)
        asciiArr.push(hexAscii);
        // console.log(asciiArr);
        inputDispatch.value = asciiArr.join(' ');
    }
