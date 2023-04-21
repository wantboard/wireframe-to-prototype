
const jokeBtn = document.getElementById('generate-btn');
const jokeText = document.getElementById('joke');

const jokes = [
  'Why did the tomato turn red? Because it saw the salad dressing!',
  'Why did the scarecrow win an award? Because he was outstanding in his field!',
  'Why did the chicken cross the playground? To get to the other slide!',
  'Why did the cookie go to the doctor? Because it was feeling crumbly!',
  'Why did the banana go to the doctor? Because it wasn\'t peeling well!'
];

jokeBtn.addEventListener('click', generateJoke);

function generateJoke() {
  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  jokeText.textContent = randomJoke;
}
