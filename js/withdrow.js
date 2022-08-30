document.getElementById('withdrow-btn').addEventListener('click',function(){
    const withdrowInputField = document.getElementById('withdrow-input');
    const withdrowInputString = withdrowInputField.value;
    const newwithdrow = parseFloat(withdrowInputString);
    
    const withdrowShowElement = document.getElementById('withdrow-amount-show');
    const withdrowShowValueString = withdrowShowElement.innerText;
    const previouswithdrowShowValue = parseFloat(withdrowShowValueString);

    withdrowInputField.value = '';

    if(isNaN(newwithdrow)){
        alert('plese enter a number');
        return;
    }


   

    const balanceShowElement = document.getElementById('balance-amount-show');
    const balanceShowString = balanceShowElement.innerText;
    const previousBalance = parseFloat(balanceShowString);

    if(newwithdrow > previousBalance){
        alert('your father do not have that much money to give you');
        return;
    }

    const newwithdrowShowValue = previouswithdrowShowValue + newwithdrow;

    withdrowShowElement.innerText = newwithdrowShowValue;

    const newBalance = previousBalance - newwithdrow;
    balanceShowElement.innerText = newBalance;

    
})