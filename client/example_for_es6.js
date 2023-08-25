import * as MyLibrary from "../dist/mylib.min.js";

console.log = function (message) {
  const messageDiv = document.createElement("div");
  messageDiv.textContent = `${message}`;
  document.body.append(messageDiv);
};

const { Jack, Tom } = MyLibrary;

const tom = new Tom();
const jack = new Jack();

console.log(tom.sayHello()); // Hi, I am Tom.
console.log(jack.sayHello()); // Hi, I am Jack.
