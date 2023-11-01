document.addEventListener("DOMContentLoaded", function () {     // Need to modify in the futur don't like the way it work
    // and in this case dont work
    var jsonData = [];

    function displayData() {
        var output = document.getElementById("output");
        output.innerHTML = JSON.stringify(jsonData, null, 2);
    }

    function loadData() {
        fetch("../json/sales.json")
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                jsonData = data;
                displayData();
            })
            .catch(function (error) {
                console.error("Error loading JSON data:", error);
            });
    }

    // Display data but empty NOt WORKING =(
    displayData();

    // Add button
    document.getElementById("addButton").addEventListener("click", function () {
        const urlParams = new URLSearchParams(window.location.search);
        const role = urlParams.get("role");

        if (role === "admin" || role === "assistente") {                // Autorisation
            var name = prompt("Enter a name for the new item:");
            var amount = prompt("Enter a amount for the new item:");
            var date = prompt("Enter a date of sale for the new item:");


            if (name && amount) {
                jsonData.push({ name: name, amount: amount, date: date });
                displayData();
            }
        } else {
            alert("Access denied.");
        }

    });

    // Delete buttont
    document.getElementById("deleteButton").addEventListener("click", function () {
        const urlParams = new URLSearchParams(window.location.search);
        const role = urlParams.get("role");

        if (role === "admin" || role === "assistente") {                    // Autorisation
            var nameToDelete = prompt("Enter the name of the item to delete:");

            if (nameToDelete) {
                jsonData = jsonData.filter(function (item) {
                    return item.name !== nameToDelete;
                });
                displayData();
            }
        } else {
            alert("Access denied.");
        }

    });

    // Modify button
    document.getElementById("modifyButton").addEventListener("click", function () {

        const urlParams = new URLSearchParams(window.location.search);
        const role = urlParams.get("role");

        if (role === "admin") {                                               // Autorisation
            var nameToModify = prompt("Enter the name of the item to modify:");
            var newamount = prompt("Enter the new amount for the item:");
            var newDate = prompt("Enter the new date of sale of the product");

            if (nameToModify && newamount && newDate) {
                for (var i = 0; i < jsonData.length; i++) {
                    if (jsonData[i].name === nameToModify) {
                        jsonData[i].amount = newamount;
                        jsonData[i].date = newDate;
                        displayData();
                        break;
                    }
                }
            }
        } else {
            alert("Access denied for non-admin users.");
        }
    }
    );
});
