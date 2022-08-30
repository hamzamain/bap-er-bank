document.getElementById('diposite-btn').addEventListener('click',function(){
    const dipositeInputField = document.getElementById('diposite-input');
    const dipositeInputString = dipositeInputField.value;
    const newDiposite = parseFloat(dipositeInputString);
    
    const dipositeShowElement = document.getElementById('diposite-amount-show');
    const dipositeShowValueString = dipositeShowElement.innerText;
    const previousDipositeShowValue = parseFloat(dipositeShowValueString);

    dipositeInputField.value = '';

    if(isNaN(newDiposite)){
        alert('plese enter a number');
        return;
    }

    const newDipositeShowValue = previousDipositeShowValue + newDiposite;

    dipositeShowElement.innerText = newDipositeShowValue;

    const balanceShowElement = document.getElementById('balance-amount-show');
    const balanceShowString = balanceShowElement.innerText;
    const previousBalance = parseFloat(balanceShowString);

    const newBalance = previousBalance + newDiposite;
    balanceShowElement.innerText = newBalance;

    
})