
let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.getElementById("select");

function populateVoices() {
  voices = speechSynthesis.getVoices();
  voiceSelect.innerHTML = "";
  voices.forEach((voice) => {

    let option = new Option(voice.name);
    
    voiceSelect.appendChild(option);
  });
  speech.voice = voices[0];
}

populateVoices();

speechSynthesis.onvoiceschanged = populateVoices;

voiceSelect.addEventListener("change", () => {
  let selectedVoice = voices.find(voice => voice.name === voiceSelect.value);
  if (selectedVoice) speech.voice = selectedVoice;
});

document.querySelector("button").addEventListener("click", () => {
  speech.text = document.querySelector("textarea").value;
  speechSynthesis.cancel(); // prevent overlap
  speechSynthesis.speak(speech);
});
