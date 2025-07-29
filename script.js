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

function draw(event) {
    if (!event.target.classList.contains("tile")) return;
    event.target.classList.add("draw");
}

function erase(event) {
    if(!event.target.matches("button")) return;
    if (event.target.classList.contains("erase")) {
        for(const tile of gridContainer.children){
            tile.classList.remove("draw");
        }
    }
}

generateGrid(16);

// draw on hover
gridContainer.addEventListener("mouseover", draw)

// erase 
controlBtns.addEventListener("click", (e) => {
    erase(e)
})
