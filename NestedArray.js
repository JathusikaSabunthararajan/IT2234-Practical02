//Nested Array 

let nestedArray = [[1,2,30], [5,6], [8,5,3]]

nestedArray.forEach((n)=>
{
	console.log(n)
})

nestedArray.forEach((n)=>
{
	n.forEach((i)=>
	{
		console.log(i)
	})
	
})