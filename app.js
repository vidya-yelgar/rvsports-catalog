const search=document.getElementById("search");

search.addEventListener("keyup",()=>{

let text=search.value.toLowerCase();

document.querySelectorAll(".card")

.forEach(card=>{

let name=card

.querySelector("h2")

.innerText

.toLowerCase();

card.style.display=

name.includes(text)

?

"block"

:

"none";

});

});
