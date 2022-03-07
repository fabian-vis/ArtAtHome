import {
    searchBar,
    artistsForError,
    htmlSection
} from './var.js'

/* ------------------------------------------------search error function */
export function searchError(data) {
    let searchTerm = searchBar.value;
    if (data.artObjects.length === 0) {
        const artistName =
            artistsForError[Math.floor(Math.random() * artistsForError.length)];
        htmlSection.insertAdjacentHTML(
            'afterbegin',
            "We found nothing with " + searchTerm +
            ", try a name like " + artistName + "."
        );
    }
}