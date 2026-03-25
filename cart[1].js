
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount(){
let count = cart.length;
let el = document.getElementById("cart-count");
if(el){ el.textContent = count; }
}

function addToCart(name,price){
cart.push({name,price});
localStorage.setItem("cart",JSON.stringify(cart));
updateCartCount();
alert(name + " added to cart");
}

function displayCart(){
let container = document.getElementById("cart-items");
if(!container) return;

container.innerHTML = "";
let total = 0;

cart.forEach(item=>{
let div = document.createElement("div");
div.textContent = item.name + " - $" + item.price;
container.appendChild(div);
total += item.price;
});

let totalEl = document.getElementById("total");
if(totalEl) totalEl.textContent = "Total: $" + total;
}

function checkout(){
alert("Checkout system will connect to Stripe / PayPal / Google Pay in the live version.");
}

updateCartCount();
displayCart();
