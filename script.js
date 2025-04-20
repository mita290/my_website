//to make navigation bar disappear
let lastScrollTop = 0;

window.addEventListener("scroll", function() {
    let currentScroll = window.scrollY || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scroll down
        document.getElementById("navbar").classList.add("hidden");
    } else {
        // Scroll up
        document.getElementById("navbar").classList.remove("hidden");
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
}, false);

document.getElementById("about-me").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default action

    // Calculate the scale factor
    const scaleFactor = 0.8; // Adjust as needed

    // Calculate the new width and height
    const currentWidth = window.innerWidth;
    const currentHeight = window.innerHeight;
    const newWidth = Math.round(currentWidth * scaleFactor);
    const newHeight = Math.round(currentHeight * scaleFactor);

    // Calculate the position for the new window
    const left = window.screenX + (currentWidth - newWidth) / 2;
    const top = window.screenY + (currentHeight - newHeight) / 2;

    // Open the new window with the calculated size and position
    window.open("about.html", "_blank", "width=" + newWidth + ",height=" + newHeight + ",left=" + left + ",top=" + top);
});

document.getElementById("get-in-touch").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default action

    // Scroll to the bottom of the page
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });

    // Change the opacity and background color of the footer for 2 seconds
    document.querySelector("footer").style.opacity = "0.5";
    document.querySelector("footer").style.backgroundColor = "darkblue";
    setTimeout(function() {
        document.querySelector("footer").style.opacity = "0.5"; // Reset the opacity after 2 seconds
        document.querySelector("footer").style.backgroundColor = "black"; // Reset the background color after 2 seconds
    }, 400);
});
