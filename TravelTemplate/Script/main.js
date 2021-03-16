
$(document).ready(function () {
    //Header Slider
    if (window.pageYOffset <= 250) {
        $(".header").slideDown(200)
        $("#header").css("background-color", "transparent")
    }
    else {
        $(".header").slideUp(200);
        $("#header").css("background-color", "#1ec6b6")
    }
    window.addEventListener("scroll", function () {
        if (window.pageYOffset <= 250) {
            $(".header").slideDown(200)
            $("#header").css("background-color", "transparent")
        }
        else {
            $(".header").slideUp(200);
            $("#header").css("background-color", "#1ec6b6")
        }
    })

    //Team Social Media
    $(".team-image").mouseenter(function () {
        $(this).next().css("display", "flex")
    })
    $(".social-media").mouseenter(function () {
        $(this).css("display", "flex")
    })
    $(".team-image").mouseleave(function () {
        $(this).next().css("display", "none")
    })

    //Feature Slider
    $(".feature-head").on("click", function () {
        if ($(this).next().is(":visible")) {
            $(this).next().slideUp(300)
        }
        else {
            $(".feature-card p").slideUp(300)
            $(this).next().slideDown(300)
        }
    })

    //LightGallery
    $('#thumbnials').lightGallery({
        thumbnail: true
    }); 
})
