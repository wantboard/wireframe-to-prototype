
const jokeContainer = document.getElementById('joke-container');
const jokeText = document.getElementById('joke');
const generateBtn = document.getElementById('generate-btn');
const jokeForm = document.getElementById('joke-form');

generateBtn.addEventListener('click', generateJoke);
jokeForm.addEventListener('submit', submitJoke);

function generateJoke() {
  // Replace with code to generate a joke
  const joke = 'Why did the tomato turn red? Because it saw the salad dressing!';
  jokeText.textContent = joke;
}

function submitJoke(event) {
  event.preventDefault();
  // Replace with code to submit joke form
  alert('Joke submitted!');
  jokeForm.reset();
}
