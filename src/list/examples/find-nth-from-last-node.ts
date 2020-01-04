import { LinkedListNode } from "../linked";

/**
 * Implement an algorithm to find the nth to last element of a singly linked list.
 */

function findNthToLast(head: LinkedListNode, n: number): LinkedListNode {

    if(head === null || n < 1) {
        return null;
    }

   /**
    * Basically pointer 2 will give pointer 1 a n headstart, so by the time we iterate and pointer 2 gets to the end, 
    * pointer one will be n steps behind
    */
    let pointer1 = head;
    let pointer2 = head;

    for(let moveAhead = 0; moveAhead < n - 1; moveAhead++) {
        if(!pointer2.next) {
            // We went out of bounds not possible to find nth to last element
            return null;
        }
        pointer2 = pointer2.next;
    }

    while(pointer2.next) {
        // Start moving pointers one step at a time
        pointer1 = pointer1.next;
        pointer2 = pointer2.next;
    }

    return pointer1;
}

let head = new LinkedListNode('a');
let nodeB = new LinkedListNode('b');
let nodeC = new LinkedListNode('c');
let nodeD = new LinkedListNode('d');
let nodeE = new LinkedListNode('e');
head.next = nodeB;
nodeB.next = nodeC;
nodeC.next = nodeD;
nodeD.next = nodeE;

const result = findNthToLast(head, 2);
console.log(result); // { data: 'd', next: LinkedListNode { data: 'e' } }

