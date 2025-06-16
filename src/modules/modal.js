const modal = () => {
    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn');
    const closeBtn = modal.querySelector('.popup-close');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            showModal();
        })
    })

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
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

}

export default modal