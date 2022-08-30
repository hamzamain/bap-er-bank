console.log('from js file')

document.getElementById('double-btn').addEventListener('click',function(){
    const inputField = document.getElementById('input-field');
    const inputValueString = inputField.value;
    const inputValue = parseFloat(inputValueString);
    const double = inputValue * 2;

    if(isNaN(inputValue)){
        alert('plese enter a number');
        inputField.value = '';
        return;
    }

    const stutas = document.getElementById('status');
    stutas.innerText = 'double';

    const number = document.getElementById('number');
    number.innerText = inputValue;

    const digitField = document.getElementById('double');
    digitField.innerText = double;
    inputField.value = '';
})


document.getElementById('triple-btn').addEventListener('click',function(){
    const inputField = document.getElementById('input-field');
    const inputValueString = inputField.value;
    const inputValue = parseFloat(inputValueString);
    const double = inputValue * 3;

    if(isNaN(inputValue)){
        alert('plese enter a number');
        inputField.value = '';
        return;
    }

    const stutas = document.getElementById('status');
    stutas.innerText = 'triple';

    const number = document.getElementById('number');
    number.innerText = inputValue;

    const digitField = document.getElementById('double');
    digitField.innerText = double;
    inputField.value = '';
})