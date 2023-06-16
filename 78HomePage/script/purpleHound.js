$(document).ready(function () {
  // 0. logo 클릭 시 새로고침
  history.scrollRestoration = "manual"
  $('header .logo').click(function () {
    location.reload();
  });

  // 1. 언어 변환 기능
  $(window).on('load', function () {
    if (localStorage.getItem('lang') === 'Ko') {
      $('p, span, h3, h1, label, th, td, li').each(function () {
        $(this).html($(this).attr('ko'));
      });
      $('header .menu-wrap .menu.lang').html('En');
      $('header .menuBtn ul li.lang').html('En');
      $('.sec2 .processBox .ko').show();
      $('.sec2 .processBox .en').hide();
      $('.sec4 .sec-bottom .btnInfo').html($('.sec4 .sec-bottom .buttonBox input[type="radio"]:checked').attr('ko'))
    } else {
      $('p, span, h3, h1, label, th, td, li').each(function () {
        $(this).html($(this).attr('en'));
      });
      $('header .menu-wrap .menu.lang').html('Ko');
      $('header .menuBtn ul li.lang').html('Ko');
      $('.sec2 .processBox .ko').hide();
      $('.sec2 .processBox .en').show();
      $('.sec4 .sec-bottom .btnInfo').html($('.sec4 .sec-bottom .buttonBox input[type="radio"]:checked').attr('en'))
    }
  });
  // change language
  $('header .menu-wrap .menu.lang').click(function () {
    if ($(this).text() === 'En') {
      $(this).text('Ko');
      $('p, span, h3, h1, label, th, td, li').each(function () {
        $(this).html($(this).attr('en'));
      });
      $('.sec2 .processBox .ko').hide();
      $('.sec2 .processBox .en').show();
      $('.sec4 .sec-bottom .btnInfo').html($('.sec4 .sec-bottom .buttonBox input[type="radio"]:checked').attr('en'))
      localStorage.setItem('lang', 'En');
    } else {
      $(this).text('En');
      $('p, span, h3, h1, label, th, td, li').each(function () {
        $(this).html($(this).attr('ko'));
      });
      $('.sec2 .processBox .ko').show();
      $('.sec2 .processBox .en').hide();
      $('.sec4 .sec-bottom .btnInfo').html($('.sec4 .sec-bottom .buttonBox input[type="radio"]:checked').attr('ko'))
      localStorage.setItem('lang', 'Ko');
    }
  });
  $('header .menuBtn ul li.lang').click(function () {
    if ($(this).text() === 'En') {
      $(this).text('Ko');
      $('p, span, h3').each(function () {
        $(this).html($(this).attr('en'));
      });
      $('.sec2 .processBox .ko').hide();
      $('.sec2 .processBox .en').show();
      localStorage.setItem('lang', 'En');
    } else {
      $(this).text('En');
      $('p, span, h3').each(function () {
        $(this).html($(this).attr('ko'));
      });
      $('.sec2 .processBox .ko').show();
      $('.sec2 .processBox .en').hide();
      localStorage.setItem('lang', 'Ko');
    }
  });

  // 2. tab 기능
  $('.sec2 .sec-bottom .tab-btn input[type="radio"]').change(function () {
    if ($('#offensive').is(':checked')) {
      $('.sec2 .sec-bottom .tab-wrap .tab.active#tab2').removeClass('active');
      $('.sec2 .sec-bottom .tab-wrap .tab#tab1').addClass('active');
    }
    if ($('#customized').is(':checked')) {
      $('.sec2 .sec-bottom .tab-wrap .tab.active#tab1').removeClass('active');
      $('.sec2 .sec-bottom .tab-wrap .tab#tab2').addClass('active');
    }
  });

  // 3. section3 cardBax
  $('.sec3 .cardBox .card').click(function () {
    $('.sec3 .cardBox .card').removeClass('active');
    $(this).addClass('active');
  });
  // 3-1. 매 3초마다 active 클래스 자동 추가 및 제거하기
  let auto = setInterval(function () {
    $('.sec3 .cardBox .card').each(function (index) {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        var nextIndex = (index + 1) % $('.sec3 .cardBox .card').length;
        $('.sec3 .cardBox .card').eq(nextIndex).addClass('active');
        return false;
      }
    });
  }, 3000);
  // 3-2. 마우스가 cardBox 영역에 올라가면 auto 멈추기
  $('.sec3 .cardBox').mouseenter(function () {
    clearInterval(auto);
  });
  // 3-3. 마우스가 cardBox 영역에서 나가면 auto 재실행하기
  $('.sec3 .cardBox').mouseleave(function () {
    auto = setInterval(function () {
      $('.sec3 .cardBox .card').each(function (index) {
        if ($(this).hasClass('active')) {
          $(this).removeClass('active');
          var nextIndex = (index + 1) % $('.sec3 .cardBox .card').length;
          $('.sec3 .cardBox .card').eq(nextIndex).addClass('active');
          return false;
        }
      });
    }, 3000);
  });

  // 4. section4 verticalTAB
  $('.sec4 .sec-bottom .buttonBox input[type="radio"]').change(function () {
    if ($('#dashboard').is(':checked')) {
      $('.sec4 .sec-bottom .imgBox .img').removeClass('active');
      $('.sec4 .sec-bottom .buttonBox label').removeClass('active');
      $('.sec4 .sec-bottom .imgBox .img#img1').addClass('active');
      $('.sec4 .sec-bottom .buttonBox label[for="dashboard"]').addClass("active");
      if(localStorage.getItem('lang') === 'Ko'){
        $('.sec4 .sec-bottom .btnInfo').html($(this).attr('ko'))
      } else {
        $('.sec4 .sec-bottom .btnInfo').html($(this).attr('en'))
      }
    }
    if ($('#scenario').is(':checked')) {
      $('.sec4 .sec-bottom .imgBox .img').removeClass('active');
      $('.sec4 .sec-bottom .buttonBox label').removeClass('active');
      $('.sec4 .sec-bottom .imgBox .img#img2').addClass('active');
      $('.sec4 .sec-bottom .buttonBox label[for="scenario"]').addClass("active");
      if(localStorage.getItem('lang') === 'Ko'){
        $('.sec4 .sec-bottom .btnInfo').html($(this).attr('ko'))
      } else {
        $('.sec4 .sec-bottom .btnInfo').html($(this).attr('en'))
      }
    }
    if ($('#history').is(':checked')) {
      $('.sec4 .sec-bottom .imgBox .img').removeClass('active');
      $('.sec4 .sec-bottom .buttonBox label').removeClass('active');
      $('.sec4 .sec-bottom .imgBox .img#img3').addClass('active');
      $('.sec4 .sec-bottom .buttonBox label[for="history"]').addClass("active");
      if(localStorage.getItem('lang') === 'Ko'){
        $('.sec4 .sec-bottom .btnInfo').html($(this).attr('ko'))
      } else {
        $('.sec4 .sec-bottom .btnInfo').html($(this).attr('en'))
      }
    }
    if ($('#report').is(':checked')) {
      $('.sec4 .sec-bottom .imgBox .img').removeClass('active');
      $('.sec4 .sec-bottom .buttonBox label').removeClass('active');
      $('.sec4 .sec-bottom .imgBox .img#img4').addClass('active');
      $('.sec4 .sec-bottom .buttonBox label[for="report"]').addClass("active");
      if(localStorage.getItem('lang') === 'Ko'){
        $('.sec4 .sec-bottom .btnInfo').html($(this).attr('ko'))
      } else {
        $('.sec4 .sec-bottom .btnInfo').html($(this).attr('en'))
      }
    }
  });

  // 5. 알림창
  $('header .menu-wrap .menu a').click(function () {
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

  // 6. 햄버거 버튼
  // 화면 크기에 따라 보이기 및 감추기
  const headerMenuBtn = () => {
    let ww = $(window).width();
    console.log(ww)
    if (ww <= 980) {
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