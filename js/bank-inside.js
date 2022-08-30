//step 1: get the btn and add enent listener

const dipositeBtn = document.getElementById('diposite-btn');
dipositeBtn.addEventListener('click',function(){
    console.log('btn clicked');

    if(isNaN(userDiposite)){
        return;
    }

    //step 2: get the user input value and add with D

    const dipositeField = document.getElementById
    ('diposite-input');
    // console.log(dipositeField)

    const userDiposite = parseFloat(dipositeField.value);
    // console.log(userDiposite)

    const showBalance = document.getElementById('balance-amount-show');
    const balance = parseFloat(showBalance.innerText);

    if(dipositeField.value === ''){
        alert('you do not enter any amount. plese enter a diposite amount');
    }
    else{
        const dipositeShowField = document.getElementById('diposite-amount-show');
        const showValue = parseFloat(dipositeShowField.innerText)
       dipositeShowField.innerText = + showValue + userDiposite;
       showBalance.innerText = balance + userDiposite;
       dipositeField.value = '';
    }
})



// btn 2



const withdrowBtn = document.getElementById('withdrow-btn');
withdrowBtn.addEventListener('click',function(){
    console.log('btn clicked');


    //step 2: get the user input value and add with D

    const withdrowField = document.getElementById
    ('withdrow-input');
    // console.log(withdrowField)

    const userwithdrow = parseFloat(withdrowField.value);
    // console.log(userwithdrow)

    const showBalance = document.getElementById('balance-amount-show');
    const balance = parseFloat(showBalance.innerText);

    withdrowField.value = '';

    if(withdrowField.value === ''){
        alert('you do not enter any amount. plese enter a withdrow amount');
    }
    else{
        if(userwithdrow > balance){
            alert('you can not withdrow more then your balance money ')
        }

       else{
        const withdrowShowField = document.getElementById('withdrow-amount-show');
        const showValue = parseFloat(withdrowShowField.innerText)
       withdrowShowField.innerText =Math.abs(showValue + userwithdrow);
       showBalance.innerText = balance - userwithdrow;
       
       }
    }
})

