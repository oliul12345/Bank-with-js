document.getElementById('deposit-btn').addEventListener('click',function(){
    // get deposit input value
    const depositInput = document.getElementById('deposit-input')
    const depositAmount = depositInput.value;
    const convertDepositAmount = parseFloat(depositAmount);
    console.log(convertDepositAmount)

    /// get the bank deposit 
    const bankDeposit = document.getElementById('bank-deposit');
    const bankDepositAmount = bankDeposit.innerText;
    const convertBankDepositAmount = parseFloat(bankDepositAmount)
    console.log(convertBankDepositAmount);

    const totalDeposit =  convertDepositAmount + convertBankDepositAmount;

    //  set the value 
    bankDeposit.innerText = totalDeposit

    /// clear the input value
    depositInput.value = ''

    //////    sum the deposit to total deposit    

    const balance = document.getElementById('balance-text')
    const getBalance = balance.innerText;
    const convertGetBalance = parseFloat(getBalance)
     ////  set the balance after the deposit 

     const sumOfTotalDeposit = convertDepositAmount + convertGetBalance;
     balance.innerText = sumOfTotalDeposit;

})


document.getElementById('withdraw-btn').addEventListener('click',function(){
    /// get the withdraw input value 
    const inputValueWithdraw = document.getElementById('withdraw-input')
    const getInputValueWithdraw = inputValueWithdraw.value;
    const convertWithdrawAmount = parseFloat(getInputValueWithdraw);
    console.log(convertWithdrawAmount)

     /// get the bank withdraw
     const bankWithdraw = document.getElementById('bank-withdraw');
     const bankWithdrawAmount = bankWithdraw.innerText;
     const convertBankWithdrawAmount = parseFloat(bankWithdrawAmount)
     console.log(convertBankWithdrawAmount);

     ////   total withdraw 
     const totalWithDraw = convertBankWithdrawAmount + convertWithdrawAmount;
     //////    set the withdraw  

     bankWithdraw.innerText = totalWithDraw

     inputValueWithdraw.value = ''


    //  get total balance  
    const balanceWith = document.getElementById('balance-text')
    const getBalance = balanceWith.innerText;
    const convertGetBalance = parseFloat(getBalance)

    ////   withdraw after calculation withdraw
    const balanceAfterWithdraw = convertGetBalance - convertWithdrawAmount;
    console.log(balanceAfterWithdraw)

    ////   set the balance 
    balanceWith.innerText = balanceAfterWithdraw;

 
})