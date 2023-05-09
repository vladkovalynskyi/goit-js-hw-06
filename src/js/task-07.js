const controlSize = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

controlSize.addEventListener('input', (event) => {
    text.style.fontSize = `${event.target.value}px`;
});