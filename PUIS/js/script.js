$(document).ready(function(){
    // 풀페이지 연결
    new fullpage('#wrap', {
        // 새로고침 시, 최상단 section으로 이동되는 부분 막기
        anchors: ['anchor1','anchor2'],
        scrollBar : true,
        scrollingSpeed : 500,
    });

    // menu-btn 클릭 시, 메뉴 보이기
    $('.banner header .menu-btn').click(function(){
        $(this).toggleClass('active');
        $('.banner .sub-menu').toggleClass("active");
    });

    // sec1 swiper
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 5,
        spaceBetween: 60,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
          },
      });
});