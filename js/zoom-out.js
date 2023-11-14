var zoom = document.getElementById("zoom-out");
var zoomLevel = 100;
zoom.addEventListener("click", () => {
    zoomLevel -= 5;
    document.body.style.zoom = `${zoomLevel}%`;
});