$(document).ready(function () {
    var parts = window.location.pathname.split('/');
    var lastSegment = "./" + parts.pop() || parts.pop();  // handle potential trailing slash

    $('.container ul li a').each(function () {
        var link = $(this).attr('href');
        if (lastSegment === link) {
            var top = $(this).position().top;
            $('.arrow').css("top", top + 37);
        }
    })
})

$('.container ul li').mouseenter(function () {
    var top = $(this).position().top;
    $('.arrow').css("top", top + 36);
    $('.arrow').addClass('active');
})
$('.container ul').mouseleave(function () {
    $('.arrow').removeClass('active');
    var parts = window.location.pathname.split('/');
    var lastSegment = "./" + parts.pop() || parts.pop();  // handle potential trailing slash

    $('.container ul li a').each(function () {
        var link = $(this).attr('href');
        if (lastSegment === link) {
            var top = $(this).position().top;
            $('.arrow').css("top", top + 37);
        }
    })
})
