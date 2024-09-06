const users = [];
let editIndex = null;

const userTable = document.querySelector("#userTable tbody");
const userFormModal = new bootstrap.Modal(document.getElementById("userForm")); // Modal com Bootstrap
const newUserBtn = document.getElementById("newUserBtn");
const form = document.getElementById("form");

function renderUsers() {
    userTable.innerHTML = "";
    users.forEach((user, index) => {
        const row = `
            <tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>
                    <button class="btn btn-warning btn-sm" onclick="editUser(${index})">Editar</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteUser(${index})">Excluir</button>
                </td>
            </tr>
        `;
        userTable.insertAdjacentHTML("beforeend", row);
    });
}

function addUser(user) {
    users.push(user);
    renderUsers();
}

function editUser(index) {
    editIndex = index;
    const user = users[index];
    document.getElementById("name").value = user.name;
    document.getElementById("email").value = user.email;
    document.getElementById("password").value = user.password;
    document.getElementById("status").value = user.status;
    userFormModal.show(); // Mostra o modal com Bootstrap
}

function deleteUser(index) {
    users.splice(index, 1);
    renderUsers();
}

function saveUser(event) {
    event.preventDefault();
    const user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        status: document.getElementById("status").value
    };

    if (editIndex !== null) {
        users[editIndex] = user; // Se estamos editando, atualiza o usuário existente
        editIndex = null; // Após edição, resetar editIndex
    } else {
        addUser(user); // Caso contrário, adiciona um novo usuário
    }

    userFormModal.hide(); // Fecha o modal com Bootstrap
    renderUsers(); // Atualiza a lista de usuários
}

function openForm() {
    form.reset(); // Limpa todos os campos do formulário antes de abrir
    editIndex = null; // Garante que não está em modo de edição
    userFormModal.show(); // Exibe o modal
}

newUserBtn.addEventListener("click", openForm); // Ao clicar no botão "Novo Usuário", abre o modal e reseta o formulário
form.addEventListener("submit", saveUser);

// Renderizar os usuários iniciais
renderUsers();
