/* 슬라이드 JS */
$('.main_slide').slick({
    // dots: true,
    slide: 'div',
    dotsClass: 'slick-dots',
    autoplay: true,
    infinite: true,
    speed: 400,
    cssEase: 'linear'
});

/* travel tab */
$('main .travel_tab li').on('click', function(){
    const num = $(this).index();
    console.log(num);
    $('.travel_tab li').removeClass('on');
    $(this).addClass('on');
    $('main .tabs').hide().eq(num).show();
});

/* video 모달창 */
$('.video_img>li').click(function(){
    const tab = $('.video_img>li').index(this);
    console.log(tab);
    $('.modal0'+tab).show();
});

$('.modal>img').on('click',function(){
    $('.modal').fadeOut();
    /* video 닫을때 동영상 멈추기 */
    // 첫번재 오류
    // 동영상을 닫았을때 같은 소스를 다시 붙여서 똑같은 영상을 볼 수 있게 하는 것
    // 두번째 오류
    /* 같은 attr src만 붙이면 순서를 지정해주지 않았기때문에 첫번째 클릭한 src로 다 바뀌게 됨 
    따라서 this를 써서 클릭한 동영상의 src만 바뀌게 해야함 */
    $(this).siblings('div').children('iframe').attr('src', $(this).siblings('div').children('iframe').attr('src'));
});

