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


// let lastActive = selection[0];
// selectionsContainer.addEventListener('click', (e) => {
//     const currentSelection = e.target.closest('.selection');
//     if(!currentSelection) return;

//     const wasActive = currentSelection.classList.contains('remove-others');
    
//     lastActive.classList.remove('remove-others');
//     currentSelection.classList.toggle('remove-others', !wasActive);
//     lastActive = currentSelection;
// });


const gridContainer = document.getElementById('main');
const colorPicker = document.getElementById('colorPicker');
const colorMode = document.getElementById('colorMode');
const randomMode = document.getElementById('randomMode');
const eraseMode = document.getElementById('eraseMode');
const clearMode = document.getElementById('clearMode');


let mouseIsDown = false;
gridContainer.addEventListener('mousedown', (e) => {
    mouseIsDown = true;
    activateColor(e);
    activateErase(e);
});

gridContainer.addEventListener('mouseup', () => {
    mouseIsDown = false;
});

gridContainer.addEventListener('mouseover', (e) => {
    if(mouseIsDown) {
        activateColor(e);
        activateErase(e);
    }
});

colorMode.style.filter = 'invert(100%)'
colorMode.addEventListener('click', () => {
    randomMode.classList.remove('random-active');
    eraseMode.classList.remove('erase-active');
    colorMode.style.filter = 'invert(100%)'
    removeFilter(randomMode); removeFilter(eraseMode);
});

randomMode.addEventListener('click', (e) => {
    randomMode.classList.add('random-active');
    eraseMode.classList.remove('erase-active');
    randomMode.style.filter = 'invert(100%)'
    removeFilter(colorMode); removeFilter(eraseMode);
});

eraseMode.addEventListener('click', () => {
    randomMode.classList.remove('random-active');
    eraseMode.classList.add('erase-active');
    eraseMode.style.filter = 'invert(100%)'
    removeFilter(colorMode); removeFilter(randomMode);
});

function activateColor(e) {
    if(randomMode.classList.contains('random-active')) {
        const color = randomColor();
        e.target.style.backgroundColor = '#' + color;
        e.preventDefault();
    }
    else if(!randomMode.classList.contains('random-active')) {
        e.target.style.backgroundColor = colorPicker.value;
        e.preventDefault();
    }
};

function randomColor() {
    return Math.floor(Math.random() * 16777215).toString(16);
};

function activateErase(e) {
    if(eraseMode.classList.contains('erase-active')) {
        e.target.style.backgroundColor = ''
        e.preventDefault();
    }
    else {
        return; 
    }
}

function clearCanvas(grids) {
    grids.style.backgroundColor = ''
}

function removeFilter(mode) {
    mode.style.removeProperty('filter');
};

function changeSize(size) {
    const squares = document.getElementById('toggleSquares');
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`
    
    for(let i = 0; i < size * size; i++) {
        const grids = document.createElement('div')
        grids.classList.add('canvas');
        gridContainer.appendChild(grids);

        clearMode.addEventListener('click', () => {
            clearCanvas(grids);
        });

        selection.forEach(x => {
            x.addEventListener('click', () => {
                clearCanvas(grids);
            });
        });
    };
};

window.onload = changeSize(64);