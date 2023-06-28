export default class Apple{
    #x;
    #y;
    #value = "A";

    /**
     * 
     * @param {Number} x - X coordinate of the Apple
     * @param {Number} y - Y coordinate of the Apple
     */
    constructor (x, y) {
        this.#x = x;
        this.#y = y;
    }

    get x() {
        return this.#x;
    }

    set x(value) {
        this.#x = value;
    }
 
    get y() {
        return this.#y;
    }

    set y(value) {
        this.#y = value;
    }

    get value(){
        return this.#value;
    }
}