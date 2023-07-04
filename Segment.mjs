export default class Segment{
    // private variables
    #x;
    #y;
    #head;
    #value = "X";
    #segmentElement;
    #boardElement; 
    /**
     * 
     * @param {Element} boardElement - HTML Element to append the new Segment Element to
     * @param {Number} x - X coordinate of this snake Segment
     * @param {Number} y - Y coordinate of this snake Segment
     * @param {Boolean} head - Property to know if this is the head Segment or not
     */
    constructor (boardElement, x, y, head = false) {
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

    set x(value){
        this.#x = value;
        this.#segmentElement.style.setProperty("--x", value);
    }

    get y(){
        return this.#y;
    }

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
     * 
     * @returns - New Segment object that is an exact copy of this Segment.
     */
    clone(){
        return new Segment(this.#boardElement, this.#x, this.#y);
    }
}