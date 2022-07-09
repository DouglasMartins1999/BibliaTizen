/**
 * pagebeforeshow event handler
 * Do preparatory works and adds event listeners
 */
pages.main.addEventListener("pagebeforeshow", function (event) {
    const assistPanel = document.querySelector("#history");
    const listElement = document.querySelector("#history .ui-listview");

    pages.main.assist = tau.widget.AssistPanel(assistPanel, { dragEdge: 0 });

    vHistory.forEach(h => {
        const entry = h.split(".")
        const elem = document.createElement("li");
        const amount = document.createElement("span");

        entry[1] = parseInt(entry[1]);
        amount.className = "ui-li-sub-text";
        amount.textContent = `Capítulo ${(entry[1] + 1).toString().padStart(2, "0")}`;

        elem.classList.add("li-has-multiline");
        elem.textContent = `${index.books[entry[0]]} [${entry[2].toUpperCase()}]`;

        elem.appendChild(amount);
        elem.addEventListener("click", function(evnt) {
            book = entry[0]
            chapter = entry[1];
            version = entry[2];

            tau.changePage("#reader");
        })

        listElement.appendChild(elem)
    })
});

/**
 * pagehide event handler
 * Destroys and removes event listeners
 */
pages.main.addEventListener("pagehide", function () {
    pages.main.assist.element.querySelector(".ui-listview").innerHTML = "";
    pages.main.assist.destroy();
});

/**
 * Assist Panel open event handler.
 * Enables assist panel rotary scrolling
 */
// page.addEventListener("assistpanelopen", function () {
//     tau.util.rotaryScrolling.enable(page.querySelector(".ui-assist-panel"));
// });

// /**
//  * Assist Panel close event handler
//  * Enables scroller for assist panel page
//  */
// page.addEventListener("assistpanelclose", function () {
//     tau.util.rotaryScrolling.enable(page.querySelector(".ui-scroller"));
// });