var fruits = new Array( "apple", "orange", "mango" );

let obj = [
{
name:"Billy",
age:19,
country:"india",
hobbies:["Football","Basketball","Chess"] 
},
{
name:"Butcher",
age:25,
country:"usa",
hobbies:["Hacking","Programming","Debugging"] 
},
{
name:"Mark",
age:41,
country:"canada",
hobbies:["Book Reading","Playing games"] 
},
{
name:"Robert",
age:50,
country:"England",
hobbies:["No hobbies"] 
},
{
name:"Joseph",
age:29,
country:"india",
hobbies:["Swimming","Baseball"] 
},
{
name:"Deepika",
age:23,
country:"india",
hobbies:["Modeling","Photoshoot","CatWalk"] 
},
{
name:"Loseph",
age:21,
country:"italy",
hobbies:["Cooking","Baking"] 
},
]


function printall(){
console.log(obj)
}

function lessthan(){
console.log("people less than age 30")
  obj.forEach(function (obj)
  {
	if(obj.age<=30){
		console.log(obj)
	}
  });
}

function india(){

console.log("people from india")
  obj.forEach(function (obj)
  {
	if(obj.country == "india"){
		console.log(obj)
	}
  });
}

function spaced(){
	console.log("")
}

printall();
spaced();
lessthan();
spaced();
india();
