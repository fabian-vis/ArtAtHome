import {
    testSection,
    flySection,
    headerSection
} from './var.js'

import {
    searchError
} from './searchError.js'

import './search.js'
/* ------------------------------------------------loading state verwijderen */
function hideLoading() {
    testSection.classList.remove("skeleton");
}
/* ------------------------------------------------data in laten vliegen */
function flyIn() {
    flySection.classList.add("vliegen");
}
/* ------------------------------------------------Header opacity veranderen */
function header() {
    headerSection.classList.add("headerOpacity");
}
/* ------------------------------------------------Data uit de API halen */
export function getData(url) {
    const data = fetch(url)
        .then(response => response.json())
        .then(data => {
            testSection.innerHTML = ""
            searchError(data)
            renderData(data)
        })
        /* ------------------------------------------------Gebruiker word op de hoogte gesteld van een error */
        .catch(err => {
            flyIn()
            testSection.insertAdjacentHTML('afterbegin',
                `
            <article>
                <p>Oeps, er is iets fout gegaan.</p> 
                <h1>Herlaad de pagina om het opnieuw te proberen</h1>
            </article>
        `)
        })
}
/* ------------------------------------------------Data word op de pagina gerenderd */
function renderData(data) {
    hideLoading()
    flyIn()
    header()
    console.log(data)
    data.artObjects.forEach(kunst => {
        testSection.insertAdjacentHTML('afterbegin',
            `
            <article>
                <p>${kunst.title}</p> 
                <img src="${kunst.webImage.url.slice(0, -3)+"=s1000"}">
            </article>
        `)
    })
}