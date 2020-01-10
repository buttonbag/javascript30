const controls = document.querySelectorAll('.controls input');

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

controls.forEach(controls => controls.addEventListener('change', handleUpdate));
controls.forEach(controls => controls.addEventListener('mousemove', handleUpdate));
