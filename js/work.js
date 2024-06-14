// script.js
document.addEventListener("DOMContentLoaded", function() {
    const products = [
        { name: "리프팅 허리보호대", price: "₩10,000", image: "./images/work_1.avif" },
        { name: "리프팅 스트랩", price: "₩20,000", image: "./images/work_2.avif" },
        { name: "팻 그립즈", price: "₩30,000", image: "./images/work_3.avif" },
        { name: "리프팅 역도화", price: "₩40,000", image: "./images/work_4.png" },
        { name: "알류미늄 그립 바", price: "₩50,000", image: "./images/work_5.png" },
        { name: "팔꿈치 보호대", price: "₩60,000", image: "./images/work_6.png" },
        { name: "리프팅 손목 보호대", price: "₩70,000", image: "./images/work_7.png" },
        { name: "히어로 면 손목보호대", price: "₩80,000", image: "./images/work_8.png" },
        { name: "레이즈 스트랩", price: "₩90,000", image: "./images/work_9.png" },
        { name: "프로 팔꿈치 보호대", price: "₩100,000", image: "./images/work_10.png" },
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
  