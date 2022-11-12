let shoppingCart = document.getElementById("shopping-cart");
let empty = document.getElementById("empty");

let basket = JSON.parse(localStorage.getItem("data")) || [];
let List = [];

console.log(basket); // a supr

let cartRefresh = () => {
    let cartIcon = document.getElementById("cartAmount");

    cartIcon.innerHTML = basket.length;
};

cartRefresh();

let generateCartItems = () => {
    if (basket.length !== 0) {
        empty.innerHTML = `
        <h2>TEST</h2>
        <button onclick="clearCart()">Clear Cart</button>
        `;
        return (shoppingCart.innerHTML = basket.map((x) => {
            let { id, item } = x;
            let search = displayItemsData.find((y) => y.id == id) || [];
            return `
            
            <div class="cart-item">
                <h2>${search.titre}</h2>
                <p>${search.criteres}</p>
                <i onclick="removeItem(${id})" class="bi bi-x-lg"></i>
            </div>
            `;
        }).join(""));
    } else {
        shoppingCart.innerHTML = ``;
        empty.innerHTML = `
        <h2>Cart is empty<h2>
        <a href="list.html">
            <button class="homeBtn">Back to shopping</button>
        </a>
        `;
    }
    basket.map((x) => {
        let { id, item } = x;
        let search = displayItemsData.find((y) => y.id)
    })
};

let generateExportList = () => {
    return (basket.map((x) => {

        let { id, item } = x;
        let search = displayItemsData.find((y) => y.id == id) || [];



        List.push({
            titre: search.titre,
            categorie: search.categorie,
            criteres: search.criteres,
            cycledevie: search.cycledevie,
            indicateur: search.indicateur,
            Xindicateur: search.Xindicateur,
            Yindicateur: search.Yindicateur,
        });

    }));
};

generateCartItems();
generateExportList();

let removeItem = (id) => {
    let selectedItem = id;
    basket = basket.filter((x) => x.id !== selectedItem);
    generateCartItems();
    cartRefresh();
    generateExportList();
    localStorage.setItem("data", JSON.stringify(basket));
};

let clearCart = () => {
    basket = [];
    generateCartItems();
    cartRefresh();
    List = [];
    localStorage.setItem("data", JSON.stringify(basket));
};

console.log(List); //a supr