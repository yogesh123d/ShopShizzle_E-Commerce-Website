const CartItems=document.querySelector(".cart-items");
function displaycartItems(){
    const Items=JSON.parse(localStorage.getItem("cart"));
    Items.forEach(item => {
        const cartItem=document.createElement("div")
        cartItem.className="cart_item";
        cartItem.innerHTML=`
           <p class="cart_item_id">${item.id}</p>  
              <p class="cart_item_title">${item.title}</p>
                <img src="${item.image}" alt="${item.title}" class="cart_img">
                <p class="cart_item_price">${item.price}</p>
                <p class="cart_item_delete">Remove(-)</p>     
        `;  
        CartItems.appendChild(cartItem);
    });

}
displaycartItems();