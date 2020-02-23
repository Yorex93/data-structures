import { ListStack } from "../implementation";

/**
 * How would you design a stack which, in addition to push and pop, also has a function
 * min which returns the minimum element? Push, pop and min should all operate in O(1) time.
 */

export class StackWithMin extends ListStack<number> {

    private min: number;

    constructor() {
        super();
        this.min = 0;
    }

    pop() {
        return super.pop();
    }

    push(item: number) {
        if(item > this.min) {
            this.min = item;
        }
        return super.push(item);
    }
}