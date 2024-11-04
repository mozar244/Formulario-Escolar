document.getElementById("registerBtn").addEventListener("click", function() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    if (name && email && password) {
        // Exibe a mensagem de sucesso
        document.getElementById("message").style.display = "block";
        
        // Armazena os dados do usuário localmente
        var users = JSON.parse(localStorage.getItem("users")) || [];
        users.push({ name: name, email: email, password: password});
        localStorage.setItem("users", JSON.stringify(users));

        // Limpa os campos de entrada
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});

document.getElementById("viewUsersBtn").addEventListener("click", function() {
    // Abre a página de visualização dos usuários em uma nova janela ou aba
    window.open("usuarios.html", "_blank");
});
document.getElementById("returnBtn").addEventListener("click", function() {
    window.open("login.html", "_blank");
});
