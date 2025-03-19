let arr3 = ['a', 'b', 'd'];
console.log(arr3);


arr3.push('e');
console.log(arr3);


arr3.pop();
console.log(arr3);


console.log("Reverse of the array");

let a1 = [];

for (let i = 0; i < arr3.length; i++) 
{   
    a1.push(arr3.pop());  
}

console.log(a1);   
