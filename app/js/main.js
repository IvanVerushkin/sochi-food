$(function(){

    let swiper = new Swiper('.swiper__container', {
        wrapperClass: 'swiper__wrapper',
        slideClass: 'swiper__item',
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '.swiper__arrow--next',
            prevEl: '.swiper__arrow--prev'
        }
    });

    $('.swiper__arrow').on('click', function(){
        $('.swiper__content').addClass('gotoup');
    });

});