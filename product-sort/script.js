// JavaScript source codess
$(document).ready(function () {
    $('.grid').isotope({
        filter: "*",
    })
})
$('button').on("click", function () {
    var filterVal = $(this).attr('data-filter');
    $('.grid').isotope({
        filter: filterVal,
    })
})