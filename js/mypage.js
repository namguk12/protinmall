
// 포인트와 쿠폰 수를 업데이트하는 함수
function updatePointsAndCoupons() {
    // 실제 데이터를 가져와서 업데이트하는 로직을 여기에 추가하세요
    var currentPoints = 150; // 예시 포인트
    var currentCoupons = 8; // 예시 쿠폰 수

    document.getElementById('point').textContent = currentPoints;
    document.getElementById('coupons').textContent = currentCoupons;
}

// 프리미엄 멤버십 확인 버튼 클릭 시 실행되는 함수
function checkPremiumMembership() {
    // 여기에 프리미엄 멤버십 확인 로직을 추가하세요
    alert("프리미엄 멤버십을 확인합니다.");
}

// 페이지 로드 시 포인트와 쿠폰 수 업데이트
updatePointsAndCoupons();

document.addEventListener('DOMContentLoaded', () => {
    const greetingMessage = document.getElementById('greetingMessage');
    const username = sessionStorage.getItem('username');

    if (username) {
        greetingMessage.textContent = `환영합니다, ${username}님!`;
    } else {
        greetingMessage.textContent = '환영합니다!';
    }
});



document.addEventListener('DOMContentLoaded', () => {
    const orderButton = document.getElementById('order-button');
    const orderList = document.getElementById('order-list');

    orderButton.addEventListener('click', () => {
        // 배송 목록을 보이게 하거나 숨기기
        orderList.classList.toggle('hidden');
    });
});




