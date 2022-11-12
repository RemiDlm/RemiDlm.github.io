let shoppingCart = document.getElementById("shopping-cart");
let empty = document.getElementById("empty");


let basket = JSON.parse(localStorage.getItem("data")) || [];

console.log(basket);

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
            //console.log(x);
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

generateCartItems();


let removeItem = (id) => {
    let selectedItem = id;
    basket = basket.filter((x) => x.id !== selectedItem);
    generateCartItems();
    cartRefresh();
    localStorage.setItem("data", JSON.stringify(basket));
};

let clearCart = () => {
    basket = [];
    generateCartItems();
    cartRefresh();
    localStorage.setItem("data", JSON.stringify(basket));
};

let titleKeys = Object.keys(basket[0])

let refinedData = []

refinedData.push(titleKeys)

log.console(refinedData);

ourData.forEach(item => {
    refinedData.push(Object.values(item))
})


let csvContent = ''

refinedData.forEach(row => {
    csvContent += row.join(',') + '\n'
})


const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8,' })
const objUrl = URL.createObjectURL(blob)
const link = document.createElement('a')
link.setAttribute('href', objUrl)
link.setAttribute('download', 'File.csv')
link.textContent = 'Click to Download'

document.querySelector('body').append(link) 
