export class CharactersCollection {
  constructor(public data: string) {}

  get length(): number {
    return this.data.length;
  }

  // Turn characters into lowercase before comparing. Lower and uppercase characters
  // cannot be compared as they have different ascii character codes
  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    // Split all characters in the string into an array of characters
    const characters = this.data.split('');

    // Swap places of characters inside the array
    const leftHand = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = leftHand;

    // Join the array of characters together and return a new string
    this.data = characters.join('');
  }
}
