const sl_content = document.querySelectorAll('.swiper__content');
const slide1 = document.querySelector('.swiper__item--1');
const slide2 = document.querySelector('.swiper__item--2');

function removeEffect(){
    for (let i = 0; i < sl_content.length; i++) {
        sl_content[i].classList.remove('gotoup');
    }
    // sl_content.forEach(function(sliderContent) {
    //     sliderContent.classList.remove('gotoup');
    // })
    // if (sl_content.classList.contains('gotoup')) {
    //     sl_content.classList.remove('gotoup');
    // }
}


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
        // onTransitionStart: function(slider){
        //     removeEffect();
        //     let activeSlider = document.querySelector('.swiper-slide-active > .swiper__content ');
        //     activeSlider.classList.add('gotoup');
        // }
    });
    swiper.on('slideChangeTransitionStart', function () {
        removeEffect();
        let activeSlider = document.querySelector('.swiper-slide-active > .swiper__content ');
        activeSlider.classList.add('gotoup');
    });
    
    // swiper.on('slideChange', function () {
    //     for (i = 0; i < sl_content1.length; i++) {
    //         for (k = 0; k < slide1.length; k++) {
    //             if (slide1[k].classList.contains('swiper-slide-active')) {
    //                 sl_content1[i].classList.remove('gotoup');
    //                 sl_content2[i].classList.add('gotoup');
    //             }
    //         }
    //     }
    //     for (i = 0; i < sl_content2.length; i++) {
    //         for (k = 0; k < slide2.length; k++) {
    //             if (slide2[k].classList.contains('swiper-slide-active')) {
    //                 sl_content2[i].classList.remove('gotoup');
    //                 sl_content1[i].classList.add('gotoup');
    //             }
    //         }
    //     }
    // });
    //     for (i = 0; i < sl_content1.length; i++) {
    //         if (slide1.classList.contains('swiper-slide-active')) {
    //             sl_content1[i].classList.remove('gotoup');
    //             sl_content2[i].classList.add('gotoup');
    //         }
    //     }
    //     for (i = 0; i < sl_content2.length; i++) {
    //         if (slide2.classList.contains('swiper-slide-active')) {
    //             sl_content2[i].classList.remove('gotoup');
    //             sl_content1[i].classList.add('gotoup');
    //         }
    //     }
    // });

    // swiper.on('slideChange', function () {
    //     if (slide1.classList.contains('swiper-slide-active')) {
    //         sl_content1.classList.remove('gotoup');
    //         sl_content2.classList.add('gotoup');
    //     }
    //     if (slide2.classList.contains('swiper-slide-active')) {
    //         sl_content2.classList.remove('gotoup');
    //         sl_content1.classList.add('gotoup');
    //     }
    //     console.log(swiper.realIndex);

    // });
    
    


    // $('.swiper__arrow').on('click', function(){
    //     $('.swiper__content').addClass('gotoup');
    // });

    // const content = document.querySelectorAll('.swiper__content');
    // console.log(content);

});


// // const content = document.querySelectorAll('.swiper__content');
// const arrow = document.querySelector('.swiper__arrow');
// const slide1 = document.querySelector('.swiper__item--1');
// const slide2 = document.querySelector('.swiper__item--2');
// const sl_content1 = document.querySelector('.swiper__content--1');
// const sl_content2 = document.querySelector('.swiper__content--2');
// // // const ssa = document.querySelector('.swiper-slide-active');

// arrow.on('slideChange', function () {
//     sl_content1.classList.add('gotoup');
// });

//         if (!slide1.classList.contains('swiper-slide-active')) {
//             sl_content2.classList.remove('gotoup');
//             sl_content1.classList.add('gotoup');
//         }
//         // if (slide2.classList.contains('swiper-slide-active')) {
//         //     sl_content1.classList.remove('gotoup');
//         //     sl_content2.classList.add('gotoup');
//         // }
//         if (slide1.classList.contains('swiper-slide-active')) {
//             sl_content2.classList.remove('gotoup');
//             sl_content1.classList.add('gotoup');
//         }
//         // if (slide1.classList.contains('swiper-slide-active')) {
//         //     sl_content2.classList.add('gotoup');
//         //     sl_content1.classList.remove('gotoup');
//         // } else {
//         //     sl_content2.classList.remove('gotoup');
//         //     sl_content1.classList.add('gotoup');
//         // }
        
//         // if (slide2.classList.contains('swiper-slide-active')) {
//         //     sl_content1.classList.add('gotoup');
//         //     sl_content2.classList.remove('gotoup');
//         // }

// // function showSliderContent() {

// //     if (slide1.classList.contains('swiper-slide-active')) {
// //         sl_content2.classList.add('gotoup');
// //         sl_content1.classList.remove('gotoup');
// //     } else {
// //         sl_content1.classList.add('gotoup');
// //         sl_content2.classList.remove('gotoup');
// //     }
// //     // if (slide2.classList.contains('swiper-slide-active')) {
// //     //     sl_content1.classList.add('gotoup');
// //     //     sl_content2.classList.remove('gotoup');
// //     // }

// // }

// // arrow.addEventListener('click', showSliderContent);


// // function showSliderContent() {

// //     if (ssa) {
// //         sl_content2.classList.add('gotoup');
// //         sl_content1.classList.remove('gotoup');
// //     } else {
// //         sl_content1.classList.add('gotoup');
// //         sl_content2.classList.remove('gotoup');
// //     }
// //     // if (slide2.classList.contains('swiper-slide-active')) {
// //     //     sl_content1.classList.add('gotoup');
// //     //     sl_content2.classList.remove('gotoup');
// //     // }

// // }

// // arrow.addEventListener('click', showSliderContent);

// // function showSliderContent () {
// //     // hideSliderContent ()
// //     // let count = 0;

// //     arrow[0].addEventListener('click', () => {
// //         count++;
// //         // if (count == 0) {
// //         //     count++;
// //         // }
// //     });

// //     // console.log(count);
    
// //     // content[1].classList.remove('gotoup');
// //     // content[1].classList.add('gotoup');
// // }


// // function hideSliderContent () {
// //     content.classList.remove('gotoup');
// // }
// // docum.addEventListener('click', f1);

// // arrow[0].addEventListener('click', () => {
// //     if (!content[1].classList.contains('gotoup')) {
// //         content[1].classList.add('gotoup');
// //     } else {
// //         content[1].classList.remove('gotoup');
// //     }
// // });

// // arrow[1].addEventListener('click', () => {
// //     if (!content[2].classList.contains('gotoup')) {
// //         content[2].classList.add('gotoup');
// //     } else {
// //         content[2].classList.remove('gotoup');
// //     }
// // });
