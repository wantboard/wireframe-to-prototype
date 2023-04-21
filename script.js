
const jokeContainer = document.getElementById('joke-container');
const jokeText = document.getElementById('joke');
const generateBtn = document.getElementById('generate-btn');
const jokeForm = document.getElementById('joke-form');

// Joke API URL
const jokeApiUrl = 'https://official-joke-api.appspot.com/random_joke';

// Function to generate a joke
function generateJoke() {
	fetch(jokeApiUrl)
		.then(response => response.json())
		.then(data => {
			jokeText.innerHTML = `${data.setup} <br> ${data.punchline}`;
			jokeContainer.style.display = 'block';
		})
		.catch(error => console.log(error));
}

// Event listener for generate button
generateBtn.addEventListener('click', generateJoke);

// Event listener for joke form submission
jokeForm.addEventListener('submit', (event) => {
	event.preventDefault();
	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const joke = document.getElementById('joke-text').value;
	console.log(`Name: ${name}, Email: ${email}, Joke: ${joke}`);
	jokeForm.reset();
	alert('Joke submitted successfully!');
});
