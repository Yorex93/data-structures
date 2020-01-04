import { LinkedListNode } from "../linked";

/**
 * Given a linked list, check if the linked list has loop or not. Below diagram shows a linked list with a loop.
 */

type LoopCheckFunction = (node: LinkedListNode) => boolean;

const solutions = {

    checkForLoopWithHashing: function (node: LinkedListNode): boolean {
        const hashMap: Map<LinkedListNode, boolean> = new Map();

        while(node) {
            if(hashMap.has(node)) {
                return true;
            }
            hashMap.set(node, true);
            node = node.next;
        }
        return false;
    },

    /**
     * Floyd’s Cycle-Finding Algorithm: This is the fastest method and has been described below:
     * Traverse linked list using two pointers. 
     * Move one pointer(slow_p) by one and another pointer(fast_p) by two. 
     * If these pointers meet at the same node then there is a loop. If pointers do not meet then linked list doesn’t have a loop
    */
    checkForLoopWithPointers: function (node: LinkedListNode): boolean {

        // Initialize two pointers
        let slowPointer = node;
        let fastPointer = node;

        while(slowPointer && fastPointer && fastPointer.next) {
            slowPointer = slowPointer.next;
            fastPointer = fastPointer.next.next;

            if(slowPointer === fastPointer) {
                // Loop found
                return true;
            }
        }

        return false;
    },
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

console.log('Check for loop using hashing', solutions.checkForLoopWithHashing(head)) // true;
console.log('Check for loop using floyd cycle', solutions.checkForLoopWithPointers(head)) // true;

export default solutions;