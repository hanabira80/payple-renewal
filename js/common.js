function parallaxScroll(){
    var winHeight = $(window).height();
    var scrolled = $(window).scrollTop();
    var totalHeight = $("body").height();
    var footerHeight = $("footer").height();
    var rate = scrolled/(totalHeight - winHeight);
    
    if ( 10 > scrolled ) {
        $("header").removeClass("js_scroll_action");
        $('.js_tg_header_tool_tip').removeClass('js_is_hide');
    }
    if ( 10 <= scrolled ) {
        $("header").addClass("js_scroll_action");
        $("header .scroll_nav .percent").css("transform","scale3d("+rate+",1,1)");
        $('.js_tg_header_tool_tip').addClass('js_is_hide');
    }
    if (0 <= scrolled && winHeight >= scrolled) {
        $(".full_page").css("background-position","50% "+ scrolled/7*-1 +"px");
        $(".backdrop").css("background","rgba(0,0,0,"+ scrolled/winHeight*0.8 +")")
    }
    if (totalHeight - winHeight - 100 <= scrolled) {
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
    $('.js_trigger_mo_menu').click(function(){
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

function this_year() {
    var today = new Date();
    var year = today.getFullYear();
    $(".current_year").html(year);
}

function copyCode() {
    new ClipboardJS('.js_btn_copy');
    $('.js_btn_copy').click(function(){
        alert('내용이 복사 되었습니다.')
    });
}

$(document).ready(function(){
    parallaxScroll();
    moMenuAction();
    this_year();
    //copyCode();

    $(window).bind('scroll',function(e){
        parallaxScroll();
    });

    $(window).resize(function(){
        parallaxScroll();
    });
});

$(window).load(function(){
    $(".loader").addClass("js_is_hidden").delay(600).queue(function(){
        $("body").removeClass("js_is_limit").dequeue();
    });
});
