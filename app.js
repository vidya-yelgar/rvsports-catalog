const search = document.getElementById("search");

search.addEventListener("keyup", function(){

let value = this.value.toLowerCase();

let card = document.querySelector(".card");

let title = card.querySelector("h2").innerText.toLowerCase();

if(title.includes(value))
{
card.style.display="block";
}
else
{
card.style.display="none";
}

});
