$(function(){
    /* 어느 기기로 접속하던 페이지의 높이가
    꽉차게 나오게 하는 방법 */
    /* 브라우저 너비, 높이값 변수 할당 */
    /* 나는 body나 html만 생각했는데 
    최상위 객체 window로 잡아줘야함 */
    var browserWidth = $(window).width();
    var browserHeight = $(window).height();
    console.log('브라우저 너비값 : ' + browserWidth);
    console.log('브라우저 높이값 : ' + browserHeight);

    // DOM객체에 동적 높이값 적용
    $('#wrap').css({height:browserHeight});
});