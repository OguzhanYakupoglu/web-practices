var myLinks = $("#myLinks");
function toggleNav() {
    myLinks.toggle();
}

var a = $("#myLinks");
window.addEventListener("resize", function () {
    if (window.matchMedia("(min-width: 600px)").matches)
        a.css("display","block")
    else
        a.css("display", "none")
})