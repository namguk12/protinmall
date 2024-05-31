document.addEventListener('DOMContentLoaded', function() {
    const products = [
        { id: 1, name: '20% discount', image: './images/hot_10.jpg', duration: 10000 }, // 1 minute
        { id: 2, name: '30% discount' , image: './images/hot_11.jpg', duration: 120000 }, // 2 minutes
        { id: 3, name: '40% discount', image: './images/hot_12.jpg', duration: 180000 }, // 3 minutes
        { id: 4, name: '55% discount', image: './images/hot_13.jpg', duration: 240000 }  // 4 minutes
    ];

    const warningThreshold = 10000; // 10 seconds remaining

    products.forEach(product => {
        const productImage = document.getElementById(`product-${product.id}`);
        const timerElement = document.getElementById(`timer-${product.id}`);
        const nameElement = document.getElementById(`name-${product.id}`);
        nameElement.textContent = product.name;
        let remainingTime = product.duration;

        function updateTimer() {
            const minutes = Math.floor(remainingTime / 60000);
            const seconds = ((remainingTime % 60000) / 1000).toFixed(0);
            timerElement.textContent = `${minutes}m ${seconds < 10 ? '0' : ''}${seconds}s`;

            if (remainingTime <= warningThreshold) {
                timerElement.classList.add('warning');
            } else {
                timerElement.classList.remove('warning');
            }

            if (remainingTime <= 0) {
                remainingTime = product.duration;
                const newIndex = (products.findIndex(p => p.id === product.id) + 1) % products.length;
                productImage.src = products[newIndex].image;
            }
            remainingTime -= 1000;
        }

        setInterval(updateTimer, 1000);

        setInterval(() => {
            const newIndex = (products.findIndex(p => p.id === product.id) + 1) % products.length;
            productImage.src = products[newIndex].image;
            remainingTime = product.duration;
        }, product.duration);
    });
});
