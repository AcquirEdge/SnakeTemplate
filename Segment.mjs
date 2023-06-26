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
        // Your code here
    }

    get value(){
        // Your code here
    }

    get head(){
        // Your code here
    }

    get x(){
        // Your code here
    }

    set x(value){
        // Your code here
    }

    get y(){
        // Your code here
    }

    set y(value){
        // Your code here
    }

    /**
     * Method to generate a clone of this segment.
     * Because the snake can only have 1 head segment, always set 'head' to false in the clone
     * @returns - New Segment object that is an exact copy of this Segment.
     */
    clone(){
        // Your code here
    }
}