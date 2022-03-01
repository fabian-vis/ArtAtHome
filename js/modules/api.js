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

export function getAndRenderData(url) {
    const data = fetch(url)
        .then(response => response.json())
        .then(data => {
            testSection.innerHTML = ""
            searchError(data)
            renderData(data)
        })
        .catch(err => console.log(err))
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
                <img class="skeleton" src="${kunst.webImage.url.slice(0, -3)+"=s1000"}">
            </article>
        `)
    })
}