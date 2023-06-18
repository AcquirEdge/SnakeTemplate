// Define Constants and Global Variables
const EMPTY_CELL = 0;
const SNAKE_BODY = "X";
const APPLE_CELL = "A";
const BOARD_SIZE = 20;

let board = [];
let direction;

// We need these global variables to help us keep track of where the snake and apple are at all times
let snake = [];
// apple is going to be an object representing a coordinate, with an 'x' property and 'y' property.
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
    let snakeSegment2 = { x: centerX + 2, y: centerY };
    snake = [ head, snakeSegment1, snakeSegment2 ]
}

/**
 * Helper function to update our board when the state of the snake or apple changes.
 * 
 * What this function is going to accomplish is a few things:
 * 1. First, we we have to wipe the board clean, or change the tiles currently occupied by the snake and apple clean
 *      - This is because if we do not wipe the board first, there will be lingering snake segments or old apples remaining on the board
 * 2. Then, we iterate through the snake, and update the board with the new position of our snake.
 * 3. Finally, we update the board with the new position of our apple
 * 
 * Our board should now have updated.
 */
function updateBoard(){
    // Clear our board
    for(let i = 0; i < BOARD_SIZE; i++){
        for(let j = 0; j < BOARD_SIZE; j++){
            board[i][j] = 0;
        }
    }
    // Update the board with the new position of our snake
    snake.forEach((segment) => {
        board[segment.y][segment.x] = SNAKE_BODY;
    })
    // Update the board with the new position of our apple
    board[apple.y][apple.x] = APPLE_CELL;
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

/**
 * Function that generates a new random apple on our board.
 * 
 * This function is going to work very similarly to the generateRandomTile function from 2048.
 * There are some differences, however. Remember that there can only be one apple on the board at one time.
 * This means that in order to generate a new apple, you must either make sure that the apple is removed beforehand.
 * 
 * Instead of directly updating the board, we're going to utilize our updateBoard function to do so when we generate a new Apple
 * 
 */
function generateRandomApple(){
    // Remove the apple if one exists. This prevents us from having multiple apples on our board
    if(apple){
        board[apple.y][apple.x] = EMPTY_CELL;
        apple = null;
    }
    // Finding all the empty cells in the board
    let emptyCells = [];
    for(let y = 0; y < BOARD_SIZE; y++){
        for(let x = 0; x < BOARD_SIZE; x++){
            if(board[y][x] === 0){
                let coordinate = {
                    x: x,
                    y: y
                }
                emptyCells.push(coordinate);
            }
        }
    }
    // Choose a random cell 
    if(emptyCells.length > 0){
        let randomCellIndex = Math.floor(Math.random() * emptyCells.length);
        let randomCellCoordiante = emptyCells[randomCellIndex];
        apple = randomCellCoordiante;
    }
    // Since we made a change to the apple, we update the board;
    updateBoard();
}

/**
 * Main function to run our game.
 * Place all the functions necessary to run the game (so far) into this function
 */
function main(){
    initializeBoard();
    generateRandomApple();
    updateBoard();
    printBoard();
}

main();