document.addEventListener('DOMContentLoaded', () => {
    const images = [
        './images/meet_1.jpg', './images/meet_2.jpg', './images/meet_3.jpg', './images/meet_4.jpg', './images/meet_5.jpg'
    ];

    const reviews = [
        { text: " 이 제품 정말 좋아요!", author: "김봉중" },
        { text: " 만족스러워요!", author: "최재혁" },
        { text: " 추천합니다!", author: "박서진" },
        { text: " 배송이 빨라요!", author: "최진형" },
        { text: " 품질이 좋습니다!", author: "김남국" },
        { text: " 가격이 합리적이에요!", author: "홍성현" },
        { text: " 재구매 의사 있습니다!", author: "고광은" },
        { text: " 품질이 너무 좋아서 놀랐어요!", author: "조재희" },
        { text: "배송이 엄청 빠르네요!", author: "박상현" },
        { text: "제품 추천 합니다!!", author: "크리스범스테드" },
        { text: "만족합니다 한번 더 구매하고싶어요", author: "김종국" },
        { text: "한번더 구매 할게요!", author: "양다일" }
    ];

    let currentImageIndex = 0;
    let currentReviewIndex = 0;

    const imageElement = document.getElementById('slider-image');
    const reviewTextElement = document.getElementById('review-text');
    const reviewAuthorElement = document.getElementById('review-author');

    function updateImageAndReview() {
        imageElement.style.opacity = 0;
        reviewTextElement.style.opacity = 0;
        reviewAuthorElement.style.opacity = 0;

        setTimeout(() => {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            currentReviewIndex = (currentReviewIndex + 1) % reviews.length;

            imageElement.src = images[currentImageIndex];
            reviewTextElement.textContent = reviews[currentReviewIndex].text;
            reviewAuthorElement.textContent = `- by ${reviews[currentReviewIndex].author}`;

            imageElement.style.opacity = 1;
            reviewTextElement.style.opacity = 1;
            reviewAuthorElement.style.opacity = 1;
        }, 500);
    }

    setInterval(updateImageAndReview, 5000);

    // 초기 설정
    imageElement.src = images[0];
    reviewTextElement.textContent = reviews[0].text;
    reviewAuthorElement.textContent = `- by ${reviews[0].author}`;
});
