document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll(".item");
    items.forEach(item => {
        const text = item.querySelector("h2"); // Select the text element
        const dropdown = item.querySelector(".dropdown");
        
        text.addEventListener("mouseenter", function() {
            dropdown.classList.add("show");
        });

        item.addEventListener("mouseleave", function() {
            dropdown.classList.remove("show");
        });
    });
});

document.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const documentHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercentage = scrollPosition / documentHeight;

    if (scrollPercentage <= 0.5) {
        const lightYellowToBlue = scrollPercentage * 2; // 0 to 1 for lightgoldenrodyellow to blue
        const r = Math.round(250 - (250 - 0) * lightYellowToBlue);
        const g = Math.round(250 - (250 - 0) * lightYellowToBlue);
        const b = Math.round(210 + (255 - 210) * lightYellowToBlue);
        document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    } else {
        const blueToPink = (scrollPercentage - 0.5) * 2; // 0 to 1 for blue to pink
        const r = Math.round(0 + (255 - 0) * blueToPink);
        const g = Math.round(0 + (192 - 0) * blueToPink);
        const b = Math.round(255 - (255 - 203) * blueToPink);
        document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
});
