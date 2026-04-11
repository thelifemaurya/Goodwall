const profiles = [
    { color: "#ff5e5e", stats: [70, 60, 85, 40, 95, 20, 50, 60] }, // Top (Red)
    { color: "#64ccff", stats: [30, 85, 40, 70, 50, 90, 80, 40] }, // Right (Blue)
    { color: "#ffac5e", stats: [85, 40, 60, 90, 70, 30, 20, 95] }  // Left (Orange)
];

const barElements = ['s-special', 's-stamina', 's-shooting', 's-strength', 's-stealth', 's-flying', 's-diving', 's-lung'];
let currentIdx = 0;

function refreshUI() {
    const allSlices = document.querySelectorAll('.slice');
    allSlices.forEach(s => s.classList.remove('active'));

    const currentSlice = document.querySelector(`.slice[data-id="${currentIdx}"]`);
    if(currentSlice) currentSlice.classList.add('active');

    const data = profiles[currentIdx];
    barElements.forEach((id, i) => {
        const el = document.getElementById(id);
        el.style.width = data.stats[i] + '%';
        el.style.backgroundColor = data.color;
    });

    currentIdx = (currentIdx + 1) % 3;
}

// Auto-switch every 1.8 seconds for testing
setInterval(refreshUI, 1800);
refreshUI();
