// scripts.js
const images = [
    'image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'
];

const reviews = [
    { text: "첫 번째 리뷰입니다. 이 제품 정말 좋아요!", author: "고객1" },
    { text: "두 번째 리뷰입니다. 만족스러워요!", author: "고객2" },
    { text: "세 번째 리뷰입니다. 추천합니다!", author: "고객3" },
    { text: "네 번째 리뷰입니다. 배송이 빨라요!", author: "고객4" },
    { text: "다섯 번째 리뷰입니다. 품질이 좋습니다!", author: "고객5" },
    { text: "여섯 번째 리뷰입니다. 가격이 합리적이에요!", author: "고객6" },
    { text: "일곱 번째 리뷰입니다. 재구매 의사 있습니다!", author: "고객7" },
    { text: "여덟 번째 리뷰입니다. 디자인이 예뻐요!", author: "고객8" },
    { text: "아홉 번째 리뷰입니다. 사용하기 편리해요!", author: "고객9" },
    { text: "열 번째 리뷰입니다. 강추합니다!", author: "고객10" },
    { text: "열한 번째 리뷰입니다. 만족도가 높습니다!", author: "고객11" },
    { text: "열두 번째 리뷰입니다. 너무 마음에 들어요!", author: "고객12" }
];

let currentImageIndex = 0;
let currentReviewIndex = 0;

function showNextImage() {
    const imageElement = document.querySelector('#image-container img');
    imageElement.style.opacity = 0;  // 투명도 설정
    setTimeout(() => {
        imageElement.src = images[currentImageIndex];
        imageElement.style.opacity = 1;  // 다시 보이게 설정
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }, 500);
}

function showNextReview() {
    const reviewTextElement = document.querySelector('.review-text');
    const reviewAuthorElement = document.querySelector('.review-author');
    reviewTextElement.style.opacity = 0;  // 투명도 설정
    reviewAuthorElement.style.opacity = 0;  // 투명도 설정
    setTimeout(() => {
        reviewTextElement.textContent = reviews[currentReviewIndex].text;
        reviewAuthorElement.textContent = `- by ${reviews[currentReviewIndex].author}`;
        reviewTextElement.style.opacity = 1;  // 다시 보이게 설정
        reviewAuthorElement.style.opacity = 1;  // 다시 보이게 설정
        currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
    }, 500);
}

// 5초마다 이미지와 리뷰 변경
setInterval(showNextImage, 5000);
setInterval(showNextReview, 5000);

// 초기 설정
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#image-container img').src = images[0];
    document.querySelector('.review-text').textContent = reviews[0].text;
    document.querySelector('.review-author').textContent = `- by ${reviews[0].author}`;
});
