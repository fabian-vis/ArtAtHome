import {
    searchBar,
    artistsForError,
    testSection
} from './var.js'


export function searchError(data) {
    let searchTerm = searchBar.value;
    if (data.artObjects.length === 0) {
        const artistName =
            artistsForError[Math.floor(Math.random() * artistsForError.length)];
        testSection.insertAdjacentHTML(
            'afterbegin',
            "We found nothing with " + searchTerm +
            ", try a name like " + artistName + "."
        );
    }
}