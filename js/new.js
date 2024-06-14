// script.js
document.addEventListener("DOMContentLoaded", function() {
    const products = [
        { name: "닭가슴살 샌드위치", price: "₩10,000", image: "./images/new_1.jpg" },
        { name: "스팀 닭가슴살", price: "₩20,000", image: "./images/new_2.jpg" },
        { name: "슬라이스소스 닭가슴살", price: "₩30,000", image: "./images/new_3.jpg" },
        { name: "닭가슴살 한끼볼", price: "₩40,000", image: "./images/new_4.jpg" },
        { name: "닥터유PRO 단백질 파우더", price: "₩50,000", image: "./images/new_5.jpg" },
        { name: "닭가슴살 고구마 핫도그", price: "₩60,000", image: "./images/new_6.jpg" },
        { name: "포대유청 단백질보충제", price: "₩70,000", image: "./images/new_7.jpg" },
        { name: "프로틴 볼", price: "₩80,000", image: "./images/new_8.png" },
        { name: "한입 소스 닭가슴살 혼합", price: "₩90,000", image: "./images/new_9.jpg" },
        { name: "단백질클림빵", price: "₩100,000", image: "./images/new_10.jpg" },
    ];
  
    const productList = document.querySelector(".product-list");
  
    products.forEach((product, index) => {
        const productItem = document.createElement("div");
        productItem.className = "product-item";
  
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-details">
                <p class="product-name">${index + 1}. ${product.name}</p>
                <p class="product-price">${product.price}</p>
                <div class="star-rating">
                    <i class="far fa-star" data-rating="1"></i>
                    <i class="far fa-star" data-rating="2"></i>
                    <i class="far fa-star" data-rating="3"></i>
                    <i class="far fa-star" data-rating="4"></i>
                    <i class="far fa-star" data-rating="5"></i>
                </div>
            </div>
            <div class="product-actions">
                <button class="wishlist-btn"><i class="far fa-heart"></i></button>
                <button class="cart-btn" data-name="${product.name}" data-price="${product.price}"><i class="fas fa-shopping-cart"></i></button>
            </div>
        `;
  
        productList.appendChild(productItem);
    });
  
    // 하트 아이콘 클릭 이벤트 추가
    productList.addEventListener('click', function(e) {
        if (e.target.classList.contains('wishlist-btn') || e.target.closest('.wishlist-btn')) {
            const button = e.target.closest('.wishlist-btn');
            const icon = button.querySelector('i');
            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
            }
        }
  
        // 별점 아이콘 클릭 이벤트 추가
        if (e.target.classList.contains('fa-star')) {
            const rating = e.target.getAttribute('data-rating');
            const stars = e.target.parentNode.querySelectorAll('i');
            stars.forEach(star => {
                star.classList.remove('fas');
                star.classList.add('far');
            });
            for (let i = 0; i < rating; i++) {
                stars[i].classList.add('fas');
                stars[i].classList.remove('far');
            }
        }
  
        // 장바구니 버튼 클릭 이벤트 추가
        if (e.target.closest('.cart-btn')) {
            const button = e.target.closest('.cart-btn');
            const itemName = button.getAttribute('data-name');
            const itemPrice = button.getAttribute('data-price');
            const item = { name: itemName, price: itemPrice };
            window.location.href = `cart.html?name=${encodeURIComponent(item.name)}&price=${encodeURIComponent(item.price)}`;
        }
    });
  
    // 별점 아이콘 클릭 이벤트 추가
    const starRatings = document.querySelectorAll('.star-rating i');
    starRatings.forEach(star => {
        star.addEventListener('click', function(e) {
            const rating = e.target.getAttribute('data-rating');
            const stars = e.target.parentNode.querySelectorAll('i');
            let clicked = false;
            stars.forEach(star => {
                if (!clicked) {
                    star.classList.remove('far');
                    star.classList.add('fas');
                } else {
                    star.classList.remove('fas');
                    star.classList.add('far');
                }
                if (star === e.target) {
                    clicked = true;
                }
            });
        });
    });
  });
  