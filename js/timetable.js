const groupTabBtn = document.querySelectorAll('.group__tab-btn')
const timetablePage = document.querySelectorAll('.timetable-page')

groupTabBtn[0].classList.add('active');
timetablePage[0].classList.add('active')

groupTabBtn.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        // Если таб уже активен, то ничего не делаем
        if (tab.classList.contains('active')) return;

        // Убираем класс active у всех табов и окон
        groupTabBtn.forEach(t => t.classList.remove('active'));
        timetablePage.forEach(w => w.classList.remove('active'));

        // Добавляем класс active только к выбранному табу и его окну контента
        tab.classList.add('active');
        timetablePage[index].classList.add('active');
    });
})
