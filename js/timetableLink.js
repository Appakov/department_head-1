const timetableLinks = document.querySelectorAll('.group__timetable-link');
const tabContents = document.querySelectorAll('.tab-content');

const hideAllContents = () => {
    tabContents.forEach(content => {
        content.style.display = 'none';
    });
    timetableLinks.forEach(link => {
        link.parentElement.classList.remove('active');
    });
};

const showContent = (index = 0) => {
    tabContents[index].style.display = 'flex';
    timetableLinks[index].parentElement.classList.add('active');
};

hideAllContents();
showContent();


// file.js

document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.files__tab');
    const tabContents = document.querySelectorAll('.files__side-content');

    function deactivateAllTabs() {
        tabs.forEach(tab => tab.classList.remove('active'));
    }

    function deactivateAllContents() {
        tabContents.forEach(content => content.classList.remove('active'));
    }

    function activateTab(tab) {
        deactivateAllTabs();
        tab.classList.add('active');
    }

    function activateContent(contentIndex) {
        deactivateAllContents();
        tabContents[contentIndex].classList.add('active');
    }

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            activateTab(tab);
            activateContent(index);
        });
    });

    // По умолчанию активируем первую вкладку
    activateTab(tabs[0]);
    activateContent(0);
});
