document.getElementById('submit-btn').addEventListener('click',function(e){
    e.preventDefault();
    //  get the email field
    const getEmailField = document.getElementById('email');
    const gmail = getEmailField.value;

    //  get the password field
    const getPasswordField = document.getElementById('password')
    const password = getPasswordField.value;
    console.log(gmail,password);

    if(gmail === 'oliul@gmail.com' && password === 'secret'){
        console.log('welcome bap er bank')
        window.location.href='bank.html';
    }
    else{
        alert('provide valid information')
    }

})