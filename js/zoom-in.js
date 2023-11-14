var zoom = document.getElementById("zoom-in");
var zoomLevel = 100;
zoom.addEventListener("click", () => {
    zoomLevel += 5;
    document.body.style.zoom = `${zoomLevel}%`;
});