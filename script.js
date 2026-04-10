const data = [
    { color: "#ff5e5e", stats: [65, 50, 80, 40, 90, 30, 60, 20] }, // Red Char
    { color: "#64ccff", stats: [40, 35, 60, 45, 95, 20, 75, 40] }, // Blue Char
    { color: "#ffac5e", stats: [75, 80, 50, 70, 40, 60, 30, 80] }  // Orange Char
];

const barIds = ['s-special', 's-stamina', 's-shooting', 's-strength', 's-stealth', 's-flying', 's-diving', 's-lung'];
let idx = 0;

function update() {
    const slices = document.querySelectorAll('.slice');
    slices.forEach(s => s.classList.remove('active'));
    
    // Switch character (cycling 0, 1, 2)
    const activeSlice = document.querySelector(`.slice[data-id="${idx}"]`);
    activeSlice.classList.add('active');

    const currentData = data[idx];
    
    barIds.forEach((id, i) => {
        const bar = document.getElementById(id);
        bar.style.width = currentData.stats[i] + '%';
        bar.style.backgroundColor = currentData.color;
    });

    idx = (idx + 1) % 3;
}

setInterval(update, 1500);
update();
