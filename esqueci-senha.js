document.getElementById("resetBtn").addEventListener("click", function() {
    var email = document.getElementById("email").value;
    var users = JSON.parse(localStorage.getItem("users")) || [];

    var user = users.find(u => u.email === email);

    if (user) {
        var newPassword = prompt("Digite a nova senha:");
        if (newPassword) {
            user.password = newPassword;
            localStorage.setItem("users", JSON.stringify(users));
            alert("Senha redefinida com sucesso. Você pode fazer login com a nova senha.");
            window.location.href = "login.html";
        }
    } else {
        alert("Email não encontrado.");
    }
});
