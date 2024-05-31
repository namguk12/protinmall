// scripts.js
const images = [
    './images/meet_1.jpg', './images/meet_2.jpg', './images/meet_3.jpg', './images/meet_4.jpg',
    './images/meet_5.jpg', './images/meet_6.jpg', './images/meet_7.jpg', './images/meet_8.jpg',
    './images/meet_9.jpg', './images/meet_10.jpg', './images/meet_11.jpg', './images/meet_12.jpg'
];

let currentIndex = 0;

function updateImages() {
    const imageCells = document.querySelectorAll('.image-cell img');
    for (let i = 0; i < imageCells.length; i++) {
        imageCells[i].src = images[(currentIndex + i) % images.length];
    }
    currentIndex = (currentIndex + 1) % images.length;
}

// 5초마다 이미지 업데이트
setInterval(updateImages, 5000);

window.onload = updateImages;
