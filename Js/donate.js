//add money to the donation

document.getElementById('btn-donate-money').addEventListener('click', function(event){


    event.preventDefault();
    console.log('donation button clicked');

   

    // const addMoneyInput = document.getElementById('input-add-money').value;
    // console.log(addMoneyInput);

    const addMoneyInput = getInputFieldValueById('input-add-money');
    
    console.log(addMoneyInput);
    


    if(addMoneyInput >= 0){

        const balance = getTextFieldValueById('account-balance');

        const newBalance = balance + addMoneyInput;

        document.getElementById('account-balance').innerText = newBalance;

    

    }
    else{

        alert('Failed to donate money.')
    }


  
});



document.getElementById('btn-donate-money2').addEventListener('click', function(event){


    event.preventDefault();
    console.log('donation button clicked');

   

    // const addMoneyInput = document.getElementById('input-add-money').value;
    // console.log(addMoneyInput);

    
    const addMoneyInput2 = getInputFieldValueById2('input-add-money2');
    
    console.log(addMoneyInput2);


    if(addMoneyInput2 >= 0){

        const balance = getTextFieldValueById('account-balance2');

        const newBalance = balance + addMoneyInput2;

        document.getElementById('account-balance2').innerText = newBalance;



    }
    else{

        alert('Failed to donate money.')
    }


  
});

document.getElementById('btn-donate-money3').addEventListener('click', function(event){


    event.preventDefault();
    console.log('donation button clicked');

   

    // const addMoneyInput = document.getElementById('input-add-money').value;
    // console.log(addMoneyInput);

    
    const addMoneyInput3 = getInputFieldValueById3('input-add-money3');
    
    console.log(addMoneyInput3);


    if(addMoneyInput3 >= 0){

        const balance = getTextFieldValueById('account-balance3');

        const newBalance = balance + addMoneyInput3;

        document.getElementById('account-balance3').innerText = newBalance;

    }
    else{

        alert('Failed to donate money.')
    }


  
});