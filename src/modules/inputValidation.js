const inputValidation = () => {
    // проверка на ввод кириллицы в инпуты с type='text' и с плейсхолдером 'ваше сообщение'
    document.querySelectorAll('input[type="text"][placeholder="Ваше сообщение"]').forEach(input => {
        input.addEventListener('input', () => {
            input.value = input.value.trim().replace(/[^А-Яа-яЁё\s-]/g, '');
        });
    });

    // проверка на ввод только латиницы в любом регистре, цифры и спецсимволы:  @  -  _  . ! ~ * '
    document.querySelectorAll('input[type="email"]').forEach(input => {
        input.addEventListener('input', () => {
            input.value = input.value.trim().replace(/[^a-zA-Z0-9@._\-!~*']/g, '');
        });
    });

    // проверка на ввод только цифр, круглых скобок и дефис
    document.querySelectorAll('input[type="tel"]').forEach(input => {
        input.addEventListener('input', () => {
            input.value = input.value.trim().replace(/[^0-9()\-\s]/g, '');
        });
    });

    // проверка на ввод только цифр
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
}

export default inputValidation;