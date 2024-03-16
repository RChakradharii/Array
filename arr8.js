/*Write a program to reverse the array and print the reversed array.*/


const input = require ('readline-sync');

let n = input.questionInt("enter the number number:");
let array = [];
let i = 0;

while(i<n){
    let element = input.questionInt(`Enter element ${i + 1}: `);
    array.push(element);
    i++;
}
let j =i-1;
while(j>i){
    console.log("reversing number:"+ i);
    j++
}

