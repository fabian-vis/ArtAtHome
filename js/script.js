import './routes/routie.js'
import {
    url
} from './modules/var.js'

import {
    getData
} from './modules/api.js'

// function showLoading() {
//     htmlSection.classList.add("skeleton");
// }

routie({
    '': () => {
        console.log('werkt neef')
        /* ------------------------------------------------API data fetchen */
        getData(url)
    }
});