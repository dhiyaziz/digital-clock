function updateTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
}

function updateDayIntro() {
    const dayNameElement = document.getElementById('dayName');
    const now = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    dayNameElement.textContent = now.toLocaleDateString('en-US', options);
}

// Update time and day information
setInterval(updateTime, 1000);
updateTime();
updateDayIntro();
