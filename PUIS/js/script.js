$(document).ready(function(){
    // 풀페이지 연결
    new fullpage('#wrap', {
        // 새로고침 시, 최상단 section으로 이동되는 부분 막기
        anchors: ['anchor1','anchor2'],
        scrollBar : true,

        // 스크롤 속도 설정
        scrollingSpeed : 500,
    });
});