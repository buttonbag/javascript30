window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; // if there's no audio, stop function
    audio.currentTime = 0; // start audio from beginning on keydown
    audio.play();
    key.classList.add('playing');
});

function removeTransition(e) {
    console.log(e);
}

const keys = document.querySelectorAll('key');
keys.forEach(key => key.addEventListener('transitionEnd', removeTransition));
