import { ArrayStack, ListStack } from "./implementation";

/**
 * Stack is a linear data structure which follows a particular order in which the operations are performed. 
 * he order may be LIFO(Last In First Out) or FILO(First In Last Out).
 * 
 * A stack is a recursive data structure. Here is a structural definition of a Stack:
 * a stack is either empty or
 * it consistes of a top and the rest which is a stack;
 * 
 * Applications
 * The simplest application of a stack is to reverse a word. You push a given word to stack - letter by letter - and then pop letters from the stack.
 * Another application is an "undo" mechanism in text editors; this operation is accomplished by keeping all text changes in a stack.
 * Backtracking. This is a process when you need to access the most recent data element in a series of elements. 
 * Think of a labyrinth or maze - how do you find a way from an entrance to an exit?
 * Once you reach a dead end, you must backtrack. But backtrack to where? to the previous choice point. 
 * Therefore, at each choice point you store on a stack all possible choices. Then backtracking simply means popping a next choice from the stack.
 * 
 * Language processing:
 * space for parameters and local variables is created internally using a stack.
 * compiler's syntax check for matching braces is implemented by using stack.
 * support for recursion
 */
export interface IStack<T = any> {
    /**
     * @description Add data to the top stack, has a time complexity O(1)
     * @description Runs in O(1) time
     * @param data Data to add
     */
    push(item: T): void;

    /**
     * @description Removes data from top stack, has a time complexity O(1)
     * @description Runs in O(1) time
     * @returns {T}
     */
    pop(): T;

    /**
     * @description Checks if the stack is empty, has a time complexity O(1)
     * @returns {boolean}
     */
    isEmpty(): boolean;

    /**
     * @description Checks if the stack is empty, has a time complexity O(1)
     * @returns {T} Item at the top of stack
     */
    peek(): T;

    /**
    * Removes all items from the stack.
    */
    clear(): void;
}

/**
 * Possible implementations
 */
const stack1: IStack<number> = new ArrayStack(10); // Has a max capacity of 10;
const stack2: IStack<number> = new ListStack(); // Flexible