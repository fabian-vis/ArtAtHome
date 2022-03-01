import {
    getAndRenderData
} from './api.js'

import {
    searchBar,
    searchIcon
} from './var.js'

/* search function */
export function search(searchBar) {

    let searchTerm = searchBar.value;
    let url =
        "https://www.rijksmuseum.nl/api/nl/collection?key=2mU4mudb&q=" + searchTerm + "&ps=5";
    console.log(url);
    getAndRenderData(url);
}


searchBar.addEventListener("keyup", () => {
    if (searchBar.value && searchIcon.style.visibility != "visible") {
        searchIcon.style.visibility = "visible";
    } else if (!searchBar.value) {
        searchIcon.style.visibility = "hidden";
    }
});

searchIcon.addEventListener("click", () => {
    searchBar.value = "";
    let url =
        "https://www.rijksmuseum.nl/api/nl/collection?key=2mU4mudb&q=&ps=5";
    searchIcon.style.visibility = "hidden";
    getAndRenderData(url);
})

searchBar.addEventListener("keyup", function (e) {
    search(searchBar);
});