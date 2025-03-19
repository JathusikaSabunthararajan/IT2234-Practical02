let num = [1,2,3,4,5]
let name = [ "Mark", "John", "Antony" ]
let numdec = [1.23, 2.45, 5.48, 6.78]

for(let i=0; i<num.length; i++)
{
	console.log(num[i]);
}

console.log(num);

for(let i=0; i<name.length; i++)
{
	console.log(name[i]);
}

console.log(name);

for(let i=0; i<numdec.length; i++)
{
	console.log(numdec[i]);
}

console.log(numdec);

//foreach loop

num.forEach((n)=>
{
	console.log(n)
})