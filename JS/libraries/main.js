document.addEventListener("DOMContentLoaded", function () {
    const phases = ["first-phase", "second-phase", "third-phase"];
    let currentIndex = 0;

    function showPhase(index) {
        const element = document.querySelector(`.${phases[index]}`);
        element.style.display = "block";
        element.style.opacity = 0;
        setTimeout(() => {
            element.style.transition = "opacity 1s";
            element.style.opacity = 1;
        }, 10);
    }

    function hidePhase(index, callback) {
        const element = document.querySelector(`.${phases[index]}`);
        element.style.transition = "opacity 1s";
        element.style.opacity = 0;
        setTimeout(() => {
            element.style.display = "none";
            callback();
        }, 1000);
    }

    function nextPhase() {
        if (currentIndex < phases.length - 1) {
            hidePhase(currentIndex, () => {
                currentIndex++;
                showPhase(currentIndex);
            });
        }
    }

    // Initialize by showing the first phase
    showPhase(currentIndex);

    // Cycle through the phases, stopping at third-phase
    const interval = setInterval(() => {
        nextPhase();
        if (currentIndex === phases.length - 1) {
            clearInterval(interval);
        }
    }, 6000);
});
