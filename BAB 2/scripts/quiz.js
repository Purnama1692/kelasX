
function renderQuiz(containerId, question, options, correctIndex) {
  const container = document.getElementById(containerId);
  container.innerHTML = `<p><strong>${question}</strong></p>`;
  options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => {
      if (idx === correctIndex) {
        alert("✅ Jawaban benar!");
      } else {
        alert("❌ Jawaban salah. Coba lagi!");
      }
    };
    container.appendChild(btn);
    container.appendChild(document.createElement("br"));
  });
}
