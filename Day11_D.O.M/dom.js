console.log("Students name")
// select div id = special
let divison = document.querySelector('#special')

// change CSS style, color, to the collected divison
divison.style.color = "olive"

// SELECT SPAN CLASS "S3"
// . is for Class # is for ID
let s3 = document.querySelector(".s3")
//change CSS style,color and font-size, to the collected span
s3.style.color = "magenta"
s3.style.fontSize = "30px"

//SELECT SPAN CLASS "S4"
let s4 = document.querySelector(".s4")
s4.style.backgroundColor = "lightgray"
s4.style.padding = "12px"

//change text content
s3.textContent = "50%"
s4.innerHTML = "OFF by <b><em>midnight</em></b>"

// className method
let spans = document.querySelectorAll("#special span")
spans[1].className = "changefontfamily"
// assiging the class name to one element in the list "spans"

//setAttribute method
// find the first H1 element and we are going to set the class attribute TITLE to it 
let title = document.querySelector("h1")
title.setAttribute("class", "styletitle")

//REMOVE A CLASS NAME FROM AN ELEMENT
//REMOVE THE CLASS "INFO" FROM <DIV CLASS="INFO">
let divinfo = document.querySelector(".moreinfo")
divinfo.classList.remove("info")

//APPEND A TEXT AFTER <DIV ID="SPECIAL">
let divspecial= document.querySelector("#special")
divspecial.append("NEW INFORMATION")

// APPENDCHILD TO ADD A NEWW <LI> TO <UL CLASS="TODO">
// STEP 1: CREATE <LI> ELEMENT
let newitem = document.createElement("li")
// STEP 2: GIVE CONTENT TO THE NEW <LI>
let newlist = document.createTextNode("Post student's work")
// JOIN THE NEWLIST INTO NEWITEM.
 newitem.appendChild(newlist)
 // STEP 3: APPEND AS CHILD THE NEWITEM INTO THE DOCUMENT
 // APPEND TO <UL CLASS="TODO">
 let todolist = document.querySelector(".todo")
 todolist.appendChild(newitem)

 // REMOVE AN ELEMENT USING REMOVECHILD METHOD
 todolist.removeChild(todolist.children[1])

 //REMOVE AN  ELEMENT USING REMOVE METHOD
 //SELECT THE ELEMENT THAT YOU WANT TO REMOVE AND USE THE METHOD REMOVE 
 todolist.children[0].remove()