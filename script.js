const countdown = () => {
    const endDate = new Date('2026-02-01T00:00:00');
    const now = new Date();
    const diff = endDate - now;

    if (diff <= 0) {
        document.querySelector('.countdown').innerHTML = "<h2>加油！已到考試日！</h2>";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById('days').textContent = days.toString().padStart(3, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

    // 顯示當下時間
    const currentTime = now.toLocaleString('zh-TW', { hour12: false });
    document.getElementById('current-time').textContent = `${currentTime}`;
};

setInterval(countdown, 1000);
countdown();