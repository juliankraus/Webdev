(function () {
    let currentSize = 25;

    let list = document.getElementById("list");
    createListItems(list, currentSize);

    // keyboard event listener
    document.addEventListener("keyup", event => {
        if (event.key === "+") {
            currentSize++;
        }
        else if (event.key === "-") {
            currentSize = Math.max(1, currentSize - 1);
        }
        createListItems(list, currentSize);
    });
})();

function createListItems(list, count) {
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }

    for (let itemIndex = 0; itemIndex < count; itemIndex++) {
        let listItem = document.createElement("li");
        listItem.textContent = "List Item No." + (itemIndex + 1);

        if ((itemIndex + 1) % 2 === 0) {
            listItem.style.background = "white";
        }
        else {
            listItem.style.background = "lightgrey";
        }
        listItem.style.cursor = "pointer";
        listItem.onclick = function () {
            listItem.textContent = "Hallo";
        };

        list.appendChild(listItem);
    }
}
