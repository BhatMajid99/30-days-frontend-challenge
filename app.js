let addBtn = document.querySelector("#add");
let totalBtn = document.querySelector("#total"); 
let clearBtn = document.querySelector("#clear");
let body = document.querySelector("body");
let p1 = document.createElement("p");
body.appendChild(p1);
let itemNameInput = document.createElement("input");
body.appendChild(itemNameInput);
let itemPriceInput = document.createElement("input");
body.appendChild(itemPriceInput);
let itemQuantityInput = document.createElement("input");
body.appendChild(itemQuantityInput);
let addItem = document.createElement("button");
body.appendChild(addItem)
let cart = [];
totalBtn.addEventListener("click", () =>{
    let totalAmount = 0;
    for(let item of cart){
        totalAmount += item.price * item.quantity;
    }
    p1.innerText = `Total Amount = ${totalAmount}`;

});

addBtn.addEventListener("click",() => {
    console.log("Add btn was clicked");
    addItem.innerText = "Add Item";
    itemNameInput.placeholder = "Enter item Name";
    itemPriceInput.placeholder = "Enter item Price";
    itemQuantityInput.placeholder = "Enter item Quantity";
});
addItem.addEventListener("click", () => {
    let itemName = itemNameInput.value;
    let itemPrice = itemPriceInput.value;
    let itemQuantity = itemQuantityInput.value;
    additems(itemName, itemPrice, itemQuantity);

});

const additems = (itemName, itemPrice, itemQuantity) =>{
    if(itemName != "" && itemPrice !="" && itemQuantity !="" ){
        cart.push({
            name: itemName,
            price: Number(itemPrice),
            quantity: Number(itemQuantity)
        });
        p1.innerText = "Item added sucessfully!";
    } else{
        p1.innerText = "Fill all colums!";
    }
    itemNameInput.value = "";
    itemPriceInput.value = "";
    itemQuantityInput.value = "";

   console.log(cart);
}

clearBtn.addEventListener("click",() => {
    console.log("Clear btn was clicked");
    cart = [];
    itemNameInput.value = "";
    itemPriceInput.value = "";
    itemQuantityInput.value = "";
    p1.innerText = "List cleared, ThankYou!";
});