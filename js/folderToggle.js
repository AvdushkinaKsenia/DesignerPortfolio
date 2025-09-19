// Функционал для сворачивания/разворачивания папки с иллюстрациями
        const folderToggle = document.getElementById('folderToggle');
        const folderContent = document.getElementById('folderContent');
        const folderIcon = folderToggle.querySelector('.fa-chevron-up');
        
        folderToggle.addEventListener('click', function() {
            folderContent.classList.toggle('hidden');
            folderIcon.classList.toggle('fa-chevron-up');
            folderIcon.classList.toggle('fa-chevron-down');
            
            if (folderContent.classList.contains('hidden')) {
                folderContent.style.display = 'none';
            } else {
                folderContent.style.display = 'grid';
            }
        });