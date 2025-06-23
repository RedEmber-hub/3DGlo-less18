import { animate } from './helpers';

const modal = () => {
    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            showModal();
        })
    })

    function showModal() {
        modal.style.display = 'block';
        modal.style.opacity = 0;

        // мобильное устройство без анимации
        if (window.innerWidth < 768) return;

        // анимация появления модального окна
        setTimeout(() => {
            animate({
                duration: 300,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    modal.style.opacity = progress;
                }
            });
        }, 700);
    }

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modal.style.opacity = 0;
            modal.style.display = 'none';
        };

    })

}

export default modal