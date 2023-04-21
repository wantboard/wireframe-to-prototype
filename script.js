
const jokeText = document.getElementById('joke-text');
const generateBtn = document.getElementById('generate-btn');

const jokes = [
  'Why did the tomato turn red? Because it saw the salad dressing!',
  'Why did the scarecrow win an award? Because he was outstanding in his field!',
  'Why did the chicken cross the playground? To get to the other slide!',
  'Why did the cookie go to the doctor? Because it was feeling crumbly!',
  'Why did the banana go to the doctor? Because it wasn\'t peeling well!'
];

generateBtn.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  jokeText.textContent = jokes[randomIndex];
});

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const jokeInput = document.getElementById('joke-input');
  const newJoke = jokeInput.value;
  jokes.push(newJoke);
  jokeInput.value = '';
  alert('Thanks for submitting a joke!');
});
