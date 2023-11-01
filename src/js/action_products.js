function listProducts() {
    fetch("json/products.json")
        .then(response => response.json())
        .then(products => {
            const productList = document.getElementById("productList");
            productList.innerHTML = "<h2>Product List</h2>";

            if (products.length > 0) {
                productList.innerHTML += "<ul>";
                products.forEach(product => {
                    productList.innerHTML += `<li>${product.name} - Price: ${product.price} - Activated = ${product.activated}</li> `;
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

// Désac
document.getElementById("modifyButton").addEventListener("click", function () {

    const urlParams = new URLSearchParams(window.location.search);
    const role = urlParams.get("role");

    if (role === "admin" || role === "assistente") {                                    // Autorisation
        var nameToDeactivate = prompt("Enter the name of the item to desactivate:");

        if (nameToDeactivate) {
            fetch("json/products.json")
                .then(response => response.json())
                .then(products => {
                    const productToDeactivate = products.find(product => product.name === nameToDeactivate);

                    if (productToDeactivate) {
                        productToDeactivate.activated = false;

                        // Need to modify the jSON and save changes 

                        listProducts()

                    } else {
                        alert("Product not found. Please enter a valid product name.");
                    }
                })
                .catch(error => {
                    console.error("Error fetching product data:", error);
                });
        }
    } else {
        alert("Access denied.");
    }
}
);

document.getElementById("addProductButton").addEventListener("click", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const role = urlParams.get("role");

    if (role === "admin" || role === "assistente") {                                // Autorisation
        var name = prompt("Enter the name of the new product:");
        var price = parseFloat(prompt("Enter the price of the new product:"));

        if (name && !isNaN(price)) { // Price check
            var newProduct = {
                name: name,
                price: price,
                activated: true
            };

            fetch("json/products.json")
                .then(response => response.json())
                .then(products => {

                    products.push(newProduct);

                    // Same isues 
                    listProducts();
                })
                .catch(error => {
                    console.error("Error fetching product data:", error);
                });
        } else {
            alert("Invalid input. Please enter a valid product name and price.");
        }
    } else {
        alert("Access denied.");
    }
});

listProducts()
