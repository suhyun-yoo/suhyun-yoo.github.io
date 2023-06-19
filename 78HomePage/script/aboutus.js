$(document).ready(function () {
  // language 초기값
  let lang = localStorage.getItem('lang');
  console.log(lang);

	// language
	// Set default language value if not present in local storage
	if (!localStorage.getItem('lang')) {
		localStorage.setItem('lang', 'Ko');
		console.log(localStorage.getItem('lang'));
	}
	$(window).on('load', function () {
		if (localStorage.getItem('lang') === 'Ko') {
			$('p, span, label, b, a').each(function () {
				$(this).html($(this).attr('ko'));
			});
			$('header .menu-wrap .menu.lang').html('En');
      $('.tabs .tab .core-value .value .card .valueName').show();
		} else {
			$('p, span, label, b, a').each(function () {
				$(this).html($(this).attr('en'));
			});
			$('header .menu-wrap .menu.lang').html('Ko');
      $('.tabs .tab .core-value .value .card .valueName').hide();
		}
	});
	// change language
	$('header .menu-wrap .menu.lang').click(function () {
		if ($(this).text() === 'En') {
			$(this).text('Ko');
			$('p, span, label, b, a').each(function () {
				$(this).html($(this).attr('en'));
			});
      $('.tabs .tab .core-value .value .card .valueName').hide();
			localStorage.setItem('lang', 'En');
		} else {
			$(this).text('En');
			$('p, span, label, b, a').each(function () {
				$(this).html($(this).attr('ko'));
			});
      $('.tabs .tab .core-value .value .card .valueName').show();
			localStorage.setItem('lang', 'Ko');
		}
	});

  // 0. animate txtBox
  $(window).on('load', function () {
    $('.banner .txtBox').css({
      transform: 'translateX(0)'
    });
  });
  
  // 1. tab
  $(".btn li").click(function (event) {
    event.preventDefault(); // 페이지 새로고침 방지
    var tabIndex = $(this).index() + 1;
    var url = 'AboutUs.html?tab=' + tabIndex;
    $(".btn li").removeClass("active");
    $(this).addClass("active");
    history.pushState(null, null, url);
    var tabText = $(this).text();
    $(".banner .title").text(tabText);
    $(".tab").removeClass("active");
    $("#tab" + tabIndex).addClass("active");
  });
  // 페이지가 로드될 때 URL의 탭 인덱스 값에 따라 활성화된 탭 설정
  var urlParams = new URLSearchParams(window.location.search);
  var tabIndex = urlParams.get('tab');
  if (tabIndex) {
    $(".btn li").removeClass("active");
    $(".btn li:nth-child(" + tabIndex + ")").addClass("active");

    var tabText = $(".btn li:nth-child(" + tabIndex + ")").text();
    $(".banner .title").text(tabText);

    $(".tab").removeClass("active");
    $("#tab" + tabIndex).addClass("active");
  };

  // 3. location
  // $('#tab3 .magok').hide();
  $(".boxWrap .box .locate input[type='radio']").change(function () {
    if($('#wework').is(':checked')){
      $('#tab3 .wework').show();
      $('#tab3 .magok').hide();
    }
    if($('#magok').is(':checked')){
      $('#tab3 .wework').hide();
      $('#tab3 .magok').show();
    };
  })

  // 4. footer icon
	$('footer .footer-top .logoBox').click(function(){
		location.href = 'Home.html';
  });
});
