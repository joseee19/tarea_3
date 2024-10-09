// José Castañeda - 1534422

import { NodeTree } from "./nodetree";

class BST {
    private root: NodeTree;
    private leaf: NodeTree;
    constructor() {
        this.leaf = new NodeTree(0, true);
        this.root = this.leaf
    }

    private setRoot(newRoot: NodeTree): void {
        this.root = newRoot;
    }

    public getRoot(): NodeTree {
        return this.root;
    }

    public insert(data: number): void {
        let newNode: NodeTree = new NodeTree(data);
        let father: NodeTree = this.leaf;
        let current: NodeTree = this.root;
        newNode.setLeftChild(this.leaf);
        newNode.setRightChild(this.leaf);
        while (current != this.leaf) {
            father = current;
            if (newNode.getData() < current.getData()) {
                current = current.getLeftChild();
            } else {
                current = current.getRightChild();
            }
        }
        newNode.setFather(father);
        if (father == this.leaf) {
            this.root = newNode;
        } else if (newNode.getData() < father.getData()) {
            father.setLeftChild(newNode);
        } else {
            father.setRightChild(newNode);
        }
    }

    public search(dataToSearch: number): number {
        let data: number = -1;
        let current: NodeTree = this.root;
        while (current != this.leaf) {
            if (current.getData() == dataToSearch) {
                data = current.getData();
                break;
            } else if (dataToSearch < current.getData()) {
                current = current.getLeftChild();
            } else {
                current = current.getRightChild();
            }
        }
        return data;
    }

    private printNode(nodo: NodeTree): void {
        if (nodo?.getLeftChild() !== this.leaf)
            this.printNode(nodo.getLeftChild());
        if (nodo != this.leaf)
            console.log(nodo.getData());
        if (nodo?.getRightChild() !== this.leaf)
            this.printNode(nodo.getRightChild());
    }

    public printAll(): void {
        this.printNode(this.root);
    }
}

// main
let myBinarySearchTree: BST = new BST();
myBinarySearchTree.insert(10);
myBinarySearchTree.insert(7);
myBinarySearchTree.insert(100);
myBinarySearchTree.insert(3);
myBinarySearchTree.insert(38);
if (myBinarySearchTree.search(10) != -1) {
    console.log("Dato encontrado");
} else {
    console.log("El dato no existe");
}
myBinarySearchTree.printAll();