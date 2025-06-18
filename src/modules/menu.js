const menu = () => {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');

    const toggleMenu = (e) => {
        // клик по кнопке "меню"
        if (e.target === menuBtn || menuBtn.contains(e.target)) {
            menu.classList.toggle('active-menu');
            return;
        }

        // клик по пунктам в меню
        if (e.target.closest('ul > li > a')) {
            menu.classList.remove('active-menu');
            return;
        }

        // клик по крестику в меню
        if (e.target.closest('.close-btn')) {
            menu.classList.remove('active-menu');
            return;
        }

        // клик вне меню
        if (!menu.contains(e.target)) {
            menu.classList.remove('active-menu')
        }
    }

    document.addEventListener('click', toggleMenu);

}
export default menu;