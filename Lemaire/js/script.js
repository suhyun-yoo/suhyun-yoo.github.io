$(document).ready(function(){
    // 햄버거 버튼 클릭 시, sub-menu 보이기
    $('#hamburger').click(function(){
        $(this).toggleClass('active');
        $('#hamburger span').toggleClass('active');
        $('.menu-left').toggleClass('active');
        $('.banner header .logo svg').toggleClass('acitve');
    });


    media();
    // 윈도우의 너비가 800이상일 경우에만 풀페이지 선언 함수 선언
    function media(){
        let ww = $(window).width();
        if(ww >= 800){
            new fullpage('#wrap', {
                scrollBar : true,
                normalScrollElements : '.sec4, .sec5, .footer',
                fitToSection : false,
                scrollingSpeed : 500,
            });
        };
    };
    // 리사이즈 시, 자동 호출
    $(window).resize(function(){
        ww = $(window).width();
        media();
    });

    // header li 마우스엔터 시, 해당 요소의 data-alt 속성값을 result 변수에 담고 전체 sub-menu 영역의 active 클래스를 제거한 뒤, 해당 id를 가진 요소에게만 active 클래스 걸기 
    $('header .menu-left li').mouseenter(function(){
        let result = $(this).attr('data-alt');
        $('.sub-menu').removeClass('active');
        $(`#${result}`).addClass('active');

        // sub-menu-box 보이게 처리
        $('.sub-menu-box').addClass('active');

        // sub-menu-box에 마우스 들어갈 때, 헤더 색상 변경
        $('.banner header').addClass('on');
        $('.banner header .logo svg').addClass('active');
    });

    $('header .menu-left li').mouseleave(function(){
        $(this).removeClass('active');

        // sub-menu-box 보이게 처리
        $('.sub-menu-box').removeClass('active');

        // sub-menu-box에 마우스 들어갈 때, 헤더 색상 되돌리기
        $('.banner header').removeClass('on');
        $('.banner header .logo svg').removeClass('active');
    });

    // 스크롤이 발생할 경우, window 스크롤값 저장 후, header 컬러 변경하기
    // offset값을 사용하여 header 색상 변경
    $(window).scroll(function(){
        // 섹션별 상단 위치값 변수에 저장
        const banner = $('.banner').offset().top;
        const sec1 = $('.sec1').offset().top;
        const sec2 = $('.sec2').offset().top;
        const sec3 = $('.sec3').offset().top;
        const sec4 = $('.sec4').offset().top;
        const sct = $(window).scrollTop();

        if(sct >= banner && sct < sec1){
            $('.banner header').removeClass('active');
            $('.banner header .logo svg').removeClass('active');
        }
        if(sct >= sec1 && sct < sec2){
            $('.banner header').addClass('active');
            $('.banner header .logo svg').addClass('active');
        }
        if(sct >= sec2 && sct < sec3){
            $('.banner header').removeClass('active');
        }
        if(sct >= sec3 && sct < sec4){
            $('.banner header').removeClass('active');
            $('.banner header .logo svg').addClass('active');

        }
        if(sct >= sec3){
            $('.banner header').addClass('active');
        }
    });

    //  sec4 swiper 연결하기
    new Swiper ('.mySwiper', {
        direction : 'vertical',
        slidePerview : 'auto',
        speed : 1500,
        loop : true,
        autoplay : {
            delay : 1500,
            disableOnInteraction : false,
        }
    });

    // 상단 이동 버튼 보이기 및 감추기
    let btn = $('.top-btn');
    $(window).scroll(function(){
        if($(window).scrollTop() > 300){
            btn.fadeIn();
        } else{
            btn.fadeOut();
        }
    });
    // 상단이동 버튼 클릭 시, html문서 가장 상단으로 이동
    btn.on('click', function(){
        $('html, body').animate({
            scrollTop : 0
        }, 1000)
    });
});