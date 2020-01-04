import { IQueue } from "../queue";

export class ArrayQueue<T = any> implements IQueue<T> {

    private static DEFAULT_MAX_CAPACITY = 15;
    private _dataArray: T[];
    private _front: number;
    private _rear: number;
    private _capacity: number;
    private _length: number;

    constructor (capacity: number = ArrayQueue.DEFAULT_MAX_CAPACITY) {
        this._dataArray = new Array(capacity);
        this._front = 0;
        this._rear = -1;
        this._capacity = capacity;
        this._length = 0;
    }
    
    isEmpty(): boolean {
        return this.size() === 0;
    }    
    
    peek(): T {
        if(this.isEmpty()) {
            throw new Error('Queue is Empty');
        }
        return this._dataArray[this._front];
    }
    
    dequeue(): T {
        if(this.isEmpty()) {
            throw new Error('Queue is Empty');
        }
        let currentFront = this._dataArray[this._front];
        this._front = (this._front + 1) % this._capacity;
        this._length--;
        return currentFront;
    }
    
    enqueue(item: T): void {
        if(this.size() === this._capacity) {
            throw new Error('Queue is full');
        }
        let newRear = (this._rear + 1) % this._capacity;
        this._dataArray[newRear] = item;
        this._rear = newRear;
        this._length++;
    }
    
    clear(): void {
        for(let i = 0; i < this._length; i++) {

        }
    }
    
    size(): number {
        return this._length;
    }
}