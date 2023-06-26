class NodeItem {
  constructor(public value: any, public next: NodeItem | null = null) {}
}

class SmileQueue {
  private head: NodeItem | null = null;
  private tail: NodeItem | null = null;
  private _size = 0;

  enqueue(value: any) {
    const node = new NodeItem(value);
    if (this.tail) {
      this.tail.next = node;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }
    this._size++;
  }

  dequeue() {
    const node = this.head;
    if (!node) return;
    this.head = node.next;
    this._size--;
    if (this._size === 0) this.tail = null;
    return node.value;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }

  get size() {
    return this._size;
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node.value;
      node = node.next;
    }
  }
}

export default SmileQueue;
export { SmileQueue };
