document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('animateButton');
    const image = document.getElementById('animatedImage');
    const durationSelect = document.getElementById('durationSelect');
    
    // Load user preferences from localStorage
    const savedDuration = localStorage.getItem('animationDuration');
    if (savedDuration) {
        durationSelect.value = savedDuration;
        image.style.transitionDuration = savedDuration;
    }
    
    // Store user preference for animation duration in localStorage
    durationSelect.addEventListener('change', () => {
        const selectedDuration = durationSelect.value;
        localStorage.setItem('animationDuration', selectedDuration);
        image.style.transitionDuration = selectedDuration;
    });

    // Button click event to trigger animation
    button.addEventListener('click', () => {
        image.classList.toggle('animate');
    });
});
