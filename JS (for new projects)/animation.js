// Скрипт для появления элементов при прокрутке
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

// Находим все элементы с классом fade-in
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));