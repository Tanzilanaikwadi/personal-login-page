document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        
        window.addEventListener('scroll', () => {
            const sectionTop = section.getBoundingClientRect().top;
            const triggerPoint = window.innerHeight / 5 * 4;

            if (sectionTop < triggerPoint) {
                section.style.opacity = 1;
                section.style.transform = 'translateY(0)';
                section.style.transition = 'all 0.5s ease-out';
            }
        });
    });
});
