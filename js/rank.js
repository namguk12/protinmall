// DOMContentLoaded 이벤트 리스너를 추가하여 HTML 문서가 완전히 로드되고 파싱된 후 실행되는 함수를 정의합니다.
document.addEventListener("DOMContentLoaded", function() {
    // 제품 목록을 배열로 정의합니다.
    const products = [
        { name: "마늘맛 닭가슴살", price: "₩2,000", image: "./images/rank_1.jpg" },
        { name: "크리스피 닭가슴살", price: "₩2,000", image: "./images/rank_2.jpg" },
        { name: "한끼 통살 닭가슴살", price: "₩2,500", image: "./images/rank_3.jpg" },
        { name: "스팀 닭가슴살", price: "₩2,000", image: "./images/rank_4.jpg" },
        { name: "닭가슴살 볶음밥", price: "₩3,000", image: "./images/rank_5.jpg" },
        { name: "닭가슴살 소시지", price: "₩3,000", image: "./images/rank_6.jpg" },
        { name: "닭고기 닭가슴살", price: "₩2,800", image: "./images/rank_7.jpg" },
        { name: "소스 닭가슴살", price: "₩3,200", image: "./images/rank_8.jpg" },
        { name: "닭가슴살 주먹밥", price: "₩2,700", image: "./images/rank_9.jpg" },
        { name: "닭가슴살 볶음밥", price: "₩2,800", image: "./images/rank_10.jpg" },
    ];
  
    // .product-list 클래스를 가진 HTML 요소를 선택합니다.
    const productList = document.querySelector(".product-list");
  
    // 각 제품을 순회하면서 제품 항목을 생성하고 product-list 요소에 추가합니다.
    products.forEach((product, index) => {
        const productItem = document.createElement("div"); // div 요소 생성
        productItem.className = "product-item"; // 클래스 이름 설정
  
        // 제품 항목의 내부 HTML을 설정
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
  
        // product-list 요소에 생성된 제품 항목을 추가합니다.
        productList.appendChild(productItem);
    });
  
    // product-list 요소에 클릭 이벤트 리스너를 추가합니다.
    productList.addEventListener('click', function(e) {
        // 위시리스트 버튼(하트 아이콘)이 클릭된 경우
        if (e.target.classList.contains('wishlist-btn') || e.target.closest('.wishlist-btn')) {
            const button = e.target.closest('.wishlist-btn'); // 버튼 요소 찾기
            const icon = button.querySelector('i'); // 아이콘 요소 찾기
            if (icon.classList.contains('far')) {
                icon.classList.remove('far'); // 빈 하트 -> 채워진 하트
                icon.classList.add('fas');
            } else {
                icon.classList.remove('fas'); // 채워진 하트 -> 빈 하트
                icon.classList.add('far');
            }
        }
  
        // 별점 아이콘이 클릭된 경우
        if (e.target.classList.contains('fa-star')) {
            const rating = e.target.getAttribute('data-rating'); // 클릭된 별점의 데이터 속성 가져오기
            const stars = e.target.parentNode.querySelectorAll('i'); // 모든 별점 아이콘 찾기
            stars.forEach(star => {
                star.classList.remove('fas'); // 모든 별점 아이콘 초기화 (빈 별)
                star.classList.add('far');
            });
            for (let i = 0; i < rating; i++) {
                stars[i].classList.add('fas'); // 클릭된 별점까지 채워진 별로 변경
                stars[i].classList.remove('far');
            }
        }
  
        // 장바구니 버튼이 클릭된 경우
        if (e.target.closest('.cart-btn')) {
            const button = e.target.closest('.cart-btn'); // 버튼 요소 찾기
            const itemName = button.getAttribute('data-name'); // 데이터 속성에서 제품 이름 가져오기
            const itemPrice = button.getAttribute('data-price'); // 데이터 속성에서 제품 가격 가져오기
            const item = { name: itemName, price: itemPrice }; // 제품 객체 생성
            // cart.html 페이지로 이동하며 제품 정보를 URL 파라미터로 전달
            window.location.href = `cart.html?name=${encodeURIComponent(item.name)}&price=${encodeURIComponent(item.price)}`;
        }
    });
  
    // 별점 아이콘 클릭 이벤트 추가
    const starRatings = document.querySelectorAll('.star-rating i');
    starRatings.forEach(star => {
        star.addEventListener('click', function(e) {
            const rating = e.target.getAttribute('data-rating'); // 클릭된 별점의 데이터 속성 가져오기
            const stars = e.target.parentNode.querySelectorAll('i'); // 모든 별점 아이콘 찾기
            let clicked = false;
            stars.forEach(star => {
                if (!clicked) {
                    star.classList.remove('far'); // 빈 별을 채워진 별로 변경
                    star.classList.add('fas');
                } else {
                    star.classList.remove('fas'); // 채워진 별을 빈 별로 변경
                    star.classList.add('far');
                }
                if (star === e.target) {
                    clicked = true; // 클릭된 별 이후부터는 빈 별로 유지
                }
            });
        });
    });
});
