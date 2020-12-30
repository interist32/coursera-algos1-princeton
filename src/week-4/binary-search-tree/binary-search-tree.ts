export class BSTNode {
  left: BSTNode|null = null;
  right: BSTNode|null = null;
  value: number;

  constructor(value: number) {
    this.value = value;
  }
}

export class BST {
  private root: BSTNode;

  constructor(value: number) {
    this.root = new BSTNode(value);
  }

  has(value: number): boolean {
    let node = this.root;
    while (node !== null) {
      if (node.value === value) {
        return true;
      } else if (value < node.value) {
        node = node.left;
      } else if (value > node.value) {
        node = node.right;
      }
    }

    return false;
  }

  min(rootNode?: BSTNode): BSTNode {
    let node = rootNode || this.root;

    while (node.left !== null) {
      node = node.left;
    }

    return node;
  }

  max(rootNode?: BSTNode): BSTNode {
    let node = rootNode || this.root;

    while (node.right !== null) {
      node = node.right;
    }

    return node;
  }

  add(value: number) {
    this.root = this.addNode(this.root, value);
  }

  private addNode(node: BSTNode|null, value: number): BSTNode|null {
    if (node === null) return new BSTNode(value);

    if (value < node.value) {
      node.left = this.addNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.addNode(node.right, value);
    } else {
      node.value = value;
    }

    return node;
  }

  remove(value: number) {
    this.root = this.removeNode(this.root, value);
  }

  removeNode(node: BSTNode, value: number): BSTNode|null {
    if (value < node.value) {
      node.left = this.removeNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.removeNode(node.right, value);
    } else {
      if (!node.left) return node.right;
      if (!node.right) return node.left;

      let t = node;
      node = this.min(node.right);
      node.right = this.removeMin(t.right);
      node.left = t.left;
    }

    return node;
  }

  private removeMin(node: BSTNode): BSTNode|null {
    if (!node.left) return node.right;
    node.left = this.removeMin(node.left);
    return node;
  }

  inorderView(): number[] {
    const items: number[] = [];
    this.inorder(this.root, items);
    return items;
  }

  private inorder(node: BSTNode|null, items: number[]) {
    if (!node) return;

    this.inorder(node.left, items);
    items.push(node.value);
    this.inorder(node.right, items);
  }
}