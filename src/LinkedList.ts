class Node {
  // By default next = null. Next is a reference to the next node in the list.
  next: Node | null = null;

  // Data is the value contained inside a node
  constructor(public data: number) {}
}

export class LinkedList {
  // Head is reference to the first node in the list.
  head: Node | null = null;

  add(data: number): void {
    const node = new Node(data);

    // If empty list then this first node will be head node
    if (!this.head) {
      this.head = node;
      return;
    }

    // Tail is the last node in the list. Set tail to be the head node.
    // Then while tail node has node.next property (so there is a reference to next
    // node) set tail to be this next node. Iterate through whole list and every node
    // until there is a node that does not have next property (null or undefined). Set
    // this node to be tail node.
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }

    // Add new node we just created to be the next property of tail node
    tail.next = node;
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }

    // Iterate through whole chain and increment counter while there are nodes in the
    // list. When there is no next property for node (null or undefined) break while
    // loop and return length counter value
    let length = 1;
    let node = this.head;
    while (node.next) {
      length++;
      node = node.next;
    }
    return length;
  }

  // Find node at index and return that node. Set node to be first node on the list.
  // while there is a node iterate through the whole list. Compare counter and requested
  // index if they match then return node at that index. If do not match add to counter
  // and set node to be node.next property so reference to next node in the list.
  // Throw error if there is no head node and if iterated through whole list and not
  // meet requested index.
  at(index: number): Node {
    if (!this.head) {
      throw new Error('Index out of bounds');
    }

    let counter = 0;
    let node: Node | null = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }

    throw new Error('Index out of bounds');
  }

  // Find nodes at left and right indexes. Compare their values.
  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error('List is empty');
    }

    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  // Rather than actually swapping the nodes themselves we will swap their values
  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    const leftHand = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftHand;
  }

  // Iterate through list and console.log value of each node. Set node to be next node.
  print(): void {
    if (!this.head) {
      return;
    }

    let node: Node | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}
