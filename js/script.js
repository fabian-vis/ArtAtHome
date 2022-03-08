import './routes/routie.js'
import {
    url
} from './modules/var.js'

import {
    getData
} from './modules/api.js'

routie({
    '': (id) => {
        /* ------------------------------------------------API data fetchen */
        getData(url)
    },
    ':id': (id) => {
        getData(id)
    },
})