function checkAnswer(question, answer) {
    const resultId = 'result' + question;
    const result = document.getElementById(resultId);
    const correctAnswers = {
        1: 8,
        2: 'for',
        3: 'boje[0]'
    };
    if (answer === correctAnswers[question]) {
        result.textContent = 'Točno!';
        result.style.color = 'green';
    } else {
        result.textContent = 'Pogrešno. Pokušaj opet.';
        result.style.color = 'red';
    }
}