let display = document.getElementById("display");

let basket = [];

let displayItemsData = [
    {
        id: "486561562",
        title: "Titre",
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
];



let generateDisplay = () => {
    return (display.innerHTML = displayItemsData
        .map((x) => {
            let { id, title, content } = x;
            return `
        <div id=item-id-${id} class="item">
            <h4>${title}</h4>
            <p>
                ${content}
            </p>
            <button onclick="add(${id})">
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



    let cartIcon = document.getElementById("cartAmount");


    cartIcon.innerHTML = basket.length;
};