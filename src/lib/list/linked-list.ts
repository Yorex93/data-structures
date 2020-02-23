import { Node } from "../node";
import { PrintableCollection } from "../printable";
import { IQueue } from "src/lib/queue/queue";

/**
 * Advantages over arrays
    1) Dynamic size
    2) Ease of insertion/deletion

Drawbacks:
    1) Random access is not allowed. We have to access elements sequentially starting from the first node. So we cannot do binary search with linked lists efficiently with its default implementation. Read about it here.
    2) Extra memory space for a pointer is required with each element of the list.
    3) Not cache friendly. Since array elements are contiguous locations, there is locality of reference which is not there in case of linked lists.
 */
export class ListNode<T = any> extends Node<T> {
    constructor(data: T) {
        super(data);
    }
    next: ListNode<T>;
}

export interface ILinkedList<T = any> {
    size(): number;
    head: ListNode<T>;
    add(value: T): ListNode<T>;
    searchNodeAt(position: number): ListNode<T> | null;
    remove(position: number): void;
}

export class LinkedList<T = any> implements ILinkedList<T>, IQueue<T>, PrintableCollection {

    private _length: number = 0;    
    head: ListNode<T> = null;
    private _tail: ListNode<T> = null; // For tail implementation


    size(): number {
        return this._length;
    }

    add(value: T): ListNode<T> {
        let nodeToAdd = new ListNode(value);
        let currentNode = this.head;

        if(!currentNode) {
            this.head= nodeToAdd;
            this._length++;
            return nodeToAdd;
        }

        while(currentNode.next) {
            currentNode = currentNode.next;
        }

        currentNode.next = nodeToAdd;
        this._length++;
        return nodeToAdd;
    }

    searchNodeAt(position: number): ListNode<T> {
        let currentNode = this.head;
        let cnt = 1;

        if(this._length === 0 || position > this._length || position < 1) {
            throw new Error(`Non existent node position ${position}`)
        }
        while(cnt < position) {
            currentNode = currentNode.next;
            cnt++;
        }
        return currentNode;
    }

    remove(position: number): void {
        let currentNode = this.head;
        let cnt = 1;
        let nodeToDelete: ListNode<T> = null;
        let previousNode: ListNode<T> = null;

        if(this._length === 0 || position > this._length || position < 1) {
            throw new Error(`Non existent node position ${position}`)
        }

        if(position === 1) {
            this.head = this.head.next;
            this._length--;
            return;
        }

        while(cnt < position) {
            previousNode = currentNode;
            currentNode = currentNode.next;
            cnt++;
        }

        previousNode.next = currentNode.next;
        this._length--;

    }

    toArray(): T[] {
        let resultingArray : T[] = [];
        let currentHead = this.head;
        if(this._length === 0) {
            return [];
        }
        resultingArray.push(this.head.data);
        while(currentHead.next) {
            currentHead = currentHead.next;
            resultingArray.push(currentHead.data);
        }
        return resultingArray;
    }

    /**
     * Queue implementation using linked list
     */

    isEmpty(): boolean {
        return this._length === 0;
    }

    peek(): T {
        if(this.isEmpty()) {
            throw new Error('Queue is Empty');
        }
        return this.head.data;
    }

    dequeue(): T {
        if(this.isEmpty()) {
            throw new Error('Queue is Empty');
        }
        let nodeToRemove = this.head;
        this.head = nodeToRemove.next;
        this._length--;
        return nodeToRemove.data;
    }

    enqueue(item: T): void {
        let nodeToAdd = new ListNode(item);
        this._tail.next = nodeToAdd;
        this._tail = nodeToAdd;
        this._length++;
    }

    clear(): void {
        throw new Error("Method not implemented.");
    }
}