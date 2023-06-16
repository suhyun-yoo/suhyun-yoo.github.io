$(document).ready(function () {
  // 0. logo 클릭 시 새로고침
  history.scrollRestoration = "manual"
  $('header .logo').click(function(){
    location.reload();
  });

	// 1. 언어 변환 기능
  $(window).on('load', function () {
    if (localStorage.getItem('lang') === 'Ko') {
      $('p, span, h3, a').each(function () {
        $(this).html($(this).attr('ko'));
      });
      $('header .menu-wrap .menu.lang').html('En');
      $('header .menuBtn ul li.lang').html('En');
      $('.sec2 .processBox .ko').show();
      $('.sec2 .processBox .en').hide();
    } else {
      $('p, span, h3, a').each(function () {
        $(this).html($(this).attr('en'));
      });
      $('header .menu-wrap .menu.lang').html('Ko');
      $('header .menuBtn ul li.lang').html('Ko');
      $('.sec2 .processBox .ko').hide();
      $('.sec2 .processBox .en').show();
    }
  });
  // change language
  $('header .menu-wrap .menu.lang').click(function () {
    if ($(this).text() === 'En') {
      $(this).text('Ko');
      $('p, span, h3, a').each(function () {
        $(this).html($(this).attr('en'));
      });
      $('.sec2 .processBox .ko').hide();
      $('.sec2 .processBox .en').show();
      localStorage.setItem('lang', 'En');
    } else {
      $(this).text('En');
      $('p, span, h3, a').each(function () {
        $(this).html($(this).attr('ko'));
      });
      $('.sec2 .processBox .ko').show();
      $('.sec2 .processBox .en').hide();
      localStorage.setItem('lang', 'Ko');
    }
  });
  $('header .menuBtn ul li.lang').click(function () {
    if ($(this).text() === 'En') {
      $(this).text('Ko');
      $('p, span, h3, a').each(function () {
        $(this).html($(this).attr('en'));
      });
      $('.sec2 .processBox .ko').hide();
      $('.sec2 .processBox .en').show();
      localStorage.setItem('lang', 'En');
    } else {
      $(this).text('En');
      $('p, span, h3, a').each(function () {
        $(this).html($(this).attr('ko'));
      });
      $('.sec2 .processBox .ko').show();
      $('.sec2 .processBox .en').hide();
      localStorage.setItem('lang', 'Ko');
    }
  });
  

	// 2. banner slide
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      660: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      861: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      1110: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1460: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      1790 : {
        slidesPerView : 4,
        spaceBetween : 50
      }
    },
  });
	

	// 3. sec1 cardBax
	$('.sec1 .cardBox .card').click(function(){
		$('.sec1 .cardBox .card').removeClass('active');
		$(this).addClass('active');
	});
  // 3-1. 매 3초마다 active 클래스 자동 추가 및 제거하기
  let auto = setInterval(function() {
    $('.sec1 .cardBox .card').each(function(index) {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        var nextIndex = (index + 1) % $('.sec1 .cardBox .card').length;
        $('.sec1 .cardBox .card').eq(nextIndex).addClass('active');
        return false;
      }
    });
  }, 3000);
  // 3-2. 마우스가 cardBox 영역에 올라가면 auto 멈추기
  $('.sec1 .cardBox').mouseenter(function() {
    clearInterval(auto);
  });
  // 3-3. 마우스가 cardBox 영역에서 나가면 auto 재실행하기
  $('.sec1 .cardBox').mouseleave(function() {
    auto = setInterval(function() {
      $('.sec1 .cardBox .card').each(function(index) {
        if ($(this).hasClass('active')) {
          $(this).removeClass('active');
          var nextIndex = (index + 1) % $('.sec1 .cardBox .card').length;
          $('.sec1 .cardBox .card').eq(nextIndex).addClass('active');
          return false;
        }
      });
    }, 3000);
  });

  // 4. 알림창
  $('header .menu-wrap .menu a, header .menuBtn ul li a').click(function () {
    let href = $(this).attr("href");
    console.log(href);
    if (href === '#none') {
        Swal.fire({
            icon: 'info',
            title: 'Notice',
            text: '현재 준비중인 서비스입니다.',
        });
    }
});

  // 5. 햄버거 버튼
  // 화면 크기에 따라 보이기 및 감추기
  const headerMenuBtn = () => {
    let ww = $(window).width();
    if (ww <= 700) {
      $('header .menu-wrap').hide();
      $('header .menuBtn').show();
    } else {
      $('header .menu-wrap').show();
      $('header .menuBtn').hide();
    }
  };
  
  $(document).ready(function () {
    headerMenuBtn();
  });
  $(window).resize(function () {
    headerMenuBtn();
  });

  $('header .menuBtn').click(function(){
    if($(this).hasClass('active')){
      $(this).removeClass('active');
    } else {
      $(this).addClass('active');
    }
  });  
});