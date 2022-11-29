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
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`
    
    for(let i = 0; i < size * size; i++) {
        const grids = document.createElement('div');
        gridContainer.appendChild(grids);
        toggleBorder();
    }
}

const gridContainer = document.getElementById('main');
const colorPicker = document.getElementById('colorPicker');
const colorMode = document.getElementById('colorMode');
const randomMode = document.getElementById('randomMode');
const eraseMode = document.getElementById('eraseMode');
const squares = document.getElementById('toggleSquares');
const clearMode = document.getElementById('clearMode');

let mouseIsDown = false;
gridContainer.addEventListener('mousedown', (e) => {
    mouseIsDown = true;
    activateColor(e);
});

gridContainer.addEventListener('mouseup', () => {
    mouseIsDown = false;
});

gridContainer.addEventListener('mouseover', (e) => {
    if(mouseIsDown) {
    activateColor(e);
    }
});

colorMode.style.filter = 'invert(100%)'
colorMode.addEventListener('click', () => {
    randomMode.classList.remove('activate');
    colorMode.style.filter = 'invert(100%)'
    removeFilter(randomMode); removeFilter(eraseMode);
});

randomMode.addEventListener('click', (e) => {
    randomMode.classList.add('activate');
    randomMode.style.filter = 'invert(100%)'
    removeFilter(colorMode); removeFilter(eraseMode);
});

eraseMode.addEventListener('click', () => {
    randomMode.classList.remove('activate');
    eraseMode.style.filter = 'invert(100%)'
    removeFilter(colorMode); removeFilter(randomMode);
});

squares.addEventListener('click', () => {
    squares.classList.toggle('toggle');
})

function activateColor(e) {
    if(randomMode.classList.contains('activate')) {
        const color = randomColor();
        e.target.style.backgroundColor = '#' + color;
        e.preventDefault();
    }
    else if(!randomMode.classList.contains('activate')) {
        e.target.style.backgroundColor = colorPicker.value;
        e.preventDefault();
    }
};

function randomColor() {
    return Math.floor(Math.random() * 16777215).toString(16);
};

function removeFilter(mode) {
    mode.style.removeProperty('filter');
};

function toggleBorder() {
    if(squares.matches('.toggle')) {
        console.log('s')
    }
}

window.onload = changeSize(64);