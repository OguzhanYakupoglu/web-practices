$('.menu-button').on("click", function () {
    $('.mobile-menu-content').slideDown();
    $('.mobile-menu-content').css("display", "flex");
})
$('.close-menu-icon').on("click", function () {
    $('.mobile-menu-content').slideUp();
})
window.onresize = function () {
    if ($(window).width() > 991) {
        $('.mobile-menu-content').slideUp();
    }
}

$(document).ready(function () {
    var loc ="./" + window.location.pathname.split('/')[5]
    $('.header-menu nav ul li a').each(function () {
        var $this = $(this);
        if ($this.attr('href').indexOf(loc) !== -1) {
            $(this).parent().addClass("active");
        }
    })
})