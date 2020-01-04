import { LinkedListNode, LinkedList } from "../linked";

/**
 * You have two numbers represented by a linked list, where each node contains a single digit. 
 * The digits are stored in reverse order, such that the 1’s digit is at the head of
 * the list. Write a function that adds the two numbers and returns the sum as a linked list. 
 * EXAMPLE 
 * Input: (3 -> 1 -> 5), (5 -> 9 -> 2) 
 * Output: 8 -> 0 -> 8
 */

function addTwoNodes(listNode1: LinkedListNode<number>, listNode2: LinkedListNode<number>, carry: number = 0): LinkedListNode<number> {

    if(listNode1 === null && listNode2 === null) {
        if(carry > 0) {
            return new LinkedListNode(carry);
        }
        return null;
    }

    const result = new LinkedListNode(carry);
    let newValue = carry;
    
    if(listNode1 != null) {
        newValue += listNode1.data;
    }

    if(listNode2 != null) {
        newValue += listNode2.data;
    }

    console.log('First add', newValue);
    result.data = newValue % 10;

    const nextList1Node = listNode1 ? listNode1.next : null;
    const nextList2Node = listNode2 ? listNode2.next : null;

    result.next = addTwoNodes(nextList1Node, nextList2Node, newValue >= 10 ? 1 : 0);
    return result;
}

let listNode1 = new LinkedListNode(3);
listNode1.next = new LinkedListNode(1);
listNode1.next.next = new LinkedListNode(5); // 513

let listNode2 = new LinkedListNode(5);
listNode2.next = new LinkedListNode(9);
listNode2.next.next = new LinkedListNode(4); // 495

let result = addTwoNodes(listNode1, listNode2); // 1008

let current = result;
while(current){
    console.log(current.data);
    current = current.next;
}

// 8
// 0
// 0
// 1