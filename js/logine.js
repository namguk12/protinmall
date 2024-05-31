document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('loginUsername').value;
            const password = document.getElementById('loginPassword').value;

            const storedUser = JSON.parse(localStorage.getItem(username));
            if (storedUser && storedUser.password === password) {
                sessionStorage.setItem('username', username);
                showMessage('loginMessage', '로그인 성공!', 'success');
                setTimeout(() => {
                    window.location.href = './index_2.html'; // 마이페이지로 이동
                }, 1000);
            } else {
                showMessage('loginMessage', '아이디 또는 비밀번호가 잘못되었습니다.', 'error');
            }
        });
    }

    function showMessage(elementId, message, type) {
        const messageElement = document.getElementById(elementId);
        messageElement.textContent = message;
        messageElement.className = `message ${type}`;
    }
});
