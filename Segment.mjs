export default class Segment{
    // private variables
    #x;
    #y;
    #head;
    #value = "X";
    /**
     * 
     * @param {*} x - X coordinate of this snake Segment
     * @param {*} y - Y coordinate of this snake Segment
     * @param {*} head - Property to know if this is the head Segment or not
     */
    constructor (x, y, head = false) {
        this.#x = x;
        this.#y = y;
        this.#head = head;
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
    }

    get y(){
        return this.#y;
    }

    set y(value){
        this.#y = value;
    }

    /**
     * Method to generate a clone of this segment.
     * Because the snake can only have 1 head segment, always set 'head' to false in the clone
     * @returns - New Segment object that is an exact copy of this Segment.
     */
    clone(){
        return new Segment(this.#x, this.#y);
    }
}