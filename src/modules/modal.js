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
        let opacity = 0;

        // мобильное устройство без анимации
        if (window.innerWidth < 768) {
            modal.style.display = 'block';
            return;
        }

        function fadeIn() {
            opacity += 0.05;
            modal.style.opacity = opacity;
            if (opacity < 1) requestAnimationFrame(fadeIn);
        }

        requestAnimationFrame(fadeIn);
    }

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modal.style.display = 'none';
        };

    })

}

export default modal