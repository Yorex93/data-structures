import { LinkedListNode } from "../singly-linked";

/**
 * Given a circular linked list, implement an algorithm which returns node at the beginning of the loop.
 * DEFINITION
 * Circular linked list: A (corrupt) linked list in which a node’s next pointer points to an
 * earlier node, so as to make a loop in the linked list.
 * EXAMPLE
 * Input: A -> B -> C -> D -> E -> C [the same C as earlier]
 * Output: C
 */

function getBeginningOfLoop (node: LinkedListNode) : LinkedListNode {
    // Iterate through all the nodes
    // If a node has been encountered in the list prior and is now encountered as a next node to another node then flag

    while(node) {
        // if node.next has been seen before;
        node = node.next;
    }
    return null;
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
nodeE.next = nodeC;