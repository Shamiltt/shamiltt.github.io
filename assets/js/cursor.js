(function () {
    var dot = document.createElement("div");
    dot.id = "cursor-dot";
    var ring = document.createElement("div");
    ring.id = "cursor-ring";
    document.body.appendChild(dot);
    document.body.appendChild(ring);
    document.body.classList.add("custom-cursor-on");

    var mx = -100, my = -100, rx = -100, ry = -100;

    window.addEventListener("mousemove", function (e) {
        mx = e.clientX;
        my = e.clientY;
        dot.style.left = mx + "px";
        dot.style.top = my + "px";
    }, { passive: true });

    (function loop() {
        rx += (mx - rx) * 0.18;
        ry += (my - ry) * 0.18;
        ring.style.left = rx + "px";
        ring.style.top = ry + "px";
        requestAnimationFrame(loop);
    })();

    var interactive = "a, button, input, textarea, .bar, .box, .process-card, .work-item";

    document.addEventListener("mouseover", function (e) {
        if (e.target && e.target.closest && e.target.closest(interactive)) {
            ring.classList.add("is-active");
        }
    });
    document.addEventListener("mouseout", function (e) {
        if (e.target && e.target.closest && e.target.closest(interactive)) {
            ring.classList.remove("is-active");
        }
    });
})();
