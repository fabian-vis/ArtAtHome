import {
    testSection,
    flySection,
    headerSection
} from './var.js'

import {
    searchError
} from './searchError.js'

import './search.js'

function hideLoading() {
    testSection.classList.remove("skeleton");
}

function flyIn() {
    flySection.classList.add("vliegen");
}

function headerOpacity() {
    headerSection.classList.add("headerOpacity");
}

export function getData(url) {
    const data = fetch(url)
        .then(response => response.json())
        .then(data => {
            testSection.innerHTML = ""
            searchError(data)
            renderData(data)
        })
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

function renderData(data) {
    hideLoading()
    flyIn()
    headerOpacity()
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