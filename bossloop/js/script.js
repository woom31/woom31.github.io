$(window).scroll(function(){
    let scroll = $(window).scrollTop();
    console.log(scroll);

    // offSet().top이 4개 필요하므로 반복문 사용
    for(let i = 0; i < $(".contents").length; i++) {

    // section 각각의 높이를 읽어준다.
    let sectionTop = $(".contents").eq(i).offset().top;
    // console.log(sectionTop)
    
    // sectionTop + section의 높이 = sectionbottom
    let sectionBottom = sectionTop + $(".contents").eq(i).outerHeight();
    let winHeight = $(window).height();
    let scrollBottom = $("#wrap").height() - winHeight - 50;

    // scroll이 section보다 크거나 작고, sectionbottom보다 작으면 해당 section의 영역이 됨
    if(scroll >= sectionTop - 50 && scroll < sectionBottom) {
      $(".navBtn").removeClass("navSel");
      $(".navBtn").eq(i).addClass("navSel");
    } 

    if(scroll >= scrollBottom) {
      $(".navBtn").eq(3).removeClass("navSel");
      $(".navBtn").eq(4).addClass("navSel");
    }
}});

  
  $('#main').on('scroll touchmove mousewheel', function(event) {
    
    event.preventDefault();
    event.stopPropagation();
    return false;

});

$(document).ready(function($) {
    $('#mainBtn').on('click', function(){
        $('html, body').animate({
            scrollTop : 0
        }, 600);
        $('#main').stop().animate({'top':'0'}, 800, function(){
            $('.navBtn').removeClass('navSel');
            $('#mainBtn').addClass('navSel');
        });
        
    });

    $(".navBtn").click(function(event){         
        
            event.preventDefault();

            $('html,body').animate({scrollTop:$(this.hash).offset().top}, 600);
            $('#main').stop().animate({'top':'-120vh'}, 800);
            $('.navBtn').removeClass('navSel');
            $('#aboutBtn').addClass('navSel');
    });

    

    //슬라이드
    $('.slideBox').css({'opacity':'0.3'});
    $('.sel').css({'opacity':'1'});
    var btnClick = 0;
    $('.slidePrev').on('click', function(){
        console.log(btnClick);

        if(btnClick > 0){
            btnClick--;
            $('.slideWrapper ul').stop().animate({'margin-left':'-28' * btnClick + '%'});
            $('.slideBox').removeClass('sel').stop().animate({'opacity':'0.3'});
            $('.slideBox').eq(btnClick).addClass('sel').stop().animate({'opacity':'1'});
        }
    })
    $('.slideNext').on('click', function(){
        if(btnClick < $('.slideBox').length - 1){
            console.log(btnClick);
            btnClick++;
            $('.slideWrapper ul').stop().animate({'margin-left':'-28' * btnClick + '%'});
            $('.slideBox').removeClass('sel').stop().animate({'opacity':'0.3'});
            $('.slideBox').eq(btnClick).addClass('sel').stop().animate({'opacity':'1'});
        }
    })


    


    $('#main').on('mousewheel',function(e){
        var wheel = e.originalEvent.wheelDelta;
        
        //스크롤값을 가져온다.
        if(wheel>0){
            //스크롤 올릴때
            console.log('up');
            return false;
        } else {
            if(!$('#main').is(':animated')){
                //스크롤 내릴때
                console.log('down');
                $('#main').stop().animate({'top':'-120vh'}, 800);
                $('#mainBtn').removeClass('navSel');
                $('#aboutBtn').addClass('navSel');
            } else {
                return false;
            }
        }
    });

    $('#about').on('mousewheel',function(e){
        var wheel = e.originalEvent.wheelDelta;
        let sectionTop = $("#about").offset().top;
        
        if(wheel>0){
            if(!$('#main').is(':animated')){
                //스크롤 올릴때
                console.log('up');
                if($(window).scrollTop() == sectionTop){
                    $('#main').stop().animate({'top':'0'}, 600);
                    $('#aboutBtn').removeClass('navSel');
                    $('#mainBtn').addClass('navSel');
                }
            }
        } 
    });

});


