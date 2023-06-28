
$('#myBtn').on('click',myfunction);

// EvnetListenter
function myfunction(){
    var dots = $('#dots');
    var moreButton = $('#more');
    var btnText = $('#myBtn');
    /* css속성명만(속성값X) 변수에 넣으면
    코드분기가 가능
    -> 속성값을 안주니까 기본적으로
       디폴트값이 옴  */
    var result = dots.css('display');
    // event임을 인지하고 있기
    // inline-blodck 출력
    console.log(result);
    // display가 none이라면
    if(result == 'none') {
        /* display의 반대는 block뿐만 아니라
        3개값이 모두 다 반대임 */
        dots.css({display:'inline'});
        btnText.text('+MORE');
        moreButton.css({display:'none'});
    }else {
        // display가 none이 아니라면
        dots.css({display:'none'});
        btnText.text('-CLOSE');
        moreButton.css({display:'inline'});
    }
}
 