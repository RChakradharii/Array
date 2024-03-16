/*Write a program to take value N from the user and print the following pattern based on the user input.
array = [2, 3, 5, 2, 1]
>>
>>>
>>>>>
>>
>*/


// const input = require("readline-sync");

// let n = input.questionInt("Enter any number: ");
// let arr = [2, 3, 5, 2, 1];

// let i = 0;

// while (i<n) {
//     console.log(">".repeat(arr[i]));
//     i++
// }

 //////////////////SAME//////////////////////////


const input = require("readline-sync");
array = []
let n = input.questionInt("Enter any number: ");
let j=0
while(j<n){
    let a = input.questionInt("Enter any number: ");
    array[j]=a
    j++
}
let i = 0;

while (i<n) {
    console.log("<".repeat(array[i]));
    i++
}
