import { IStack } from "../stack";
import { ListNode } from "src/lib/list/linked-list";

export class ListStack<T = any> implements IStack<T> {

    protected _top: ListNode<T>;

    constructor() {
        this._top = null;
    }

    push(item: T): void {
        let node = new ListNode(item);
        node.next = this._top;
        this._top = node;
    }    
    
    pop(): T {
        if(this.isEmpty()) {
            throw new Error('Stack is empty');
        }
        let nodeToPop = this._top;
        this._top = nodeToPop.next;
        return nodeToPop.data;
    }
    
    isEmpty(): boolean {
        return this._top === null;
    }
    
    peek(): T {
        return this._top.data;
    }
    
    clear(): void {
        this._top = null;
    }

    toString() {
        if(this.isEmpty()) {
            return '[]';
        }
        let node = this._top;
        let result = '[';
        while(node) {
            result += `"${node.data.toString()}"`;
            node = node.next;
        }
        result += ']';
        return result;
    }
}