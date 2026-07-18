fetch("products.json")
.then(response => response.json())
.then(products => {

const container =
document.getElementById("products");

products.forEach(product=>{

container.innerHTML += `

<div class="card">

<img src="${product.image}">

<h2>${product.name}</h2>

<p>₹${product.price}</p>

<a href="product.html?id=${product.id}">

<button>

View Details

</button>

</a>

</div>

`;

});

});
