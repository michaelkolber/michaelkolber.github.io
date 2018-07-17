document.addEventListener("DOMContentLoaded", function(event) {
    window.onscroll = function() {checkScroll();};

    var header = document.getElementById("nav");
    var offset = header.offsetTop;

    function checkScroll() {
        if (window.pageYOffset > offset) {
            header.classList.add("nav--sticky");
        } else {
            header.classList.remove("nav--sticky");
        }
    }
});
