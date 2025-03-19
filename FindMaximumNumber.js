//find maximum no using forEach loop

let num = [1,2,3,4,5]
let max = num[0];

num.forEach((x)=>
{
	if(x>max)
	{
		max = x;
	}
}
)
console.log("Maximum No is: "+max);