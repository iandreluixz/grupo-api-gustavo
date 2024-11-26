document.addEventListener("DOMContentLoaded", () => {
    const apiUrlUsers = "https://dummyjson.com/users";
    const apiUrlProducts = "https://dummyjson.com/products";
    
    // Função para carregar e exibir usuários
    async function loadUsers() {
        const response = await fetch(apiUrlUsers);
        const data = await response.json();
        const userList = document.getElementById("user-list");
        userList.innerHTML = '';
        
        data.users.forEach(user => {
            const userDiv = document.createElement("div");
            userDiv.innerHTML = `
                <img src="${user.image}" alt="Foto de ${user.firstName}" width="50" />
                <p>${user.firstName} ${user.lastName}</p>
                <p>${user.email} - Idade: ${user.age}</p>
            `;
            userList.appendChild(userDiv);
        });
    }

    // Função para carregar e exibir produtos
    async function loadProducts() {
        const response = await fetch(apiUrlProducts);
        const data = await response.json();
        const productList = document.getElementById("product-list");
        productList.innerHTML = '';

        data.products.forEach(product => {
            const productDiv = document.createElement("div");
            productDiv.innerHTML = `
                <img src="${product.thumbnail}" alt="Foto de ${product.title}" width="50" />
                <p>${product.title} - ${product.brand}</p>
                <p>${product.description} - R$ ${product.price}</p>
            `;
            productList.appendChild(productDiv);
        });
    }

    // Chama as funções ao carregar as páginas
    if (document.getElementById("user-list")) {
        loadUsers();
    }

    if (document.getElementById("product-list")) {
        loadProducts();
    }

    // Formulário de Adicionar Usuário
    const userForm = document.getElementById("user-form");
    if (userForm) {
        userForm.addEventListener("submit", (event) => {
            event.preventDefault();
            // Validar e adicionar usuário
            const firstName = document.getElementById("firstName").value;
            const lastName = document.getElementById("lastName").value;
            const email = document.getElementById("email").value;
            const age = document.getElementById("age").value;
            const image = document.getElementById("image").value;
            
            if (validateEmail(email) && validateAge(age)) {
                // Simulação de adição (não conectando com a API aqui)
                alert("Usuário adicionado!");
            } else {
                alert("Erro na validação.");
            }
        });
    }
    
    // Função de validação de email
    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return regex.test(email);
    }

    // Função de validação de idade
    function validateAge(age) {
        return age >= 0 && age <= 120;
    }
});
vou morrer KKKKKKKKKKKKKK
