/*Write a program to take size of array, array and target as input from the user and check whether the target exists in this array or not.*/


const input = require("readline-sync");
let n = input.questionInt("Enter size of array: ");
let k = input.questionInt("Enter target number: ");
let array = [];
let i = 0;

while (i < n) {
    let element = input.questionInt(`Enter element ${i + 1}: `);
    array.push(element);
    i++;
}

let targetExists = false;

for (let i = 0; i < n; i++) {
    if (array[i] === k) {
        targetExists = true;
        break;
    }
}

if (targetExists) {
    console.log("Yes, the target exists in the array.");
} else {
    console.log("No, the target does not exist in the array.");
}
