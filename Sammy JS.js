document.addEventListener('DOMContentLoaded', () => {
    // 1. Anniversary Counter (Confession Date: 2025-02-14)
    const startDate = new Date('2025-02-14'); 
    const today = new Date();
    
    // Calculate the difference in days
    const diffTime = today - startDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    const daysElement = document.getElementById('daysCount');
    if (daysElement) {
        daysElement.innerText = diffDays;
    }

    // 2. Universal Mute Logic
    // Finds every mute button and links it to the video in its card
    const muteButtons = document.querySelectorAll('.mute-icon-btn');

    muteButtons.forEach(btn => {
        btn.onclick = (e) => {
            e.stopPropagation(); // Stops the click from triggering the card hover
            
            // Finds the video inside the same memory-card as the button
            const card = btn.closest('.memory-card');
            const vid = card.querySelector('video');
            
            if (vid) {
                vid.muted = !vid.muted;
                // 🔊 = Video is muted (click to unmute) | 🔇 = Sound is on (click to mute)
                btn.innerText = vid.muted ? "🔊" : "🔇";
            }
        };
    });

    // 3. Reveal Button Logic
    const revealBtn = document.getElementById('revealBtn');
    const secretMessage = document.getElementById('secretMessage');

    if (revealBtn && secretMessage) {
        revealBtn.onclick = () => {
            const isHidden = secretMessage.classList.toggle('d-none');
            if (!isHidden) secretMessage.classList.add('animate-fade-in');
            revealBtn.innerText = isHidden ? "Click for a Surprise" : "❤️";
        };
    }
});