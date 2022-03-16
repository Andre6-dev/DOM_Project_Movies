const addMovieModal = document.getElementById('add-modal')
// const addMovieModal = document.querySelector('#add-modal')
// const addMovieModal = document.body.children[1]; //Using sibling

// const startaAddMovieButton = document.querySelector('header').lastElementChild;
const startaAddMovieButton = document.querySelector('header button')

console.log(addMovieModal)
console.log(startaAddMovieButton)

//Change the class to the modal to toggle visibility
const toggleMovieModal = () => {
    addMovieModal.classList.toggle('visible')
}
// We don't to add parenthesis because we don't want to execute it immediately
startaAddMovieButton.addEventListener('click', toggleMovieModal)