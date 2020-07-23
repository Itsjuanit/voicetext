const start = document.getElementById("start");
const stop = document.getElementById("stop");
const texto = document.getElementById("texto");

let recognition = new webkitSpeechRecognition();
recognition.lang = "es-ES";
recognition.continuous = true;
recognition.interimResults = false;

recognition.onresult = (event) => {
  const results = event.results;
  const frase = results[results.length - 1][0].transcript;
  texto.value += frase;
};

recognition.onend = (event) => {
  console.log("Deje de escuchar");
};

recognition.onerror = (event) => {
  console.log;
};

start.addEventListener("click", () => {
  recognition.start();
});

stop.addEventListener("click", () => {
  recognition.abort();
});
