function checkPassword() {
    let pass1 = document.querySelector('#pw').value;
    let pass2 = document.querySelector('#confirm_pw').value;

    if (pass1 != pass2) {
        document.querySelector(".wrong_pw").style.display = "block";
        // document.querySelectorAll(".pw_border").style.borderColor = "red";
        return false;
    }

    else if (pass1 == pass2) {
        alert("Your response was submitted");
    }
    return true;
}