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

    // sub-menu > menu 버튼 클릭 시, section1으로 이동하고 sub-menu 닫기
    $('.banner .sub-menu').children().first().click(function(){
        let sec1Top = $('.sec1').offset().top;
        $('html, body').animate({
            scrollTop : sec1Top
        }, 1000);
        $('.banner .sub-menu').removeClass('active');
    });

    // section1 section2 영역에서는 header 스타일링 변경
    $(window).scroll(function(){
        sec1Top = $('.sec1').offset().top;
        let sct = $(window).scrollTop();

        if(sct >= sec1Top){
            $('.banner header').addClass('active');
        } else {
            $('.banner header').removeClass('active');

        }
    });

    // sec1 swiper
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 5,
        centeredSlides: true,
        spaceBetween: 30,
        loop: true,
        grabCursor: true,
        loopFillGroupWithBlank: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
          },
      });
});