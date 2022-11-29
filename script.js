// Drop down section below:
const defaultChoice = document.querySelector(".default");
const selectionsContainer = document.querySelector(".selections-container");
const selection = document.querySelectorAll(".selection");

defaultChoice.addEventListener("click", () => {
    selectionsContainer.classList.toggle("active");
    selectionsContainer.style.visibility = 'visible'
});

defaultChoice.addEventListener('blur', () => {
    selectionsContainer.classList.remove('active');
    selectionsContainer.style.visibility = 'hidden'
})

selection.forEach(x => {
    x.addEventListener("click", (e) => {
        defaultChoice.innerHTML = e.target.textContent;
        selectionsContainer.classList.remove('active');
        selectionsContainer.style.visibility = 'hidden'
    });
});
//Drop down section above

function changeSize(size) {
    const gridContainer = document.getElementById('main');
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`
    
    for(let i = 0; i < size * size; i++) {
        const grids = document.createElement('div');
        grids.classList.add('color')
        grids.style.border = '1px solid gainsboro'
        gridContainer.appendChild(grids);
    }
}

const colorPicker = document.getElementById('colorPicker');
const colorMode = document.getElementById('colorMode');
const rainbowMode = document.getElementById('rainbowMode');
const squares = document.getElementById('toggleSquares');
const eraseMode = document.getElementById('eraseMode');
const clearMode = document.getElementById('clearMode');

colorMode.style.filter = 'invert(100%)'
let mouseIsDown = false;

colorPicker.addEventListener('input', (e) => {
    e.target.style.backgroundColor = colorPicker.value;
    colorPicker.style.backgroundColor = 'transparent'
});

function toggleColor() {
}

window.onload = changeSize(64);