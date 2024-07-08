const dayElement = document.getElementById('day');
const hourElement = document.getElementById('hour');
const minuteElement = document.getElementById('minute');
const secondElement = document.getElementById('second');

const monthName = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
];

function updateClock() {
    let today = new Date();
    let d = today.getDate();
    let m = today.getMonth();
    let y = today.getFullYear();
    let h = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    h = h % 12;
    h = h ? h : 12;  

    dayElement.innerHTML = `${d} ${monthName[m]} ${y}`;
    hourElement.textContent = h.toString().padStart(2, '0');
    minuteElement.textContent = min.toString().padStart(2, '0');
    secondElement.textContent = sec.toString().padStart(2, '0');
}

// Update the clock immediately, and then every second
updateClock();
setInterval(updateClock, 1000);
