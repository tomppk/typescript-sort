"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
var Node = /** @class */ (function () {
    // Data is the value contained inside a node
    function Node(data) {
        this.data = data;
        // By default next = null. Next is a reference to the next node in the list.
        this.next = null;
    }
    return Node;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        // Head is reference to the first node in the list.
        this.head = null;
    }
    LinkedList.prototype.add = function (data) {
        var node = new Node(data);
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
        var tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        // Add new node we just created to be the next property of tail node
        tail.next = node;
    };
    Object.defineProperty(LinkedList.prototype, "length", {
        get: function () {
            if (!this.head) {
                return 0;
            }
            // Iterate through whole chain and increment counter while there are nodes in the
            // list. When there is no next property for node (null or undefined) break while
            // loop and return length counter value
            var length = 1;
            var node = this.head;
            while (node.next) {
                length++;
                node = node.next;
            }
            return length;
        },
        enumerable: false,
        configurable: true
    });
    // Find node at index and return that node. Set node to be first node on the list.
    // while there is a node iterate through the whole list. Compare counter and requested
    // index if they match then return node at that index. If do not match add to counter
    // and set node to be node.next property so reference to next node in the list.
    // Throw error if there is no head node and if iterated through whole list and not
    // meet requested index.
    LinkedList.prototype.at = function (index) {
        if (!this.head) {
            throw new Error('Index out of bounds');
        }
        var counter = 0;
        var node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        throw new Error('Index out of bounds');
    };
    // Find nodes at left and right indexes. Compare their values.
    LinkedList.prototype.compare = function (leftIndex, rightIndex) {
        if (!this.head) {
            throw new Error('List is empty');
        }
        return this.at(leftIndex).data > this.at(rightIndex).data;
    };
    // Rather than actually swapping the nodes themselves we will swap their values
    LinkedList.prototype.swap = function (leftIndex, rightIndex) {
        var leftNode = this.at(leftIndex);
        var rightNode = this.at(rightIndex);
        var leftHand = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = leftHand;
    };
    // Iterate through list and console.log value of each node. Set node to be next node.
    LinkedList.prototype.print = function () {
        if (!this.head) {
            return;
        }
        var node = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
