function changeSize(amount) {
    const gridContainer = document.getElementById('main');
    gridContainer.style.display = 'grid'
    gridContainer.style.gridTemplateColumns = `repeat(68, 1fr)`
    gridContainer.style.gridTemplateRows = `repeat(68, 1fr)`

    for(let i = 0; i < 68*68; i++) {
        const grids = document.createElement('div');
            grids.addEventListener('click', () => {
                grids.style.backgroundColor = colorPicker.value;
            })
        gridContainer.appendChild(grids);
    }
}

const colorPicker = document.getElementById('colorPicker');
const colorMode = document.getElementById('colorMode');
const rainbowMode = document.getElementById('rainbowMode');
const toggleSquares = document.getElementById('toggleSquares');
const rangeInput = document.getElementById('rangeInput');
const eraseMode = document.getElementById('eraseMode');
const clearMode = document.getElementById('clearMode');

colorPicker.addEventListener('input', (e) => {
    e.target.style.backgroundColor = colorPicker.value;
    colorPicker.style.backgroundColor = 'transparent'
});

// function colorMode?


window.onload = (changeSize);