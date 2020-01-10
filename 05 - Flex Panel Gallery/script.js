const panels = document.querySelectorAll('.panel');

function update() {
    this.classList.toggle('open');
};

function updateActive(e) {
    console.log(e.propertyName)
    if(e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
};

panels.forEach(panels => panels.addEventListener('click', update));
panels.forEach(panels => panels.addEventListener('transitionend', updateActive));