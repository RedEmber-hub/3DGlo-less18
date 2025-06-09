const dateTime = () => {
    const infoBlock = document.getElementById('dateTimeBlock');

    const getTimeGreeting = () => {
        const hours = new Date().getHours();

        if (hours >= 5 && hours < 10) return 'Доброе утро';
        if (hours >= 10 && hours < 18) return 'Добрый день';
        if (hours >= 18 && hours < 23) return 'Добрый вечер';
        return 'Доброй ночи';
    }

    const getDayOfWeek = () => {
        const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

        return days[new Date().getDay()];
    }

    const getTimeNow = () => {
        return new Date().toLocaleTimeString('ru-Ru');
    }

    const getDaysUntilNewYear = () => {
        const now = new Date();
        const newYear = new Date(now.getFullYear() + 1, 0, 1);

        return Math.floor((newYear - now) / 1000 / 60 / 60 / 24);
    }

    infoBlock.innerHTML = `
    ${getTimeGreeting()} <br>
    Сегодня: ${getDayOfWeek()} <br>
    Текущее время: ${getTimeNow()} <br>
    До нового года осталось: ${getDaysUntilNewYear()} дней`
}

setInterval(dateTime, 1000);
