var normal = document.getElementById("normal-font");
var zoomLevel = 100;
normal.addEventListener("click", () => {
    zoomLevel = 100;
    document.body.style.zoom = `${zoomLevel}%`;
});