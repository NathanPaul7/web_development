console.log("Full name")
console.log("======Example 1: for a loop as counter======")
let i = 1;
for(i; i < 5; i++){
    console.log(`iteration = ${i}`)
}

console.log("======Example 2: for a loop as a decrement======")
// create a loop counter from 10 
for( let n = 10; n>=0; n--){
    console.log(`iteration = ${n}`);
}

console.log("======Example 3: condition inside the loop ======")
// check how many even numbers are in between -5 and 5 
let counter = 0;
for(let m= -5; m <= 5; m++) {
console.log(`iteration = ${m}`);

    if(m % 2 === 0 && m !==0) {
        counter++
    }
}
    console.log(`There is/are ${counter} even numbers`)


    console.log("======Example 4: while loop as a counter ======")
    // display numbers from 0 to 4
    let p = 0
    while(p<=4){
        console.log(`iteration = ${p}`)
        p++
    }

    console.log("========Example 5: while loop application ====== ")
    // guess number game
//     const SECRET = 8;

//     let guessnumber = parseInt(prompt("Guess a number between 1 and 10"), 10);
//     while (guessnumber !== SECRET) {
//     guessnumber = parseInt(prompt("Guess another number between 1 and 10"), 10);
// }

// console.log(`Great! you guessed it! This number is ${SECRET}`);



console.log("========Example 6: while loop application in a list ====== ")
let colors = ["magenta","olive","babyblue"]
let sizeofcolors = colors.length //returns 3 in the array
// console.log(sizeofcolors) 
let index = 0 
while(index<sizeofcolors){
    console.log(colors[index])
    index++ // update the index so no ifinite loop is created
}

console.log("========Example 7: while loop stimulate a password login ====== ")
// terminate the loop if password fails in 3 attempts
const password = "peterpan"
let userpassword = prompt("ENter the password")
let numberattempt = 0  
while(userpassword !== password){
    numberattempt++
    if(numberattempt>2){
        console.log("Your account is locked")
        break;
    }
    userpassword = prompt(`Attempt = ${3-numberattempt}. Enter password again`)
}
console.log("Have a good day!")

console.log("========Example 8: do-while loop stimulate a withdraw from a bank account ====== ")
// user try to withdraw money from an account with balance of $1000.
let withdraw = 0
let balance = 1000
do{
    withdraw = parseInt(prompt("How much do you want to withdraw?"))
    if(withdraw<=balance){
        balance = balance - withdraw
        break
    }
    else{
        console.log("Insufficent amount, try again!")
    }
}while(withdraw>balance)
console.log(`Your new balance is ${balance}`)

console.log("======== Exercise: STIMULATE A BANK TRANSACTION ====== ")
//  stimulate the collection of a pin number of 4 digits
// ask the user to pick a transaction: view the balance, deposit, withdraw
// ask user if they want another transaction
//print results
const correctPin = "8282"
let pin = prompt("Please eneter your pin:")
numberattempt = 0;
while (pin !==correctPin){
    pin = prompt("Try Again")
    numberattempt++
    if (numberattempt>2)
    console.log("One more try before card is blocked")
    {break}
}