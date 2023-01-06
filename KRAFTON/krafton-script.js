$(document).ready(function(){
    // scroll 발생 시, header 영역에 active 클래스 추가
    $(window).scroll(function(){
        if($(window).scrollTop() > 0){
            $('header').addClass('active');
        } else{
            $('header').removeClass('active');
        }
    })

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

    // scroll-btn 클릭 시, 하단 wrap 영역으로 이동하기
    $('.scroll-btn').click(function(){
        $('html, body').animate({ scrollTop : 500 }, 1000)
    });

    // window.scrollTop 값이 이면, body 배경색상 변경 및 header 색상 변경
    $(window).scroll(function(){
        let srt = $(window).scrollTop();
        if(srt > 1100 && srt < 1500){
            $('html, body').css({ backgroundColor : 'black'});
            $('.games .title').css({ color : 'white'});
            $('header').css({ 
                backgroundColor : 'black',
                color : 'white'
            });
            $('header .lang .active').css({ color : 'white'});
            $('.top-btn').css({ 
                border : '1px solid white',
                color : 'white'
            });
            $('.top-btn').mouseenter(function(){
                $(this).css({
                    color : 'black',
                    backgroundColor : 'white'
                })
            });
            $('.top-btn').mouseleave(function(){
                $(this).css({
                    color : 'white',
                    backgroundColor : 'transparent'
                })
            });
        } else {
            $('html, body').css({ backgroundColor : 'white'});
            $('.games .title').css({ color : 'black'});
            $('header').css({ 
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                color : 'black'
            });
            $('header .lang li.active').css({ color : 'black'});

            $('.top-btn').css({
                color : 'black',
                border : '1px solid black',
            })
            $('.top-btn').mouseenter(function(){
                $(this).css({
                    color : 'white',
                    backgroundColor : 'black'
                })
            });
            $('.top-btn').mouseleave(function(){
                $(this).css({
                    color : 'black',
                    backgroundColor : 'transparent'
                })
            });
        }
    });
})