$(document).ready(function(){
    // 풀페이지 선언하기
    new fullpage('#wrap', {
        // 새로고침 시, 최상단 section으로 이동되는 부분 막기
        anchors: ['anchor1','anchor2','anchor3','anchor4','anchor5','anchor6'],

        // 세로 스크롤바 생성 (생성하지 않으면 윈도우 스크롤값을 인식하지 못함 / 기본값이 false임)
        scrollBar : true,

        // 지정한 섹션에는 스크롤이 정상값으로 돌아가게 처리하기
        // .footer 영역의 높이가 50vh로 화면을 다 채우지 않기 때문에 .sec4 또한 normalScrollElements에 추가해주어야 기본 스크롤이 생겨남
        normalScrollElements : '.footer',

        // 높잇값이 풀페이지가 아닌 경우, 풀페이지 상단 영역으로 올라가는 것 막아주기
        fitToSection : false
    });

    // 스크롤이 발생할 경우, window 스크롤값 저장 후, header 컬러 변경하기
    $(window).scroll(function(){
        let sct = $(window).scrollTop();
        let wh = $(window).height();
        console.log('@@@@@@@@',wh);
        console.log(sct);
        
        if(sct > wh*4){
            $('.banner header').addClass('active');
        } else{
            $('.banner header').removeClass('active');
        }
    });
});