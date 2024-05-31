// app.js
document.addEventListener('DOMContentLoaded', function() {
    const products = [
      { id: 1, name: '닭가슴살 1kg', price: 15000, img: 'path/to/image1.jpg' },
      { id: 2, name: '닭가슴살 2kg', price: 28000, img: 'path/to/image2.jpg' },
      { id: 3, name: '닭가슴살 소시지', price: 12000, img: 'path/to/image3.jpg' },
      { id: 4, name: '닭가슴살 스테이크', price: 17000, img: 'path/to/image4.jpg' },
      { id: 5, name: '닭가슴살 샐러드', price: 9000, img: 'path/to/image5.jpg' },
      { id: 6, name: '닭가슴살 볼', price: 11000, img: 'path/to/image6.jpg' },
      { id: 7, name: '닭가슴살 볶음밥', price: 13000, img: 'path/to/image7.jpg' },
      { id: 8, name: '닭가슴살 파스타', price: 16000, img: 'path/to/image8.jpg' },
      { id: 9, name: '닭가슴살 햄버거', price: 14000, img: 'path/to/image9.jpg' },
      { id: 10, name: '닭가슴살 치즈볼', price: 15000, img: 'path/to/image10.jpg' },
    ];
  
    const rankingContainer = document.getElementById('ranking');
    products.forEach((product, index) => {
      const productElement = document.createElement('div');
      productElement.className = 'product-card';
      productElement.innerHTML = `
        <img src="${product.img}" alt="${product.name}">
        <div class="product-details">
          <h2>${index + 1}. ${product.name}</h2>
          <p>가격: ${product.price}원</p>
        </div>
        <div class="product-actions">
          <button class="cart-icon"></button>
          <button class="heart-icon"></button>
        </div>
      `;
      rankingContainer.appendChild(productElement);
  
      const heartButton = productElement.querySelector('.heart-icon');
      heartButton.addEventListener('click', () => {
        heartButton.classList.toggle('liked');
      });
    });
  });
  