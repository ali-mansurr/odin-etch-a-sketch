const controlBtns = document.querySelector(".buttons");
const gridContainer = document.querySelector(".grid-container");
let gridSize = parseInt(prompt("Enter grid size (if grid is n then it will look like n * n)"))
let rainbowFlag = false;

function generateGrid(grid) {
    if (grid > 100 || grid < 0 || !grid) {
        alert("please enter a valid number between 1 to 100");
        return;
    };
    const containerSize = gridContainer.clientWidth;
    const tileSize = containerSize / grid;
    for (let i = 1; i <= grid * grid; i++) {
        const div = document.createElement("div");
        div.classList.add("tile");
        div.style.width = `${tileSize}px`;
        div.style.height = `${tileSize}px`;
        gridContainer.appendChild(div);
    }
}

function draw(event) {
    if (!event.target.classList.contains("tile")) return;
    if (rainbowFlag) {
        event.target.style.backgroundColor = rainbow();
    } else { event.target.style.backgroundColor = "#000"; }
}

function erase(event) {
    if (!event.target.matches("button")) return;
    if (event.target.classList.contains("erase")) {
        for (const tile of gridContainer.children) {
            tile.style.backgroundColor = "#fff";
        }
    }
}

function changeGridSize(event) {
    if (!event.target.matches("button")) return;
    if (event.target.classList.contains("resize")) {
        gridSize = parseInt(prompt("Enter grid size (if grid is n then it will look like n * n)"))
        for (const child of Array.from(gridContainer.children)) { //convert to static array because of live collection issue
            child.remove();
        }
        generateGrid(gridSize);
    }
}

function changeToRainbow(event) {
    if (!event.target.matches("button")) return;
    if (event.target.classList.contains("rainbow")) {
        rainbowFlag = true
    }
}

function changeToBlack(event) {
    if (!event.target.matches("button")) return;
    if (event.target.classList.contains("black")) {
        rainbowFlag = false;
    }
}


function rainbow() {
    function randInt(max) {
        return Math.floor(Math.random() * max);
    }
    const red = randInt(255);
    const green = randInt(255);
    const blue = randInt(255);
    return `rgb(${red}, ${green}, ${blue})`
}



generateGrid(gridSize);

// draw 
gridContainer.addEventListener("mouseover", (e) => draw(e))

// buttons
controlBtns.addEventListener("click", (e) => {
    erase(e);
    changeGridSize(e);
    changeToRainbow(e);
    changeToBlack(e);
})
