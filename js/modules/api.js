import {
    htmlSection
} from './var.js'

import {
    errorState,
    header,
    flyIn,
    hideLoading
} from './states.js'

import {
    searchError,
} from './searchError.js'

import './search.js'

/* ------------------------------------------------Data uit de API halen */
export function getData(url) {
    const data = fetch(url)
        .then(response => response.json())
        .then(data => {
            htmlSection.innerHTML = ""
            searchError(data)
            renderData(data)
        })
        /* ------------------------------------------------Gebruiker word op de hoogte gesteld van een error */
        .catch(err => {
            flyIn()
            errorState()
        })
}
/* ------------------------------------------------Data word op de pagina gerenderd */
function renderData(data) {
    hideLoading()
    flyIn()
    header()
    console.log(data)
    data.artObjects.forEach(kunst => {
        htmlSection.insertAdjacentHTML('afterbegin',
            `
            <article>
                <p>${kunst.title}</p> 
                <p>${kunst.principalOrFirstMaker}</p>
                <img src="${kunst.webImage.url.slice(0, -3)+"=s1000"}">
            </article>
        `)
    })
}