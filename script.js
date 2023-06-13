// Define Constants and Global Variables
const EMPTY_CELL = 0;
const SNAKE_BODY = "X";
const APPLE_CELL = "A";
const BOARD_SIZE = 20;

let board = [];
let direction;

// We need these global variables to help us keep track of where the snake and apple are at all times
let snake = [];
let apple;

/**
 * Function to initialize our board to the initial position
 * The entire board should be filled with non-null values
 * 
 * The snake's direction will begin facing left
 * There will be one randomly generated apple on the board
 */
function initializeBoard() {
    // code goes here
}

/**
 * Function to print the board out. This printBoard function will be a little more elaborate than that of 2048.
 * 
 * The board should be boxed in with dashes on the top and bottom, and `|` on the sides, forming a box around the board
 * This is important, since if the snake touches a wall, the game should end. 
 * 
 * Furthermore, instead of printing out '0', replace empty cells with " " instead. 
 * This is so the visibility of the snake is more clear.
 * 
 * Finally, each cell on the board is going to be separated by a " " in between. This is again to improve visibility.
 */
function printBoard() {
    // code goes here
}