export class TrieNode {
    children: Map<string, TrieNode> = new Map();
    private end : boolean = false;
    isEnd = () => this.end;
    setEnd = (isEnd: boolean) => this.end = isEnd;
}

export interface ITrie {
    add(word: string, toNode?: TrieNode): void;
    isWord(word: string): boolean;
    print(): string[];
}

export class Trie implements ITrie {
    
    private root: TrieNode = new TrieNode();

    constructor () {}

    add(word: string, toNode?: TrieNode): void {
        throw new Error("Method not implemented.");
    }

    isWord(word: string): boolean {
        throw new Error("Method not implemented.");
    }
    
    print(): string[] {
        throw new Error("Method not implemented.");
    }
}