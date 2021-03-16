$('.menu-btn').on('click', function () {
    $('.top-menu').toggleClass('open');
})

$('.menu-icon').on('click', function () {
    $('.menu-icon').toggleClass("active");
})

$('.button').hover(function () {
    $('.button .button-anim').toggleClass('show');
})
$('.icon-container').hover(function () {
    $('.icon-container i').toggleClass('active');
})
$('.buy-btn').on('click', function () {
    $('.buy-btn .icons i.bag, .buy-btn p, .buy-btn .icons, .buy-btn i.check').addClass('active');
    setTimeout(function () {
        $('.buy-btn .icons i.bag, .buy-btn p, .buy-btn .icons, .buy-btn i.check').removeClass('active');
    }, 2500);
})
