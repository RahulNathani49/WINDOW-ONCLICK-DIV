$(document).ready(function () {


    $(document).click(function (t) {

        var n = document.createElement("div");

        function getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
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
