$(document).ready(function(){
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