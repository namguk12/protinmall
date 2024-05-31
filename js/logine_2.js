document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const privacyToggle = document.getElementById('privacyToggle');
    const privacyContent = document.getElementById('privacyContent');

    if (privacyToggle) {
        privacyToggle.addEventListener('change', () => {
            if (privacyToggle.checked) {
                privacyContent.style.display = 'block';
            } else {
                privacyContent.style.display = 'none';
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('registerUsername').value;
            const nickname = document.getElementById('registerNickname').value;
            const password = document.getElementById('registerPassword').value;

            if (localStorage.getItem(username)) {
                showMessage('registerMessage', '이미 존재하는 사용자입니다.', 'error');
            } else {
                if (document.getElementById('privacyAgree').checked) {
                    const user = { password: password, nickname: nickname };
                    localStorage.setItem(username, JSON.stringify(user));
                    sessionStorage.setItem('username', username);
                    showMessage('registerMessage', '회원가입이 완료되었습니다!', 'success');
                    setTimeout(() => {
                        window.location.href = './index_2.html'; // 마이페이지로 이동
                    }, 1000);
                } else {
                    showMessage('registerMessage', '개인정보 동의를 완료해주세요.', 'error');
                }
            }
        });
    }

    function showMessage(elementId, message, type) {
        const messageElement = document.getElementById(elementId);
        messageElement.textContent = message;
        messageElement.className = `message ${type}`;
    }
});
