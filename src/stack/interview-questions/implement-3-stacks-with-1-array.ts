import { IQueue } from "src/queue/queue";

/**
 * Describe how you could use a single array to implement three stacks.
 */

export class SingleArrayStack<T = any> {

    private static DEFAULT_ARRAY_SIZE_PER_STACK = 100;
    private _dataArray: T[];
    private _stackTopPointers: number[];

    constructor(numberOfStacks: number = 1) {
        this._dataArray = new Array[numberOfStacks * SingleArrayStack.DEFAULT_ARRAY_SIZE_PER_STACK];
        for(let i = 0; i < numberOfStacks; i++) {
            this._stackTopPointers.push(i * SingleArrayStack.DEFAULT_ARRAY_SIZE_PER_STACK);
        }
    }
    
    isEmpty(): boolean {
        throw new Error("Method not implemented.");
    }    
    
    peek(): T {
        throw new Error("Method not implemented.");
    }

    dequeue(): T {
        throw new Error("Method not implemented.");
    }

    enqueue(item: T): void {
        throw new Error("Method not implemented.");
    }

    clear(): void {
        throw new Error("Method not implemented.");
    }

    size(): number {
        throw new Error("Method not implemented.");
    }
}