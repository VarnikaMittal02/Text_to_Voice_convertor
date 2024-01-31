let speech= new SpeechSynthesisUtterance();

let voices=[];
// provide voices which is avaible
let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged =()=>{
    voices=window.speechSynthesis.getVoices();
     speech.voice=voices[0]; // for 1 defualt voice

// add voices for each  in the dropdown
voices.forEach((voice,i)=>(voiceSelect.options[i]=new Option(voice.name,i)));
};

// work on diff diff change voice----add event

voiceSelect.addEventListener("change",()=>{
    speech.voice=voices[voiceSelect.value];
});

// for sound and textarea
document.querySelector("button").addEventListener("click",()=>{
    speech.text=document.querySelector("textarea").value;

    window.speechSynthesis.speak(speech);
});