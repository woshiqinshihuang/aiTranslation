const synth = window.speechSynthesis;
const startReadSynth = (content, lang) => {
    
    const msg = new SpeechSynthesisUtterance(content);

    msg.lang = lang;

    synth.speak(msg);

};

const stopReadSynth = () => {
    synth.cancel();
};