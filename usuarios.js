function loadUsers() {
    var users = JSON.parse(localStorage.getItem("users")) || [];
    var userList = document.getElementById("userList");
    userList.innerHTML = ''; // Limpa a tabela antes de preenchê-la

    users.forEach(function(user, index) {
        var row = document.createElement("tr");

        var nameCell = document.createElement("td");
        nameCell.textContent = user.name;
        row.appendChild(nameCell);

        var emailCell = document.createElement("td");
        emailCell.textContent = user.email;
        row.appendChild(emailCell);

        var actionCell = document.createElement("td");
        actionCell.innerHTML = 
            '<button onclick="editUser(' + index + ')">Editar</button>' +
            ' <button onclick="deleteUser(' + index + ')">Excluir</button>';
        row.appendChild(actionCell);

        userList.appendChild(row);
    });
}

function editUser(index) {
    var users = JSON.parse(localStorage.getItem("users"));
    var userName = prompt("Edite o nome do usuário:", users[index].name);
    var userEmail = prompt("Edite o email do usuário:", users[index].email);
    var userPassword = prompt("Editar a senha do usuário: ", users[index].password);

    if (userName && userEmail && userPassword) {
        users[index].name = userName;
        users[index].email = userEmail;
        users[index].password = userPassword; // Corrigido para "users[index].password"
        localStorage.setItem("users", JSON.stringify(users));
        window.location.reload(); // Recarrega a página para refletir as mudanças
    }
}

function deleteUser(index) {
    var users = JSON.parse(localStorage.getItem("users"));
    users.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(users));
    window.location.reload();
}

window.onload = loadUsers;
