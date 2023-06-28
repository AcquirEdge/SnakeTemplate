import Segment from "./Segment.mjs";
import Board from "./Board.mjs";
import Apple from "./Apple.mjs";

// ALTERATIONS: Use 'import' instead of 'require' since we are now in a '.mjs' file
import readline from 'readline';
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Define Constants and Global Variables
// ALTERATIONS: Remove all but board size
const SNAKE_BODY = "X";
const APPLE_CELL = "A";
const BOARD_SIZE = 20;

// ALTERATIONs: 
// - board is now a new Board object instead of an empty array
// - direction is set to an initial value of "left"

let board = new Board(BOARD_SIZE);
let direction;

// We need these global variables to help us keep track of where the snake and apple are at all times
let snake = [];
// apple is going to be an object representing a coordinate, with an 'x' property and 'y' property.
let apple;

/**
 * Function to initialize our board to the initial position
 * 
 * ALTERATIONS:
 * - EDIT THIS function so that it no longer fills the board with non-null values.
 * - Your Board class constructor will take care of this.
 * - Alter this function to utilize the Segment class.
 */
function initializeBoard() {
    // Set initial direction to left
    direction = "left";

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
 * 
 * ALTERATIONS:
 * - We are now setting cell values to null, not cells to 0
 * - For each snake segment, set the board at that cell's value to the respective snake segment
 * - Update the apple with the Apple Class 
 */
function updateBoard(){
    // Clear our board
    for(let i = 0; i < BOARD_SIZE; i++){
        for(let j = 0; j < BOARD_SIZE; j++){
            board.grid[i][j].value = null;
        }
    }
    // Update the board with the position of our snake
    snake.forEach((segment) => {
        board.grid[segment.y][segment.x].value = SNAKE_BODY;
    })
    // Update the board with the position of our apple
    board.grid[apple.y][apple.x].value = APPLE_CELL;
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
 * ALTERATIONS:
 * - Remove the apple by setting the cell's value to null instead of EMPTY_CELL
 * - Empty cells should be checking if the board cell's value is null instead of 0
 * - Set apple to a new Apple object instead of the coordinate
 * 
 */
function generateRandomApple(){
    // Remove the apple if one exists. This prevents us from having multiple apples on our board
    if(apple){
        board.grid[apple.y][apple.x].value = null;
        apple = null;
    }
    // Finding all the empty cells in the board
    let emptyCells = [];
    for(let y = 0; y < BOARD_SIZE; y++){
        for(let x = 0; x < BOARD_SIZE; x++){
            if(board.grid[y][x].value === null){
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
 * Function to help us retrieve and take care of the user's next move 
 * 
 * Make sure to import the 'readline' library and create an interface first
 * 
 * I've provided some guiding comments to help direct you in the correct direction
 * 
 * Adjust getMove to now accommodate for our new moveSnake() function:
 * 
 * After moving the snake:
 * 
 * If the snake landed on an apple, update the board and generate a new apple
 * If the snake was bitten or runs into a wall, Print out "Loss", close the readline interface, and return
 * Otherwise, don't do anything.
 * 
 * ALTERATIONS:
 * - We are now using the Board class's printBoard method, not the function in this script
 * 
 */
function getMove() {
    // use readline's interface to ask retrieve the user's next move
    rl.question("Input your next move (up, down, left, right, or nothing to move the snake forward): ", (answer) => {
        // Depending on the user's answer, we change the snake's direction
        changeDirection(answer);
        
        // Move the snake forward and save the result
        let result = moveSnake();

        // If the snake lands on an apple, update board and generate a new apple
        if(result === "apple"){
            updateBoard();
            generateRandomApple();
        }
        // Else, if the snake bites itself or runs into a wall, print out "Loss"
        else if(result === "bite" || result === "wall"){
            console.log("LOSS");
            rl.close();
            return;
        }

        // Otherwise, we just continue as normal.
        updateBoard();
        board.printBoard();
        getMove();
    })
}

/**
 * Function to help us change directions.
 * Remember, the snake is not able to make a 180 degree turn in one single move, or else it will immediately bite itself.
 * 
 * Thus, we must make sure to prevent this from happening. I.e. if direction is left, we can't change to right.
 * 
 * @param {string} newDir - The direction we are attempting to switch to.
 */

function changeDirection(newDir){
    // Use an if-else chain or switch statement to change the direction. 
    // Should you use a switch statement, under each case you must implement a check to make sure the new direction works with the current direction
    switch(newDir){
        case "up":
            if(direction !== "down"){
                direction = "up";
            }
            break;
        case "down":
            if(direction !== "up"){
                direction = "down";
            }
            break;
        case "left":
            if(direction !== "right"){
                direction = "left";
            }
            break;
        case "right": 
            if(direction !== "left"){
                direction = "right";
            }
            break;
    }
}

/**
 * Function to move the snake forward one game tick. In the console version, the game is going to move forward one single tick at a time.
 * Once we move the game to the Browser, the snake will move forwards on its own, but for now, the snake will move one step at a time.
 * 
 * I will provide you with some pseudocode to help you complete this function, and some reasoning about why we do it this way:
 * 
 * We are going to be working with our global snake variable. Every time we make a move, we will update the board with the new state.
 * The reason for this is that there is no good way to store the snake directly in the board and refer back to it later.
 * 
 * First, we have to fully move the snake before we check anything.
 * If we land on an apple, we can't add a segment to the end of the snake until all the other segments complete moving.
 * Furthermore, there is an edge case:
 *      What if the block in front of the snake is its very last body segment? 
 *      If we do not complete the full move of the snake before checking to see if the snake bit itself, then the snake will be 
 *      biting a portion of itself that wouldn't be there if the snake finishes moving. 
 * 
 * Next, how would we accomplish moving the snake? 
 *      Essentially, we move the snake's head in the current direction, then we simply tell the rest of the snake to follow the 
 *      segment directly in front of it. This is one of the reasons why we keep the snake as an array, so it maintains its order.
 *      If we stored the snake data directly in the board, similarly to 2048, we would have little way to keep track of its order.
 * 
 * Finally, when we finish moving the snake, one of 4 things can possibly happen: 
 * 1. The snake head lands on an apple. 
 * 2. The snake head lands on a segment of itself
 * 3. The snake head hits a wall.
 * 4. None of the above happens, and the game continues as normal. 
 * 
 * Let's think about what we do in each of these cases:
 * Case #1: 
 *      Append the copy of the last segment to the end of the snake. Set the return value to "Apple"
 * 
 * Case #2 and #3:
 *      Set the return value to "Bite" or "Wall", respectively.
 * 
 * Case #4:
 *      Nothing. We can either set the return value to signify this, or do nothing. 
 *      In our case, we will opt to set the return value to "Continue". 
 * 
 * So our function flow is going to look like this:
 * Move the head of the snake > Make all the other segments follow > We check the state of the game, and return the corresponding value.
 * 
 * ALTERATIONS: 
 * - utilize the clone() method for lastMoved and tempCopy
 * - Use the Segment's head property to check if it is the snake's head Segment
 * 
 * @returns {string} - The result of the move:
 *                  "apple": Snake ate an apple, 
 *                  "bite": Snake bites itself, 
 *                  "wall": Snake hits a wall, 
 *                  "continue": Nothing happens
 */

function moveSnake() {
    // Declare our return variable "result" and give it a default value of "continue".
    let result = "continue";
    // Declare a temporary variable "lastMoved" that holds the last segment that has moved. The initial value will be the head of the snake.
    //      Reason: Once a segment moves, we need to keep track of where it was, or else the next segment doesn't know where to go to.
    //              Furthermore, after the snake finishes moving, this will hold the segment to be appended if the snake eats an apple.
    let lastMoved = { ... snake[0] };
    // Depending on the current direction, adjust the snake head segment's x and y value. You may need to use a switch statement here
    // For each segment:
    for(let i = 0; i < snake.length; i++){
        // If it is the first segment (head of the snake):
        if(i === 0){
            let newX = snake[i].x;
            let newY = snake[i].y;
            // use a switch statement to adjust the head segment's x and y value.
            switch (direction) {
                case "up":
                newY--;
                break;
                case "down":
                newY++;
                break;
                case "right":
                newX++;
                break;
                case "left":
                newX--;
                break;
            }
            snake[i].x = newX;
            snake[i].y = newY;
        // Otherwise
        } else {
            // Declare a temporary variable "tempCopy" to hold a copy of the current segment.
            let tempCopy = { ... snake[i] };
            // Set the current segment equal to "lastMoved". This essentially moves the segment forward.
            snake[i] = lastMoved;
            // Set "lastMoved" equal to "tempCopy". Thus, "lastMoved" now holds a temporary copy of the segment that just moved.
            lastMoved = tempCopy;
        }
    }
    // If the snake's head has the same coordinates as the apple (We can't use the board to check it since the board can only hold one value at a time)
    if(snake[0].x === apple.x && snake[0].y === apple.y){
        // Set "result" to "apple"
        result = "apple";
        // Push "lastMoved" to the end of the snake array
        snake.push(lastMoved);
    // Else, if the snake's head has coordinates that exceed our board
    } else if(snake[0].x < 0 || snake[0].x >= BOARD_SIZE || snake[0].y < 0 || snake[0].y >= BOARD_SIZE) {
        // Set the "result" to "wall"
        result = "wall";
    // Else, if the snake's head has coordinates that match one of its body parts
    } else {
        for(let segment of snake.slice(1)){
            if(snake[0].x === segment.x && snake[0].y === segment.y){
                // Set the "result" to "bite"
                result = "bite";
                break;
            }
        }
    }
    // Return "result"
    return result;
}

/**
 * Main function to run our game.
 * Place all the functions necessary to run the game (so far) into this function
 * 
 * ALTERATIONS:
 * - we are now using the Board class's printBoard method instead of the one in this script
 */
function main(){
    initializeBoard();
    generateRandomApple();
    updateBoard();
    board.printBoard();
    getMove();
}

main();