import Cell from "./Cell.mjs";

export default class Board{
    // ALTERATIONS: 
    // - Add a new private property '#boardElement'
    #grid = [];
    #boardSize;
    #boardElement;

    /**
     * This is a function to construct a new Board object.
     * The board should be initialized with all empty cells.
     * 
     * ALTERATIONS
     * - The constructor takes a new argument 'boardElement'
     * - set private property #boardElement to boardElement
     * - Set the board element's CSS property --board-size to the size of the board
     * - For each cell, create a new Cell element and append it to the board Element
     * 
     * @param {Element} boardElement - The HTML Element associated with the board
     * @param {Number} size - The size of our board
     */
    constructor(boardElement, size){
        this.#boardSize = size;
            this.#boardElement = boardElement;
            this.#boardElement.style.setProperty("--board-size", size);
        for(let i = 0; i < this.#boardSize; i++){
            let row = [];
            for(let j = 0; j < this.#boardSize; j++){
                let cellElement = document.createElement("div");
                cellElement.classList.add("cell");
                this.#boardElement.appendChild(cellElement);
                // remember that j is the x value and i is the y
                row.push(new Cell(j, i));
            }
            this.#grid.push(row);
        }
    }

    /**
     * Getter function for the board's grid
     */
    get grid() {
        return this.#grid;
    }

    /**
     * Getter function for the board's HTML element
     */
    get boardElement() {
        return this.#boardElement;
    }

    /**
     * Method to print the board out. This printBoard method will be a little more elaborate than that of 2048.
     * 
     * The board should be boxed in with dashes on the top and bottom, and `|` on the sides, forming a box around the board
     * This is important, since if the snake touches a wall, the game should end. 
     * 
     * Furthermore, instead of printing out '0', replace empty cells with " " instead. 
     * This is so the visibility of the snake is more clear.
     * 
     * Finally, each cell on the board is going to be separated by a " " in between. This is again to improve visibility.
     * 
     * ALTERATIONS:
     * - Comment this out. We don't need this unless it's for debugging.
     */
    // printBoard() {
    //     console.log("--".repeat(this.#boardSize + 1))
    //     for(let i = 0; i < this.#boardSize; i++){
    //         let rowStr = "| ";
    //         for(let j = 0; j < this.#boardSize; j++){
    //             // If the cell is empty, we'll leave a space for visibility
    //             rowStr += this.#grid[i][j].value === null ? " " : this.#grid[i][j].value.value;
    //             // This extra space will make our board less compact
    //             rowStr += " ";
    //         }
    //         rowStr += "|"
    //         console.log(rowStr);
    //     }
    //     console.log("--".repeat(this.#boardSize + 1));
    // }
}