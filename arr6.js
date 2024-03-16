/*Write a program to take N numbers from a user as input and then print the duplicates in those N numbers. Also, take N as an input from the user*/


// const input = require("readline-sync");

// let n = input.questionInt("Enter how many number you have: ");

// let numbers = [];
// for (let i = 0; i < n; i++) {
//     let number = input.questionInt(`Enter element ${i + 1}: `);
//     numbers.push(number);
// }

// let duplicates = findDuplicates(numbers);

// if (duplicates.length > 0) {
//     console.log("Duplicates: ", duplicates.join(", "));
// } else {
//     console.log("No duplicates found.");
// }


// function findDuplicates(arr) {
//     let seen = {};
//     let duplicates = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (seen[arr[i]] === undefined) {
//             seen[arr[i]] = 1;
//         } else {
//             if (seen[arr[i]] === 1) {
//                 duplicates.push(arr[i]);
//             }
//             seen[arr[i]]++;
//         }
//     }

//     return duplicates;
// }



///////////////////////////SAME////////////////////////////


const input = require("readline-sync")
let n = input.questionInt("how many number u have in array:");
let arr = [];

for(let i =0; i<n; i++)
{
    arr[i] = input.questionInt("enter the element no.:")
}
for(i=0; i<n; i++)
{
    let c=1;
    for(let j=i+1; j<n; j++)
{
    if(arr[i]==arr[j])
    {
        c++;
        let m=j
        for(m=j; m<n; m++);
        {
            arr[m]=arr[m+1];
        }
         n=n-1;
    }
    c=c;
}
if(c>1)
{
    console.log((arr[i])," have duplicate here");
}
}