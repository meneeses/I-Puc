
  const carousel = document.querySelector('.carousel');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  let currentIndex = 0; // Index atual do carrossel

  // Número de produtos no carrossel
  const totalItems = carousel.children.length;
  const itemsPerView = 4; // Número de produtos visíveis de cada vez

  // Função para atualizar o deslocamento do carrossel
  function updateCarousel() {
    const itemWidth = 250 + 20; // Largura do item + margem
    carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  }

  // Evento para o botão "Next"
  nextBtn.addEventListener('click', () => {
    if (currentIndex < totalItems - itemsPerView) {
      currentIndex++;
      updateCarousel();
    }
  });

  // Evento para o botão "Prev"
  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

