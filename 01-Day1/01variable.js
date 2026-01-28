// here we are going to learn the basic variables
// variables are containers or memory references  where you can store some value

// there are three keywords to declare any variables in javascript 
let Myname = "Arnab"
console.log(Myname);

var Password = "Arnab%123"
console.log(Password);

// now whats the problem in var thats why let come into the picture 
// 1 --> var can be redeclared
var ChannelName = "Not-compiled"
var ChannelName= "CHai-code"
// 2 --> var declare variable hoisted
console.log(MyRepository)
var MyRepository = "Javascript"

// Var is not blocked scope so that data can be leaked

if(true)
{
    var MyWatch = "Titan"
}
MyWatch = "Sonata"
console.log(MyWatch);



const Account_id = "Arnab@591"

// if we are going to object 

let Arnab = {
    hair : "Silky",
    Colour : "Brown",
    favorite_subject : "Programing"
}
console.log(Arnab.favorite_subject);

