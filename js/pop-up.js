document.addEventListener("DOMContentLoaded", function() {
    const pop_up = document.getElementById("pop-up");
    const close = document.getElementById("close");
    const overlay = document.getElementById("overlay");

    pop_up.style.display = "block";
    overlay.style.display = "block";
    pop_up.style.zIndex = "2";
    window.document.body.style.overflow="hidden";

    close.addEventListener("click", function() {
        pop_up.style.display = "none";
        overlay.style.display = "none";
        window.document.body.style.overflow="scroll";
    });
    window.addEventListener("click", function(event) {
        if (event.target === pop_up) {
            pop_up.style.display = "none";
            overlay.style.display = "none";
        }
    });
});
