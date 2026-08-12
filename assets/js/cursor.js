(function () {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        return;
    }

    var dot = document.createElement("div");
    dot.className = "cursor-dot";
    var ring = document.createElement("div");
    ring.className = "cursor-ring";
    document.body.appendChild(dot);
    document.body.appendChild(ring);
    document.body.classList.add("custom-cursor-on");

    var mouseX = -100, mouseY = -100, ringX = -100, ringY = -100;

    document.addEventListener("mousemove", function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        dot.style.left = mouseX + "px";
        dot.style.top = mouseY + "px";
    });

    var interactive = "a, button, input, textarea, .bar, .box, .process-card, .work-item";

    document.addEventListener("mouseover", function (e) {
        if (e.target.closest(interactive)) {
            ring.classList.add("is-active");
        }
    });
    document.addEventListener("mouseout", function (e) {
        if (e.target.closest(interactive)) {
            ring.classList.remove("is-active");
        }
    });

    function loop() {
        ringX += (mouseX - ringX) * 0.18;
        ringY += (mouseY - ringY) * 0.18;
        ring.style.left = ringX + "px";
        ring.style.top = ringY + "px";
        requestAnimationFrame(loop);
    }
    loop();
})();
