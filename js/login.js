// get input value
function getInputText(inputId){
    const inputText = document.getElementById(inputId + '-input');
    return inputText;
}
// email input box 
document.getElementById('password-input').addEventListener('mousedown', function(){
const submitButton = document.getElementById('submit-button');
const emailValidation = passwordAndEmailValidition('email', 'password', 'email');
const inputText = getInputText('email');
const mailIcon = document.getElementById('mail-icon');
if(emailValidation == true && inputText.value.includes('@')){
    mailIcon.classList.remove('fa-circle-xmark');
    mailIcon.style.color = '#E0B41D';
    submitButton.disabled = false;
    submitButton.style.cursor = 'pointer';
    

}
else{
    mailIcon.classList.add('fa-circle-xmark');
    mailIcon.style.color = '#E0B41D';
    submitButton.disabled = true;
    submitButton.style.cursor = 'not-allowed';
}
});

// password icon on off function
function passwordHidShow(iconOn, iconOff, isShow){
    const pandaImage = document.getElementById('panda-image');
    const passwordInput =  getInputText('password');
    const passwordIconOn = document.getElementById(iconOn + '-icon');
    const passwordIconOff = document.getElementById(iconOff + '-icon');
    
    passwordIconOff.style.display = 'block';
    passwordIconOn.style.display = 'none';
    if(isShow){
        passwordInput.type = "text";
        pandaImage.src="images/login-logo/img2.png"
    }
    else{
        passwordInput.type = "password";
        pandaImage.src="images/login-logo/img1.png"
    }
    

}


// password show
    document.getElementById('on-icon').addEventListener('click',function(){
        passwordHidShow('on','off', true);

        
    });
// password hide
    document.getElementById('off-icon').addEventListener('click',function(){
        passwordHidShow('off','on', false);
    });

// password and email validation function 
function passwordAndEmailValidition(email, password, type){
    const mailInput = getInputText(email);
    const passwordInput = getInputText(password);
    const mailInputValue = mailInput.value;
    const passworInputValue = passwordInput.value;
    if(mailInputValue === 'mehedihassan4467@gmail.com' && type == "email"){
        return true;
    }
    else if( type == "submit" && passworInputValue === 'Samanta44676835' && mailInputValue === 'mehedihassan4467@gmail.com'){
        return true;
    }
    else{
        // document.getElementById('submit-button').disabled = true;
        return false;
        
    }
}

// submit form


document.getElementById('submit-button').addEventListener('click', function(){
    const isValid = passwordAndEmailValidition('email', 'password', 'submit');
    if(isValid == true){
        document.getElementById('status').innerText = "Congratulation Your Are Log In!!";
        document.getElementById('error').innerText = '';
    }
    else{
        document.getElementById('error').innerText = 'Incorrect Password Or Email!!';

    }
    
});
