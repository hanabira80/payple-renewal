function parallaxScroll(){
    var winHeight = $(window).height();
    var scrolled = $(window).scrollTop();
    var totalHeight = $("body").height();
    var footerHeight = $("footer").height();
    var rate = scrolled/(totalHeight - winHeight);
    
    if ( 10 > scrolled ) {
        $("header").removeClass("js_scroll_action");
    }
    if ( 10 <= scrolled ) {
        $("header").addClass("js_scroll_action");
        $("header .scroll_nav .percent").css("transform","scale3d("+rate+",1,1)");
    }
    if (totalHeight - winHeight - 40 <= scrolled) {
        $("footer .footer-logo").addClass("js-is-active");
    }
    else {
        $("footer .footer-logo").removeClass("js-is-active")
    }
}

function moMenuAction() {
    $(".header_menu_icn").click(function(){
        if ($(this).hasClass("js_is_active")){
            $(this).removeClass("js_is_active");
            $(".header_menu_area").removeClass("js_is_active");				
        }
        else {
            $(this).addClass("js_is_active");
            $(".header_menu_area").addClass("js_is_active");
        }
        //$(this).toggleClass("js-is-active");
    });
    $('.header_main_menu').click(function(){
        $(this).parent('.header_menu').toggleClass('js_is_mo_active');
        $(this).siblings('.header_sub_menu_box').toggleClass('js_is_mo_active');
    });
}

function load_popup(el,mask) {			
    if (mask == 'mask-active') {
        $(".modal-mask").addClass("js-is-active");
    }
    if (el == 'modal-video') {
        $(".modal-video .ratio-inner").html("<iframe src='https://www.youtube.com/embed/"+video_val+"?controls=0&showinfo=0&rel=0&autoplay=1&loop=0' frameborder='0' allowfullscreen></iframe>")
    }
    $(".modal-outer").addClass("js-is-active");
    $("#"+ el +"").addClass("js-is-active");
}

function del_popup() {
    if($(".modal-video").hasClass("js-is-active")) {
        $(".modal-video .ratio-inner").html("");
    }
    $(".modal-outer").removeClass("js-is-active");
    $(".modal-mask").removeClass("js-is-active");
    $(".modal").removeClass("js-is-active");
}



$(document).ready(function(){
    parallaxScroll();
    moMenuAction();

    $(window).bind('scroll',function(e){
        parallaxScroll();
    });

    $(window).resize(function(){
        parallaxScroll();
    });

    // $("#temp").click(function(){
    //     video_val = $(this).attr("video_value");
    //     load_popup ('modal-privacy','mask-active');
    // });

    // $(".js-modal-close").click(function() {
    //     del_popup()
    // });

    // $(".js-target-tab-btn").click(function(){
    //     var tabKind = jQuery(this).attr("kind");
    //     changeTab(tabKind);
    // });

    

    var slider_main_pc = new Swiper('.slider_main_pc', {
        //pagination: '.pager-coopertaion',
        //paginationClickable: true,
        //paginationType: 'bullets',
        //prevButton: '.photo_slider_prev',
        //nextButton: '.photo_slider_next',
        slidesPerView: 1,
        spaceBetween: 0,
        autoplayDisableOnInteraction: false,
        simulateTouch: false,
        loop: true,
        autoplay: 4000,
        // effect:'fade',
        // fade: {
        //     crossFade: true
        // },
        speed:500
    });
    var slider_main_mo = new Swiper('.slider_main_mo', {
        //pagination: '.pager-coopertaion',
        //paginationClickable: true,
        //paginationType: 'bullets',
        //prevButton: '.photo_slider_prev',
        //nextButton: '.photo_slider_next',
        slidesPerView: 1,
        spaceBetween: 0,
        autoplayDisableOnInteraction: false,
        simulateTouch: false,
        loop: true,
        autoplay: 4000,
        // effect:'fade',
        // fade: {
        //     crossFade: true
        // },
        speed:500
    });
    slider_main_pc.params.control = slider_main_mo;
    slider_main_mo.params.control = slider_main_pc;
});

$(window).load(function(){
    $(".loader").addClass("js_is_hidden").delay(600).queue(function(){
        $("body").removeClass("js_is_limit").dequeue();
    });
});
