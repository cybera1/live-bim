const mobile_nav = document.getElementById("mobile_nav"),
    hambarger = document.querySelector(".hambarger"),
    close_nav_btn = document.querySelector(".mobile_nav .close-nav_menu .fa-times"),
    navbar = document.querySelector('nav.navbar'),
    mobile_nav_lists = document.querySelectorAll(".mobile_nav .list a");

hambarger.addEventListener("click", () => {
    mobile_nav.classList.add("open");
});

Array.from(mobile_nav_lists).forEach(link => {
    link.addEventListener('click', () => {
        mobile_nav.classList.remove("open");
    });
});

close_nav_btn.addEventListener("click", () => {
    mobile_nav.classList.remove("open");
});


window.addEventListener("scroll", () => {
    navbar.classList.toggle("sticky", window.scrollY > 100);
});

// Page loading animation
$(window).on('load', function () {
    if ($('.cover').length) {
        $('.cover').parallax({
            imageSrc: $('.cover').data('image'),
            zIndex: '1'
        });
    }

    $(".pre-loader").animate({
        'opacity': '0'
    }, 600, function () {
        setTimeout(function () {
            $(".pre-loader").css("visibility", "hidden").fadeOut();
        }, 300);
    });
});