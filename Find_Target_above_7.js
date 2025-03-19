//arr=[1,2,3,4,5,6]
//target = 7
//find all pairs that sum up to the target

let arr = [1,2,3,4,5,6]

let sum = 0;

for(let i=0; i<arr.length; i++)
{
	for(let j=1; j<arr.length; j++)
	{
		sum = arr[i]+arr[j]
		if(sum>7)
	{
		console.log("Pairs: "+ arr[i] +"," +arr[j]);
	}
	}
	
}