$(document).ready(function(){
    // 풀페이지 연결
    new fullpage('#wrap', {
        // 새로고침 시, 최상단 section으로 이동되는 부분 막기
        anchors: ['banner','puddingMenu', 'financierMenu'],
        scrollBar : true,
        scrollingSpeed : 500,
        normalScrollElements : '.sec2, footer',
        fitToSection : false
    });

    // userBox
    // 1. icon-box 클릭 시, 로그인 창 보이기
    $('.banner .icon-box').click(function(){
        $('.banner .userBox-wrap.loginBox').slideDown();
    });
    // 2. closeBtn 클릭 시, userBox-wrap 창 닫기
    $('.banner .userBox-wrap .userBox .closeBtn').click(function(){
        $('.banner .userBox-wrap').slideUp();
    });
    // 3-1. loginBox > 회원가입하기 클릭 시, 회원가입 창 띄우기
    $('.banner .loginBox .input-box a').click(function(){
        $('.banner .loginBox').hide();
        $('.banner .signupBox').show();
    });
    // 3-2. signupBox > 로그인하기 클릭 시, 로그인 창 띄우기
    $('.banner .signupBox .input-box a').click(function(){
        $('.banner .loginBox').show();
        $('.banner .signupBox').hide();
    });
    // 4. 로그인하기 버튼 및 회원가입하기 버튼 클릭 시, userBox-wrap 창 닫기
    // 4-1. 로그인하기
    $('.banner .userBox-wrap.loginBox .input-box button').click(function(){
        $('.banner .userBox-wrap.loginBox').hide();
        $('.banner .userBox-wrap input').val('');
        alert('로그인 완료!');

    });
    // 4-2. 회원가입하기
    $('.banner .userBox-wrap.signupBox .input-box button').click(function(){
        $('.banner .userBox-wrap.signupBox').hide();
        $('.banner .userBox-wrap.loginBox').show();
        $('.banner .userBox-wrap input').val('');
        alert('회원가입 완료! 로그인 후 사용해주세요')
    });

    // menu-btn 클릭 시, 메뉴 보이기 및 닫기
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