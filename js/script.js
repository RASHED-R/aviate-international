var THEMEMASCOT = {};
(function($) {

    "use strict";


    /* ---------------------------------------------------------------------- */
    /* --------------------------- Start Demo Switcher  --------------------- */
    /* ---------------------------------------------------------------------- */
    var showSwitcher = true;
    var $body = $('body');
    var $style_switcher = $('#style-switcher');
    if (!$style_switcher.length && showSwitcher) {
        $.ajax({
            url: "color-switcher/style-switcher.html",
            success: function(data) {
                $body.append(data);
            },
            dataType: 'html'
        });
    }
    /* ---------------------------------------------------------------------- */
    /* ----------------------------- En Demo Switcher  ---------------------- */
    /* ---------------------------------------------------------------------- */


    THEMEMASCOT.isRTL = {
        check: function() {
            if ($("html").attr("dir") === "rtl") {
                return true;
            } else {
                return false;
            }
        }
    };

    THEMEMASCOT.isLTR = {
        check: function() {
            if ($("html").attr("dir") !== "rtl") {
                return true;
            } else {
                return false;
            }
        }
    };

    //Hide Loading Box (Preloader)
    function handlePreloader() {
        if ($('.preloader').length) {
            $('.preloader').delay(200).fadeOut(500);
        }
    }

    //Update Header Style and Scroll to Top
    function headerStyle() {
        if ($('.main-header').length) {
            var windowpos = $(window).scrollTop();
            var siteHeader = $('.header-style-one');
            var scrollLink = $('.scroll-to-top');
            var sticky_header = $('.main-header .sticky-header');
            if (windowpos > 100) {
                sticky_header.addClass("fixed-header animated slideInDown");
                scrollLink.fadeIn(300);
            } else {
                sticky_header.removeClass("fixed-header animated slideInDown");
                scrollLink.fadeOut(300);
            }
            if (windowpos > 1) {
                siteHeader.addClass("fixed-header");
            } else {
                siteHeader.removeClass("fixed-header");
            }
        }
    }
    headerStyle();

    //Submenu Dropdown Toggle
    if ($('.main-header li.dropdown ul').length) {
        $('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><i class="fa fa-angle-down"></i></div>');
    }

    //Hidder bar
    if ($('.hidden-bar').length) {
        //Menu Toggle Btn
        $('.toggle-hidden-bar').on('click', function() {
            $('body').addClass('active-hidden-bar');
        });

        //Menu Toggle Btn
        $('.hidden-bar-back-drop, .hidden-bar .close-btn').on('click', function() {
            $('body').removeClass('active-hidden-bar');
        });
    }

    //Mobile Nav Hide Show
    if ($('.mobile-menu').length) {

        var mobileMenuContent = $('.main-header .main-menu .navigation').html();

        $('.mobile-menu .navigation').append(mobileMenuContent);
        $('.sticky-header .navigation').append(mobileMenuContent);
        $('.mobile-menu .close-btn').on('click', function() {
            $('body').removeClass('mobile-menu-visible');
        });

        //Dropdown Button
        $('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
            $(this).prev('ul').slideToggle(500);
            $(this).toggleClass('active');
        });

        //Menu Toggle Btn
        $('.mobile-nav-toggler').on('click', function() {
            $('body').addClass('mobile-menu-visible');
        });

        //Menu Toggle Btn
        $('.mobile-menu .menu-backdrop, .mobile-menu .close-btn').on('click', function() {
            $('body').removeClass('mobile-menu-visible');
        });

    }


    //Header Search
    if ($('.search-btn').length) {
        $('.search-btn').on('click', function() {
            $('.main-header').addClass('moblie-search-active');
        });
        $('.close-search, .search-back-drop').on('click', function() {
            $('.main-header').removeClass('moblie-search-active');
        });
    }


    //Service Block Hover
    if ($('.feature-block-two').length) {
        var $feature_block_two = $('.feature-block-two .inner-box');
        $($feature_block_two).on('mouseenter', function(e) {
            $(this).find('.content .inner').stop().slideDown(400);
            return false;
        });
        $($feature_block_two).on('mouseleave', function(e) {
            $(this).find('.content .inner').stop().slideUp(400);
            return false;
        });
    }

    //Service Block Hover
    $('.services-section-four .service-block-four').hover(function() {
        $(this).siblings('.service-block-four').removeClass('active'), $(this).addClass('active')
    })


    //Choose Block Hover
    if ($('.choose-block-two').length) {
        var $choose_block_two = $('.choose-block-two .inner-box');
        $($choose_block_two).on('mouseenter', function(e) {
            $(this).find('.content .inner').stop().slideDown(400);
            return false;
        });
        $($choose_block_two).on('mouseleave', function(e) {
            $(this).find('.content .inner').stop().slideUp(400);
            return false;
        });
    }

    //Banner Carousel
    if ($('.banner-carousel').length) {
        $('.banner-carousel').owlCarousel({
            rtl: THEMEMASCOT.isRTL.check(),
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            loop: true,
            margin: 0,
            nav: true,
            smartSpeed: 500,
            autoHeight: true,
            autoplay: true,
            autoplayTimeout: 10000,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1024: {
                    items: 1
                },
            }
        });
    }


    // Services Carousel
    if ($('.service-carousel').length) {
        $('.service-carousel').owlCarousel({
            rtl: THEMEMASCOT.isRTL.check(),
            loop: true,
            margin: 30,
            nav: false,
            items: 1,
            smartSpeed: 700,
            autoplay: false,
            navText: ['<span class="flaticon-left-chevron"></span>', '<span class="flaticon-right-chevron"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1024: {
                    items: 3
                },
                1200: {
                    items: 4
                },
            }
        });
    }


    // Services Carousel
    if ($('.service-carousel-two').length) {
        $('.service-carousel-two').owlCarousel({
            rtl: THEMEMASCOT.isRTL.check(),
            loop: true,
            margin: 30,
            nav: false,
            items: 1,
            smartSpeed: 700,
            autoplay: false,
            navText: ['<span class="flaticon-left-chevron"></span>', '<span class="flaticon-right-chevron"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1024: {
                    items: 3
                },
                1200: {
                    items: 3
                },
            }
        });
    }


    // team Carousel
    if ($('.team-carousel').length) {
        $('.team-carousel').owlCarousel({
            rtl: THEMEMASCOT.isRTL.check(),
            loop: true,
            margin: 30,
            nav: false,
            items: 1,
            smartSpeed: 700,
            autoplay: false,
            navText: ['<span class="flaticon-left-chevron"></span>', '<span class="flaticon-right-chevron"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1024: {
                    items: 3
                },
                1200: {
                    items: 4
                },
            }
        });
    }


    // Project Carousel
    if ($('.project-carousel').length) {
        $('.project-carousel').owlCarousel({
            rtl: THEMEMASCOT.isRTL.check(),
            loop: true,
            margin: 30,
            nav: true,
            items: 1,
            smartSpeed: 700,
            autoplay: false,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1024: {
                    items: 3
                },
                1200: {
                    items: 3
                },
            }
        });
    }


    // Project Carousel
    if ($('.project-carousel-three').length) {
        $('.project-carousel-three').owlCarousel({
            rtl: THEMEMASCOT.isRTL.check(),
            loop: true,
            margin: 30,
            nav: true,
            items: 1,
            smartSpeed: 700,
            autoplay: false,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
        });
    }


    // country Carousel
    if ($('.country-carousel').length) {
        $('.country-carousel').owlCarousel({
            rtl: THEMEMASCOT.isRTL.check(),
            loop: true,
            margin: 30,
            nav: true,
            items: 1,
            smartSpeed: 700,
            autoplay: false,
            nav: false,
            navText: ['<span class="fa fa-long-arrow-left"></span>', '<span class="fa fa-long-arrow-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1024: {
                    items: 2
                },
                1700: {
                    items: 2
                },
            }
        });
    }


    // features Carousel
    if ($('.features-carousel').length) {
        $('.features-carousel').owlCarousel({
            rtl: THEMEMASCOT.isRTL.check(),
            loop: true,
            margin: 30,
            nav: true,
            items: 1,
            smartSpeed: 700,
            autoplay: false,
            nav: false,
            navText: ['<span class="fa fa-long-arrow-left"></span>', '<span class="fa fa-long-arrow-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1024: {
                    items: 2
                },
                1700: {
                    items: 2
                },
                1920: {
                    items: 3
                },
            }
        });
    }


    // ticker Carousel
    if ($('.ticker-carousel').length) {
        $('.ticker-carousel').owlCarousel({
            rtl: THEMEMASCOT.isRTL.check(),
            loop: true,
            margin: 0,
            nav: true,
            items: 1,
            smartSpeed: 700,
            autoplay: 5000,
            nav: true,
            navText: ['<span class="fa fa-arrow-left"></span>', '<span class="fa fa-arrow-right"></span>'],
        });
    }


    // Testimonial Carousel
    if ($('.testimonial-carousel').length) {
        $('.testimonial-carousel').owlCarousel({
            rtl: THEMEMASCOT.isRTL.check(),
            loop: true,
            margin: 0,
            nav: true,
            items: 1,
            smartSpeed: 700,
            autoplay: 5000,
            nav: false,
        });
    }

    // testimonial Carousel
    if ($('.testimonial-carousel-two').length) {
        $('.testimonial-carousel-two').owlCarousel({
            rtl: THEMEMASCOT.isRTL.check(),
            loop: true,
            margin: 30,
            items: 1,
            smartSpeed: 700,
            autoplay: false,
            nav: false,
            navText: ['<span class="fa fa-long-arrow-left"></span>', '<span class="fa fa-long-arrow-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1024: {
                    items: 2
                },
                1700: {
                    items: 2
                },
                1920: {
                    items: 3
                },
            }
        });
    }

    // testimonial Carousel
    if ($('.testimonial-carousel-three').length) {
        $('.testimonial-carousel-three').owlCarousel({
            rtl: THEMEMASCOT.isRTL.check(),
            loop: true,
            margin: 30,
            items: 1,
            smartSpeed: 700,
            autoplay: false,
            nav: false,
            navText: ['<span class="fa fa-long-arrow-left"></span>', '<span class="fa fa-long-arrow-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1024: {
                    items: 2
                },
                1700: {
                    items: 2
                },
                1920: {
                    items: 2
                },
            }
        });
    }


    //Clients Carousel
    if ($('.clients-carousel').length) {
        $('.clients-carousel').owlCarousel({
            rtl: THEMEMASCOT.isRTL.check(),
            loop: true,
            margin: 0,
            nav: false,
            smartSpeed: 400,
            autoplay: true,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                600: {
                    items: 3
                },
                768: {
                    items: 4
                },
                1023: {
                    items: 5
                },
            }
        });
    }

    // Odometer
    if ($(".odometer").length) {
        $('.odometer').appear();
        $('.odometer').appear(function() {
            var odo = $(".odometer");
            odo.each(function() {
                var countNumber = $(this).attr("data-count");
                $(this).html(countNumber);
            });
            window.odometerOptions = {
                format: 'd',
            };
        });
    }

    // Service Block Text Toggle
    if ($('.service-block-three').length) {
        $('.service-block-three .inner-box').on('mouseenter', function(e) {
            e.preventDefault();
            $(this).find('.text').slideDown(300);
        });
        $('.service-block-three .inner-box').on('mouseleave', function(e) {
            e.preventDefault();
            $(this).find('.text').slideUp(300);
        });
    }

    //Accordion Box
    if ($('.accordion-box').length) {
        $(".accordion-box").on('click', '.acc-btn', function() {

            var outerBox = $(this).parents('.accordion-box');
            var target = $(this).parents('.accordion');

            if ($(this).hasClass('active') !== true) {
                $(outerBox).find('.accordion .acc-btn').removeClass('active ');
            }

            if ($(this).next('.acc-content').is(':visible')) {
                return false;
            } else {
                $(this).addClass('active');
                $(outerBox).children('.accordion').removeClass('active-block');
                $(outerBox).find('.accordion').children('.acc-content').slideUp(300);
                target.addClass('active-block');
                $(this).next('.acc-content').slideDown(300);
            }
        });
    }


    //Fact Counter + Text Count
    if ($('.count-box').length) {
        $('.count-box').appear(function() {

            var $t = $(this),
                n = $t.find(".count-text").attr("data-stop"),
                r = parseInt($t.find(".count-text").attr("data-speed"), 10);

            if (!$t.hasClass("counted")) {
                $t.addClass("counted");
                $({
                    countNum: $t.find(".count-text").text()
                }).animate({
                    countNum: n
                }, {
                    duration: r,
                    easing: "linear",
                    step: function() {
                        $t.find(".count-text").text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $t.find(".count-text").text(this.countNum);
                    }
                });
            }

        }, {
            accY: 0
        });
    }

    //product bxslider
    if ($('.product-details .bxslider').length) {
        $('.product-details .bxslider').bxSlider({
            nextSelector: '.product-details #slider-next',
            prevSelector: '.product-details #slider-prev',
            nextText: '<i class="fa fa-angle-right"></i>',
            prevText: '<i class="fa fa-angle-left"></i>',
            mode: 'fade',
            auto: 'true',
            speed: '700',
            pagerCustom: '.product-details .slider-pager .thumb-box'
        });
    };


    //Tabs Box
    if ($('.tabs-box').length) {
        $('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
            e.preventDefault();
            var target = $($(this).attr('data-tab'));

            if ($(target).is(':visible')) {
                return false;
            } else {
                target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
                $(this).addClass('active-btn');
                target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
                target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab animated fadeIn');
                $(target).fadeIn(300);
                $(target).addClass('active-tab animated fadeIn');
            }
        });
    }


    // count Bar
    if ($(".count-bar").length) {
        $(".count-bar").appear(
            function() {
                var el = $(this);
                var percent = el.data("percent");
                $(el).css("width", percent).addClass("counted");
            }, {
                accY: -50
            }
        );
    }

    //Progress Bar
    if ($('.progress-line').length) {
        $('.progress-line').appear(function() {
            var el = $(this);
            var percent = el.data('width');
            $(el).css('width', percent + '%');
        }, {
            accY: 0
        });
    }


    //LightBox / Fancybox
    if ($('.lightbox-image').length) {
        $('.lightbox-image').fancybox({
            openEffect: 'fade',
            closeEffect: 'fade',
            helpers: {
                media: {}
            }
        });
    }

    // Scroll to a Specific Div
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function() {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 0);

        });
    }

    // Elements Animation
    if ($('.wow').length) {
        var wow = new WOW({
            boxClass: 'wow', // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 0, // distance to the element when triggering the animation (default is 0)
            mobile: false, // trigger animations on mobile devices (default is true)
            live: true // act on asynchronously loaded content (default is true)
        });
        wow.init();
    }

    //Event Countdown Timer
    if ($('.time-countdown').length) {
        $('.time-countdown').each(function() {
            var $this = $(this),
                finalDate = $(this).data('countdown');
            $this.countdown(finalDate, function(event) {
                var $this = $(this).html(event.strftime('' + '<div class="counter-column"><span class="count">%D</span><span class="title">Days</span></div> ' + '<div class="counter-column"><span class="count">%H</span><span class="title">Hours</span></div>  ' + '<div class="counter-column"><span class="count">%M</span><span class="title">Minutes</span></div>  ' + '<div class="counter-column"><span class="count">%S</span><span class="title">Seconds</span></div>'));
            });
        });
    }


    //Quantity box
    $(".quantity-box .add").on("click", function() {
        if ($(this).prev().val() < 999) {
            $(this)
                .prev()
                .val(+$(this).prev().val() + 1);
        }
    });
    $(".quantity-box .sub").on("click", function() {
        if ($(this).next().val() > 1) {
            if ($(this).next().val() > 1)
                $(this)
                .next()
                .val(+$(this).next().val() - 1);
        }
    });

    //Price Range Slider
    if ($('.price-range-slider').length) {
        $(".price-range-slider").slider({
            range: true,
            min: 10,
            max: 99,
            values: [10, 60],
            slide: function(event, ui) {
                $("input.property-amount").val(ui.values[0] + " - " + ui.values[1]);
            }
        });

        $("input.property-amount").val($(".price-range-slider").slider("values", 0) + " - $" + $(".price-range-slider").slider("values", 1));
    }

    //Gallery Filters
    if ($('.filter-list').length) {
        $('.filter-list').mixItUp({});
    }


    //Image Reveal Animation
    if ($('.reveal').length) {
        gsap.registerPlugin(ScrollTrigger);
        let revealContainers = document.querySelectorAll(".reveal");
        revealContainers.forEach((container) => {
            let image = container.querySelector("img");
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    toggleActions: "play none none none"
                }
            });
            tl.set(container, {
                autoAlpha: 1
            });
            tl.from(container, 1.5, {
                xPercent: -100,
                ease: Power2.out
            });
            tl.from(image, 1.5, {
                xPercent: 100,
                scale: 1.3,
                delay: -1.5,
                ease: Power2.out
            });
        });
    }

    // Gsap Text Animations
    // window.addEventListener("DOMContentLoaded", (event) => {
    // 	// Split text into spans
    // 	let typeSplit = new SplitType(".text-split", {
    // 		types: "words, chars",
    // 		tagName: "span"
    // 	});

    // 	// Link timelines to scroll position
    // 	function createScrollTrigger(triggerElement, timeline) {
    // 		// Reset tl when scroll out of view past bottom of screen
    // 		ScrollTrigger.create({
    // 			trigger: triggerElement,
    // 			start: "top bottom",
    // 			onLeaveBack: () => {
    // 				timeline.progress(0);
    // 				timeline.pause();
    // 			}
    // 		});
    // 		// Play tl when scrolled into view (60% from top of screen)
    // 		ScrollTrigger.create({
    // 			trigger: triggerElement,
    // 			start: "top 60%",
    // 			onEnter: () => timeline.play()
    // 		});
    // 	}

    // 	$(".words-slide-up").each(function (index) {
    // 		let tl = gsap.timeline({ paused: true });
    // 		tl.from($(this).find(".word"), { opacity: 0, yPercent: 100, duration: 0.5, ease: "back.out(2)", stagger: { amount: 0.5 } });
    // 		createScrollTrigger($(this), tl);
    // 	});

    // 	$(".words-rotate-in").each(function (index) {
    // 		let tl = gsap.timeline({ paused: true });
    // 		tl.set($(this).find(".word"), { transformPerspective: 1000 });
    // 		tl.from($(this).find(".word"), { rotationX: -90, duration: 0.6, ease: "power2.out", stagger: { amount: 0.6 } });
    // 		createScrollTrigger($(this), tl);
    // 	});

    // 	$(".words-slide-from-right").each(function (index) {
    // 		let tl = gsap.timeline({ paused: true });
    // 		tl.from($(this).find(".word"), { opacity: 0, x: "1em", duration: 0.6, ease: "power2.out", stagger: { amount: 0.2 } });
    // 		createScrollTrigger($(this), tl);
    // 	});

    // 	$(".letters-slide-up").each(function (index) {
    // 		let tl = gsap.timeline({ paused: true });
    // 		tl.from($(this).find(".char"), { yPercent: 100, duration: 0.2, ease: "power1.out", stagger: { amount: 0.6 } });
    // 		createScrollTrigger($(this), tl);
    // 	});

    // 	$(".letters-slide-down").each(function (index) {
    // 		let tl = gsap.timeline({ paused: true });
    // 		tl.from($(this).find(".char"), { yPercent: -120, duration: 0.3, ease: "power1.out", stagger: { amount: 0.7 } });
    // 		createScrollTrigger($(this), tl);
    // 	});

    // 	$(".letters-fade-in").each(function (index) {
    // 		let tl = gsap.timeline({ paused: true });
    // 		tl.from($(this).find(".char"), { opacity: 0, duration: 0.2, ease: "power1.out", stagger: { amount: 0.8 } });
    // 		createScrollTrigger($(this), tl);
    // 	});

    // 	$(".letters-fade-in-random").each(function (index) {
    // 		let tl = gsap.timeline({ paused: true });
    // 		tl.from($(this).find(".char"), { opacity: 0, duration: 0.05, ease: "power1.out", stagger: { amount: 0.4, from: "random" } });
    // 		createScrollTrigger($(this), tl);
    // 	});

    // 	$(".scrub-each-word").each(function (index) {
    // 		let tl = gsap.timeline({
    // 			scrollTrigger: {
    // 				trigger: $(this),
    // 				start: "top 90%",
    // 				end: "top center",
    // 				scrub: true
    // 			}
    // 		});
    // 		tl.from($(this).find(".word"), { opacity: 0.2, duration: 0.2, ease: "power1.out", stagger: { each: 0.4 } });
    // 	});

    // 	// Avoid flash of unstyled content
    // 	gsap.set(".text-split", { opacity: 1 });
    // });

    /* ---------------------------------------------------------------------- */
    /* ----------- Activate Menu Item on Reaching Different Sections ---------- */
    /* ---------------------------------------------------------------------- */
    var $onepage_nav = $('.onepage-nav');
    var $sections = $('section');
    var $window = $(window);

    function TM_activateMenuItemOnReach() {
        if ($onepage_nav.length > 0) {
            var cur_pos = $window.scrollTop() + 2;
            var nav_height = $onepage_nav.outerHeight();
            $sections.each(function() {
                var top = $(this).offset().top - nav_height - 80,
                    bottom = top + $(this).outerHeight();

                if (cur_pos >= top && cur_pos <= bottom) {
                    $onepage_nav.find('a').parent().removeClass('current').removeClass('active');
                    $sections.removeClass('current').removeClass('active');
                    $onepage_nav.find('a[href="#' + $(this).attr('id') + '"]').parent().addClass('current').addClass('active');
                }

                if (cur_pos <= nav_height && cur_pos >= 0) {
                    $onepage_nav.find('a').parent().removeClass('current').removeClass('active');
                    $onepage_nav.find('a[href="#header"]').parent().addClass('current').addClass('active');
                }
            });
        }
    }


    /* ==========================================================================
       When document is Scrollig, do
       ========================================================================== */

    $(window).on('scroll', function() {
        headerStyle();
        TM_activateMenuItemOnReach();
    });

    /* ==========================================================================
       When document is loading, do
       ========================================================================== */

    $(window).on('load', function() {
        handlePreloader();
    });

})(window.jQuery);