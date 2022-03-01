import {
    url,
    testSection
} from './modules/var.js'

import {
    getAndRenderData
} from './modules/api.js'

function showLoading() {
    testSection.classList.add("skeleton");
    /* after awhile the loading will cancel */
    setTimeout(() => {

        testSection.classList.remove("skeleton");

    }, 5000);
}

showLoading()
getAndRenderData(url)