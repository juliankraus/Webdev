(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
    /**
     * Created by Julian on 18.05.17.
     */
    let pr = document.querySelector( '.paginate.left' );
    let pl = document.querySelector( '.paginate.right' );

    pr.onclick = slide.bind( this, -1 );
    pl.onclick = slide.bind( this, 1 );

    let index = 0, total = 5;

    function slide(offset) {
        index = Math.min( Math.max( index + offset, 0 ), total - 1 );

        document.querySelector( '.counter' ).innerHTML = ( index + 1 ) + ' / ' + total;

        pr.setAttribute( 'data-state', index === 0 ? 'disabled' : '' );
        pl.setAttribute( 'data-state', index === total - 1 ? 'disabled' : '' );
    }

    slide(0);

},{}],2:[function(require,module,exports){
    /**
     * Created by Julian on 19.05.17.
     */
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
            listItem.textContent = `List Item No. ${itemIndex + 1}`;

            if((itemIndex + 1) % 2 == 0) {
                listItem.style.background = 'white';
            } else {
                listItem.style.background = 'lightgrey';
            }
            listItem.style.cursor = 'pointer';
            listItem.onclick = function () {
                listItem.textContent = 'Hallo';
            };

            list.appendChild(listItem);
        }
    }

},{}]},{},[1,2]);
