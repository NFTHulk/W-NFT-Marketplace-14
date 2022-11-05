(function($) {
    "use strict"
    jQuery(document).ready(function() {

        //Data Background Set
        $('[data-background]').each(function() {
            $(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
        });

        //ScrollTop Button 
        $(".scroll-top-btn").on("click", function() {
            $("body,html").animate({
                scrollTop: 0, 
            }, 'easeInQuart');
        });

        $(window).on("scroll", function(){
            var scrollBar = $(this).scrollTop();
            if ( scrollBar > 200 ) {
                $(".scroll-top-btn").fadeIn(); 
            } else {
                $(".scroll-top-btn").fadeOut();
            }

            //Sticky Header 
            if ( scrollBar > 200 ) {
                $(".nft-header-area").addClass("sticky-header"); 
            } else {
                $(".nft-header-area").removeClass("sticky-header");
            }

        });


        //Mobile Menu 
        $(".mobile-menu-open").on("click", function(){
            $(".nft-mobile-menu").toggleClass("mobile-menu-active"); 
            $(this).toggleClass("active");
        });

        $(".nft-mobile-menu ul li.has-submenu a").each(function(){
            $(this).on("click", function(){
                $(this).siblings('ul').slideToggle();
            });
        });

        //Top Sellers Slider 
        $(".nft-tps-list").slick({
            autoplay: true, 
            slidesToShow: 4,
            arrows: false, 
            dots: false,
            responsive: [
                {
                    breakpoint: 992, 
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 768, 
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 576, 
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });

        //Collection Slider 
        $(".pp-collection-slider").slick({
            autoplay: false, 
            slidesToShow: 3,
            dots: false,
            prevArrow: "<button type='button' class='prev-btn'><i class='fa-solid fa-angle-left'></i></button>",
            nextArrow: "<button type='button' class='next-btn'><i class='fa-solid fa-angle-right'></i></button>",
            responsive: [
                {
                    breakpoint: 992, 
                    settings: {
                        slidesToShow: 2
                    }
                }, 
                {
                    breakpoint: 768, 
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });

        //Testimonial Slider 
        $(".nft-ts-slider").slick({
            autoplay: true, 
            slidesToShow: 2, 
            dots: false, 
            prevArrow: "<button type='button' class='prev-btn'><i class='fa-solid fa-angle-left'></i></button>",
            nextArrow: "<button type='button' class='next-btn'><i class='fa-solid fa-angle-right'></i></button>",
            responsive: [
                {
                    breakpoint: 768, 
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });

        //Blog Slider
        $(".nft-blogs").slick({
            autoplay: false, 
            slidesToShow: 1, 
            dots: false, 
            prevArrow: "<button type='button' class='prev-btn'><i class='fa-solid fa-angle-left'></i></button>",
            nextArrow: "<button type='button' class='next-btn'><i class='fa-solid fa-angle-right'></i></button>"
        });

        //Auction Slider
        $(".nft-auction-slider").slick({
            slidesToShow: 3, 
            centerMode: true,
            dots: false, 
            prevArrow: "<button type='button' class='prev-btn'><i class='fa-solid fa-angle-left'></i></button>",
            nextArrow: "<button type='button' class='next-btn'><i class='fa-solid fa-angle-right'></i></button>",
            responsive: [
                {
                    breakpoint: 1080, 
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 768, 
                    settings: {
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 576, 
                    settings: {
                        slidesToShow: 1,
                        centerMode: false,
                    }
                },
            ]
        });


        //Artwork Filter
        var $grid = $(".grid");
        $grid.isotope({
            itemSelector: '.grid-item',
        });

        $('.filter-button-group').on( 'click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });

        $(".filter-button-group button").each(function(){
            $(this).on("click", function(){
                $(this).parent().find("button.active").removeClass(); 
                $(this).addClass("active");
            });
        });

        //Auction Countdown Timer
        $(".countdown").each(function(){
            var $dataTime = $(this).attr('data-time');
            $(this).downCount({
                date: $dataTime,
                offset: +6
            }); 
        });

        //NiceSelect
        $('select').niceSelect();

        //File Upload
        $(".file-upload").on("click", function(){
            $("#file_upload").click();
        }); 

        $("#file_upload").on("change", function(){
            var $fileName = this.files[0].name;
            $(".file-upload span").text($fileName);
        });

    });

    jQuery(window).on('load', function() {

        // WOW JS
        new WOW().init();

        // Preloader
        var preLoder = $(".preload-wrapper");
        preLoder.fadeOut(0);

    });

})(jQuery);
