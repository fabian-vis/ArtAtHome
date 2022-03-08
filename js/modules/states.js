import {
    htmlSection,
    headerSection,
    flySection
} from './var.js'

/* ------------------------------------------------Header opacity veranderen */
export function header() {
    headerSection.classList.add("headerOpacity")
}
/* ------------------------------------------------Error handling */
export function errorState() {
    htmlSection.insertAdjacentHTML('afterbegin',
        `
            <article>
                <p>Oeps, er is iets fout gegaan.</p> 
                <h1>Herlaad de pagina om het opnieuw te proberen</h1>
            </article>
        `)
}
/* ------------------------------------------------data in laten vliegen */
export function flyIn() {
    flySection.classList.add("vliegen")
}
/* ------------------------------------------------loading state verwijderen */
export function hideLoading() {
    htmlSection.classList.remove("skeleton")
}