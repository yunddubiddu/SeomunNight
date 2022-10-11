///////배너 스위퍼////////
new Swiper(".mySwiper", {
    centeredSlides: true,
    autoplay: {
      delay: 3200,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },    
  });
///////탑으로 이동////////
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}  
///////스크롤 이동////////
$(document).ready(function(){
  var $menu = $('.quick li a'),
  $contents = $('.anchor_area .anchor_div')
  $(window).scroll(function(){
  var scltop = $(window).scrollTop();
  $.each($contents, function(idx, item){
  var $target   = $contents.eq(idx),
  i = $target.index(),
  targetTop = $target.offset().top;
  if (targetTop <= scltop) {
  $menu.removeClass('on');
  $menu.eq(idx).addClass('on');
  }
  if (!(200 <= scltop)) {
  $menu.removeClass('on');
  }
  })
  });
 /* 탭 클릭 */
  $('.quick li a').on('click',function(){
  var anchorId = $(this).attr('data-anchor');
  // 스크롤 이동
  scroll_to_anchor_tab(anchorId);
  });
 // 퀵배너 스크롤
  $(window).scroll(function(){
  var quickPos = $('.quick_pos').offset().top;
  var winPos = $(window).scrollTop();
  if( winPos > quickPos ) $('.quick_pos .quick').addClass('fixed');
  else $('.quick_pos .quick').removeClass('fixed');
  });
  });
  // 탭 이동 - 부드러운 스크롤
  function scroll_to_anchor_tab(anchor_id,speed) {
  if( !speed ) var speed = 'slow';
  var a_tag = $("#"+anchor_id);
  if(a_tag.length > 0){
  $('html, body').animate({
  scrollTop: a_tag.offset().top - $('').height() -  $('').height() // 상단에 특정 위치를 제외하고 스크롤할때 해당 이름 작성
  }, speed);
  }
  }
///////갤러리 스위퍼////////
  new Swiper(".mySwiper2", {
    slidesPerView: 5,
        spaceBetween: 10,
        loop: true,
        pagination: {
          el: ".galleryPagination",
          clickable: true,
        },
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
  });
  $(document).ready(function(){
    $("#main_directionA").click(function(){
      $("p").show(1000);
    });
  });
//////////금주매대//////////
$(document).ready(function(){
  $("#recoman_i1").click(function(){
    $(".recomanImg").hide();
    $(".recoman_img1").show();
    $(".recoman_i>ul>li").removeClass("recomanO");
    $("#recoman_i1").addClass("recomanO");
  });
  $("#recoman_i2").click(function(){
    $(".recomanImg").hide();
    $(".recoman_img2").show();
    $(".recoman_i>ul>li").removeClass("recomanO");
    $("#recoman_i2").addClass("recomanO");
  });
  $("#recoman_i3").click(function(){
    $(".recomanImg").hide();
    $(".recoman_img3").show();
    $(".recoman_i>ul>li").removeClass("recomanO");
    $("#recoman_i3").addClass("recomanO");
  });
  $("#recoman_i4").click(function(){
    $(".recomanImg").hide();
    $(".recoman_img4").show();
    $(".recoman_i>ul>li").removeClass("recomanO");
    $("#recoman_i4").addClass("recomanO");
  });
  $("#recoman_i5").click(function(){
    $(".recomanImg").hide();
    $(".recoman_img5").show();
    $(".recoman_i>ul>li").removeClass("recomanO");
    $("#recoman_i5").addClass("recomanO");
  });
  $("#recoman_i6").click(function(){
    $(".recomanImg").hide();
    $(".recoman_img6").show();
    $(".recoman_i>ul>li").removeClass("recomanO");
    $("#recoman_i6").addClass("recomanO");
  });
  $("#recoman_i7").click(function(){
    $(".recomanImg").hide();
    $(".recoman_img7").show();
    $(".recoman_i>ul>li").removeClass("recomanO");
    $("#recoman_i7").addClass("recomanO");
  });
  $("#recoman_i8").click(function(){
    $(".recomanImg").hide();
    $(".recoman_img8").show();
    $(".recoman_i>ul>li").removeClass("recomanO");
    $("#recoman_i8").addClass("recomanO");
  });
  $("#recoman_i9").click(function(){
    $(".recomanImg").hide();
    $(".recoman_img9").show();
    $(".recoman_i>ul>li").removeClass("recomanO");
    $("#recoman_i9").addClass("recomanO");
  });
});
 
