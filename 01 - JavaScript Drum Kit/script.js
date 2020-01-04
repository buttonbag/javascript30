window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; // if there's no audio, stop function
    audio.currentTime = 0; // start audio from beginning on keydown
    audio.play();
    key.classList.add('playing');
});

function removeTransition(e) {
    if(e.propertyName !== 'transform') return; //skip if it's not a transform
    console.log(e.propertyName);
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition)); //The transitionend event is fired when a CSS transition has completed
