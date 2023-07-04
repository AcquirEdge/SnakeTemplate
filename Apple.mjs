export default class Apple{
    #x;
    #y;
    #value = "A";
    #appleElement;

    /**
     * 
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

    set x(value) {
        this.#x = value;
        this.#appleElement.style.setProperty("--x", value);
    }
 
    get y() {
        return this.#y;
    }

    set y(value) {
        this.#y = value;
        this.#appleElement.style.setProperty("--y", value);
    }

    get value(){
        return this.#value;
    }

    /**
     * Function to remove the apple Element from the DOM
     */
    remove(){
        this.#appleElement.remove();
    }
}