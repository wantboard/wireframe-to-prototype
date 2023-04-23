
const jokeBtn = document.getElementById('generate-btn');
const jokeText = document.getElementById('joke');

jokeBtn.addEventListener('click', generateJoke);

function generateJoke() {
  // Code to generate a random joke goes here
  jokeText.textContent = 'Why did the chicken cross the road? To get to the other side!';
}

const jokeForm = document.getElementById('joke-form');

jokeForm.addEventListener('submit', submitJoke);

function submitJoke(event) {
  event.preventDefault();
  // Code to submit joke form data goes here
  alert('Joke submitted!');
}
