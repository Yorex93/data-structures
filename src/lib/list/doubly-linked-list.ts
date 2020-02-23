import { Node } from "../node";
import { PrintableCollection } from "../printable";

export class DoublyLinkedListNode<T> extends Node<T> {
    constructor(data: T) {
        super(data);
    }
    next: DoublyLinkedListNode<T>;
    previous: DoublyLinkedListNode<T>
}

export interface IDoublyLinkedList<T = any> {
    length: number;
    head: DoublyLinkedListNode<T>;
    tail: DoublyLinkedListNode<T>;
    add(value: T): DoublyLinkedListNode<T>;
    searchNodeAt(position: number): DoublyLinkedListNode<T> | null;
    remove(position: number): void;
}

export class DoublyLinkedList<T = any> implements  IDoublyLinkedList<T>, PrintableCollection {
    length: number = 0;    
    head: DoublyLinkedListNode<T> = null;
    tail: DoublyLinkedListNode<T> = null;

    add(value: T): DoublyLinkedListNode<T> {
        let nodeToAdd = new DoublyLinkedListNode(value);
        if(this.length > 0) {
            this.tail.next = nodeToAdd;
            nodeToAdd.previous = this.tail;
            this.tail = nodeToAdd;
        } else {
            this.head = nodeToAdd;
            this.tail = nodeToAdd;
        }

        this.length++;
        return nodeToAdd;
    }

    searchNodeAt(position: number): DoublyLinkedListNode<T> {
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
        let nodeToDelete: DoublyLinkedListNode<T> = null;

        if(this.length === 0 || position > this.length || position < 1) {
            throw new Error(`Non existent node position ${position}`)
        }

        if(position === 1) {
            let secondNode = this.head.next;
            this.head = secondNode;
            if(secondNode) {
                secondNode.previous = null;
            } else {
                this.tail = null;
            
            }
            this.length--;
            return;
        }

        if(position === this.length) {
            let secondToLastNode = this.tail.previous;
            secondToLastNode.next = null;
            this.tail = secondToLastNode;
            this.length--;
            return;
        }
    

        while(cnt < position) {
            currentNode = currentNode.next;
            cnt++;
        }

        nodeToDelete = currentNode;
        let nodeBeforeDeletedNode = currentNode.previous;
        let nodeAfterDeletedNode = currentNode.next;

        nodeAfterDeletedNode.next = nodeAfterDeletedNode;
        nodeAfterDeletedNode.previous = nodeBeforeDeletedNode;
        nodeToDelete = null;
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