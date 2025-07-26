
function checkAnswer(button, correct) {
  const result = document.getElementById('quiz-result');
  if (correct) {
    result.textContent = '✅ Jawaban benar!';
    result.style.color = 'green';
  } else {
    result.textContent = '❌ Jawaban salah, coba lagi.';
    result.style.color = 'red';
  }
}
