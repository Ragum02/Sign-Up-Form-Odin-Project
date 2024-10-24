const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm_password");

const errorPassword = document.querySelector(".error_password");

function checkPasswords(){
    if(confirmPassword.value === ""){
        return;
    }
else if (password.value !== confirmPassword.value) {
    errorPassword.classList.add("show");
} else {
    errorPassword.classList.remove("show");
}
}

password.addEventListener('input', checkPasswords);
confirmPassword.addEventListener('input', checkPasswords);