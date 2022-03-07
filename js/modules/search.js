import {
    getData
} from './api.js'

import {
    searchBar,
    searchIcon
} from './var.js'

/* ------------------------------------------------search function */
export function search(searchBar) {
    let searchTerm = searchBar.value;
    let url =
        "https://www.rijksmuseum.nl/api/nl/collection?key=2mU4mudb&q=" + searchTerm + "&ps=5";
    console.log(url);
    getData(url);
}

/* ------------------------------------------------Kruis icoon toevoegen aan de inputbar */
searchBar.addEventListener("keyup", () => {
    if (searchBar.value && searchIcon.style.visibility != "visible") {
        searchIcon.style.visibility = "visible";
    } else if (!searchBar.value) {
        searchIcon.style.visibility = "hidden";
    }
});
/* ------------------------------------------------ Klik op het kruisje om het inputveld weer leeg te maken */
searchIcon.addEventListener("click", () => {
    searchBar.value = "";
    let url = "https://www.rijksmuseum.nl/api/nl/collection?key=2mU4mudb&q=&ps=5";
    searchIcon.style.visibility = "hidden";
    getData(url);
})
/* ------------------------------------------------Wanneer er getypt wordt in de input word de search functie uitgevoerd */
searchBar.addEventListener("keyup", (e) => {
    search(searchBar);
});