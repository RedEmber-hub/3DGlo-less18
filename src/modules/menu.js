const menu = () => {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');

    const handleMenu = () => {
        menu.classList.toggle('active-menu')
    }

    menuBtn.addEventListener('click', handleMenu);

    menu.addEventListener('click', (e) => {
        // закрыть по кнопке "крестик"
        if (e.target.closest('.close-btn')) {
            handleMenu();
        }

        // закрыть по пункту меню
        if (e.target.closest('ul > li > a')) {
            handleMenu();
        }
    })

}
export default menu;