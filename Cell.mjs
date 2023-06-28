export default class Cell {
    #x;
    #y;
    // initial value is null otherwise it will be undefined
    #value = null;

    constructor(x, y){
        this.#x = x;
        this.#y = y;
    }

    get x(){
        return this.#x;
    }

    get y(){
        return this.#y;
    }

    get value(){
        return this.#value;
    }

    /**
     * Set a new value for this cell (Apple, or Segment)
     * Remember that when you set this value, you must keep the new value's X and Y in sync.
     */
    set value(value){
        this.#value = value;
        if(value !== null){
            this.#value.x = this.#x;
            this.#value.y = this.#y;
        }
    }
}