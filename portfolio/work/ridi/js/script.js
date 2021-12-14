var mainNum = 1;
$('.main-prev').click(function(){
    if(mainNum <= $('.slide-list').length - 4 && mainNum > 1){
        mainNum--;
        console.log(mainNum);
        $('.slide-number-now').text(mainNum);
        $('.slide-set').stop().animate({'margin-left':-427 * mainNum + 'px'}, 100);
        $('.slide-list').removeClass('slide-list-sel');
        $('.slide-list').eq(mainNum + 1).addClass('slide-list-sel');
    } else if(mainNum == 1) {
        mainNum--;
        console.log('ok');
        $('.slide-number-now').text(7);
        $('.slide-list').removeClass('slide-list-sel');
        $('.slide-list').eq(1).addClass('slide-list-sel');
        $('.slide-list').eq(8).addClass('slide-list-sel');
        $('.slide-set').stop().animate({'margin-left':-427 * mainNum + 'px'}, 100, function(){
            mainNum = 7;
            $('.slide-set').css({'margin-left':'-2986px'});
        });
        
    }
    
})
$('.main-next').click(function(){
    if(mainNum < $('.slide-list').length - 4 && mainNum >= 0){
        mainNum++;
        console.log(mainNum);
        $('.slide-number-now').text(mainNum);
        $('.slide-set').stop().animate({'margin-left':-427 * mainNum + 'px'}, 100);
        $('.slide-list').removeClass('slide-list-sel');
        $('.slide-list').eq(mainNum + 1).addClass('slide-list-sel');
    } else if(mainNum == 7){
        mainNum++;
        console.log('ok');
        $('.slide-number-now').text(1);
        $('.slide-list').removeClass('slide-list-sel');
        $('.slide-list').eq(2).addClass('slide-list-sel');
        $('.slide-list').eq(9).addClass('slide-list-sel');
        $('.slide-set').stop().animate({'margin-left':-427 * mainNum + 'px'}, 100, function(){
            mainNum = 1;
            $('.slide-set').css({'margin-left':-427});
        });
        
    }
})

var todayPage = 0;
$('.today-prev').click(function(){
    if(todayPage == 0){
        $('.today-slide-set').stop().animate({'margin-left':'-1120px'}, 300);
        todayPage = 1;
    } else if(todayPage == 1){
        $('.today-slide-set').stop().animate({'margin-left':'0'}, 300);
        todayPage = 0;
    }
})
$('.today-next').click(function(){
    if(todayPage == 0){
        $('.today-slide-set').stop().animate({'margin-left':'-1120px'}, 300);
        todayPage = 1;
    } else if(todayPage == 1){
        $('.today-slide-set').stop().animate({'margin-left':'0'}, 300);
        todayPage = 0;
    }
})

var newPage = 0;
$('.new-prev').click(function(){
    if(newPage == 0){
        $('.new-slide-set').stop().animate({'margin-left':'-1120px'}, 300);
        newPage = 1;
    } else if(newPage == 1){
        $('.new-slide-set').stop().animate({'margin-left':'0'}, 300);
        newPage = 0;
    }
})
$('.new-next').click(function(){
    if(newPage == 0){
        $('.new-slide-set').stop().animate({'margin-left':'-1120px'}, 300);
        newPage = 1;
    } else if(newPage == 1){
        $('.new-slide-set').stop().animate({'margin-left':'0'}, 300);
        newPage = 0;
    }
})

var recomPage = 0;
$('.recommand-prev').click(function(){
    if(recomPage == 0){
        $('.recommand-slide-set').stop().animate({'margin-left':'-750px'}, 300);
        recomPage = 1;
    } else if(recomPage == 1){
        $('.recommand-slide-set').stop().animate({'margin-left':'0'}, 300);
        recomPage = 0;
    }
})
$('.recommand-next').click(function(){
    if(recomPage == 0){
        $('.recommand-slide-set').stop().animate({'margin-left':'-750px'}, 300);
        recomPage = 1;
    } else if(recomPage == 1){
        $('.recommand-slide-set').stop().animate({'margin-left':'0'}, 300);
        recomPage = 0;
    }
})
