let slideIndex = 0;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function showSlides(n) {
    let slides = document.querySelectorAll(".carousel-slide");
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}
document.querySelector(".prev-button").addEventListener("click", () => {
    plusSlides(-1);
});
document.querySelector(".next-button").addEventListener("click", () => {
    plusSlides(1);
});
