import { ArrayQueue } from "./implementation/array-queue";
import { LinkedList } from "src/list/linked-list";

/**
 * A queue is a container of objects (a linear collection) that are inserted and removed according to the first-in first-out (FIFO) 
 * principle. An excellent example of a queue is a line of students in the food court of the UC. New additions to a line made to 
 * the back of the queue, while removal (or serving) happens in the front. In the queue only two operations are allowed enqueue 
 * and dequeue. Enqueue means to insert an item into the back of the queue, dequeue means removing the front item. 
 * The picture demonstrates the FIFO access.
 * 
 * The difference between stacks and queues is in removing. 
 * In a stack we remove the item the most recently added; in a queue, we remove the item the least recently added.
 */

export interface IQueue<T = any> {
    /**
     * @description Checks if queue is empty, Time complexity O(1)
     * @returns {boolean}
     */
    isEmpty() : boolean;

    /**
     * @description Gets the Item at the front of a queue, Time complexity O(1)
     * @returns {T} Item in front
     */
    peek(): T;

    /**
     * @description Removes an item from the front of the queue, Time complexity O(1)
     * @returns {T} Removed Item
     */
    dequeue(): T;

    /**
     * @description Adds an item to the queue (back), Time complexity O(1)
     */
    enqueue(item: T): void;

    /**
     * @description Removes all items from the queue, Time complexity O(1)
     */
    clear(): void;

    /**
     * @description Returns the Size of the queue
     * @returns {number}
     */
    size(): number;
} 

/**
 * Possible implementations
 */
const queue1: IQueue = new ArrayQueue();
const queue2: IQueue = new LinkedList();
