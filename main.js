const data = [
    {
        id: 1,
        name: "Invicta Men's PRo Diver",
        img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
        price: 74,
        category: "Dress",
    },
    {
        id: 2,
        name: "Invicta Men's Pro Diver 2",
        img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
        price: 74,
        category: "Dress",
    },
    {
        id: 3,
        name: "Breitling Superocean Heritage",
        img: "https://m.media-amazon.com/images/I/61hGDiWBU8L._AC_UY879_.jpg",
        price: 200,
        category: "Luxury",
    },
    {
        id: 4,
        name: "Casio Classic Resin Strap",
        img: "https://m.media-amazon.com/images/I/51Nk5SEBARL._AC_UY879_.jpg",
        price: 16,
        category: "Sport",
    },
    {
        id: 5,
        name: "Garmin Venu Smartwatch",
        img: "https://m.media-amazon.com/images/I/51kyjYuOZhL._AC_SL1000_.jpg",
        price: 74,
        category: "Casual",
    },
    {
        id: 6,
        name: "Timex Men's Expedition Scout",
        img: "https://m.media-amazon.com/images/I/91WvnZ1g40L._AC_UY879_.jpg",
        price: 40,
        category: "Sport",
    },
]

const productsContainer = document.querySelector('.products');
const searchInput = document.querySelector('.search');
const categoriesContainer = document.querySelector('.categories');
const priceRange = document.querySelector('.priceRange');
const priveValue = document.querySelector('.priceValue');


function listProducts(filteredProducts) {
    productsContainer.innerHTML = filteredProducts.map((product) => `
        <div class="product">
        <img src="${product.img}" alt="watch"/>
        <span class="name">${product.name}</span>
        <span class="priceText">${product.price}</span>
        </div>
   `).join("");
}

function searchProducts(event) {
    const value = event.target.value.toLowerCase();

    if (value) {
        listProducts(data.filter((item) => item.name.toLowerCase().indexOf(value) !== -1));
    } else {
        listProducts(data);
    }
}

// function categoriesList(categories) {
//     data.filter((item) => item.category.indexOf(categories) !== 1);
//     categoriesContainer.innerHTML = categories.map((item) => `
//         <span class="category">${item.category}</span>
//     `).join("");
// }

function setCategories() {
    const allCats = data.map((item) => item.category);
    const categories = [
        "All",
        ...allCats.filter((item, i) => {
            return allCats.indexOf(item) === i;
        })
    ]

    categoriesContainer.innerHTML = categories.map((cat) => `
        <span class="category">${cat}</span>
    `).join("");

    categoriesContainer.addEventListener('click', function (event) {
        const selectedCat = event.target.textContent;

        selectedCat === "All" ? listProducts(data) : listProducts(data.filter((item) => item.category === selectedCat));
    })
}
setCategories();
// categoriesList(data);
listProducts(data);
searchInput.addEventListener('input', searchProducts);
