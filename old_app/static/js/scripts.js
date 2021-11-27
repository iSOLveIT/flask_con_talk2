(function ($) {
    "use strict";
    $(window).on('load', function () {
        $('body').addClass('loaded');
    });
    
    // Burger Menu 
    var burgerMenu = function () {
        $('.js-BEDLA-nav-toggle').on('click', function (event) {
            event.preventDefault();
            var $this = $(this);
            if ($('body').hasClass('offcanvas')) {
                $this.removeClass('active');
                $this.removeClass('nav_shadow');
                $('body').removeClass('offcanvas');
            }
            else {
                $this.addClass('active');
                $this.addClass('nav_shadow');
                $('body').addClass('offcanvas');
            }
        });
    };
    
    // Click outside of offcanvass
    // var mobileMenuOutsideClick = function () {
    //     $(document).click(function (e) {
    //         var container = $("#bedla-aside, .js-BEDLA-nav-toggle");
    //         if (!container.is(e.target) && container.has(e.target).length === 0) {
    //             if ($('body').hasClass('offcanvas')) {
    //                 $('body').removeClass('offcanvas');
    //                 $('.js-BEDLA-nav-toggle').removeClass('active');
    //             }
    //         }
    //     });
    //     $(window).scroll(function () {
    //         if ($('body').hasClass('offcanvas')) {
    //             $('body').removeClass('offcanvas');
    //             $('.js-BEDLA-nav-toggle').removeClass('active');
    //         }
    //     });
    // };
    
    // Sub Menu 
    $('.bedla-main-menu li.BEDLA-sub>a').on('click', function () {
        $(this).removeAttr('href');
        var element = $(this).parent('li');
        if (element.hasClass('open')) {
            element.removeClass('open');
            element.find('li').removeClass('open');
            element.find('ul').slideUp();
        }
        else {
            element.addClass('open');
            element.children('ul').slideDown();
            element.siblings('li').children('ul').slideUp();
            element.siblings('li').removeClass('open');
            element.siblings('li').find('li').removeClass('open');
            element.siblings('li').find('ul').slideUp();
        }
    });
    $('.bedla-main-menu>ul>li.BEDLA-sub>a').append('<span class="holder"></span>');
    
    // Document on load.
    $(function () {
        burgerMenu();
        // mobileMenuOutsideClick();
    });
    
    var wind = $(window);

    
    // Navbar scrolling background 
    wind.on("scroll", function () {
        var bodyScroll = wind.scrollTop()
            , navbar = $(".navbar")
            , logo = $(".navbar:not(.nav-box) .logo> img");
        if (bodyScroll > 100) {
            navbar.addClass("nav-scroll");
            logo.attr('src', 'img/logo.png');
        }
        else {
            navbar.removeClass("nav-scroll");
            logo.attr('src', 'img/logo.png');
        }
    });
    
    // close navbar-collapse when a clicked
    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });
    
    /* *** Main Slider *** */
    $('.bedla-main-slider').owlCarousel({
        loop: true
        , margin: 10
        , nav: false
        , autoplay: true
        , items: 1
        , animateIn: "fadeIn"
        , animateOut: "fadeOut"
    });
    /* *** Gallery *** */
    (function () {
        $(document).on("click", ".click-to-expand", function () {
            var imageSrc = $(this).parents(".image-grid").find("img").attr("src");
            $(".js-modal-image").attr("src", imageSrc);
        });
    })();
    /* *** Isotope Active *** */
    $('.gallery-items').imagesLoaded(function () {
        // Add isotope click function
        $('.gallery-filter li').on('click', function () {
            $(".gallery-filter li").removeClass("active");
            $(this).addClass("active");
            var selector = $(this).attr('data-filter');
            $(".gallery-items").isotope({
                filter: selector
                , animationOptions: {
                    duration: 750
                    , easing: 'linear'
                    , queue: false
                , }
            });
            return false;
        });
        $(".gallery-items").isotope({
            itemSelector: '.single-item'
            , layoutMode: 'masonry'
        , });
    });
    /* *** Testimonial Carousel *** */
    $('#testimonial-carousel').owlCarousel({
        loop: true
        , autoplay: true
        , smartSpeed: 500
        , items: 1
        , nav: false
    });
    /* *** Button *** */
    var buttons = document.querySelectorAll(".BEDLA-btn .BEDLA-btn2");
    for (var i = 0; i < buttons.length; i++) {
        var button = buttons[i];
        button.addEventListener("click", function () {
            if (!button.classList.contains("active")) button.classList.add("active");
            else button.classList.remove("active");
        });
    }
})(jQuery);