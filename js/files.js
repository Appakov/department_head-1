// const tabBtns = document.querySelectorAll('.files__tab-btn');
// const sideWrappers = document.querySelectorAll('.files__side-wrapper');

// const funcRemove = () => {
//     sideWrappers.forEach((el) => {
//         el.style.display = 'none';
//     });
//     tabBtns.forEach((elem) => {
//         elem.classList.remove('active');
//     });
// };

// funcRemove();

// const showContent = (index = 0) => {
//     sideWrappers[index].style.display = 'flex';
//     tabBtns[index].classList.add('active');
// };

// showContent();

// document.addEventListener('click', (e) => {
//     if (e.target.classList.contains('files__tab-btn')) {
//         tabBtns.forEach((btn, index) => {
//             if (e.target === btn) {
//                 funcRemove();
//                 showContent(index);
//             }
//         });
//     }
// });

// // const tabs = document.querySelectorAll('.files__tab');
// // const tabContents = document.querySelectorAll('.files__side-content-item');

// // const hideAllTabs = () => {
// //     tabContents.forEach((el) => {
// //         el.style.display = 'none';
// //     });
// //     tabs.forEach((elem) => {
// //         elem.classList.remove('red');
// //     });
// // };

// // hideAllTabs();

// // const showTabContent = (index = 0) => {
// //     tabContents[index].style.display = 'block';
// //     tabs[index].classList.add('red');
// // };

// // showTabContent();

// // const tabClickHandler = (e) => {
// //     if (e.target.classList.contains('files__tab')) {
// //         tabs.forEach((tab, index) => {
// //             if (e.target === tab) {
// //                 hideAllTabs();
// //                 showTabContent(index);
// //             }
// //         });
// //     }
// // };

// // document.querySelector('.files__tabs').addEventListener('click', tabClickHandler);

// // Обработчик клика на родительском элементе
// document.querySelector('.files__tabs').addEventListener('click', function(event) {
//     const tab = event.target.closest('.files__tab'); // Находим ближайший родительский элемент с классом 'files__tab'

//     if (tab) {
//         // Получаем индекс таба
//         const index = Array.from(tab.parentElement.children).indexOf(tab);

//         // Скрываем все табы и активируем выбранный
//         document.querySelectorAll('.files__side-content-item').forEach((content, i) => {
//             content.style.display = i === index ? 'block' : 'none';
//         });
//         document.querySelectorAll('.files__tab').forEach((t, i) => {
//             t.classList.toggle('red', i === index);
//         });
//     }
// });

const tabBtns = document.querySelectorAll('.files__tab-btn');
const sideWrappers = document.querySelectorAll('.files__side-wrapper');

const funcRemove = () => {
    sideWrappers.forEach((el) => {
        el.style.display = 'none';
    });
    tabBtns.forEach((elem) => {
        elem.classList.remove('active');
    });
};

funcRemove();

const showContent = (index = 0) => {
    sideWrappers[index].style.display = 'flex';
    tabBtns[index].classList.add('active');
};

showContent();

document.addEventListener('click', (e) => {
    const target = e.target;
    // Проверяем, является ли кликнутый элемент внешним табом
    if (target.classList.contains('files__tab-btn')) {
        tabBtns.forEach((btn, index) => {
            if (target === btn) {
                funcRemove();
                showContent(index);
            }
        });
    }
    // Проверяем, является ли кликнутый элемент внутренним табом
    if (target.classList.contains('files__tab')) {
        const tabsContainer = target.parentElement;
        const tabs = tabsContainer.querySelectorAll('.files__tab');
        const contentsContainer = tabsContainer.nextElementSibling;
        const contents = contentsContainer.querySelectorAll('.files__side-content-item');
        tabs.forEach((tab, index) => {
            if (target === tab) {
                // Скрываем все внутренние табы и показываем только выбранный
                contents.forEach((content, contentIndex) => {
                    content.style.display = index === contentIndex ? 'block' : 'none';
                });
                // Добавляем класс 'active' к выбранному внутреннему табу
                tabs.forEach((t, i) => {
                    t.classList.toggle('red', i === index);
                });
            }
        });
    }
});
