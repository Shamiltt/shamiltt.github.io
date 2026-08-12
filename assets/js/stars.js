(function () {
    var layer = document.createElement("div");
    layer.id = "clouds";
    document.body.appendChild(layer);

    var count = 6;
    var colors = ["#ffffff", "#e8f4ff", "#dceeff"];
    for (var i = 0; i < count; i++) {
        var cloud = document.createElement("div");
        var w = Math.random() * 220 + 160;
        cloud.className = "cloud";
        cloud.style.width = w + "px";
        cloud.style.height = (w * 0.55) + "px";
        cloud.style.left = (Math.random() * 100) + "%";
        cloud.style.top = (Math.random() * 90) + "%";
        cloud.style.background = colors[i % colors.length];
        cloud.style.opacity = (Math.random() * 0.25 + 0.5);
        cloud.style.animationDuration = (Math.random() * 12 + 10) + "s";
        cloud.style.animationDelay = (Math.random() * 8) + "s";
        layer.appendChild(cloud);
    }
})();
