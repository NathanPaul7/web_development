console.log("Student's name")
console.log( " ======= Example 1: IF staments ======")
let day = true

if (day) {
    console.log("Good morning")
}

console.log("====== Example 2: IF-ELSE staments ======")
 let n1 = 5,  n2 = 8

 if (n1===n2)
 // if n1 is exactly equal to n2 thats whAT "===" means
 console.log("They are equal")
 else{
     console.log("They are different")
 }


console.log("====== Example 3: Multiway Condition Statement ======")
// check if a number is positive,negative, or zero

let number = "5"
if(number>0){
    console.log(`Number ${number} is positive`)
}
else if(number<0){
    console.log(`Number ${number} is positive`)
}
else if(number===0){
    console.log("The number is zero")
}
else{
    console.log(`${number} is undefined!`)
}


console.log("====== Example 4: Multiway COndition Statemnetsin prompt function ======")
// checking to see if a user enters a number, didnt enter data, or pressed cancel button
let n = prompt("ENter a number: ")

if(n===null){
    console.log("cancel button was pressed")
}
else if(n===""){
    console.log("okay button was pressed")
}
else if(isNaN(n)){ 
    console.log(`${n} is a string`)
}
else{
    console.log(`${n} is a number`)
}


console.log("====== Example 5: NESTED CONDITIONAL staments ======")
// check if a password has at least 6 characters and no space
let password = prompt("Enter a password")

//to find the number of character in a string, we use the mothod ".length"
if (password.length>=6){
    console.log(`Password ${password} has ${password.length} characters`)
    if(password.indexOf(" ")=== -1){
        console.log(`Password ${password} DOESN'T HAVE SPACE`)
    }
    else{
        console.log(`Password ${password} HAS SPACE`)
    }
}
    else{
        console.log(`Password ${password} HAS LESS THAN 6 CHARACTERS`)
    }


     

    console.log("====== Exercise 6: LIST ======")
    //all list have an index number that starts with O from the left of the list
    let colors = ["red", "olive", "orange", "blue", "pink"]
    console.log(`The third color is ${colors[2]}`)

    let selectcolor = prompt("Example 6: select a color using an index number")

    switch(selectcolor){
            case '0':
            console.log(`Selected color = ${colors[0]}`)
            break
            case '1':
                console.log(`Selected color = ${colors[1]}`)
                break
                case '2':
            console.log(`Selected color = ${colors[2]}`)
            break
            case '3':
            console.log(`Selected color = ${colors[3]}`)
            case '4':
            console.log(`Selected color = ${colors[4]}`)
            break
        default:
        console.log("Color is not in the list")
    }

    console.log( "========== Example 7: STRING ========== ")

    let greeting ="Good evening"
    console.log(`The Sixth character ${greeting[6]}`)
    // to retrive a specific character in a string  