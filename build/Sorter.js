"use strict";
// Instructions on how to be eligible for sorting
// Collection can be sorted if they implement these
// interface Sortable {
//   length: number;
//   compare(leftIndex: number, rightIndex: number): boolean;
//   swap(leftIndex: number, rightIndex: number): void;
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
// Abstract class with abstract methods and properties. Child classes must implement
// these. Abstract class is never going to be initialized. It will only serve as a
// parent class for other classes.
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    Sorter.prototype.sort = function () {
        var length = this.length;
        // Bubble sort
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
