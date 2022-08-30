//step:1 add event listener to the submit button
document.getElementById('submit-btn').addEventListener('click',function(){
//step:2 a--> set id to the input field
// b--> get the input field
// c--> get the value of input field
const emailField = document.getElementById('email-field');
const email = emailField.value;
const passwordField = document.getElementById('password-field');
const password = passwordField.value;
//step:3 check the input valid or not 
//Danger: do not apply this way in clint server
if(email === 'shontan@bap.com' && password === 'secret'){
    window.location.href = 'bank-inside.html'
}
else{
    alert('password vule gesoss!!! toke ami tejjon shontan corlam')
}

})

/* bank inside here */
// step 1: get the diposite btn
