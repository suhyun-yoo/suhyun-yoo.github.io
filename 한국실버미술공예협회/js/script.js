$(document).ready(function(){
    $('.wrap .Btn').click(function(){
        $('html, body').animate({
            scrollTop : 0
        }, 1000)
    })

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 10000,
            disableOnInteraction: false,
          },
    });
});