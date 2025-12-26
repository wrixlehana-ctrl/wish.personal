document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('toggleMode');
    const body = document.body;

    if (toggleBtn) {
        toggleBtn.addEventListener('click', function() {
            body.classList.toggle('dark-mode');
            const icon = this.querySelector('i');
            if (body.classList.contains('dark-mode')) {
                this.innerHTML = '☀️ Light Mode';
            } else {
                this.innerHTML = '🌙 Dark Mode';
            }
        });
    }

    // Smooth scroll untuk link internal
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Animasi counter (contoh untuk section stats)
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                element.textContent = target + '+';
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(start) + '+';
            }
        }, 16);
    }
});