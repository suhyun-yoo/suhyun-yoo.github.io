$(document).ready(function () {
	// reload
	history.scrollRestoration = "manual";
	$('header .logo').click(function () {
		location.reload();
	});

	// language
	// Set default language value if not present in local storage
	if (!localStorage.getItem('lang')) {
		localStorage.setItem('lang', 'Ko');
		console.log(localStorage.getItem('lang'));
	}
	$(window).on('load', function () {
		if (localStorage.getItem('lang') === 'Ko') {
			$('p, span, h3').each(function () {
				$(this).html($(this).attr('ko'));
			});
			$('header .menu-wrap .menu.lang').html('En');
		} else {
			$('p, span, h3').each(function () {
				$(this).html($(this).attr('en'));
			});
			$('header .menu-wrap .menu.lang').html('Ko');
		}
	});
	// change language
	$('header .menu-wrap .menu.lang').click(function () {
		if ($(this).text() === 'En') {
			$(this).text('Ko');
			$('p, span, h3').each(function () {
				$(this).html($(this).attr('en'));
			});
			localStorage.setItem('lang', 'En');
		} else {
			$(this).text('En');
			$('p, span, h3').each(function () {
				$(this).html($(this).attr('ko'));
			});
			localStorage.setItem('lang', 'Ko');
		}
	});

  // 2. Scroll에 따른 Header SideBar 스타일링
  // 2-1. 각 section 영역 높이값 가져오기
  const sec1 = $('.sec1').offset().top;
  const sec2 = $('.sec2').offset().top;
  const sec3 = $('.sec3').offset().top;

  // 2-2. window에 scroll이 발생하면, window의 위치값을 확인하고 위치값을 window화면의 높이를 기준으로 비교하여 스타일링 바꾸기
  $(window).scroll(function () {
    let sct = $(window).scrollTop();
    console.log(sct);
    // 2-2-1. Header 스타일링
    if (sct < sec1) {
      $('header .menu-wrap .menu').css({ color: '#fff' });
    } else if (sct >= sec1 && sct < sec2) {
      $('header .menu-wrap .menu').css({ color: '#000' });
    } else if (sct >= sec2 && sct < sec3) {
      $('header .menu-wrap .menu').css({ color: 'rgba(0,0,0,0.8)' });
      $('header .menu-wrap .menu:nth-child(-n+2)').show();
    } else if (sct >= sec3) {
      $('header').addClass('active');
      $('header .menu-wrap .menu').css({ color: '#000' });
      $('header .menu-wrap .menu:nth-child(-n+2)').hide();
    };

    // 2-2-2. SideBar 스타일링
    // === SideBar 영역 보이기 및 감추기
    if (sct < sec1 * 0.7) {
      $('.sideBar').removeClass('active');
    } else {
      $('.sideBar').addClass('active');
    };
    // === 위치값에 따라 active되는 menu 스타일링
    if (sct >= sec1 * 0.9 && sct < sec2 * 0.9) {
      $('.sideBar p').removeClass('active');
      $('.sideBar.active p:nth-child(2)').addClass('active');
    } else if (sct >= sec2 * 0.9 && sct < sec3 * 0.9) {
      $('.sideBar p').removeClass('active');
      $('.sideBar.active p:nth-child(3)').addClass('active');
    } else if (sct >= sec3 * 0.9) {
      $('.sideBar p').removeClass('active');
      $('.sideBar.active p:nth-child(4)').addClass('active');
    };

    // 2-3. sct값에 따른 section2 영역 animate 효과
    if (sct >= sec2 * 0.75) {
      $('.sec2 .sec-bottom .service:nth-child(1)').addClass('active');
    };
    if (sct >= sec2) {
      $('.sec2 .sec-bottom .service:nth-child(2)').addClass('active');
    };
    if (sct >= sec2 * 1.25) {
      $('.sec2 .sec-bottom .service:nth-child(3)').addClass('active');
    };
    if (sct >= sec2 * 1.5) {
      $('.sec2 .sec-bottom .service:nth-child(4)').addClass('active');
    };
  });

  // 2-3. sideBar > sideMenu 클릭 시 해당 영역으로 이동
  $('.sideBar p').click(function () {
    let idx = $(this).attr('index');
    if (idx === '0') {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
        // location.reload();
    } else if (idx === '1') {
        $('html, body').animate({
            scrollTop: sec1
        }, 1000);
    } else if (idx === '2') {
        $('html, body').animate({
            scrollTop: sec2
        }, 1000);
    } else if (idx === '3') {
        $('html, body').animate({
            scrollTop: sec3
        }, 1000);
    }
});

  // 3. banner 텍스트 typing 효과
  const content = "Are You Safe From Hacking?";
  const text = document.querySelector(".banner .swiper .swiper-wrapper .swiper-slide:first-child .title");
  let i = 0;
  function typing() {
    if (i < content.length) {
      let txt = content.charAt(i);
      text.innerHTML += txt;
      i++;
    }
  }
  setInterval(typing, 100);

  // 4. banner swiper
  var swiper = new Swiper(".banner .mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // 5. what we do swiper
  $('.sec1 .sec-bottom .mySwiper').on('mouseover', function(){
    swiper.autoplay.stop();
  });
  $('.sec1 .sec-bottom .mySwiper').on('mouseout', function(){
    swiper.autoplay.start();
  });
  var swiper = new Swiper(".sec1 .sec-bottom .mySwiper", {
    slidesPerView: 1,
    spaceBetween: 5,
    grabCursor: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      850: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1300: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      1800 : {
        slidesPerView : 4,
        spaceBetween : 50
      }
    },
  });

  // 6. section3 영역 이동
  $('.sec3 .sec-bottom .box-left').click(function () {
    location.href = 'AboutUs.html?tab=1';
  });
  $('.sec3 .sec-bottom .box-middle .box-top').click(function () {
    location.href = 'AboutUs.html?tab=2';
  });
  $('.sec3 .sec-bottom .box-middle .box-bottom .bottom-left a').click(function () {
    location.href = 'AboutUs.html?tab=3';
  });

  // 7. 알림창
  $('.sec2 .sec-bottom .service .txtBox a').click(function () {
    let href = $(this).attr("href");
    console.log(href);
    if (href === '#none') {
      let message = (localStorage.getItem('lang') === 'Ko') ? '현재 준비중인 서비스입니다.' : 'This is a service in preparation.';
      Swal.fire({
        icon: 'info',
        title: 'Notice',
        text: message,
      });
    }
  });
});