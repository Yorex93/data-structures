import { IStack } from "../stack";

/**
 * @description Array implementation of a stack
 */
export class ArrayStack<T = any> implements IStack<T> {

    private static DEFAUL_CAPACITY = 15;
    private _capacity: number;
    private _dataArray: T[];
    private _top: number;

    constructor(capacity: number = ArrayStack.DEFAUL_CAPACITY) {
        if(!capacity) {
            throw new Error('Capacity must be greater than Zero')
        }
        this._capacity = capacity;
        this._dataArray = new Array(capacity);
        this._top = -1;
    }

    push(data: T): void {
        if(this.isFull()) {
            throw new Error('Stack is full');
        }
        this._top++;
        this._dataArray[this._top] = data;
    }    
    
    pop(): T {
        if(this.isEmpty()){
            throw new Error('Stack is empty');
        }
        const itemToPop = this.peek();
        this._dataArray[this._top] = null;
        this._top--;
        return itemToPop;
    }

    isEmpty(): boolean {
        return this._top === -1;
    }

    peek(): T {
        if(this.isEmpty()){
            return null;
        }
        return this._dataArray[this._top];
    }

    clear(): void {
        for (let i = 0; i <= this._top; i++) {
            this._dataArray[i] = null;
        }
        this._top = -1;
    }

    toString(): string {
        if(this.isEmpty()) {
            return '[]';
        }
        let result = '[';
        for(let i = 0; i <= this._top; i++) {
            result += `"${this._dataArray[i].toString()}"`;
        }
        result += ']';
        return result;
    }

    private isFull(): boolean {
        return this._top === this._capacity - 1;
    }
}