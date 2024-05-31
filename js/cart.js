document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const itemName = params.get('name');
    const itemPrice = params.get('price');

    const itemList = document.querySelector('.cart-list');
    const totalPrice = document.getElementById('total-price');
    const checkoutBtn = document.getElementById('checkout-btn');
    const shippingAddressInput = document.getElementById('shipping-address');

    let cartItems = [];

    if (itemName && itemPrice) {
        addItemToCart({ name: itemName, price: itemPrice });
    }

    function addItemToCart(item) {
        let itemExists = false;
        cartItems.forEach(existingItem => {
            if (existingItem.name === item.name) {
                existingItem.quantity++;
                itemExists = true;
            }
        });
        if (!itemExists) {
            item.quantity = 1;
            cartItems.push(item);
        }
        renderCart();
    }

    function renderCart() {
        itemList.innerHTML = '';
        let total = 0;
        cartItems.forEach(item => {
            const li = document.createElement('li');
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
            itemList.appendChild(li);
            total += parseFloat(item.price.replace("₩", "").replace(",", "")) * item.quantity;
        });
        totalPrice.textContent = `총 가격: ₩${total.toLocaleString()}`;
    }

    itemList.addEventListener('input', function(e) {
        if (e.target.classList.contains('quantity-input')) {
            const itemName = e.target.getAttribute('data-name');
            const newQuantity = parseInt(e.target.value, 10);
            if (newQuantity > 0 && newQuantity <= 500) {
                cartItems.forEach(item => {
                    if (item.name === itemName) {
                        item.quantity = newQuantity;
                    }
                });
                renderCart();
            } else {
                alert('수량은 1에서 500 사이여야 합니다.');
                e.target.value = cartItems.find(item => item.name === itemName).quantity;
            }
        }
    });

    itemList.addEventListener('click', function(e) {
        if (e.target.classList.contains('quantity-button')) {
            const button = e.target;
            const increment = parseInt(button.getAttribute('data-increment'), 10);
            const inputField = button.parentNode.previousElementSibling;
            let newValue = parseInt(inputField.value, 10) + increment;
            if (newValue < 1) {
                newValue = 1;
            } else if (newValue > 500) {
                newValue = 500;
            }
            inputField.value = newValue;
            const itemName = inputField.getAttribute('data-name');
            cartItems.forEach(item => {
                if (item.name === itemName) {
                    item.quantity = newValue;
                }
            });
            renderCart();
        }
    });

    checkoutBtn.addEventListener('click', function() {
        const shippingAddress = shippingAddressInput.value.trim();
        if (cartItems.length > 0) {
            if (shippingAddress === '') {
                alert('배송지 주소를 입력해주세요.');
                return;
            }
            alert(`배송지 주소: ${shippingAddress}\n결제가 완료되었습니다!`);
            cartItems = [];
            shippingAddressInput.value = '';
            renderCart();
        } else {
            alert('장바구니가 비어 있습니다.');
        }
    });
});
