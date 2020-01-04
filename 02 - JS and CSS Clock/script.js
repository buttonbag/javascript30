const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const min = now.getMinutes();
    const minsDegrees = ((min / 60) * 360) + 90;
    const hour = now.getHours();
    const hoursDegrees = ((hour / 12) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minHand.style.transform = `rotate(${minsDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    // console.log(seconds);
}

setInterval(setDate, 1000);

