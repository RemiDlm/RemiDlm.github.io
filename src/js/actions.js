function addUser() {

    const urlParams = new URLSearchParams(window.location.search);
    const role = urlParams.get("role");

    if (role !== "admin") {                                                                // Autorisation
        alert("Access denied for non-admin users.");
    } else {

        const newUsername = document.getElementById("newUsername").value;
        const newPassword = document.getElementById("newPassword").value;
        const newRole = document.getElementById("newRole").value;

        if (newRole !== "admin" && newRole !== "assistant" && newRole !== "seller") {
            alert("Invalid role selection. Please choose a valid role.");
            return;
        }

        const newUser = {
            username: newUsername,
            password: newPassword,
            role: newRole
        };

        fetch("src/json/users.json")
            .then(response => response.json())
            .then(users => {
                users.push(newUser);

                alert("New user added:\n" + JSON.stringify(newUser, null, 2));      // Have issue with the json updates
            })
            .catch(error => {
                console.error("Error fetching user data:", error);
            });

    }
}

function listProducts() {
    fetch("src/json/products.json")
        .then(response => response.json())
        .then(products => {
            const productList = document.getElementById("productList");
            productList.innerHTML = "<h2>Product List</h2>";

            const activeProducts = products.filter(product => product.activated); // if not true no display

            if (products.length > 0) {
                productList.innerHTML += "<ul>";
                activeProducts.forEach(product => { // activeProducts not products
                    productList.innerHTML += `<li>${product.name} - Price: ${product.price}</li>`;
                });
                productList.innerHTML += "</ul>";
            } else {
                productList.innerHTML += "<p>No products available.</p>";
            }
        })
        .catch(error => {
            console.error("Error fetching product data:", error);
        });
}

function userProduct() {
    const urlParams = new URLSearchParams(window.location.search);
    const role = urlParams.get("role");

    if (role === "admin" || role === "assistente") {                        // Autorisation
        window.location.href = 'src/html/products.html?role=' + role
    } else {
        listProducts()
    }


}