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
    // Fill our board up with 0s before we begin with the snake
    direction = "left";
    for(let i = 0; i < BOARD_SIZE; i++){
        let row = [];
        for(let j = 0; j < BOARD_SIZE; j++){
            row.push(EMPTY_CELL);
        }
        board.push(row);
    }

    // Get the starting coordinate values for our snake;
    const centerX = Math.floor(BOARD_SIZE / 2);
    const centerY = Math.floor(BOARD_SIZE / 2);

    // Since direction starts off as left, the snake should be facing left
    let head = { x: centerX, y: centerY };
    let snakeSegment1 = { x: centerX + 1, y: centerY };
    let snakeSegment2 = { x: centerX + 1, y: centerY };
    snake = [ head, snakeSegment1, snakeSegment2 ]

    // The snake is stored separately from the board, so we must update the board whenever the state of the snake changes
    for(let segment of snake){
        board[segment.y][segment.x] = SNAKE_BODY;
    }

    // Generate a random apple on the board
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
    // This will provide the top dashed line to our board
    console.log("--".repeat(BOARD_SIZE + 1))
    for(let i = 0; i < BOARD_SIZE; i++){
        let rowStr = "| ";
        for(let j = 0; j < BOARD_SIZE; j++){
            // If the cell is empty, we'll leave a space for visibility
            rowStr += board[i][j] == 0 ? " " : board[i][j];
            // This extra space will make our board less compact
            rowStr += " ";
        }
        rowStr += "|"
        console.log(rowStr);
    }
    console.log("--".repeat(BOARD_SIZE + 1));
}