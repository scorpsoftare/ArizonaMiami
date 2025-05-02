document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('download');
    const section = document.querySelector('.form-section');

    button.addEventListener('click', () => {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const launcherLink = document.querySelector('.menu__link[href=""]');
    const launcherSection = document.querySelector('.form-section');

    const menuSubList = document.querySelector('.menu__sub-list');
    if (menuSubList) {
        menuSubList.remove();
    }

    launcherLink.addEventListener('click', (e) => {
        e.preventDefault(); 
        launcherSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    detectDeviceAndSetTab();
});
