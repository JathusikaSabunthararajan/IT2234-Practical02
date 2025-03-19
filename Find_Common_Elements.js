/*
a=[4,5,6,3,7]
b=[8,3,2,1,5]

find the common elements between a and b
*/

let a = [4,5,6,3,7]
let b = [8,3,2,1,5]

console.log("Common elements: ")
for(let i=0; i<5; i++)
{
	for(let j=0; j<5; j++)
	{
		if(a[i]==b[j])
		{
			console.log(a[i])
		}
	}
}
