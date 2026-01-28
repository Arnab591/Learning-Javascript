function greet()
{
    console.log("Hello What are you doing ?");
    
}

greet()
greet()
greet()
// what are functions --> functions are reusable block of code nothing else

// let us learn function with a parameter
// parameter is the varibale used by a function to recieve any data and argument means the actual value that we have passed
function greetbyName(name)
{
    console.log("hello" +" " + name);
    
}
greetbyName("Arnab")
greetbyName("Srija")
greetbyName("Timir biswas")

// function with a return statement 

function add (a , b)
{
    return (a+b);
    
}

let add_number = add(4,5)
console.log(add_number);


// now let us learn about the arrow functions 

let result  = (a,b) => a+b
console.log(result());

// create a arrow function to print someone name

let printname = name => console.log(name);
printname("Arnab")


// i just found a blueprint 

// let result (functions name ) = (parameter1,parameter2,parametern) => (what should you print , what can you return)


// how to set default value and multiple parameters in javascript



