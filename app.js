function changeImage(color){

document.getElementById("shirtImage").src =
"images/"+color+".png";

}

function orderWhatsapp(){

let size=document.getElementById("size").value;

let qty=document.getElementById("qty").value;

let colour=document
.getElementById("shirtImage")
.src
.split("/")
.pop()
.replace(".png","");

let message=

`Hello RV SPORTS,

I want to order.

Design : Ganesh Polo

Colour : ${colour}

Size : ${size}

Quantity : ${qty}

Please send quotation.`;

window.open(

"https://wa.me/919619005667?text="

+encodeURIComponent(message)

);

}
