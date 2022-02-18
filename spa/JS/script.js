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
const vliegSection = document.querySelector('main > section');
const headerSection = document.querySelector('header');

function displayLoading() {
    testSection.classList.add("skeleton");
    // na een tijdje gaat de loading state automatisch uit 
    setTimeout(() => {

        testSection.classList.remove("skeleton");

    }, 5000);
}

function hideLoading() {
    testSection.classList.remove("skeleton");
}

function inVliegen() {
    vliegSection.classList.add("vliegen");
}

function headerOpacity() {
    headerSection.classList.add("headerOpacity");
}



displayLoading()


const getAndRenderData = () => {


    const getURL = 'https://www.rijksmuseum.nl/api/nl/collection?key=8op6V3T9&involvedMaker=Rembrandt+van+Rijn'
    fetch(getURL)
        .then(response => {
            console.log(response)
            if (response.status >= 200 && response.status <= 299) {
                return response.json();
            } else {
                throw Error(response.statusText);
            }
        })
        .then(response => {
            hideLoading()
            inVliegen()
            headerOpacity()
            console.log(response.artObjects)
            response.artObjects.forEach(kunst => {
                testSection.insertAdjacentHTML('afterbegin', `<article><p>${kunst.title}</p> <img class="skeleton" src="${kunst.webImage.url.slice(0, -3)+"=s1000"}"></article>`)
            })
        })
        .catch(error => testSection.insertAdjacentHTML('afterbegin', `werkt niet neef`))


}
getAndRenderData()