import {
    url,
    testSection
} from './modules/var.js'

import {
    getData
} from './modules/api.js'

function showLoading() {
    testSection.classList.add("skeleton");
    /* after awhile the loading will cancel */
    setTimeout(() => {

        testSection.classList.remove("skeleton");

    }, 5000);
}

showLoading()
getData(url)