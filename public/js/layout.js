var lastScrollTop = 0, delta = 15;

$(window).scroll(function(){
    var scrollTop = $(this).scrollTop()
    if(Math.abs(lastScrollTop - scrollTop) <= delta)
    return; 
    if ((scrollTop > lastScrollTop) && (lastScrollTop>0)){
        $(".web_h").css("top","-150px");
        $(".topBtn").css("display","none");
    } else {
        $(".web_h").css("top","0px");
        $(".web_h").css("background-color","white");
        $(".topBtn").css("display","block");
    }
    lastScrollTop = scrollTop;
});