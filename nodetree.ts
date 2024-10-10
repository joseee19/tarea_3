// José David Castañeda Vasquez - 1534422

export class NodeTree {
    private data: number;
    private father!: NodeTree; // NodeTree* es un apuntador
    private leftChild!: NodeTree;
    private rightChild!: NodeTree;

    constructor(data: number, isLeaf?: boolean) {
        this.data = data;
        if (isLeaf)
            null
    }

    public getData(): number{
        return this.data;
    }

    public setFather(newFather: NodeTree): void {
        this.father = newFather;
    }

    public getFather() {
        return this.father;
    }

    public setLeftChild(newChild: NodeTree): void {
        this.leftChild = newChild;
    }

    public getLeftChild() {
        return this.leftChild;
    }

    public setRightChild(newChild: NodeTree): void {
        this.leftChild = newChild;
    }

    public getRightChild() {
        return this.leftChild;
    }
}