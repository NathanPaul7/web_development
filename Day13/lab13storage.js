// SURVEY FORM

// COLLECT COMPONENTS
const myform = document.querySelector(".myform")
const displayresult = document.querySelector(".displayresult")

//when form is submitted
myform.addEventListener("submit", function(event){
    //collect values after submitting the form
    const username = document.querySelector("#firstname").value
    const fav_language = document.querySelector("input[name='fav_language']:checked").value
    // to test if the data was collected we can set preventDefault
    // event.preventDefault()
    // displayresult.innerHTML = ` Username: ${username}<br>Favorite Web fav_language: ${fav_language}`


    //SAVE THE DATA, USERNAME , FAV LANGUAGE
    sessionStorage.setItem('firstname', username)
    sessionStorage.setItem('selection_language', fav_language)
    sessionStorage.setItem('product123', "Product Name")
})


// // DISPLAY FORM FOR "DISPLAY.HTML"

// // collect the elements
// const collectedname = document.querySelector(".collectedname")
// const collectedlanguage = document.querySelector(".collectedlanguage")

// // set the values stored in sessionStorage to each collected elements
// collectedlanguage.innerHTML = sessionStorage.getItem('selection_language')
// collectedname.innerHTML = sessionStorage.getItem('firstname')


// SHOPPING CART
//  collect the elements
const formitem1 = document.querySelector(".formitem1")
const itemname = document.querySelector(".itemname")
const itemdescription = document.querySelector(".itemdescription").textContent
// const imgitem1 = document.querySelector(".imgimtem1")
const saleprice = document.querySelector(".saleprice").textContent
const imgitem1 = document.querySelector(".imgitem1").getAttribute('src')

formitem1.addEventListener("submit", function(){
    // collect the quantity from item1
    // const quantityitem1 = document.querySelector('.quantityinput').value
    // set data into storageSession
    const x = document.querySelector('.quantityinput').value
    // sessionStorage.setItem('quantityitem1', quantityitem1)


    // SET DATA INTO SESSIONSTORAGE
    // sessionStorage.setItem('quantityitem1',quantityitem1)
    // sessionStorage.setItem('itemname1',itemname)
    // sessionStorage.setItem('itemdescription1',itemdescription)
    // sessionStorage.setItem('imgitem1',imgitem1)
    // sessionStorage.setItem('saleprice1',saleprice.textContent)

    sessionStorage.setItem('quantityitem1',x)
    sessionStorage.setItem('name_item', itemname)
    sessionStorage.setItem('description_item1', itemdescription)
    sessionStorage.setItem('sale_price', saleprice)
    sessionStorage.setItem('item_image', imgitem1)


})