
const jokeContainer = document.getElementById('joke-container');
const joke = document.getElementById('joke');
const generateBtn = document.getElementById('generate-btn');
const jokeForm = document.getElementById('joke-form');

generateBtn.addEventListener('click', generateJoke);
jokeForm.addEventListener('submit', submitJoke);

function generateJoke() {
  // Replace with code to generate a joke
  joke.textContent = 'Why did the chicken cross the road? To get to the other side!';
}

function submitJoke(event) {
  event.preventDefault();
  // Replace with code to submit joke form
  alert('Joke submitted!');
}
