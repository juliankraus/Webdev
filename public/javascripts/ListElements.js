/*let currentSize = 100 / 4;

(function () {

    let list = document.getElementById("list");
    createListItems(list, currentSize);

})();

function createListItems(list, count) {
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }

    for (let itemIndex = 0; itemIndex <= count; itemIndex++) {
        let listItem = document.createElement("li");
        listItem.textContent = "Item No." + itemIndex;

        if ((itemIndex + 1) % 2 === 0) {
            listItem.style.background = "white";
        }
        else {
            listItem.style.background = "lightgrey";
        }
        listItem.style.cursor = "pointer";

        list.appendChild(listItem);
    }
}*/

/*window.addEventListener("resize", function () {
    var w = window.outerWidth;
    var h = window.outerHeight;
    var txt = "Window size: width=" + w + ", height=" + h;

    var result = (35.8 / 100) * 10000;

    document.getElementsByTagName("li")[0].innerHTML = window.screen.availHeight;
});*/
