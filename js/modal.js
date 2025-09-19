// Функционал для полноэкранного просмотра иллюстраций
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('fullscreen-modal');
    const modalImg = document.getElementById('modal-image');
    const captionText = document.getElementById('caption');
    const closeModal = document.querySelector('.close-modal');
    
    // Получаем все элементы иллюстраций
    const illustrationItems = document.querySelectorAll('.illustration-item');
    
    // Добавляем обработчик клика на каждую иллюстрацию
    illustrationItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('.illustration-image');
            const name = this.querySelector('.illustration-name').textContent;
            
            modal.style.display = 'block';
            setTimeout(() => {
                modal.classList.add('active');
            }, 10);
            
            modalImg.src = img.src;
            captionText.innerHTML = name;
            
            // Блокируем прокрутку фоновой страницы
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Закрытие модального окна
    closeModal.addEventListener('click', function() {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Возвращаем прокрутку
        }, 300);
    });
    
    // Закрытие при клике вне изображения
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
            setTimeout(() => {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }, 300);
        }
    });
    
    // Закрытие по клавише Esc
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
            setTimeout(() => {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }, 300);
        }
    });
});