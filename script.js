const barIds = ['s-special', 's-stamina', 's-shooting', 's-strength', 's-stealth', 's-flying', 's-diving', 's-lung'];

const timeline = [
    { 
        color: "#7E261F", 
        stats: [85, 70, 95, 60, 40, 55, 30, 80],
        start: 0,    // 1:08 starts immediately
        end: 15000   // 1:23 (15 seconds duration)
    },
    { 
        color: "#59F8F6", 
        stats: [40, 90, 60, 85, 95, 30, 75, 50],
        start: 15000, // 1:23 starts
        end: 64000    // 2:12 (49 seconds duration)
    },
    { 
        color: "#FBAE67", 
        stats: [95, 50, 80, 70, 60, 95, 45, 90],
        start: 64000, // 2:12 starts
        end: 75000    // 2:23 (11 seconds duration)
    }
];

let phase = 0;

function runAnimation() {
    const current = timeline[phase];
    
    // Update bars
    barIds.forEach((id, i) => {
        const bar = document.getElementById(id);
        bar.style.backgroundColor = current.color;
        bar.style.width = current.stats[i] + '%';
    });

    // Calculate duration for next phase
    const duration = current.end - current.start;

    // Move to next phase after duration
    setTimeout(() => {
        phase = (phase + 1) % timeline.length;
        runAnimation();
    }, duration);
}

// Start the sequence
runAnimation();
