'use strict';

function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    //add class to animate divs
    key.classList.add('playing');

    //rewind to the start so you can play sounds multiple times before they're finished playing; ie rewinds the audio file
    audio.currentTime = 0;
    //stop function from running, if there is no audio/key association
    if(!audio) return;

    audio.play();
}

function removeTransition(e){
    //skip properties that are not transform
    if(e.propertyName !== 'transform') return; 

    this.classList.remove('playing');
}

window.addEventListener('keydown', playSound);

//remove 'playing' class after transform has ended
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

