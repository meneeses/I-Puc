const carouselContent = document.querySelector('.carousel-content');
let currentIndex = 0;

document.querySelector('.next-btn').addEventListener('click', () => {
    currentIndex += 1;
    const offset = -currentIndex * 100; 
    carouselContent.style.transform = `translateX(${offset}%)`;
});
