import './routes/routie.js'
import {
    url,
    htmlSection
} from './modules/var.js'

import {
    getData
} from './modules/api.js'

function showLoading() {
    htmlSection.classList.add("skeleton");
    /* after awhile the loading will cancel */
    setTimeout(() => {

        htmlSection.classList.remove("skeleton");

    }, 5000);
}

routie({
    '': () => {
        console.log('werkt neef')
        /* ------------------------------------------------loading state aanzetten */
        showLoading()
        /* ------------------------------------------------API data fetchen */
        getData(url)
    }
});