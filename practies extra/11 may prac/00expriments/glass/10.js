// Theme System
const THEMES = {
    space: { label: '🌙 Night Mode' },
    rain: { label: '☔ Rain Mode' },
    snow: { label: '❄️ Snow Mode' },
    sun: { label: '☀️ Sunny Mode' }
};

const body = document.body;
const themeBtn = document.getElementById('themeBtn');
const themeIcon = document.getElementById('themeIcon');
const themeLabel = document.getElementById('themeLabel');
const dropdown = document.getElementById('themeDropdown');
const options = document.querySelectorAll('.theme-option');

let currentTheme = localStorage.getItem('aayush-theme') || 'space';

function applyTheme(name) {
    body.classList.remove('rain', 'snow', 'sun');
    if (name !== 'space') body.classList.add(name);
    currentTheme = name;
    localStorage.setItem('aayush-theme', name);
    themeLabel.innerHTML = THEMES[name].label;
    options.forEach(opt => opt.classList.toggle('selected', opt.dataset.theme === name));
}

function toggleDropdown(force) {
    dropdown.classList.toggle('open', force !== undefined ? force : !dropdown.classList.contains('open'));
    themeBtn.classList.toggle('open', dropdown.classList.contains('open'));
}

themeBtn.addEventListener('click', e => { e.stopPropagation(); toggleDropdown(); });
options.forEach(opt => {
    opt.addEventListener('click', () => { applyTheme(opt.dataset.theme); toggleDropdown(false); });
});
document.addEventListener('click', () => toggleDropdown(false));
applyTheme(currentTheme);

// Rain Particles
(function setupRain() {
    const canvas = document.getElementById('rain-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let drops = [], animId = null;
    function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
    function init() {
        drops = [];
        for (let i = 0; i < (canvas.width / 8); i++) {
            drops.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, len: Math.random() * 18 + 8, speed: Math.random() * 7 + 5, opacity: Math.random() * 0.4 + 0.1 });
        }
    }
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drops.forEach(d => {
            ctx.beginPath();
            ctx.moveTo(d.x, d.y);
            ctx.lineTo(d.x - 1.5, d.y + d.len);
            ctx.strokeStyle = `rgba(130, 200, 255, ${d.opacity})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
            d.y += d.speed;
            if (d.y > canvas.height) { d.y = -d.len; d.x = Math.random() * canvas.width; }
        });
        animId = requestAnimationFrame(draw);
    }
    function start() { if (!animId) { resize(); init(); draw(); } }
    function stop() { if (animId) { cancelAnimationFrame(animId); animId = null; ctx.clearRect(0, 0, canvas.width, canvas.height); } }
    window.addEventListener('resize', () => { if (animId) { resize(); init(); } });
    const obs = new MutationObserver(() => body.classList.contains('rain') ? start() : stop());
    obs.observe(body, { attributes: true, attributeFilter: ['class'] });
    if (body.classList.contains('rain')) start();
})();

// Snow Particles
(function setupSnow() {
    const canvas = document.getElementById('snow-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let flakes = [], animId = null;
    function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
    function init() {
        flakes = [];
        for (let i = 0; i < (canvas.width / 12); i++) {
            flakes.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, r: Math.random() * 3 + 1, speed: Math.random() * 1.2 + 0.5, drift: (Math.random() - 0.5) * 0.5, opacity: Math.random() * 0.5 + 0.2 });
        }
    }
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        flakes.forEach(f => {
            ctx.beginPath();
            ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(220, 235, 255, ${f.opacity})`;
            ctx.fill();
            f.y += f.speed;
            f.x += f.drift;
            if (f.y > canvas.height) { f.y = -5; f.x = Math.random() * canvas.width; }
            if (f.x > canvas.width) f.x = 0;
            if (f.x < 0) f.x = canvas.width;
        });
        animId = requestAnimationFrame(draw);
    }
    function start() { if (!animId) { resize(); init(); draw(); } }
    function stop() { if (animId) { cancelAnimationFrame(animId); animId = null; ctx.clearRect(0, 0, canvas.width, canvas.height); } }
    window.addEventListener('resize', () => { if (animId) { resize(); init(); } });
    const obs = new MutationObserver(() => body.classList.contains('snow') ? start() : stop());
    obs.observe(body, { attributes: true, attributeFilter: ['class'] });
    if (body.classList.contains('snow')) start();
})();