
const products = [
    {
        id: 0,
        image: 'product4.jpeg',
        title: 'Apple',
        price: 50.00,
    },
    {
        id: 1,
        image: 'product5.jpeg',
        title: 'Watermelon',
        price: 60.00,
    },
    {
        id: 2,
        image: 'product3.jpeg',
        title: 'Tomato',
        price: 30.00,
    },
    {
        id: 3,
        image: 'product6.jpeg',
        title: 'Onion',
        price: 80.00,
    },
    {
        id: 4,
        image: 'product7.jpeg',
        title: 'Cherry',
        price: 100.00,
    },
    {
        id: 5,
        image: 'product8.jpeg',
        title: 'Potato',
        price: 40.00,
    },
    {
        id: 6,
        image: 'product9.jpeg',
        title: 'Banana',
        price: 60.00,
    },
    {
        id: 7,
        image: 'product10.jpeg',
        title: 'Guava',
        price: 80.00,
    },
    {
        id: 8,
        image: 'product11.jpeg',
        title: 'Lemon',
        price: 70.00,
    },
    {
        id: 9,
        image: 'product12.jpeg',
        title: 'Drumstick',
        price: 50.00,
    },
    {
        id: 10,
        image: 'product13.jpeg',
        title: 'Strawberry',
        price: 150.00,
    },
    {
        id: 11,
        image: 'product14.jpeg',
        title: 'Beetroot',
        price: 70.00,
    },
    {
        id: 12,
        image: 'product15.jpeg',
        title: 'Capsicum',
        price: 80.00,
    },
    {
        id: 13,
        image: 'product16.jpeg',
        title: 'Carrot',
        price: 60.00,
    },
    {
        id: 14,
        image: 'product17.jpeg',
        title: 'Mango',
        price: 90.00,
    },
    {
        id: 15,
        image: 'product18.jpeg',
        title: 'Orange',
        price: 110.00,
    },
    {
        id: 16,
        image: 'product19.jpeg',
        title: 'Corn',
        price: 30.00,
    },
    {
        id: 17,
        image: 'product20.jpeg',
        title: 'Cabbage',
        price: 40.00,
    },
    {
        id: 18,
        image: 'product21.jpeg',
        title: 'Coconut',
        price: 20.00,
    },
    {
        id: 19,
        image: 'product22.jpeg',
        title: 'Papaya',
        price: 70.00,
    },
    
];

const categories = [...new Set(products.map((item) => item.title))];

let i = 0;

document.getElementById('root').innerHTML = products.map((item, index) => {
    const { image, title, price } = item;
    return (
        `<section class="product"  style="margin: 5px; border-radius: 5px; box-shadow: 3px;">
            <img class="pimg" src="${image}" alt="${title}">
            <h2>${title}</h2>
            <p>Price: $${price.toFixed(2)}</p>
            <button class="add-to-cart-button" onclick="addtocart(${index})">Add to Bill</button>
        </section>`
    );
}).join('');

const cart = [];

function addtocart(index) {
    const selectedItem = products[index];
    cart.push({ ...selectedItem });
    displaycart();
}

function delElement(index) {
    cart.splice(index, 1);
    displaycart();
}

function displaycart() {
    let total = 0;
    const cartItem = document.getElementById("cartItem");
    const totalElement = document.getElementById("total");
    const countElement = document.getElementById("count");

    countElement.innerHTML = cart.length;
    if (cart.length === 0) {
        cartItem.innerHTML = "Your cart is empty";
        totalElement.innerHTML = "$0.00";
    } else {
        cartItem.innerHTML = cart.map((item, index) => {
            const { image, title, price } = item;
            total += price;
            totalElement.innerHTML = "$" + total.toFixed(2);
            return (
                `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src="${image}">
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size: 15px;'>$${price.toFixed(2)}</h2>
                    <i class='fa-solid fa-trash' onclick='delElement(${index})'></i>
                </div>`
            );
        }).join('');
    }
}
