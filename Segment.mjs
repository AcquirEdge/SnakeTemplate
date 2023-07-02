export default class Segment{
    // private variables
    // ALTERATION: 
    // Add a new #segmentElement property to hold this segment's HTML Element
    // Add a new #boardElement property to hold the boardElement it is located on
    #x;
    #y;
    #head;
    #value = "X";
    #segmentElement;
    #boardElement; 
    /**
     * ALTERATIONS:
     * - constructor takes a new argument 'boardElement'
     * - create a new HTML element with tag "div" for our new Segment
     * - Give it a class of "segment" by adding to it's 'style.classList' property
     * - If it is the head of the snake, add another class of "head"
     * - set the X and Y Custom CSS properties to x and y
     * - Append the newly created segment element to the board Element
     * 
     * @param {Element} boardElement - HTML Element to append the new Segment Element to
     * @param {Number} x - X coordinate of this snake Segment
     * @param {Number} y - Y coordinate of this snake Segment
     * @param {Boolean} head - Property to know if this is the head Segment or not
     */
    constructor (x, y, head = false) {
        this.#x = x;
        this.#y = y;
        this.#head = head;
        this.#boardElement = boardElement;
        this.#segmentElement = document.createElement("div");
        this.#segmentElement.classList.add("segment");
        if(head){
            this.#segmentElement.classList.add("head");
        }
        this.#segmentElement.style.setProperty("--y", y);
        this.#segmentElement.style.setProperty("--x", x);
        boardElement.append(this.#segmentElement);
    }

    get value(){
        return this.#value;
    }

    get head(){
        return this.#head;
    }

    get x(){
        return this.#x;
    }

    // ALTERATION: When you set the x, make sure you update the CSS "--x" property
    set x(value){
        this.#x = value;
        this.#segmentElement.style.setProperty("--x", value);
    }

    get y(){
        return this.#y;
    }

    // ALTERATION: When you set the y, make sure you update the CSS "--y" property
    set y(value){
        this.#y = value;
        this.#segmentElement.style.setProperty("--y", value);
    }

    /**
     * Function to remove the segment Element from the DOM
     */
    remove() {
        this.#segmentElement.remove();
    }

    /**
     * Method to generate a clone of this segment.
     * Because the snake can only have 1 head segment, always set 'head' to false in the clone
     * ALTERATIONS:
     * - include #boardElement in the constructor
     * 
     * @returns - New Segment object that is an exact copy of this Segment.
     */
    clone(){
        return new Segment(this.#boardElement, this.#x, this.#y);
    }
}