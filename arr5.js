/*Write a program to print the sum of all the odd numbers and even numbers in the given array.
Note: In the output, you should print odd numbers sum and even numbers sum in this order only.*/


const input = require("readline-sync");
let n = input.questionInt("Enter size of array: ");
let arr = [];
let os= 0;
 let es=0;

for(let i=0;i<n;i++){
    arr[i]= input.questionInt("enter the element:")

}
    for(i=0;i<n;i++ ){
        if(arr[i]%2!=0){
        os = os+arr[i]
        }
        else{
            es = es+arr[i]
        }
       
    }
        
    console.log(os);
    console.log(es);
        


