import { NumbersCollection } from './NumbersCollection';

export class Sorter {
  constructor(public collection: NumbersCollection) {}

  sort(): void {
    const { length } = this.collection;

    // Bubble sort
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
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
  }
}
