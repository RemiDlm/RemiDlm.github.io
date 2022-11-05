let display = document.getElementById("display");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let displayItemsData = [
    {
        id: "486561562",
        title: "truc important",
        content: "CONTENU",
    }
    ,
    {
        id: "8548682461",
        title: "Titre",
        content: "CONTENU",
    }
    ,
    {
        id: "4685525848",
        title: "Titre",
        content: "CONTENU",
    }
    ,
    {
        id: "984664646",
        title: "Titre",
        content: "CONTENU",
    },
    {
        id: "845148625849",
        title: "truc important2",
        content: "CONTENU",
    }
    ,
    {
        id: "486554851",
        title: "truc  tres important",
        content: "CONTENU",
    }
    ,
    {
        id: "658956148",
        title: "rebite et nul",
        content: "c'est quoi le contenu",
    }
    ,
    {
        id: "658955446148",
        title: "rebite est fort",
        content: "c'lol quoi le contenu",
    }
    ,
];



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
        search.item += 1;
    }

    console.log(basket);

    basket = basket.filter((x) => x.item !== 0);

    cartRefresh();
    localStorage.setItem("data", JSON.stringify(basket));
};

let cartRefresh = () => {
    let cartIcon = document.getElementById("cartAmount");

    cartIcon.innerHTML = basket.length;
};

cartRefresh();

