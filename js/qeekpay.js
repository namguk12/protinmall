// script.js
document.addEventListener("DOMContentLoaded", function() {
    const products = [
        { name: "제품 1", price: "₩10,000", image: "https://via.placeholder.com/100" },
        { name: "제품 2", price: "₩3,500", image: "https://via.placeholder.com/100" },
        { name: "제품 3", price: "₩5,000", image: "https://via.placeholder.com/100" },
        { name: "제품 4", price: "₩10,000", image: "https://via.placeholder.com/100" },
        { name: "제품 5", price: "₩12,000", image: "https://via.placeholder.com/100" },
        { name: "제품 6", price: "₩13,000", image: "https://via.placeholder.com/100" },
        { name: "제품 7", price: "₩12,000", image: "https://via.placeholder.com/100" },
        { name: "제품 8", price: "₩15,000", image: "https://via.placeholder.com/100" },
        { name: "제품 9", price: "₩16,000", image: "https://via.placeholder.com/100" },
        { name: "제품 10", price: "₩15,000", image: "https://via.placeholder.com/100" },
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
  