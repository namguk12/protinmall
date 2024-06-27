// DOMContentLoaded 이벤트 리스너를 추가합니다. 이 이벤트는 문서의 DOM이 완전히 로드된 후 발생합니다.
document.addEventListener('DOMContentLoaded', () => {
    // 회원가입 폼, 개인정보 토글 버튼, 개인정보 내용 요소를 각각 가져옵니다.
    const registerForm = document.getElementById('registerForm');
    const privacyToggle = document.getElementById('privacyToggle');
    const privacyContent = document.getElementById('privacyContent');

    // 개인정보 토글 버튼이 존재하면 change 이벤트 리스너를 추가합니다.
    if (privacyToggle) {
        privacyToggle.addEventListener('change', () => {
            // 토글 버튼이 체크되면 개인정보 내용을 보이고, 그렇지 않으면 숨깁니다.
            if (privacyToggle.checked) {
                privacyContent.style.display = 'block';
            } else {
                privacyContent.style.display = 'none';
            }
        });
    }

    // 회원가입 폼이 존재하면 submit 이벤트 리스너를 추가합니다.
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            // 폼 제출 기본 동작을 방지합니다.
            e.preventDefault();
            // 사용자 이름, 닉네임, 비밀번호 입력값을 가져옵니다.
            const username = document.getElementById('registerUsername').value;
            const nickname = document.getElementById('registerNickname').value;
            const password = document.getElementById('registerPassword').value;

            // 로컬 스토리지에 사용자 이름이 이미 존재하는지 확인합니다.
            if (localStorage.getItem(username)) {
                // 이미 존재하는 사용자일 경우 오류 메시지를 표시합니다.
                showMessage('registerMessage', '이미 존재하는 사용자입니다.', 'error');
            } else {
                // 개인정보 동의가 체크되어 있는지 확인합니다.
                if (document.getElementById('privacyAgree').checked) {
                    // 새로운 사용자 객체를 생성하고 로컬 스토리지에 저장합니다.
                    const user = { password: password, nickname: nickname };
                    localStorage.setItem(username, JSON.stringify(user));
                    // 세션 스토리지에 사용자 이름을 저장합니다.
                    sessionStorage.setItem('username', username);
                    // 회원가입 완료 메시지를 표시합니다.
                    showMessage('registerMessage', '회원가입이 완료되었습니다!', 'success');
                    // 1초 후에 마이페이지로 이동합니다.
                    setTimeout(() => {
                        window.location.href = './index_2.html'; // 마이페이지로 이동
                    }, 1000);
                } else {
                    // 개인정보 동의가 체크되지 않았을 경우 오류 메시지를 표시합니다.
                    showMessage('registerMessage', '개인정보 동의를 완료해주세요.', 'error');
                }
            }
        });
    }

    // 메시지를 표시하는 함수입니다.
    function showMessage(elementId, message, type) {
        // 메시지 요소를 가져와서 메시지와 클래스를 설정합니다.
        const messageElement = document.getElementById(elementId);
        messageElement.textContent = message;
        messageElement.className = `message ${type}`;
    }
});
