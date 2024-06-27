// students full name
// jun 15 function and object

console.log("Nathan Paul")
// function to print something

function msg() {
    console.log("Hello World")
}

// FUNCTION TO PRINT NUMBERS FROM 1 TO 3, INCLUSIVE
function printcount() {
    for (let x = 1; x<=3; x++) {
        console.log(x)
    }
}

// function that passes a name as argument
function greeting(name) {
    console.log(`Welcome to Javascript ${name}`)
}

// FUNCTION THAT PASSES MULTIPLE ARGUMENTS
 function fullname(firstname, lastname) {
     console.log(`Welcome to to JS ${firstname} ${lastname[0]}`)
     //prints first name and first character of last name
 }

 let firstname = "Martha"
 let lastname = "Smith"

 fullname(firstname, lastname)


 //FUNCTION WITHOUT PARAMETERS BUT RETURN VALUE
 function sumxy()
     {
         let x = 10
         let y = -2
         return x+y
         // any lines after the first return will not be executed
         x = x+2
         y = y+5
     }

     // FUNCTION WITH PARAMETERS AND RETURNS A VALUE
     function sum(x,y) {
         return x+y
     }

     // CALLING SUM()
     let s = sum(5,10)
     console.log(`The sum is ${s}`)

     //FUNCTION CHECK IF A NUMBER IS POSITIVE
     function checkpositive(number){
         if (number>0){
             return true;
         }
         else{
             return false;
         }
     }

     //CALLING THE FUNCTION
     let n = 2
     let check = checkpositive(n)
     console.log(`is the number ${n} positive? ${checkpositive(n)}`)

     //SAVE FUNCTION IN A VARIABLE ANNONYMOUS FUNCTION
     const addition = function(num1, num2){
         return num1+num2
     }

     //REGULAT VARIABLE FUNCTION
     //const product = function(num1,num2){return num11 * num2}
     // ARROW FUNCTION
     const product = (num1,num2) => {return num1 * num2}

     // ANNONYMOUS FUNCTION
     (
         function() {
             console.log("this is an anonymous function")
         }
     )();

     (
         ()=>{console.log("This is anonymous function using arrow")}
     )();


     //OBJECT: 
     // REAL WORLD OBJECTS ARE ALL AROUND US, AND THEY CAN HAVE 
     // ATTRIBUTES AND BEHAVIORS THAT CAN DESCRIBE E.G.
     // ATTRIBUTES DESCRIBE THE FEATURE THAT AN OBJECT HAS
     //BEHAVIORS DESCRIBE ACTIONS THAT AN OBJECT CAN PERFORM

     //CAR IS THE OBJECT
     let car ={
         //attributes
         make:"Jeep",
         year:2021,
         model:"Wrangler",

         //behaviors of the car (methods)
         accelerate: function(){return this.model},
         brake: function() {return this.make},
         distanttravel: function() {return this.endmileage - this.startmileage}
     }

     //add a method 'start' to the car object
     car.start = function() {
         return `${this.make} ${this.model} is running`
     }

     // add a property 'price'
     car.price = 32000