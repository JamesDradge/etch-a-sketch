let gridRows = 16;
let numberOfDivs = gridRows * gridRows;
const gridPixels = 400;
const gridSizePixels = gridPixels/gridRows - 2;
const container = document.querySelector(".grid-container");
const resetBtn = document.querySelector(".btn");

for (let i=0; i<numberOfDivs; i++) {
    createGridDivs();
}

gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach((div) => {
    div.addEventListener('mouseenter', (e) => {
        div.classList.add('black');
    });
});

resetBtn.addEventListener("click", resetGrid);

function createGridDivs() {
    let gridItem = document.createElement('div');
    gridItem.className = 'grid-item';
    gridItem.setAttribute('style', `width: ${gridSizePixels}px; height: ${gridSizePixels}px;`)
    container.appendChild(gridItem);
}

function resetGrid() {
    gridItems.forEach((div) => {
        div.classList = 'grid-item';
    })
}