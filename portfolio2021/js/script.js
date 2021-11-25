$(document).ready(function(){
    var headerColor = function(){
        let scroll = $(window).scrollTop() + 70;
        console.log(scroll);
    
        // section 각각의 높이를 읽어준다.
        let mainTop = $("#main").offset().top;
        let aboutTop = $(".about-top").offset().top;
        let abilityTop = $(".about-bottom").offset().top;
        let workTop = $("#work").offset().top;
        let contactTop = $("#contact").offset().top;
        // console.log(sectionTop)
        
        // sectionTop + section의 높이 = sectionbottom
        let mainBottom = mainTop + $("#main").outerHeight();
        let aboutBottom = aboutTop + $(".about-top").outerHeight();
        let abilityBottom = abilityTop + $(".about-bottom").outerHeight();
        let workBottom = workTop + $("#work").outerHeight();
        let contactBottom = contactTop + $("#contact").outerHeight();
    
        // scroll이 section보다 크거나 작고, sectionbottom보다 작으면 해당 section의 영역이 됨
        if(scroll >= mainTop - 50 && scroll < mainBottom) {
            $(".logo-img-bk").css({'opacity':'0'});
            $(".logo-img-wt").css({'opacity':'1'});
            $(".nav-btn").css({'color':'#ffffff'});
        } else if(scroll >= aboutTop - 50 && scroll < aboutBottom) {
            $(".logo-img-bk").css({'opacity':'1'});
            $(".logo-img-wt").css({'opacity':'0'});
            $(".nav-btn").css({'color':'#ffffff'});
        } else if(scroll >= abilityTop - 50 && scroll < abilityBottom) {
            $(".logo-img-bk").css({'opacity':'0'});
            $(".logo-img-wt").css({'opacity':'1'});
            $(".nav-btn").css({'color':'#ffffff'});
        } else if(scroll >= workTop - 50 && scroll < workBottom) {
            $(".logo-img-bk").css({'opacity':'0'});
            $(".logo-img-wt").css({'opacity':'1'});
            $(".nav-btn").css({'color':'#ffffff'});
        } else if(scroll >= contactTop - 50 && scroll < contactBottom) {
            $(".logo-img-bk").css({'opacity':'1'});
            $(".logo-img-wt").css({'opacity':'0'});
            $(".nav-btn").css({'color':'#000000'});
        } 
    };
    headerColor();
    $(window).scroll(function(){
        headerColor();
    });



    TweenLite.defaultEase = Linear.easeNone;
    var controller = new ScrollMagic.Controller();

    var webStart = new TimelineMax()
                    .add([
                        TweenMax.from(".main-slogan p:nth-child(1)", 1, {
                            delay: 0.1,
                            x: "-120%",}),
                        TweenMax.from(".main-slogan p:nth-child(2)", 1, {
                            delay: 0.3,
                            x: "-120%",}),
                        TweenMax.from(".main-slogan p:nth-child(3)", 1, {
                            delay: 0.5,
                            x: "-120%",}),
                    ])
    webStart;

    


    var abilityStart1 = new TimelineMax()
                    .add([
                        TweenMax.from(".ability-box:nth-child(1) .line-design", 1, {
                            width: "0%",}),
                        TweenMax.from(".ability-box:nth-child(1) .ability-box-head div", 0.6, {
                            delay: 0.2,
                            y: "120%",}),
                        TweenMax.from(".ability-box:nth-child(1) .ability-box-text div", 0.6, {
                            delay: 0.6,
                            y: "-120%",}),
                        TweenMax.from(".ability-box:nth-child(2) .line-design", 1, {
                            delay: 0.4,
                            width: "0%",}),
                        TweenMax.from(".ability-box:nth-child(2) .ability-box-head div", 0.6, {
                            delay: 0.6,
                            y: "120%",}),
                        TweenMax.from(".ability-box:nth-child(2) .ability-box-text div", 0.6, {
                            delay: 1,
                            y: "-120%",}),
                    ])
    
    var abilityStart2 = new TimelineMax()
                    .add([
                        TweenMax.from(".ability-box:nth-child(3) .line-design", 1, {
                            width: "0%",}),
                        TweenMax.from(".ability-box:nth-child(3) .ability-box-head div", 0.6, {
                            delay: 0.2,
                            y: "120%",}),
                        TweenMax.from(".ability-box:nth-child(3) .ability-box-text div", 0.6, {
                            delay: 0.6,
                            y: "-120%",}),
                        TweenMax.from(".ability-box:nth-child(4) .line-design", 1, {
                            delay: 0.4,
                            width: "0%",}),
                        TweenMax.from(".ability-box:nth-child(4) .ability-box-head div", 0.6, {
                            delay: 0.6,
                            y: "120%",}),
                        TweenMax.from(".ability-box:nth-child(4) .ability-box-text div", 0.6, {
                            delay: 1,
                            y: "-120%",}),
                    ])

    var abilityAnimate1 = new ScrollMagic.Scene({
                        triggerElement: ".ability",
                            offset: 0,
                            triggerHook: 0.8
                        })
                        .setTween(abilityStart1)
                        .addTo(controller)
    var abilityAnimate2 = new ScrollMagic.Scene({
                        triggerElement: ".ability",
                            offset: 0,
                            triggerHook: 0.6
                        })
                        .setTween(abilityStart2)
                        .addTo(controller)             
                        


    $('.nav-btn').on('mouseenter', function(){
        $(this).find('.nav-btn-line').stop().animate({'width':'91%'}, 200);
    }).on('mouseleave', function(){
        $('.nav-btn-line').stop().animate({'width':'0'}, 200);

    })
                        
    
    $('.work-box-left .work-btn').mouseenter(function(){
        new TimelineMax().add([
            TweenMax.to($(this).closest('.work-box').find('.work-img-rotate'), 0.3, {
                rotateY: 0,
            }),
            TweenMax.to($(this).closest('.work-box').find('.work-img'), 1, {
                webkitFilter: "grayscale(0) brightness(1)",
                filter: "grayscale(0) brightness(1)",
            }),
        ])
    }).mouseleave(function(){
        if($(window).width() >= 1024){
            new TimelineMax().add([
                TweenMax.to($(this).closest('.work-box').find('.work-img-rotate'), 0.3, {
                    rotateY: "10deg",
                }),
                TweenMax.to($(this).closest('.work-box').find('.work-img'), 1, {
                    webkitFilter: "grayscale(1) brightness(0.8)",
                    filter: "grayscale(1) brightness(0.8)",
                }),
            ])
        } else {
            new TimelineMax().add([
                TweenMax.to($(this).closest('.work-box').find('.work-img-rotate'), 0.3, {
                    rotateY: "0deg",
                }),
                TweenMax.to($(this).closest('.work-box').find('.work-img'), 1, {
                    webkitFilter: "grayscale(1) brightness(0.8)",
                    filter: "grayscale(1) brightness(0.8)",
                }),
            ])
        }
    })
    $('.work-box-right .work-btn').mouseenter(function(){
        new TimelineMax().add([
            TweenMax.to($(this).closest('.work-box').find('.work-img-rotate'), 0.3, {
                rotateY: 0,
            }),
            TweenMax.to($(this).closest('.work-box').find('.work-img'), 1, {
                webkitFilter: "grayscale(0) brightness(1)",
                filter: "grayscale(0) brightness(1)",
            }),
        ])
    }).mouseleave(function(){
        if($(window).width() >= 1024){
            new TimelineMax().add([
                TweenMax.to($(this).closest('.work-box').find('.work-img-rotate'), 0.3, {
                    rotateY: "-10deg",
                }),
                TweenMax.to($(this).closest('.work-box').find('.work-img'), 1, {
                    webkitFilter: "grayscale(1) brightness(0.8)",
                    filter: "grayscale(1) brightness(0.8)",
                }),
            ])
        } else {
            new TimelineMax().add([
                TweenMax.to($(this).closest('.work-box').find('.work-img-rotate'), 0.3, {
                    rotateY: "0deg",
                }),
                TweenMax.to($(this).closest('.work-box').find('.work-img'), 1, {
                    webkitFilter: "grayscale(1) brightness(0.8)",
                    filter: "grayscale(1) brightness(0.8)",
                }),
            ])
        }
    })

    $('.about-img-wrap').on('mouseenter', function(){
        $('.about-img').stop().animate({'width':'110%', 'margin-left':'-5%'}, 1000, 'easeInOutQuad');
        new TweenMax.to($('.about-img'), 0.3, {
            webkitFilter: "grayscale(0)",
            filter: "grayscale(0)",
        })
    }).on('mouseleave', function(){
        $('.about-img').stop().animate({'width':'100%', 'margin-left':'0%'}, 300, 'easeInOutQuad');
        new TweenMax.to($('.about-img'), 0.3, {
            webkitFilter: "grayscale(1)",
            filter: "grayscale(1)",
        })
    })




    var workObj = [
        {
            index: 1,
            title: "BOSS LOOP Promotion Page",
            bgimg: "./img/work/work1.png",
            url: "./work/bossloop/index.html",
            role: "웹 퍼블리싱 / 모션그래픽 / 뉴미디어 개발",
            term: "2017.09 ~ 2017.11",
            text: "BOSS사의 'LOOP Station' 프로모션을 위한 뉴미디어 프로젝트를 제작하고, 본 프로젝트를 소개하기 위한 웹 페이지를 제작하였습니다. 사면체의 오브젝트를 이어붙여서 만든 정육면체의 오브젝트에 빔프로젝터를 쏘아 프로젝션 맵핑 방식으로 제작하였고, 발판을 밟아 자신만의 음악을 만든다는 LOOP 제품의 특성을 살려 체험자가 직접 발판을 밟아 오브젝트 위에 다양한 영상과 음향 소스를 쌓아가는 뉴미디어 프로젝트입니다. 웹에서는 어떤 형태의 프로젝트인지 프로젝트의 기획의도, 제작과정 등을 확인할 수 있습니다."
        },
        {
            index: 2,
            title: "모바일게임 '인생게임' 소개페이지",
            bgimg: "./img/work/work2.png",
            url: "./work/lifeisagame/index.html",
            role: "웹 기획 / 웹 디자인 / 웹 퍼블리싱",
            term: "2017.10 ~ 2017.12",
            text: "모바일게임 '인생게임 : Life is a game'의 페이지를 디자인하고 퍼블리싱하였습니다. "
        },
        {
            index: 3,
            title: "Ctrl+z ; 빛났던 밤들",
            bgimg: "./img/work/work3.png",
            url: "./work/1212/index.html",
            role: "웹 퍼블리싱 / 웹 모션",
            term: "2021.09 ~ 2021.11",
            text: "2021학년도 졸업작품으로 제작한 'Ctrl+z ; 빛났던 밤들'의 웹 페이지를 제작하였습니다."
        },
        {
            index: 4,
            title: "리디북스 타이포그래피",
            bgimg: "./img/work/work4.png",
            url: "./work/ridi/index.html",
            role: "타이포그래픽 디자인 / 웹 퍼블리싱",
            term: "2017.04 ~ 2017.06",
            text: "리디북스만의 새로운 타이포그래픽과 로고타입을 제작하고, 이를 적용한 웹사이트를 제작해보았습니다."
        }
    ]



    $('.work-btn').on('click', function(){
        $('html').css({'overflow-y':'hidden'});
        $('#portfolio').css({'display':'block'}).stop().animate({'scrollTop':'0'}, 10, function(){
            $('#portfolio').stop().animate({'opacity':'1'}, 300)
        });
        
        var workTitle = workObj[$(this).attr('value')].title;
        var workBgimg = workObj[$(this).attr('value')].bgimg;
        var workUrl = workObj[$(this).attr('value')].url;
        var workRole = workObj[$(this).attr('value')].role;
        var workTerm = workObj[$(this).attr('value')].term;
        var workText = workObj[$(this).attr('value')].text;
        
        $('.title-name').text(workTitle);
        $('.portfolio-bg-img').attr('src', workBgimg);
        $('.title-btn').attr('href', workUrl);
        $('.title-role').text(workRole);
        $('.title-term').text(workTerm);
        $('.portfolio-text').text(workText);

        
    })


    $('.portfolio-close').on('click', function(){
        $('html').css({'overflow-y':'auto'});
        $('#portfolio').stop().animate({'opacity':'0'}, 300, function(){
            $('#portfolio').css({'display':'none'})
        })
    })


});
