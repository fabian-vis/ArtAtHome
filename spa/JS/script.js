/* searchbar icoontjes enz. */

const clearIcon = document.querySelector(".kruisje");
const searchBar = document.querySelector("main > section > input");

searchBar.addEventListener("keyup", () => {
    if (searchBar.value && clearIcon.style.visibility != "visible") {
        clearIcon.style.visibility = "visible";
    } else if (!searchBar.value) {
        clearIcon.style.visibility = "hidden";
    }
});

clearIcon.addEventListener("click", () => {
    searchBar.value = "";
    clearIcon.style.visibility = "hidden";
})


/* Fetching data van de API */
const testSection = document.querySelector('#test');

const getAndRenderData = () => {
    const getURL = 'https://www.rijksmuseum.nl/api/nl/collection?key=8op6V3T9&involvedMaker=Rembrandt+van+Rijn'
    fetch(getURL).then(response => response.json())
        .then(response => {
            console.log(response.artObjects)
            response.artObjects.forEach(kunst => {
                testSection.insertAdjacentHTML('afterbegin', `<article><p>${kunst.title}</p> <img src="${kunst.webImage.url}"></article>`)
            })
        }).catch(error => document.body.insertAdjacentHTML('beforebegin', error))
}
getAndRenderData()