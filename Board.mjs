import Cell from "./Cell.mjs";

export default class Board{
    #grid;
    #boardSize;

    /**
     * This is a function to construct a new Board object.
     * The board should be initialized with all empty cells.
     * 
     * 
     * @param {Number} size - The size of our board
     */
    constructor(size){
        // Your code here.
    }

    /**
     * Getter function for the board's grid
     */
    get grid() {
        // Your code here
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
     * - Make sure to check if the grid value is null instead of equal to 0
     */
    printBoard() {
        // Your code here
    }
}