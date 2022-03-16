const addMovieModal = document.getElementById('add-modal')
// const addMovieModal = document.querySelector('#add-modal')
// const addMovieModal = document.body.children[1]; //Using sibling

// const startaAddMovieButton = document.querySelector('header').lastElementChild;
const startaAddMovieButton = document.querySelector('header button')

const backdrop = document.getElementById('backdrop')
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive')

console.log(addMovieModal)
console.log(startaAddMovieButton)


const toggleBackdrop = () => {
    backdrop.classList.toggle('visible')
};

//Change the class to the modal to toggle visibility
const toggleMovieModal = () => {
    addMovieModal.classList.toggle('visible')
    toggleBackdrop()
}

const cancelAddMovie = () => {
    toggleMovieModal()
};

const backdropClickHandler = () => {
    toggleMovieModal()
}

// We don't to add parenthesis because we don't want to execute it immediately
startaAddMovieButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', toggleMovieModal);
cancelAddMovieButton.addEventListener('click', cancelAddMovie);