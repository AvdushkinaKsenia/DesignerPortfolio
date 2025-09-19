// animations.js
document.addEventListener('DOMContentLoaded', function() {
    // Функция для наблюдения за элементами
    function observeElements(selector, animationClass, threshold = 0.1) {
        const elements = document.querySelectorAll(selector);
        
        if (elements.length === 0) return;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(animationClass);
                    // Останавливаем наблюдение после запуска анимации
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: threshold });
        
        elements.forEach(element => {
            observer.observe(element);
        });
    }
    
    // Наблюдаем за секциями
    const sections = document.querySelectorAll('section');
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
            }
        });
    }, { threshold: 0.2 });
    
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
    
    // Запускаем наблюдение за элементами с анимациями
    observeElements('.specialization-item', 'animate-in');
    observeElements('.skill-card', 'animate-in');
    observeElements('.project-item', 'animate-in');
    observeElements('.illustration-item', 'animate-in');
    
    // Для текста в about
    observeElements('.specialization-intro', 'animate-text');
    observeElements('.about-description', 'animate-text');
});