$(document).ready(function () {


    $(document).click(function (t) {

        var n = document.createElement("div");

        function getRandomColor() {
            return `hsla(${(360 * Math.random())},70%,70%,.8)`
        }
        n.style.backgroundColor = getRandomColor();
        document.getElementById("bod").appendChild(n);
        $(document).mousemove(function (e) {

            $("div:last-child").css({
                "height": e.clientY,
                "width": e.clientX,
            });
        });

    });
});
