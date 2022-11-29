
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
        grids.style.border = '1px solid gainsboro'
        gridContainer.appendChild(grids);
    }
}

function removeOtherSizes() {

}


window.onload = changeSize(64);