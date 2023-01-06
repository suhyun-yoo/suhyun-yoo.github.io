$(document).ready(function(){
    // 언어 선택 버튼 클릭 시, 해당 버튼에 active 클래스 추가하고, 형제들에게는 제거하기
    $('header .lang li').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });

    // nav 영역 마우스 호버 시, subMenu 보이기
    $('header nav').mouseenter(function(){
        $('.subMenu').fadeIn();
    });
    $('.subMenu').mouseleave(function(){
        $(this).fadeOut();
    });
    $(window).scroll(function(){
        $('.subMenu').fadeOut();
    });

    // 스크롤 발생 시, 윈도우 위치값에 따라 top-btn 보이기 및 감추기
    $(window).scroll(function(){
        let srt = $(window).scrollTop();
        console.log(srt);
        if(srt >= 200){
            $('.top-btn').show();
        } else {
            $('.top-btn').hide();
        }
    });

    // top-btn 클릭 시, 윈도우 최상단으로 이동하기
    $('.top-btn').click(function(){
        $( 'html, body' ).animate( { scrollTop : 0 }, 1000 );
    });

    // swiper 슬라이드
        var swiper = new Swiper(".mySwiper", {
            autoplay : true,
            loop : true,
            slidesPerView: 2,
            spaceBetween: 10,
            centeredSlides: true,
            navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            },
      });
})