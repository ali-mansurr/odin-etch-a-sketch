const controlBtns = document.querySelector(".buttons");
const gridContainer = document.querySelector(".grid-container");

function generateGrid(grid) {
    if (grid > 100) return "max grid : 100*100";
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

generateGrid(16);
