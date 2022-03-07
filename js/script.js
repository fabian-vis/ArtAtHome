import {
    url,
    testSection
} from './modules/var.js'

import {
    getData
} from './modules/api.js'


/* ------------------------------------------------loading state */
function showLoading() {
    testSection.classList.add("skeleton");
    /* after awhile the loading will cancel */
    setTimeout(() => {

        testSection.classList.remove("skeleton");

    }, 5000);
}
/* ------------------------------------------------loading state aanzetten */
showLoading()
/* ------------------------------------------------API data fetchen */
getData(url)