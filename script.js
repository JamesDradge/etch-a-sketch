let gridRows = 16;
let numberOfDivs = gridRows * gridRows;
let gridPixels = 400;
let gridSizePixels = gridPixels/gridRows;
let mode = "blackAndWhite";
const container = document.querySelector(".grid-container");
const resizeBtn = document.querySelector("#resize-btn");
const resetBtn = document.querySelector(".btn");
const blackAndWhiteBtn = document.querySelector("#black-and-white");
const greyscaleBtn = document.querySelector("#greyscale");
const rainbowBtn = document.querySelector("#rainbow");

window.onload = createGrid();
resetBtn.addEventListener("click", resetGrid);
resizeBtn.addEventListener("click", getPlayerInput);
blackAndWhiteBtn.addEventListener("click", colorBlack);
greyscaleBtn.addEventListener("click", colorGreyscale);
rainbowBtn.addEventListener("click", colorRainbow);


function createGrid() {
    for (let i=0; i<numberOfDivs; i++) {
        createGridDivs();
    }

    gridItems = document.querySelectorAll('.grid-item');

    gridItems.forEach((div) => {
        div.addEventListener('mouseenter', (e) => {
            switch (mode){
                case "blackAndWhite":
                    div.classList.add('black');
                    break;
                case "greyscale":
                    div.style.backgroundColor = ('black');
                    if (!e.target.style.opacity) {
                        e.target.style.opacity = 0.2;
                    } else {
                        newOpacity = Number(e.target.style.opacity) + 0.2;
                        e.target.style.opacity = newOpacity
                    }
                    break;
                case "rainbow":
                    let randColorNumber = Math.floor(Math.random()*16777215).toString(16);
                    let randColor = `#` + `${randColorNumber}`;
                    div.style.backgroundColor = `${randColor}`;
                    break;
            }
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

function calculateSizing() {
    numberOfDivs = gridRows * gridRows;
    gridSizePixels = gridPixels/gridRows;
}

function getPlayerInput() {
    let input = prompt("Please enter the number of rows you would like the grid to be.");
    if (isNaN(input) || input < 1 || input > 100) {
        alert("Please enter a number between 1 - 100.");
    } else {
        gridRows = input;
        resetGrid();
    }
}

function resetGrid() {
        deleteGrid();
        calculateSizing();
        createGrid();
}

function colorBlack() {
    resetGrid();
    mode = "blackAndWhite";
    blackAndWhiteBtn.classList.add('selected');
    greyscaleBtn.classList.remove('selected');
    rainbowBtn.classList.remove('selected');
}

function colorGreyscale() {
    resetGrid();
    mode = "greyscale";
    blackAndWhiteBtn.classList.remove('selected');
    greyscaleBtn.classList.add('selected');
    rainbowBtn.classList.remove('selected');
}

function colorRainbow() {
    resetGrid();
    mode = "rainbow";
    blackAndWhiteBtn.classList.remove('selected');
    greyscaleBtn.classList.remove('selected');
    rainbowBtn.classList.add('selected');
}

colorBlack();