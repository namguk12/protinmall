document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const checkoutButton = document.getElementById('checkout-button');

    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let totalPrice = 0;

    cartItems.forEach(item => {
        console.log(item.name, item.price, item.quantity); // 각 상품의 이름, 가격, 수량을 콘솔에 출력하여 확인합니다.
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `<span>${item.name} x ${item.quantity}</span><span>${item.price * item.quantity}원</span>`; // 이 부분에서 문제가 발생할 수 있습니다.
        cartItemsContainer.appendChild(itemElement);
    
        totalPrice += item.price * item.quantity;
    });
    
    

    totalPriceElement.textContent = `총 가격: ${totalPrice.toLocaleString()}원`; // 총 가격을 화폐 형식으로 표시

    checkoutButton.addEventListener('click', () => {
        alert('결제 완료되었습니다.');
        localStorage.removeItem('cartItems'); // 결제 완료 후 장바구니 데이터 초기화
        window.location.href = 'index_2.html'; // 결제 완료 후 리다이렉트할 페이지 설정
    });
});
