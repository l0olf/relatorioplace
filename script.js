document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    // Inicializa o primeiro slide como ativo
    slides[currentSlide].classList.add('active');

    function goToSlide(index) {
        // Remove a classe active do slide atual
        slides[currentSlide].classList.remove('active');
        
        // Garante que o index não passe dos limites
        currentSlide = (index + slides.length) % slides.length; 
        
        // Adiciona a classe active no novo slide
        slides[currentSlide].classList.add('active');
    }

    // Navegar com as setas do teclado
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            goToSlide(currentSlide + 1);
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            goToSlide(currentSlide - 1);
        }
    });

    // Se você tiver botões de navegação no HTML
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');

    if (nextBtn) nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));
    if (prevBtn) prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
});