function changeSize(amount) {
    const gridContainer = document.getElementById('main');
    gridContainer.style.display = 'grid'
    gridContainer.style.gridTemplateColumns = `repeat(${amount}, 1fr)`
    gridContainer.style.gridTemplateRows = `repeat(${amount}, 1fr)`

    for(let i = 0; i < amount*amount; i++) {
        const grids = document.createElement('div');
        grids.style.border = '1px solid gray'
        gridContainer.appendChild(grids);
    }
}

