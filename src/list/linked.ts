import { Node } from "../lib/node";
import { PrintableCollection } from "../lib/printable";

/**
 * Advantages over arrays
    1) Dynamic size
    2) Ease of insertion/deletion

Drawbacks:
    1) Random access is not allowed. We have to access elements sequentially starting from the first node. So we cannot do binary search with linked lists efficiently with its default implementation. Read about it here.
    2) Extra memory space for a pointer is required with each element of the list.
    3) Not cache friendly. Since array elements are contiguous locations, there is locality of reference which is not there in case of linked lists.
 */
export class LinkedListNode<T = any> extends Node<T> {
    constructor(data: T) {
        super(data);
    }
    next: LinkedListNode<T>;
}

export interface ILinkedList<T = any> {
    length: number;
    head: LinkedListNode<T>;
    add(value: T): LinkedListNode<T>;
    searchNodeAt(position: number): LinkedListNode<T> | null;
    remove(position: number): void;
}

export class LinkedList<T = any> implements  ILinkedList<T>, PrintableCollection {
    length: number = 0;    
    head: LinkedListNode<T> = null;

    add(value: T): LinkedListNode<T> {
        let nodeToAdd = new LinkedListNode(value);
        let currentNode = this.head;

        if(!currentNode) {
            this.head= nodeToAdd;
            this.length++;
            return nodeToAdd;
        }

        while(currentNode.next) {
            currentNode = currentNode.next;
        }

        currentNode.next = nodeToAdd;
        this.length++;
        return nodeToAdd;
    }

    searchNodeAt(position: number): LinkedListNode<T> {
        let currentNode = this.head;
        let cnt = 1;

        if(this.length === 0 || position > this.length || position < 1) {
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
        let nodeToDelete: LinkedListNode<T> = null;
        let previousNode: LinkedListNode<T> = null;

        if(this.length === 0 || position > this.length || position < 1) {
            throw new Error(`Non existent node position ${position}`)
        }

        if(position === 1) {
            this.head = this.head.next;
            this.length--;
            return;
        }

        while(cnt < position) {
            previousNode = currentNode;
            currentNode = currentNode.next;
            cnt++;
        }

        previousNode.next = currentNode.next;
        this.length--;

    }

    toArray(): T[] {
        let resultingArray : T[] = [];
        let currentHead = this.head;
        if(this.length === 0) {
            return [];
        }
        resultingArray.push(this.head.data);
        while(currentHead.next) {
            currentHead = currentHead.next;
            resultingArray.push(currentHead.data);
        }
        return resultingArray;
    }


}