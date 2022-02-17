// email input box 
document.getElementById('password-input').addEventListener('mousedown', function(){
const inputText = document.getElementById('email-input');
const mailIcon = document.getElementById('mail-icon');
if(inputText.value.includes('@')){
    mailIcon.classList.remove('fa-circle-xmark');
    mailIcon.style.color = '#E0B41D';
}
else{
    mailIcon.classList.add('fa-circle-xmark');
    mailIcon.style.color = '#E0B41D';
}
});

