var clk = 1;
document.addEventListener('mousemove', function (e) {
    var n = document.createElement("div");
    if (clk == 1) {
        n.style.backgroundColor = "red";
    } else if (clk == 2) {
        n.style.backgroundColor = "blue";

    } else if (clk == 3) {
        n.style.backgroundColor = "green";
    } else if (clk == 4) {
        n.style.backgroundColor = "yellow";
    } else if (clk == 5) {
        n.style.backgroundColor = "black";
    } else if (clk == 6) {
        clk = 1;
    }
    var x = e.clientX;
    var y = e.clientY;
    n.style.height = y + "px";
    n.style.width = x + "px";
    window.onclick = function () {
        clk++;
        document.getElementById("bod").appendChild(n);
    }
});
