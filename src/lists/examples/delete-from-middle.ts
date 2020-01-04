import { LinkedListNode, LinkedList } from "../singly-linked";

/**
 * Implement an algorithm to delete a node in the middle of a single linked list, given
 * only access to that node.
 * EXAMPLE
 * Input: the node ‘c’ from the linked list a->b->c->d->e
 * Result: nothing is returned, but the new linked list looks like a->b->d->e
 */

 function deleteNode (nodeToDelete: LinkedListNode) : boolean {
    if(!nodeToDelete || !nodeToDelete.next) {
        return false
    }

    let nodeToShift = nodeToDelete.next;
    nodeToDelete.data = nodeToShift.data;
    nodeToDelete.next = nodeToShift.next;
    
    return true;
 }

 let list = new LinkedList();
 list.add('a');
 list.add('b');
 let nodeC = list.add('c');
 list.add('d');
 list.add('e');

 deleteNode(nodeC);

let current = list.head;
while(current){
    console.log(current.data);
    current = current.next;
}

// a
// b
// d
// e