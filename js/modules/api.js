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
export function getData(url, id) {
    const data = fetch(url)
        .then(response => response.json())
        .then(data => {
            htmlSection.innerHTML = ""
            searchError(data)
            renderData(data, id)
        })
        /* ------------------------------------------------Gebruiker word op de hoogte gesteld van een error */
        .catch(err => {
            flyIn()
            errorState()
        })
}
/* ------------------------------------------------Data word op de pagina gerenderd */
function renderData(data, id) {
    // console.log(id)
    if (!id) {
        hideLoading()
        flyIn()
        header()
        data.artObjects.forEach(kunst => {
            htmlSection.insertAdjacentHTML('afterbegin',
                `
                    <article>
                    <a href="#kunst/${kunst.id}">
                            <p>${kunst.title}</p> 
                            <p>${kunst.principalOrFirstMaker}</p>
                            <img src="${kunst.webImage.url.slice(0, -3)+"=s1000"}">
                    </a>
                    </article>
            `)
            // console.log(kunst.id)
        })
    } else {
        // console.log("joe")
    }
}