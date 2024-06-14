// DOMContentLoaded 이벤트 리스너를 추가하여 HTML 문서가 완전히 로드되고 파싱된 후 실행되는 함수를 정의합니다.
document.addEventListener('DOMContentLoaded', function() {
     // 필요한 DOM 요소들을 선택합니다.
    const itemList = document.querySelector('.cart-list');
    const totalPrice = document.getElementById('total-price');
    const checkoutBtn = document.getElementById('checkout-btn');
    const shippingAddressInput = document.getElementById('shipping-address');

// 장바구니 항목을 저장할 배열을 초기화합니다.
    let cartItems = [];

    // URL 쿼리 매개변수에서 데이터를 가져와서 장바구니에 추가합니다.
    const params = new URLSearchParams(window.location.search);
    const itemName = params.get('name');
    const itemPrice = params.get('price');
    if (itemName && itemPrice) {
        addItemToCart({ name: itemName, price: itemPrice });
    }

// 장바구니에 항목을 추가하는 함수입니다.
    function addItemToCart(item) {
        let itemExists = false;

  // 이미 장바구니에 있는 항목인지 확인합니다.
        cartItems.forEach(existingItem => {
            if (existingItem.name === item.name) {
                existingItem.quantity++;  // 이미 있으면 수량을 증가시킵니다.
                itemExists = true;
            }
        });
        if (!itemExists) {
            item.quantity = 1;  // 새 항목이면 수량을 1로 설정합니다.
            cartItems.push(item);
        }
        renderCart();  // 장바구니를 다시 렌더링합니다.
    }

// 장바구니를 렌더링하는 함수입니다.
    function renderCart() {
        itemList.innerHTML = '';  // 기존 항목을 초기화합니다.
        let total = 0;           // 총 가격을 초기화합니다.
        cartItems.forEach(item => {
            const li = document.createElement('li');  // 리스트 항목을 생성합니다.

             // 가격 문자열에서 통화 기호와 쉼표를 제거하여 숫자로 변환합니다.
            // 가격 문자열 확인
            const priceStr = item.price.replace("₩", "").replace(",", "");
            // 숫자 형태인지 확인
            if (!isNaN(priceStr)) {
                // 가격 파싱
                const price = parseFloat(priceStr);
                total += price * item.quantity; // 총 가격을 계산합니다.
            } else {
                console.error(`가격 파싱 실패: ${item.price}`);
            }

            li.innerHTML = `
                <div class="product-details">
                    <span class="product-name">${item.name}</span>
                    <span class="product-price">${item.price}</span>
                </div>
                <div class="product-quantity">
                    <input type="number" value="${item.quantity}" min="1" max="500" class="quantity-input" data-name="${item.name}">
                    <div class="quantity-buttons">
                        <button class="quantity-button" data-increment="20">+20</button>
                        <button class="quantity-button" data-increment="-20">-20</button>
                    </div>
                </div>
            `;
            itemList.appendChild(li);  // 리스트에 항목을 추가합니다.
        });

        // 총 가격을 표시할 때 화폐 단위를 추가하여 표시합니다
        totalPrice.textContent = `총 가격: ₩${total.toLocaleString()}`;
    }
    

    // 수량 입력 필드의 입력 이벤트를 처리합니다.
    itemList.addEventListener('input', function(e) {
        if (e.target.classList.contains('quantity-input')) {
            const itemName = e.target.getAttribute('data-name'); // 항목 이름을 가져옵니다.
            const newQuantity = parseInt(e.target.value, 10);   // 새로운 수량을 정수로 변환합니다.
            if (newQuantity > 0 && newQuantity <= 500) {
                // 유효한 수량인지 확인합니다.
                cartItems.forEach(item => {
                    if (item.name === itemName) {
                        item.quantity = newQuantity;  // 수량을 업데이트합니다.
                    }
                });
                renderCart();  // 장바구니를 다시 렌더링합니다. 
            } else {
                alert('수량은 1에서 500 사이여야 합니다.'); // 수량이 1에서 500 사이가 아닐 경우 경고 메시지를 표시합니다.               
                e.target.value = cartItems.find(item => item.name === itemName).quantity;// 잘못된 수량 입력이 되면 원래 수량으로 되돌립니다.
            }
            
        }
    });
     // itemList 요소에 클릭 이벤트 리스너를 추가합니다.
    itemList.addEventListener('click', function(e) {
         // 클릭된 요소가 수량 조정 버튼인지 확인합니다.
        if (e.target.classList.contains('quantity-button')) {
            const button = e.target;   // 클릭된 버튼 요소를 가져옵니다.
            const increment = parseInt(button.getAttribute('data-increment'), 10);// 버튼의 data-increment 속성 값을 가져옵니다.
            const inputField = button.parentNode.previousElementSibling;// 버튼의 이전 형제 요소(수량 입력 필드)를 가져옵니다.
            let newValue = parseInt(inputField.value, 10) + increment;// 현재 수량에 증감값을 더합니다.
            if (newValue < 1) {
                newValue = 1; // 수량이 1보다 작아지지 않도록 합니다.
            } else if (newValue > 500) {
                newValue = 500; // 수량이 500을 초과하지 않도록 합니다.
            }
            inputField.value = newValue; // 새로운 수량 값을 입력 필드에 설정합니다.
            const itemName = inputField.getAttribute('data-name');// 입력 필드의 데이터 속성에서 아이템 이름을 가져옵니다.
            cartItems.forEach(item => {
                if (item.name === itemName) {
                    item.quantity = newValue;// 해당 아이템의 수량을 업데이트합니다.
                }
            });
            renderCart();   // 장바구니를 다시 렌더링합니다.
        }
    });

    // checkoutBtn 요소에 클릭 이벤트 리스너를 추가합니다.
    checkoutBtn.addEventListener('click', function() {
        const shippingAddress = shippingAddressInput.value.trim();// 배송지 주소를 가져옵니다.
        if (cartItems.length > 0) {
            if (shippingAddress === '') {
                 // 배송지 주소가 비어 있을 경우 경고 메시지를 표시합니다.
                alert('배송지 주소를 입력해주세요.');
                return;
            }
              // 결제가 완료되었다는 메시지를 표시합니다.
            alert(`배송지 주소: ${shippingAddress}\n결제가 완료되었습니다!`);
             // 장바구니를 비웁니다.
            cartItems = [];
             // 배송지 입력 필드를 비웁니다.
            shippingAddressInput.value = '';
             // 장바구니를 다시 렌더링합니다.
            renderCart();
        } else {
             // 장바구니가 비어 있을 경우 경고 메시지를 표시합니다.
            alert('장바구니가 비어 있습니다.');
        }
    });
});
