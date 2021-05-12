function showPassword(){
    let passShowCheck = document.getElementById('showPasswordCheck');
    let passInput = document.getElementById('password');
    if (passShowCheck.checked == true) {
        passInput.type = "text";
    }
    else {
        passInput.type = "password"
    }
}