// DOMContentLoaded 이벤트 리스너를 추가합니다. 이 이벤트는 문서의 DOM이 완전히 로드된 후 발생합니다.
document.addEventListener('DOMContentLoaded', () => {
    // 로그인 폼 요소를 가져옵니다.
    const loginForm = document.getElementById('loginForm');

    // 로그인 폼이 존재하는 경우 submit 이벤트 리스너를 추가합니다.
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            // 폼 제출 기본 동작을 방지합니다.
            e.preventDefault();
            // 사용자 이름과 비밀번호 입력값을 가져옵니다.
            const username = document.getElementById('loginUsername').value;
            const password = document.getElementById('loginPassword').value;

            // 로컬 스토리지에서 사용자 이름에 해당하는 데이터를 가져와 파싱합니다.
            const storedUser = JSON.parse(localStorage.getItem(username));
            // 저장된 사용자 정보가 있고, 입력한 비밀번호와 저장된 비밀번호가 일치하는지 확인합니다.
            if (storedUser && storedUser.password === password) {
                // 세션 스토리지에 사용자 이름을 저장합니다.
                sessionStorage.setItem('username', username);
                // 로그인 성공 메시지를 표시합니다.
                showMessage('loginMessage', '로그인 성공!', 'success');
                // 1초 후에 마이페이지로 이동합니다.
                setTimeout(() => {
                    window.location.href = './index_2.html'; // 마이페이지로 이동
                }, 1000);
            } else {
                // 사용자 이름이 없거나 비밀번호가 일치하지 않는 경우 오류 메시지를 표시합니다.
                showMessage('loginMessage', '아이디 또는 비밀번호가 잘못되었습니다.', 'error');
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
