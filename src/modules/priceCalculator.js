const priceCalculator = () => {
    document.querySelectorAll('input.calc-item').forEach(input => {
        input.addEventListener('keydown', (e) => {
            const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Tab', 'Delete'];
            if (!e.key.match(/^\d$/) && !allowedKeys.includes(e.key)) {
                e.preventDefault();
            }
        });

        input.addEventListener('input', () => {
            input.value = input.value.replace(/\D/g, '');
        });
    })
};

export default priceCalculator;