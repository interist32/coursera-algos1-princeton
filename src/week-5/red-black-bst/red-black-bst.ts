const RED = true;
const BLACK = false;

export class RedBlackBSTNode {
  value: number;
  left: RedBlackBSTNode|null = null;
  right: RedBlackBSTNode|null = null;
  color: boolean;

  constructor(value: number, color: boolean) {
    this.value = value;
    this.color = color;
  }
}

export class RedBlackBST {
  private root: RedBlackBSTNode|null = null;

  get(value: number): RedBlackBSTNode|null {
    let node = this.root;

    while (node) {
      if (value < node.value) {
        node = node.left;
      } else if (value > node.value) {
        node = node.right;
      } else {
        return node;
      }
    }
    return null;
  }

  add(value: number) {
    this.root = this.addNode(this.root, value);
  }

  private addNode(node: RedBlackBSTNode|null, value: number): RedBlackBSTNode {
    debugger;
    if (!node) return new RedBlackBSTNode(value, RED);

    if (value < node.value) {
      node.left = this.addNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.addNode(node.right, value);
    } else {
      node.value = value;
    }

    if (this.isRed(node.right) && !this.isRed(node.left)) {
      node = this.rotateLeft(node);
    }
    if (this.isRed(node.left) && this.isRed(node.left.left)) {
      node = this.rotateRight(node);
    }
    if (this.isRed(node.left) && this.isRed(node.right)) {
      this.flipColors(node);
    }

    return node;
  }

  private isRed(node: RedBlackBSTNode|null): boolean {
    if (!node) return BLACK;

    return node.color === RED;
  }

  private rotateLeft(node: RedBlackBSTNode): RedBlackBSTNode {
    const tmp = node.right;
    node.right = tmp.left;
    tmp.left = node;
    tmp.color = node.color;
    node.color = RED;

    return tmp;
  }

  private rotateRight(node: RedBlackBSTNode): RedBlackBSTNode {
    const tmp = node.left;
    node.left = tmp.right;
    tmp.right = node;
    tmp.color = node.color;
    node.color = RED;

    return tmp;
  }

  private flipColors(node: RedBlackBSTNode) {
    node.color = RED;

    if (node.left) {
      node.left.color = BLACK;
    }
    if (node.right) {
      node.right.color = BLACK;
    }
  }

  getLevelOrderValues(): number[] {
    if (!this.root) return [];
    const values: number[] = [];

    let queue = [this.root];
    while (queue.length > 0) {
      const len = queue.length;

      for (let i = 0; i < len; i++) {
        const node = queue.shift();
        values.push(node.value);
        if (node.left) {
          queue.push(node.left);
        }
        if (node.right) {
          queue.push(node.right);
        }
      }
    }

    return values;
  }
}