// Отримуємо елемент кнопки за його ID
const themeButton = document.getElementById('theme-toggle-btn');
// Отримуємо елемент <body>, до якого будемо додавати клас
const bodyElement = document.body;

// Додаємо слухача подій (event listener) на клік по кнопці
themeButton.addEventListener('click', function() {
    // Метод .toggle() перемикає клас: якщо його немає — додає, якщо є — видаляє
    bodyElement.classList.toggle('dark-theme');

    // Опціонально: змінюємо текст кнопки залежно від поточної теми
    if (bodyElement.classList.contains('dark-theme')) {
        themeButton.textContent = 'Змінити на світлу тему';
    } else {
        themeButton.textContent = 'Змінити на темну тему';
    }
});