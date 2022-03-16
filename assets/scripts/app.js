const addMovieModal = document.getElementById('add-modal')
// const addMovieModal = document.querySelector('#add-modal')
// const addMovieModal = document.body.children[1]; //Using sibling

// const startaAddMovieButton = document.querySelector('header').lastElementChild;
const startaAddMovieButton = document.querySelector('header button')

const backdrop = document.getElementById('backdrop')
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive')
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
// Selecting all the modal's input.
const userInputs = addMovieModal.querySelectorAll('input')

const movies = []

console.log(addMovieModal)
console.log(startaAddMovieButton)
console.log(userInputs)


const toggleBackdrop = () => {
    backdrop.classList.toggle('visible')
};

//Change the class to the modal to toggle visibility
const toggleMovieModal = () => {
    addMovieModal.classList.toggle('visible')
    toggleBackdrop()
}

const clearMovieInput = () => {
    // Traverse userinputs and set with an empty string.
    for (const usrInput of userInputs) {
        usrInput.value = '';
    }
}

const cancelAddMovie = () => {
    toggleMovieModal()
    clearMovieInput()
};

// The symbol "+" allow us to convert the string ratingValue in a number.
const addMovieHandler = () => {
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if (titleValue.trim() === '' ||
        imageUrlValue.trim() === '' ||
        ratingValue.trim === '' ||
        +ratingValue < 1 || +ratingValue > 5
    ) {
        alert('Please enter valid values (rating between 1 and 5).')
    }

    const newMovie = {
        title: titleValue,
        image: imageUrlValue,
        rating: ratingValue
    }

    movies.push(newMovie)
    console.log(movies)
    toggleMovieModal()
    clearMovieInput()
};



const backdropClickHandler = () => {
    toggleMovieModal()
}

// We don't to add parenthesis because we don't want to execute it immediately
startaAddMovieButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovie);
confirmAddMovieButton.addEventListener('click', addMovieHandler)