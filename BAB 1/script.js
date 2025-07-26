function checkAnswer(button, isCorrect) {
  const feedback = document.getElementById('quiz-feedback');
  if (isCorrect) {
    feedback.textContent = 'Jawaban benar!';
    feedback.style.color = '#2e7d32';
  } else {
    feedback.textContent = 'Jawaban kurang tepat. Coba lagi.';
    feedback.style.color = '#d84315';
  }
}