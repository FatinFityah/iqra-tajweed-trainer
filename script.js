const startBtn = document.getElementById("startBtn");
const output = document.getElementById("output");

startBtn.addEventListener("click", () => {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = "ar-SA"; // Arabic for Tajweed practice
  recognition.start();

  recognition.onresult = (event) => {
    const text = event.results[0][0].transcript;
    output.textContent = `You said: "${text}" — Great job practicing!`;
  };

  recognition.onerror = () => {
    output.textContent = "Sorry, I couldn't hear you clearly. Try again.";
  };
});
