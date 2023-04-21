
const jokeContainer = document.querySelector('.joke-container');
const jokeText = document.querySelector('.joke');
const generateBtn = document.querySelector('.generate-btn');

generateBtn.addEventListener('click', () => {
  fetch('https://official-joke-api.appspot.com/random_joke')
    .then(response => response.json())
    .then(data => {
      jokeText.textContent = `${data.setup} ${data.punchline}`;
      jokeContainer.style.display = 'block';
    })
    .catch(error => console.error(error));
});
