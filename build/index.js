"use strict";
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        // Bubble sort
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                // If collection is an array of numbers
                // Type guard. Check if collection type is array
                if (this.collection instanceof Array) {
                    // collection === number[]
                    if (this.collection[j] > this.collection[j + 1]) {
                        var leftHand = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = leftHand;
                    }
                }
                // If collection is a string, do this logic instead
                // Type guard for string has different syntax because
                // it is a primitive type (number, string, boolean, symbol)
                // instanceOf used for object types that are created with
                // constructor function
                if (typeof this.collection === 'string') {
                }
            }
        }
    };
    return Sorter;
}());
var sorter = new Sorter([10, 5, -3, 0]);
sorter.sort();
console.log(sorter.collection);
