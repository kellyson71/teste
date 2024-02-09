function validateLogin() {
    var emailInput = document.getElementById("email").value;
    var passwordInput = document.getElementById("password").value;

    // Check if the entered email and password match the specified values
    if (emailInput === "Milenny@gmail.com" && passwordInput === "Milenny123") {
        // Redirect to another page
        window.location.href = "./indx.html";
    } else {
        alert("senha ou gmail incorretos");
    }
}

function forgotPassword() {
    alert("como vc esqueceu a senha? nem conta vc tem"); // Display a message when "Esqueci minha senha" is clicked
}
