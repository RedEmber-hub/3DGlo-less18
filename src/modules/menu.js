const menu = () => {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');

    const toggleMenu = (e) => {
        if (e.target === menuBtn || menuBtn.contains(e.target)) {
            menu.classList.toggle('active-menu');
        }

        if (e.target.closest('ul > li > a')) {
            menu.classList.remove('active-menu')
        }

        if (e.target.closest('.close-btn')) {
            menu.classList.remove('active-menu')
        }
    }

    document.addEventListener('click', toggleMenu);

}
export default menu;