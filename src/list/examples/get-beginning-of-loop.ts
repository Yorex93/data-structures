import { LinkedListNode } from "../linked";
import { checkPerformance } from "../../lib/benchmark";

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
    const hashMap: Map<LinkedListNode, boolean> = new Map();
    while(node) {
        if(hashMap.has(node)) {
            return node;
        }
        hashMap.set(node, true);
        node = node.next;
    }
    return null;
} 

function getBeginningOfLoopPointers (head: LinkedListNode) : LinkedListNode {
    let pointer1 = head;
    let pointer2 = head;
    
    while(pointer2 && pointer2.next) {
        pointer1 = pointer1.next;
        pointer2 = pointer2.next.next;

        if(pointer1 === pointer2) {
            // Pointers have met
            break;
        }
    }

    if(!pointer2 || !pointer2.next) {
        return null;
    }

    pointer1 = head;

    while(pointer1 !== pointer2) {
        pointer1 = pointer1.next;
        pointer2 = pointer2.next;
    }

    return pointer2;
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

console.log('With Hash', getBeginningOfLoop(head)) // 'c'
console.log('With Pointers', getBeginningOfLoopPointers(head)) // 'c'

console.log(checkPerformance([
    { func: getBeginningOfLoop, args: [head] },
    { func: getBeginningOfLoopPointers, args: [head] },
]))