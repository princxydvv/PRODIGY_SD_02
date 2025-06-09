let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function submitGuess() {
    const guessInput = document.getElementById('guessInput');
    const guess = parseInt(guessInput.value);
    const feedback = document.getElementById('feedback');
    attempts++;
    document.getElementById('attempts').innerText = attempts;

    // Update progress bar
    document.getElementById('progressBar').style.width = (attempts * 5) + "%";

    if (guess === randomNumber) {
        feedback.innerText = `🎉 Correct! You guessed it in ${attempts} attempts!`;
        feedback.style.color = "#00ff7f";
        feedback.style.opacity = 1;
        setTimeout(() => newGame(), 2000);
    } else if (guess < randomNumber) {
        feedback.innerText = "📉 Too low! Try again.";
        feedback.style.color = "#ffcc00";
        feedback.style.opacity = 1;
    } else {
        feedback.innerText = "📈 Too high! Try again.";
        feedback.style.color = "#ff4444";
        feedback.style.opacity = 1;
    }
}

function newGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('attempts').innerText = attempts;
    document.getElementById('guessInput').value = '';
    document.getElementById('feedback').style.opacity = 0;
    document.getElementById('progressBar').style.width = "0%";
}