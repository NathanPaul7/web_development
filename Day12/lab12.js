//MONDAY JUN 17: EVENTS IN JAVASCRIPT
// NATHAN PAUL


// ONCLICK EVENT
// STEP 1: FIND AND SAVE THE ELEMENT THAT WE WANT TO APPLY AN EVENT TO
let btn1 = document.querySelector(".btn1")
// STEP 2: BOUND THE CLICK EVENT TO BTN1
btn1.onclick = function() {
    alert("hey there!")
}

// ON MOUSE OVER 
document.querySelector(".linkqcc").onmouseover = ()=>{
    alert("QCC LINK WAS TOUCHED")
}
// THIS WAS CHANGED TO .ONMOUSEOUT DURING THE SESSION

// CHANGE COLOR DIV
// STEP 1: COLLECT AND SAVE THE ELEMENTS
let colorcontainer = document.querySelector(".colorcontainer")
let btncolor = document.querySelector(".btncolor")

btncolor.addEventListener("click", function(){
    colorcontainer.style.backgroundColor = randomColor()
})

let randomColor = function() {
    let redvalue = Math.floor(Math.random()*255)
    let greenvalue = Math.floor(Math.random()*255)
    let bluevalue = Math.floor(Math.random()*255)
    return `rgb(${redvalue},${greenvalue},${bluevalue})`
}

// COLLECT THE 3 BUTTONS

// ADD CLICK EVENT TO EACH BUTTON TO THE BACKGROUND COLOR SELECTED

// RESET THE BACKGROUND COLOR TO WHITE
// olive color
let btnolive = document.querySelector(".btnolive")

btnolive.addEventListener("click", function(){
    colorcontainer.style.backgroundColor = "rgb(186,184,108)"
})
// orange color
let btnorange = document.querySelector(".btnorange")

btnorange.addEventListener("click", function(){
    colorcontainer.style.backgroundColor = "rgb(255,165,0)"
})
// reset
let btnreset = document.querySelector(".btnreset")

btnreset.addEventListener("click", function(){
    colorcontainer.style.backgroundColor = "rgb(255,255,255"
})

// TUESDAY JUNE 18TH
// EVENT OBJECTS 

// COLLECT THE BUTTON
let btnpressme = document.querySelector(".btnpressme")
btnpressme.addEventListener("click", function(e){
    //switch text content 'btnpresme' button from "Press Me!!" to "Button was pressed"
    if(e.target.textContent === "PRESS ME!!") {
        e.target.textContent = "Button activated Pressed"
    }
    else {
        e.target.textContent = "Button Press wasnt Registered!!!!!"
    }
    // TOGGLE BETWEEN CLASS 'BUTNPRESSME' AND 'BTNACTIVE'
    e.target.classList.toggle("btnactive")
})

// REMOVE AN ITEM FORM A LIST 
let listfruits = document.querySelector("#listfruits")
listfruits.addEventListener("click", function(event){
    if(event.target.tagName.toLowerCase() ==="li"){
        event.target.remove()
    }
})

// PREVENT DEFAULT OF AN EVENT
let visitqcc = document.querySelector(".visitqcc")
visitqcc.addEventListener("click", function(event){
    event.preventDefault()
    alert("QCC WEBSITE IS OFF!! TRY LATER")
})

// SCROLL EVENTS
let content = document.querySelector("#content")
let btnscrollright = document.querySelector(".btnscrollright")
btnscrollright.addEventListener("click", function(){
    window.scrollBy(100,0)
})

// SLICE PHOTO GALLERY
let btnleft = document.querySelector(".btnleft")
let btnright = document.querySelector(".btnright")
let gallerycontainer = document.querySelector(".gallerycontainer")

btnleft.addEventListener("click", function(){
    gallerycontainer.scrollBy({
        left: -500,
        behavior: "smooth"
    })
})

btnright.addEventListener("click", function(){
    gallerycontainer.scrollBy({
        left: 500,
        behavior: "smooth"
    })
})

// GO TO TOP
const gotop = document.querySelector(".gotop")
window.addEventListener("scroll", function(){
  let pxtop = window.scrollY;
  if(pxtop>=300){
      gotop.style.display ="block"
  }
  else{
      gotop.style.display ="none"
  }
})


// THURSDAY JUNE 20TH JS 

// FORM EVENTS --->>>>
        // 1. INPUT EVENT

             // get reference to the form elements
             const myform = document.querySelector("#myform")
             const greeting = document.querySelector(".greeting")
             const greetingName = document.querySelector(".greeting p span")

            myform.addEventListener("submit", function(event){
                //prevent the default form submission behavior
                event.preventDefault()

                // start form valdation, username
                const usernameinput = document.querySelector("#username")
                //collects whatever the users types( text value)
                const username = usernameinput.value
                //validation 1: make sure the user types a username before pressing submit form
                if (username.trim() ===""){
                    alert("Please enter a username")
                    return; // stop further execution if nothing happens
                }

                // if the validation passed, you can submit the data to the server
                //greeting message after the validation
                greetingName.innerHTML = username.topUpperCase()
                greeting.style.display = "block"

                //after the form is submitted, we can clear the username
                usernameinput.value = ""
            })


            // PASSWORD VALIDATION
                //collect the elements
            const passwordfield = document.querySelector("#passwordfield")
            const submitbtn = document.querySelector(".submitbtn")
           
            //collect the password error message element
            const passworderror = document.querySelector(".passworderror")
           
            //disable the button until the required info is inputted in the Password form
            window.addEventListener("load", function(){
                submitbtn.disabled = true
                submitbtn.style.backgroundColor = "lightgray"

            // CHECK the length of the password
            passwordfield.addEventListener("input", function(){
                let numbercharacter = passwordfield.value.length
                if(numbercharacter<8){
                    passworderror.textContent = "Password must be 8+ characters"
                    passworderror.style.color = "red"
                    passwordfield.style.border = "solid 2px red"
                }
                else{
                    passworderror.innerHTML = "&#x2713"
                    passworderror.style.color = "green"
                    passwordfield.style.border = "solid 2px green"
                }

            })


            })
