javascript
document.getElementById('generate-joke').addEventListener('click', function() {
    document.getElementById('joke-text').innerText = 'This is a randomly generated joke!';
});

document.getElementById('submit-joke-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for submitting your joke!');
});
