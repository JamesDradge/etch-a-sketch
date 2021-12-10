let gridRows = 16;
let numberOfDivs = gridRows * gridRows;
let gridPixels = 400;
let gridSizePixels = gridPixels/gridRows;
const container = document.querySelector(".grid-container");
const resizeBtn = document.querySelector("#resize-btn");
const resetBtn = document.querySelector(".btn");

window.onload = createGrid();
resetBtn.addEventListener("click", resetGrid);
resizeBtn.addEventListener("click", resizeGrid);

function createGrid() {
    for (let i=0; i<numberOfDivs; i++) {
        createGridDivs();
    }

    gridItems = document.querySelectorAll('.grid-item');

    gridItems.forEach((div) => {
        div.addEventListener('mouseenter', (e) => {
            div.classList.add('black');
        });
    });
}

function deleteGrid() {
    gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach((div) => {
        div.remove();
    })
}

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

function calculateSizing() {
    numberOfDivs = gridRows * gridRows;
    gridSizePixels = gridPixels/gridRows;
}

function resizeGrid() {
    let input = prompt("Please enter the number of rows you would like the grid to be.");
    if (isNaN(input) || input < 1 || input > 100) {
        alert("Please enter a number between 1 - 100.");
    } else {
        gridRows = input;
        deleteGrid();
        calculateSizing();
        createGrid();
    }
}