function showSurprise() {
    const surprise = document.getElementById('surprise');
    surprise.style.display = 'block';
}

function startConfetti() {
    let confettiContainer = document.getElementById('confetti-container');
    for (let i = 0; i < 100; i++) {
        let confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        confettiContainer.appendChild(confetti);
    }
}

setTimeout(() => {
    let confettiElements = document.querySelectorAll('.confetti');
    confettiElements.forEach(element => {
        element.remove();
    });
}, 5000);
