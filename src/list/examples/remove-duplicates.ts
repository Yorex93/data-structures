import { LinkedListNode } from "../linked";

/**
 * Write code to remove duplicates from an unsorted linked list.
 * FOLLOW UP
 * How would you solve this problem if a temporary buffer is not allowed?
 */

function removeDuplicates(node: LinkedListNode): void {
    if(node === null) {
        return;
    }

    let map: Map<any, boolean> = new Map();
    let previousNode = null;

    while(node) {
        if(map.has(node.data)) {
            previousNode.next = node.next;
        } else {
            map.set(node.data, true);
            previousNode = node;
        }
        node = node.next;
    }
} 

function removeDuplicatesWithoutBuffer(head: LinkedListNode): void {
    if(head === null) {
        return;
    }
    let previousNode = head;

    // Iterate through all the nodes
    // For each node check if there are any previous nodes with the same value,
    // remove if exists
    
    let currentNode = previousNode.next;
    while(currentNode) {

        // Initialize runner from head;
        let runner = head;

        // While running through
        while(runner !== currentNode) {
            if(runner.data === currentNode.data) {
                previousNode.next = currentNode.next;
                currentNode = currentNode.next;
                break;
            }
            runner = runner.next;
        }
        
        if(runner === currentNode) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
    }
} 

let head = new LinkedListNode('a');
let nodeB = new LinkedListNode('b');
let nodeC = new LinkedListNode('b');
head.next = nodeB;
nodeB.next = nodeC;

//removeDuplicates(head);
removeDuplicatesWithoutBuffer(head);

console.log(head); // a -> b
