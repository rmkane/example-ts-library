const MyLibrary = require("../dist/mylib.min.js");

const { Jack, Tom } = MyLibrary;

const tom = new Tom();
const jack = new Jack();

console.log(tom.sayHello()); // Hi, I am Tom.
console.log(jack.sayHello()); // Hi, I am Jack.
