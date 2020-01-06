import { ListStack } from "../implementation";
import { IStack } from "../stack";

/**
 * How would you design a stack which, in addition to push and pop, also has a function
 * min which returns the minimum element? Push, pop and min should all operate in O(1) time.
 */

export class StackWithMin extends ListStack<number> implements IStack<number> {

    private min: number;

    constructor() {
        super();
    }

    pop() {
        return super.pop();
    }

    push(item: number) {
        return super.push(item);
    }
}