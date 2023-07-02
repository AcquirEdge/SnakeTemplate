export default class Apple{
    // ALTERATION: Add a new #appleElement property to hold this tile's HTML Element
    #x;
    #y;
    #value = "A";

    /**
     * 
     * ALTERATIONS:
     * - constructor takes a new argument 'boardElement'
     * - create a new HTML element with tag "div" for our new Apple
     * - Give it a class of "apple" by adding to it's 'style.classList' property
     * - set the X and Y Custom CSS properties to x and y
     * - Append the newly created apple element to the board Element
     * 
     * @param {Element} boardElement - the HTML element we are to append the apple to
     * @param {Number} x - X coordinate of the Apple
     * @param {Number} y - Y coordinate of the Apple
     */
    constructor (boardElement, x, y) {
        this.#x = x;
        this.#y = y;
        this.#appleElement = document.createElement("div");
        this.#appleElement.classList.add("apple");
        this.#appleElement.style.setProperty("--y", y);
        this.#appleElement.style.setProperty("--x", x);
        boardElement.append(this.#appleElement);
    }

    get x() {
        return this.#x;
    }

    // ALTERATION: When you set the x, make sure you update the CSS "--x" property
    set x(value) {
        this.#x = value;
    }
 
    get y() {
        return this.#y;
    }

    // ALTERATION: When you set the y, make sure you update the CSS "--y" property
    set y(value) {
        this.#y = value;
    }

    get value(){
        return this.#value;
    }

    /**
     * Function to remove the apple Element from the DOM
     */
    remove(){
        // Your code here
    }
}