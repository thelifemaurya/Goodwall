const characters = [
    { name: "MICHAEL", stats: [80, 40, 90, 30, 20] }, // Top
    { name: "TREVOR", stats: [95, 60, 70, 80, 10] },  // Right
    { name: "FRANKLIN", stats: [50, 90, 60, 50, 80] }, // Left
    { name: "", stats: [0, 0, 0, 0, 0] }               // Bottom (Empty)
];

let currentIndex = 0;
const segments = document.querySelectorAll('.wheel-segment');
const bars = ['special', 'stamina', 'shooting', 'strength', 'stealth'];

function updateUI(index) {
    // Update Wheel Selection
    segments.forEach(seg => seg.classList.remove('active'));
    
    // Find the segment with the matching data-id
    const activeSeg = document.querySelector(`.wheel-segment[data-id="${index}"]`);
    if(activeSeg) activeSeg.classList.add('active');

    // Update Stats
    const char = characters[index];
    document.getElementById('charName').innerText = char.name;
    
    bars.forEach((stat, i) => {
        const barFill = document.getElementById(`stat-${stat}`);
        barFill.style.width = char.stats[i] + '%';
    });
}

// Auto-switch interval
setInterval(() => {
    // Switch between 0, 1, 2 (Skip 3 as it's the empty black section)
    currentIndex = (currentIndex + 1) % 3; 
    updateUI(currentIndex);
}, 1500);

// Initialize
updateUI(0);

