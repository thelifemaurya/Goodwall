const charData = [
    { name: "Top", color: "#fb7070", stats: [70, 60, 80, 50, 90, 20, 40, 30] },
    { name: "Right", color: "#70c8fb", stats: [40, 30, 50, 40, 95, 10, 80, 20] },
    { name: "Left", color: "#fbb470", stats: [60, 85, 45, 70, 30, 40, 20, 60] }
];

const statIds = ['s-special', 's-stamina', 's-shooting', 's-strength', 's-stealth', 's-flying', 's-diving', 's-lung'];
const segments = document.querySelectorAll('.segment');
let current = 0;

function switchCharacter() {
    // Reset classes
    segments.forEach(s => s.classList.remove('active'));
    
    // Select next (loop 0, 1, 2 - skipping index 3 bottom)
    const data = charData[current];
    const activeSeg = document.querySelector(`.segment[data-id="${current}"]`);
    
    if (activeSeg) {
        activeSeg.classList.add('active');
        
        // Update Stats
        statIds.forEach((id, index) => {
            const bar = document.getElementById(id);
            bar.style.width = data.stats[index] + '%';
            bar.style.backgroundColor = data.color;
        });
    }

    current = (current + 1) % 3;
}

// Start the loop
setInterval(switchCharacter, 1500);
switchCharacter();
