let display = document.getElementById("display");

let basket = JSON.parse(localStorage.getItem("data")) || [];


let generateDisplay = () => {
    return (display.innerHTML = displayItemsData
        .map((x) => {
            let { id, titre, criteres,incontournable, categorie } = x;
            let search = basket.find((x) => x.id === id) || [];
            return `
        <div id=item-id-${id} class="item-${incontournable}">
            
            <h3>${titre}</h3>
            <p>
                ${criteres}
            </p>
            <button onclick="add(${id})" class="adds-${incontournable}" ${search.item === undefined ? 0 : search.item}>
                
                Ajouter au panier
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


    basket = basket.filter((x) => x.item !== 0);

    cartRefresh();
    localStorage.setItem("data", JSON.stringify(basket));
    console.log(basket);
};

let addInctournable = () => {

    displayItemsData.forEach(element => {
        let search = basket.find((x) => x.id === element.id);
        if (element.incontournable === true && search === undefined) {
            basket.push({
                id: element.id,
                item: 1,
            });
        };
    });

    localStorage.setItem("data", JSON.stringify(basket));
};

addInctournable();



let cartRefresh = () => {
    let cartIcon = document.getElementById("cartAmount");

    cartIcon.innerHTML = basket.length;
};

cartRefresh();

