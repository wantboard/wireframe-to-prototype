
const jokeText = document.getElementById('joke');
const generateBtn = document.getElementById('generate-btn');
const jokeForm = document.getElementById('joke-form');

// Joke API endpoint
const jokeApiUrl = 'https://official-joke-api.appspot.com/random_joke';

// Function to generate a joke
function generateJoke() {
  fetch(jokeApiUrl)
    .then(response => response.json())
    .then(data => {
      jokeText.innerHTML = `${data.setup} <em>${data.punchline}</em>`;
    })
    .catch(error => {
      jokeText.innerHTML = 'Oops! Something went wrong. Please try again later.';
    });
}

// Event listener for generate button
generateBtn.addEventListener('click', generateJoke);

// Event listener for joke form submission
jokeForm.addEventListener('submit', event => {
  event.preventDefault();
  // Code to submit joke form goes here
});
