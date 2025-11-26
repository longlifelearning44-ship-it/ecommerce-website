// Data produk
const products = [
    { id: 1, name: 'Men T-shirt', price: 15, imgSrc: 'https://source.unsplash.com/1600x900/?tshirt' },
    { id: 2, name: 'Women Jacket', price: 40, imgSrc: 'https://source.unsplash.com/1600x900/?jacket' },
];

// Render produk
function renderProducts() {
    const productGrid = document.getElementById('product-grid');
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <img src="${product.imgSrc}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productGrid.appendChild(productItem);
}

// Cart management
let cart = [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCartLink();
}

// Update cart
function updateCartLink() {
    const cartLink = document.getElementById('cart-link');
    cartLink.innerText = `Cart (${cart.length})`;
}

// Render produk awal
renderProducts();
