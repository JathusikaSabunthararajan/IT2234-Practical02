//[4,8,3,4,3,2,1,8,4]
//find the most frequent element in the Array

 
let freArray = [4, 8, 3, 4, 3, 2, 1, 8, 4]

let count = {}
let maxCount = 0
let mostFrequentElement

for (let i = 0; i < freArray.length; i++) 
{
    let currentElement = freArray[i];
    
    count[currentElement] = (count[currentElement] || 0) + 1
    
   
    if (count[currentElement] > maxCount) 
	{
        maxCount = count[currentElement];
        mostFrequentElement = currentElement;
    }
}

console.log("Most frequent element:", mostFrequentElement);


 