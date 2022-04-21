// import functions
const Button = document.getElementById('button');
const nameEL = document.getElementById('name');
const SectionElement = document.getElementById('my-info');
const animalDiv = document.getElementById('animal-div');

const animalButton = document.getElementById('animal button');
// set event listeners
Button.addEventListener('click', () => {
    if (nameEL.textContent === '____') {
        nameEL.textContent = 'Daniel Stanford';
    } else { 
        nameEL.textContent = '____';
    }
    SectionElement.classlist.toggle('my-info');
});

animalButton.addEventListener('click', () => {
    animalDiv.classList.remove('hidden');
    console.log(animalButton);
});
console.log(animalButton);
    // get user input
    // use user input to update state 
    // update DOM to reflect the new state
