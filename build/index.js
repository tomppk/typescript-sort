"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var LinkedList_1 = require("./LinkedList");
// const numbersCollection = new NumbersCollection([50, 5, -3, 0]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);
// const charactersCollection = new CharactersCollection('Quetzalcoatl');
// const sorter = new Sorter(charactersCollection);
// sorter.sort();
// console.log(charactersCollection.data);
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(505);
linkedList.add(-30);
linkedList.add(41);
linkedList.add(5);
linkedList.add(-2);
var sorter = new Sorter_1.Sorter(linkedList);
sorter.sort();
linkedList.print();
