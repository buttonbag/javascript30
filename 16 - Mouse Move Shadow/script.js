const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 20;

function shadow(e) {
    const { offsetWidth: width,  offsetHeight: height } = hero; 
    let { offsetX: x, offsetY: y } = e;
    
    /* since there is a child element (h1), the offset of that element gets read instead of hero even tho the event listener is on hero. This makes sure that the hero gets read even if hovering over h1. */
    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    
    const xWalk = (x / width * walk) - (walk /2);
    const yWalk = (y / width * walk) - (walk /2);
    console.log(xWalk,yWalk);
    text.style.textShadow = `
        ${xWalk}px ${yWalk}px 0 rgba(255,0,255,.7),
        ${xWalk * -1}px ${yWalk}px 0 rgba(255,255,0,.7),
        ${xWalk * -1}px ${yWalk * -1}px 0 rgba(0,255,255,.7),
        ${xWalk}px ${yWalk * -1}px 0 rgba(255,0,0,.7)
    `;
}

hero.addEventListener('mousemove', shadow);
