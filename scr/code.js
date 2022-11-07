let display = document.getElementById("display");

let basket = JSON.parse(localStorage.getItem("data")) || [];


let generateDisplay = () => {
    return (display.innerHTML = displayItemsData
        .map((x) => {
            let { id, title, content } = x;
            let search = basket.find((x) => x.id === id) || [];
            return `
        <div id=item-id-${id} class="item">
            <h4>${title}</h4>
            <p>
                ${content}
            </p>
            <button onclick="add(${id})" ${search.item === undefined ? 0 : search.item}>
                
                Add
            </button>
        </div>
    `;
        }).join(""));
};

generateDisplay();

let add = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem);

    if (search === undefined) {
        basket.push({
            id: selectedItem,
            item: 1,
        });
    } else {
        if (search.item !== 1) {

        }
    }

    //console.log(basket);

    basket = basket.filter((x) => x.item !== 0);

    cartRefresh();
    localStorage.setItem("data", JSON.stringify(basket));
};

let cartRefresh = () => {
    let cartIcon = document.getElementById("cartAmount");

    cartIcon.innerHTML = basket.length;
};

cartRefresh();

