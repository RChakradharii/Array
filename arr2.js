/*Write a program to print all the numbers from the given array using a loop.
L = {23, 45, 32, 25, 46,33, 71, 90}*/


const input = require("readline-sync")
let n = input.questionInt("enter any number: ")
let arr = [];
let i = 0;
while(i<n){
    element = input.questionInt("enter element {}:")
    i++
    arr.push(element)
}
let j = 0
while(j<n){
    console.log(arr[j]);
    j++
}
