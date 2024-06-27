
// COLLECT THE ELEMENTS
 const priceitem_display = document.querySelector('.priceitem_display')
 const quantity_display = document.querySelector('.quantity_display')
 const totalprice_display = document.querySelector('.totalprice_display')
 const itemimg_display = document.querySelector('.itemimg')
 const itemdescription_display = document.querySelector('.itemdescription')


 // GET THE VALUES FOR QUANTITY AND PRICE PER UNIT
 
 const priceitem = sessionStorage.getItem('sale_price')
 const quantityitem = sessionStorage.getItem('quantityitem1')
 const itemimage = sessionStorage.getItem('item_image')
 const description_item = sessionStorage.getItem('description_item1')

 // CALCULATE FOR THE TOTAL PRICE
const totalprice = (priceitem*quantityitem).toFixed(2)

// print the price, quantity, and total price in the collected elements
priceitem_display.innerHTML = `${priceitem}`
quantity_display.innerHTML = `${quantityitem}`
totalprice_display.innerHTML = `${totalprice}`


// APPEND IMAGE
let image = document.createElement('img')
image.src = sessionStorage.getItem('item_image')
image.style.width = "30px"

itemimg_display.append(image)

// APPEND PRODUCT DESCRIPTION
let product = document.createElement('p')
product.innerHTML = description_item
itemdescription_display.append(product)

// APPEND PRICE
let productprice = document.createElement('p')
productprice.innerHTML = `$ ${priceitem}`
priceitem_display.append(productprice)

// APPEND QUANTITY
let totalquantity = document.createElement('p')
totalquantity.innerHTML = quantityitem
quantity_display.append(totalquantity)


// APPEND TOTAL PRICE
 let t = document.createElement('p')
 t.innerHTML = `$ ${totalprice}`
 totalprice_display.append(t)