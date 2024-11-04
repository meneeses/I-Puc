// ---- Parte responsável pelas animações da página About Us ----
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }
  
  function handleScroll() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((el) => {
      if (isElementInViewport(el)) {
        el.classList.add('visible');
      }
    });
  }
  
  window.addEventListener('scroll', handleScroll);
  
  
  handleScroll();
  
// ---- Parte responsável pelas animações da página About Us ----

