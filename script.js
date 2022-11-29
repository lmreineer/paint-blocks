function changeSize(amount) {
    const gridContainer = document.getElementById('main');
    gridContainer.style.display = 'grid'
    gridContainer.style.gridTemplateColumns = `repeat(${amount}, 1fr)`
    gridContainer.style.gridTemplateRows = `repeat(${amount}, 1fr)`

    for(let i = 0; i < amount * amount; i++) {
        const grids = document.createElement('div');
        grids.style.border = '1px solid gainsboro'
        gridContainer.appendChild(grids);
    }
}


const colorPicker = document.getElementById('colorPicker');
const colorMode = document.getElementById('colorMode');
const rainbowMode = document.getElementById('rainbowMode');
const toggleSquares = document.getElementById('toggleSquares');
const eraseMode = document.getElementById('eraseMode');
const clearMode = document.getElementById('clearMode');

colorPicker.addEventListener('input', (e) => {
    e.target.style.backgroundColor = colorPicker.value;
    colorPicker.style.backgroundColor = 'transparent'
});

console.log(rangeInput.value)

window.onload = (changeSize(rangeInput.value));