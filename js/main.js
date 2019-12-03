function backHeight() {
    //$(".js-target-tab-ctn-box").css("min-height","0");
    //$(".js-target-tab-ctn-box").css("height","auto");
}


function changeTab(elkind, callback) {
    var el = jQuery(".js-target-tab-btn[kind='" + elkind + "']:first");
    if((elkind == null || elkind == "" || jQuery(el).attr("kind") == null)) {
        el = jQuery(".js-target-tab-btn:first");
    }

    //var secHeight = $(".js-target-gride-itm").outerHeight();
    //$(".js-target-tab-ctn-box").css("min-height",secHeight);

    $(".js-target-tab-btn").removeClass("js-is-selected");
    $(el).addClass("js-is-selected");

    var idx = $(el).attr("kind");
    $(".js-target-tab-ctn").css("display","none");
    $(".js-act-show").hide();
    $(".js-act-show").each(function(){
        var compare = $(this).attr("kind");
        if (idx == "all")
        {
            $(this).parents(".js-target-tab-ctn").css("display","inline-block");
            $(this).show(300);
            //$(this).css("display","block");
            //$(this).parents(".js-target-gride-itm").delay(300).css("display","inline-block");
        }
        else if (idx == compare)
        {
            $(this).parents(".js-target-tab-ctn").css("display","inline-block");
            $(this).show(300);
            //$(this).css("display","block");
            //$(this).parents(".js-target-gride-itm").delay(300).css("display","inline-block");
        }
        else {
            $(this).parents(".js-target-tab-ctn").css("display","none");
            $(this).hide(300);
            //$(this).css("display","none");
            //$(this).parents(".js-target-gride-itm").delay(300).css("display","none");
        }
    });
    setTimeout(backHeight, 300)
}


function parallaxScroll(){
    var winHeight = $(window).height();
    var scrolled = $(window).scrollTop();
    var totalHeight = $("body").height();
    var footerHeight = $("footer").height();
    //var adjust = $(window).height()*0.2;
    rate = scrolled/(totalHeight - winHeight);
    //console.log(totalHeight - (winHeight*2)  + footerHeight);
    //console.log(totalHeight);
    //console.log(winHeight);
    //console.log(scrolled);
    if ( 10 > scrolled ) {
        $("header").removeClass("js-is-fix");
        $("header .scroll-nav").removeClass("js-is-active");
    }
    if ( 10 <= scrolled ) {
        $("header").addClass("js-is-fix");
        $("header .scroll-nav").addClass("js-is-active");
        //$("header .scroll-nav .percent").addClass("js-is-percent");
        /*$("header .scroll-nav .percent").stop().animate({
            "transform":"scale3d("+rate+",1,1)"
        },300);*/
        $("header .scroll-nav .percent").css("transform","scale3d("+rate+",1,1)");
    }
    if (0 <= scrolled && winHeight >= scrolled) {
        $(".type-full-page .full-page-bg").css("background-position","50% "+ scrolled/7*-1 +"px");
        $(".type_full_page .full-page-overlay").css("background","rgba(0,0,0,"+ scrolled/winHeight*0.8 +")")
    }
    if (totalHeight - winHeight - 40 <= scrolled) {
        $("footer .footer-logo").addClass("js-is-active");
    }
    else {
        $("footer .footer-logo").removeClass("js-is-active")
    }
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
    $(window).bind('scroll',function(e){
        parallaxScroll();
    });

    $(window).resize(function(){
        parallaxScroll();
    });

    $("#temp").click(function(){
        video_val = $(this).attr("video_value");
        load_popup ('modal-privacy','mask-active');
    });

    $(".js-modal-close").click(function() {
        del_popup()
    });

    // $(".js-target-tab-btn").click(function(){
    //     var tabKind = jQuery(this).attr("kind");
    //     changeTab(tabKind);
    // });

    $(".header-menu-icn").click(function(){
        if ($(this).hasClass("js-is-active")){
            $(this).removeClass("js-is-active");
            $(".header-menu-box").removeClass("js-is-active");				
        }
        else {
            $(this).addClass("js-is-active");
            $(".header-menu-box").addClass("js-is-active");
        }
        //$(this).toggleClass("js-is-active");
    });

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

    var slider_main_progress = new Swiper('.slider_main_progress', {
        slidesPerView: 1,
        spaceBetween: 0,
        observer: true,
        observeParents: true,
        autoplayDisableOnInteraction: false,
        simulateTouch: false,
        loop: true,
        autoplay: 1000,
        speed:500
    });

    
    var slider_main_progress2 = new Swiper('.slider_main_progress2', {
        slidesPerView: 1,
        spaceBetween: 0,
        observer: true,
        observeParents: true,
        autoplayDisableOnInteraction: false,
        simulateTouch: false,
        loop: true,
        autoplay: 1000,
        speed:500
    });


    $(".tab_btn").click(function() {
        var parent = $(this).parent(".tab_btn_box");
        var parent_type = parent.attr("tab_type");
        var ctn_parent = $(".tab_ctn_box[tab_type =" + parent_type + "]");
        var tab_idx = $(this).index();
        parent.find(".tab_btn").addClass("cl_default");
        parent
            .find(".tab_btn")
            .eq(tab_idx)
            .removeClass("cl_default");
        ctn_parent.each(function(){
            $(this).find(".tab_ctn").removeClass("js_is_show");
        })
        ctn_parent.each(function(){
            $(this).find(".tab_ctn") .eq(tab_idx) .addClass("js_is_show");
        });
        // slider_main_progress.update();
        // slider_main_progress2.update();
        
        if (tab_idx == 0) {
            slider_main_progress.destroy(false, false);
            slider_main_progress2.destroy(false, false);
            slider_main_progress.init();
        }
        if (tab_idx == 1) {
            slider_main_progress.destroy(false, false);
            slider_main_progress2.destroy(false, false);
            slider_main_progress2.init();
        }
    });   

    
    
    var slider_coopertaion = new Swiper('.slider-coopertaion', {
        pagination: '.pager-coopertaion',
        paginationClickable: true,
        paginationType: 'bullets',
        //prevButton: '.photo_slider_prev',
        //nextButton: '.photo_slider_next',
        slidesPerView: 1,
        spaceBetween: 0,
        autoplayDisableOnInteraction: false,
        simulateTouch: false,
        loop: true,
        autoplay: 3000,
        effect:'fade',
        fade: {
            crossFade: true
        },
        speed:500
    });
});

$(window).load(function(){
    $(".loader").addClass("js_is_hidden").delay(600).queue(function(){
        $("body").removeClass("js_is_limit").dequeue();
    });
});
