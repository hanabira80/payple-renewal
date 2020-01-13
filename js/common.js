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

function includeHtml() {
    $("#header").load("include/header.html");
    $("#footer").load("include/footer.html");
    $("#modal").load("include/modal.html");
    $("#txt_include_privacy").load("include/txt_include_privacy.html");
    $("#txt_include_ofs").load("include/txt_include_ofs.html");
    $("#txt_include_rfs").load("include/txt_include_rfs.html");
}

function moMenuAction() {
    //$(".header_menu_icn").click(function(){
    $(document).on('click','.header_menu_icn',function(){
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



function tempMainView() {
    $(".temp_active, .temp_close").click(function() {
        $(".temp_remote").toggleClass("active");
    });
    $(".temp_templete li").click(function() {
        var i = $(this).index() + 1;
        console.log(i);
        $(".temp_templete li").removeClass("active");
        $(this).addClass("active");
        $("article.full_page").css("background-image", "url(img/sub/sub_bg_01_" + i + ".png)");
    });
}

function codeHighlight() {
    document.querySelectorAll("code").forEach(function(element) {   
        element.innerHTML = element.innerHTML
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    });
    hljs.initHighlightingOnLoad();
}

function codeLoad() {
    $("#code_include").each(function(){
        var i = $(this).attr('page_num');
        $(this).load("include/code_include_"+i+".html", function(){
            codeHighlight();
        });
    })
}

function serviceIntroTab() {
    $(".js_trigger_tab_btn_step_1").click(function() {
        var kd = $(this).attr("kind");
        //console.log(kd);
        if (!$(this).hasClass("cl_info")) {
            $(".js_trigger_tab_btn_step_1").removeClass("cl_info");
            $(".js_trigger_tab_btn_step_1")
                .eq(kd)
                .addClass("cl_info");
            $(".js_frag_tab_btn_step_2").removeClass("is_show_ani");
            $(".js_frag_tab_btn_step_2[kind=" + kd + "]").addClass("is_show_ani");
            $(".js_trigger_tab_btn_step_2").removeClass("cl_scs");
            $(".js_target_tab_ctn_step_2").removeClass("is_show_ani");
            $(".js_target_tab_ctn_step2_info").removeClass("is_show_ani");
            $(".js_target_tab_ctn_step2_info[kind=" + kd + "]").addClass("is_show_ani");
            $(".js_target_tab_ctn_img_step_2").removeClass("is_show_ani");
            $(".js_target_tab_ctn_img_step2_info").addClass("is_show_ani");
        } else {
        }
    });
    $(".js_trigger_tab_btn_step_2").click(function() {
        var dp = $(this).attr("depth");
        //console.log(dp);
        $(".js_target_tab_ctn_step2_info").removeClass("is_show_ani");
        $(".js_target_tab_ctn_img_step2_info").removeClass("is_show_ani");
        $(".js_trigger_tab_btn_step_2").removeClass("cl_scs");
        $(".js_trigger_tab_btn_step_2[depth=" + dp + "]").addClass("cl_scs");
        $(".js_target_tab_ctn_step_2").removeClass("is_show_ani");
        $(".js_target_tab_ctn_step_2[depth=" + dp + "]").addClass("is_show_ani");
        $(".js_target_tab_ctn_img_step_2").removeClass("is_show_ani");
        $(".js_target_tab_ctn_img_step_2[depth=" + dp + "]").addClass("is_show_ani");
    });
}

function tarea__float() {
    $(document).on('blur','.tarea__float',function(){
    // $('.tarea__float').focus(function(){
        if($('.tarea__float').val()) {
            $('.tarea__float').addClass('is_filled');
            $('.tarea__float').siblings('.tit__form__float').addClass('is_filled');
        }
        else {
            $('.tarea__float').removeClass('is_filled');
            $('.tarea__float').siblings('.tit__form__float').removeClass('is_filled');
        }
    })
}

function createCircle() {
    const 
    setEl = document.querySelector(".subpage_visual"),
    setElHeight = setEl.offsetHeight,
    setElWidth = setEl.offsetWidth,
    circleEl = document.createElement('div');

    circleEl.classList.add('circle')
    circleEl.style.top = Math.random() * setElHeight + "px";
    circleEl.style.left = Math.random() * setElWidth + "px";
    setEl.appendChild(circleEl);
    
    setTimeout(() => {
        circleEl.remove()
    }, 3000)
}



$(document).ready(function(){
    includeHtml();
    parallaxScroll();
    moMenuAction();
    this_year();
    tempMainView();
    codeLoad();
    serviceIntroTab();
    tarea__float();
    //copyCode();
    setInterval(createCircle, 300);

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
