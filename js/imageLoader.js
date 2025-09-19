// Ленивая загрузка изображений
document.addEventListener('DOMContentLoaded', function() {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute('data-src') || img.src;
                    
                    // Загружаем изображение
                    img.src = src;
                    img.classList.add('loaded');
                    
                    // Прекращаем наблюдение
                    imageObserver.unobserve(img);
                }
            });
        }, { rootMargin: '50px 0px' });
        
        lazyImages.forEach(img => {
            // Устанавливаем миниатюру как начальное изображение
            if (img.getAttribute('data-src')) {
                img.src = img.getAttribute('data-src').replace('-full.', '-thumb.');
            }
            imageObserver.observe(img);
        });
    } else {
        // Fallback для браузеров без IntersectionObserver
        lazyImages.forEach(img => {
            const src = img.getAttribute('data-src') || img.src;
            img.src = src;
            img.classList.add('loaded');
        });
    }
});