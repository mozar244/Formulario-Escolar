$(document).ready(function() {
    // Aguardar 3 segundos e depois esconder a splash screen
    setTimeout(function() {
        $('#splashScreen').fadeOut(1000, function() {
            $(this).remove(); // Remove o elemento da DOM após o fade-out
        });
    }, 3000); // Espera de 3 segundos antes de desaparecer
});
var tentativas = 0;
var maxTentativas = 3; // Defina o número máximo de tentativas

document.getElementById("loginBtn").addEventListener("click", function() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var users = JSON.parse(localStorage.getItem("users")) || [];

    var user = users.find(u => u.email === email);
    
    if (user) {
        if (user.password === password) {
            // Redirecionamento baseado no tipo de usuário
            if (email.endsWith("admin")) {
                window.location.href = "admin.html";
            } else if (email.endsWith("prof")) {
                window.location.href = "professor.html";
            } else {
                window.location.href = "aluno.html";
            }
        } else {
            tentativas++;
            if (tentativas >= maxTentativas) {
                alert("Você atingiu o número máximo de tentativas. Se precisar, clique em 'Esqueci minha senha' para redefinir.");
                document.getElementById("loginBtn").disabled = true; // Desativa o botão de login
            } else {
                alert("Senha incorreta, tente novamente.");
            }
        }
    } else {
        alert("Você ainda não está cadastrado no sistema.");
        document.getElementById("cadastrBtn").addEventListener("click", function() {
            window.location.href = "cadastramento.html";
        });
    }
});

document.getElementById("forgotPasswordBtn").addEventListener("click", function() {
    window.location.href = "esqueci-senha.html";
});
