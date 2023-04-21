
const jokeText = document.getElementById('joke-text');
const generateBtn = document.getElementById('generate-btn');
const jokeForm = document.getElementById('joke-form');

// Joke API URL
const jokeApiUrl = 'https://official-joke-api.appspot.com/random_joke';

// Generate a random joke
function generateJoke() {
  fetch(jokeApiUrl)
    .then(response => response.json())
    .then(data => {
      jokeText.textContent = `${data.setup} ${data.punchline}`;
    })
    .catch(error => {
      jokeText.textContent = 'Oops! Something went wrong. Please try again later.';
    });
}

// Submit a joke
function submitJoke(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const joke = document.getElementById('joke').value;
  // Send the joke data to the server
  // ...
  // Clear the form
  jokeForm.reset();
  alert('Thank you for submitting your joke!');
}

generateBtn.addEventListener('click', generateJoke);
jokeForm.addEventListener('submit', submitJoke);
