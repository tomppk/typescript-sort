"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        // Bubble sort
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
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
exports.Sorter = Sorter;
