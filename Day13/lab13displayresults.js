// DISPLAY FORM FOR "DISPLAY.HTML"

// collect the elements
const collectedname = document.querySelector(".collectedname")
const collectedlanguage = document.querySelector(".collectedlanguage")

// set the values stored in sessionStorage to each collected elements
collectedlanguage.innerHTML = sessionStorage.getItem('selection_language')
collectedname.innerHTML = sessionStorage.getItem('firstname')