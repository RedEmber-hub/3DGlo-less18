const timer = (deadline) => {
    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSeconds = document.getElementById('timer-seconds');

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;
        // let days = Math.floor(timeRemaining / 60 / 60 / 24);
        let hours = Math.floor(timeRemaining / 60 / 60) //% 24);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);

        return {
            timeRemaining,
            hours, minutes, seconds
        }
    }

    const updateClock = () => {
        let getTime = getTimeRemaining();

        if (getTime.timeRemaining <= 0) {
            clearInterval(setIntervalTimer);

            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';
        } else {
            timerHours.textContent = String(getTime.hours).padStart(2, '0');
            timerMinutes.textContent = String(getTime.minutes).padStart(2, '0');
            timerSeconds.textContent = String(getTime.seconds).padStart(2, '0');
        }
    }

    const setIntervalTimer = setInterval(updateClock, 1000);
}

export default timer;