(function () {
    var layer = document.createElement("div");
    layer.id = "stars";
    document.body.appendChild(layer);

    var count = 140;
    for (var i = 0; i < count; i++) {
        var star = document.createElement("div");
        var size = Math.random() < 0.85 ? (Math.random() * 1.6 + 0.6) : (Math.random() * 2.5 + 2);
        star.className = "star" + (size > 2.4 ? " star-glow" : "");
        star.style.width = size + "px";
        star.style.height = size + "px";
        star.style.left = (Math.random() * 100) + "%";
        star.style.top = (Math.random() * 100) + "%";
        star.style.animationDuration = (Math.random() * 3 + 2) + "s";
        star.style.animationDelay = (Math.random() * 5) + "s";
        layer.appendChild(star);
    }
})();
