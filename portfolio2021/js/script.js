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

    $('.logo-top').click(function(){
        $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
    })

    $(".nav-btn").click(function(event){         
        
        event.preventDefault();

        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 400);
        
    });



    TweenLite.defaultEase = Linear.easeNone;
    var controller = new ScrollMagic.Controller();

    var webStart = function(){
        new TimelineMax()
                    .add([
                        TweenMax.from(".main-slogan .overflow-hidden:nth-child(1) p", 1, {
                            delay: 0.1,
                            y: "120%",}),
                        TweenMax.from(".main-slogan .overflow-hidden:nth-child(2) p", 1, {
                            delay: 0.25,
                            y: "120%",}),
                        TweenMax.from(".main-slogan .overflow-hidden:nth-child(3) p", 1, {
                            delay: 0.4,
                            y: "120%",}),
                        TweenMax.from(".main-slogan .overflow-hidden:nth-child(1)", 1, {
                            delay: 1.5,
                            x: "-45%",}),
                        TweenMax.from(".main-slogan .overflow-hidden:nth-child(2)", 1, {
                            delay: 1.6,
                            x: "-33%",}),
                        TweenMax.from(".main-slogan .overflow-hidden:nth-child(3)", 1, {
                            delay: 1.7,
                            x: "-37%",}),
                        TweenMax.from(".main-img", 1, {
                            delay: 1.8,
                            opacity: 0,}),
                    ])
                }
    if($(window).scrollTop() == 0){
        webStart();
    } 
    


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

    // $('.about-img-wrap').on('mouseenter', function(){
    //     // $('.about-img').stop().animate({'width':'110%', 'margin-left':'-5%'}, 1000, 'easeInOutQuad');
    //     new TweenMax.to($('.about-img'), 0.8, {
    //         webkitFilter: "grayscale(0)",
    //         filter: "grayscale(0)",
    //     })
    // }).on('mouseleave', function(){
    //     // $('.about-img').stop().animate({'width':'100%', 'margin-left':'0%'}, 300, 'easeInOutQuad');
    //     new TweenMax.to($('.about-img'), 0.8, {
    //         webkitFilter: "grayscale(1)",
    //         filter: "grayscale(1)",
    //     })
    // })




    var workObj = [
        {
            index: 1,
            title: "BOSS LOOP Promotion Page",
            bgimg: "./img/work/work1.png",
            url: "https://woom31.github.io/bossloop/",
            role: "웹 퍼블리싱 / 모션그래픽 / 뉴미디어 개발",
            term: "2017.09 ~ 2017.11 / 2021.09 ~ 2021.10",
            text: "BOSS사의 'LOOP Station' 프로모션을 위한 뉴미디어 프로젝트를 제작하고, 본 프로젝트를 소개하기 위한 웹 페이지를 제작하였습니다. 사면체의 오브젝트를 이어붙여서 만든 정육면체의 오브젝트에 빔프로젝터를 쏘아 프로젝션 맵핑 방식으로 제작하였고, 발판을 밟아 자신만의 음악을 만든다는 LOOP 제품의 특성을 살려 체험자가 직접 발판을 밟아 오브젝트 위에 다양한 영상과 음향 소스를 쌓아가는 뉴미디어 프로젝트입니다. 웹에서는 어떤 형태의 프로젝트인지 프로젝트의 기획의도, 제작과정 등을 확인할 수 있습니다.",
            tech: "HTML, CSS, javascript, jQuery, Touch Designer",
            desc: "<li><div class='portfolio-img'><img src='./img/work/work1/work1_screen1.png'></div><div class='portfolio-description'>1. video 태그에 mute, loop 속성으로 배경에 무비포스터를 재생하도록 하였습니다.<br>아래로 스크롤하면 패럴랙스 스크롤링 스타일로 메인 화면이 위로 올라갑니다.</div></li><li><div class='portfolio-img'><img src='./img/work/work1/work1_screen2.png'></div><div class='portfolio-description'>2. 메뉴 네비게이션을 클릭하여 해당 section으로 이동할 수 있습니다.<br>메인 section과 마찬가지로 위로 스크롤하면 패럴랙스 스크롤링 스타일로 메인 화면이 나타납니다.</div></li><li><div class='portfolio-img'><img src='./img/work/work1/work1_screen4.png'></div><div class='portfolio-description'>3. 프로젝트를 진행한 메이킹필름 video를 삽입하였습니다.</div></li><li><div class='portfolio-img'><img src='./img/work/work1/work1_screen5.png'></div><div class='portfolio-description'>4. jQuery를 이용하여 제작과정을 담은 슬라이더를 제작하였습니다.<br>요소의 클래스 이름을 이용하여 코드를 작성하여 재사용하기 용이하게 만들었습니다.</div></li><li><div class='portfolio-img'><img src='./img/work/work1/work1_screen6.png'></div><div class='portfolio-description'>5. display: grid css 속성을 통해 팀 소개 section의 레이아웃을 구성하였습니다.<br>팀원들의 사진을 클릭하여 해당 팀원의 포트폴리오 사이트로 이동할 수 있습니다.</div></li>"
        },
        {
            index: 2,
            title: "모바일게임 '인생게임' 소개페이지",
            bgimg: "./img/work/work2.png",
            url: "https://projectwoom.github.io/work/work1/index.html",
            role: "웹 기획 / 웹 디자인 / 웹 퍼블리싱",
            term: "2017.10 ~ 2017.12",
            text: "모바일게임 '인생게임 : Life is a game'의 페이지를 디자인하고 퍼블리싱하였습니다. 실제 게임을 하는 듯 횡스크롤로 움직이는 배경과 스프라이트 캐릭터를 구현하였고, 기존 공식 카페에서 제공하는 정보들을 제공합니다. jQuery를 이용하여 슬라이더와 UI 인터페이스 설명 등을 구현하였고, 게임의 느낌을 웹에서도 구현하기 위해 방향키를 이용하여 콘텐츠를 이동할 수 있습니다.",
            tech: "HTML, CSS, javascript, jQuery",
            desc: "<li><div class='portfolio-img'><img src='./img/work/work2/work2_screen1.png'></div><div class='portfolio-description'>1. setInterval 메서드로 캐릭터와 배경의 스프라이트 모션을 구현하였습니다.<br>상단 메뉴를 클릭하거나 화면을 스크롤, 키보드 방향키를 이용해 섹션을 이동할 수 있습니다.</div></li><li><div class='portfolio-img'><img src='./img/work/work2/work2_screen2.png'></div><div class='portfolio-description'>2. 실제 게임 화면을 이용한 오브젝트를 통해 게임의 요소들을 직접 클릭하여 확인해보면서<br>게임에 대한 내용과 게임 방법 등에 대해서 알아볼 수 있습니다.</div></li><li><div class='portfolio-img'><img src='./img/work/work2/work2_screen3.png'></div><div class='portfolio-description'>3. 게시판 형식의 섹션을 제작하였습니다. 각 글을 누르면 내용이 나타나며<br>다른 글을 클릭하면 이전에 열려있던 글 내용은 닫히도록 제작하였습니다.</div></li><li><div class='portfolio-img'><img src='./img/work/work2/work2_screen4.png'></div><div class='portfolio-description'>4. 게임 내 스크린샷을 활용한 이미지 슬라이더를 javascript와 jquery를 이용하여 만들었습니다.</div></li>"
        },
        {
            index: 3,
            title: "Ctrl+z ; 빛났던 밤들",
            bgimg: "./img/work/work3.png",
            url: "https://1212-ctrlz.github.io/",
            role: "웹 퍼블리싱 / 웹 모션",
            term: "2021.09 ~ 2021.11",
            text: "2021학년도 졸업작품으로 제작한 'Ctrl+z ; 빛났던 밤들'의 웹 페이지를 제작하였습니다. GreenSock 라이브러리와 ScrollMagic 플러그인을 이용하여 스크롤 애니메이션을 구현하였고, sticky 요소를 통해 header UI를 구현했습니다. 기획 페이지에서는 기획의도와 VR로 구현한 프로젝트의 모습들을 확인할 수 있으며, 체험 페이지에서는 VR에서의 행동을 마우스 액션으로 구현하여 간접적으로 프로젝트를 체험할 수 있습니다.",
            tech: "HTML, CSS, javascript, jQuery, GSAP",
            desc: "<li><div class='portfolio-img'><img src='./img/work/work3/work3_screen1.png'></div><div class='portfolio-description'>1. 페이지가 로드되면 GSAP의 TweenMax를 이용하여 설정한 웹 모션이 재생됩니다.</div></li><li><div class='portfolio-img'><img src='./img/work/work3/work3_screen2.png'></div><div class='portfolio-description'>2. GSAP의 Scrollmagic 플러그인을 이용해 스크롤 애니메이션을 구현하였습니다.<br>position: sticky 속성을 이용해 섹션의 제목이 상단에 고정될 수 있도록 하였습니다.</div></li><li><div class='portfolio-img'><img src='./img/work/work3/work3_screen3.png'></div><div class='portfolio-description'>3. VR 프로젝트의 인테리어를 보여주는 섹션은<br>공간의 흐름을 보여주는 형태로 가로 스크롤 섹션을 구성하였습니다. </div></li><li><div class='portfolio-img'><img src='./img/work/work3/work3_screen4.png'></div><div class='portfolio-description'>4. 체험페이지에서는 VR프로젝트의 미션을 웹에서 간접적으로 체험할 수 있도록<br>마우스 액션으로 구현하였습니다.<br>svg path를 이용해 VR 맵의 도면을 구성하였습니다.</div></li><li><div class='portfolio-img'><img src='./img/work/work3/work3_screen5.png'></div><div class='portfolio-description'>5. GSAP의 draggable 플러그인을 이용한 드래그 버튼의 위치와<br>노트북의 transition rotate 값을 연결하여 노트북을 여는 인터랙션을 제작하였습니다.</div></li><li><div class='portfolio-img'><img src='./img/work/work3/work3_screen6.png'></div><div class='portfolio-description'>6. 미션을 수행하면 다음 미션으로 진행됩니다.<br>오류창을 닫는 미션은 오류창을 닫을 때마다 변수를 하나씩 증가시켜<br>일정 수에 도달하면 함수가 작동하도록 설정하였습니다.<br>해당 미션의 오류창은 영역 내에서 무작위로 위치할 수 있도록 random 함수를 사용하였습니다.</div></li><li><div class='portfolio-img'><img src='./img/work/work3/work3_screen7.png'></div><div class='portfolio-description'>7. 과제 제출 미션도 draggable 플러그인을 이용해 요소가 목표물에 닿으면<br>요소를 목록에서 사라지게 하였습니다.<br>요소 드래그 완료 시 변수를 카운트하여 일정 수에 도달하면<br>다음 미션으로 진행하는 함수가 작동하도록 하였습니다.</div></li><li><div class='portfolio-img'><img src='./img/work/work3/work3_screen8.png'></div><div class='portfolio-description'>8. 각 미션의 Play 버튼을 클릭하면 VR 프로젝트에서 진행되는 내용을 영상으로 확인할 수 있습니다.<br>5번째 미션부터는 영상이 재생되며, 영상 종료 시 다음 영상이 진행되는 등 video 관련 메서드를 이용하였습니다.</div></li>"
        },
        {
            index: 4,
            title: "리디북스 타이포그래피",
            bgimg: "./img/work/work4.png",
            url: "https://woom31.github.io/portfolio2021/work/ridi/index.html",
            role: "타이포그래피 디자인 / 웹 퍼블리싱",
            term: "2017.04 ~ 2017.06 / 2021.10 ~ 2021.12",
            text: "리디북스만의 새로운 타이포그래피와 로고타입을 제작하고, 이를 활용한 웹사이트를 제작해보았습니다. 책의 모양에서 모티브를 가져온 쉐입의 타이포에 중간중간 의도적으로 끊어진 모양을 주어 책이 주는 휴식이라는 의미를 주었습니다. 웹페이지에서는 타이포그래피의 모티프가 된 모서리 곡선 디자인을 활용하였고, javascript와 jQuery를 이용하여 무한 슬라이더와 일반적인 슬라이더를 제작하였습니다.",
            tech: "HTML, CSS, javascript, jQuery",
            desc: "<li><div class='portfolio-img'><img src='./img/work/work4/work4_screen1.png'></div><div class='portfolio-description'>1. header와 footer 레이아웃을 각각의 파일로 제작하고 script로 불러와 페이지를 구성하였습니다.<br>메인 슬라이더는 중간에 위치값이 변경되지 않는 무한 슬라이드로 제작되었습니다.</div></li><li><div class='portfolio-img'><img src='./img/work/work4/work4_screen2.png'></div><div class='portfolio-description'>2. 메인 슬라이더를 제외한 책 목록은 단순히 앞뒤로 움직이는 단순 슬라이더로 제작하였습니다.<br>Grid를 이용하여 베스트셀러 목록 레이아웃을 구성하였습니다.</div></li><li><div class='portfolio-img'><img src='./img/work/work4/work4_screen3.png'></div><div class='portfolio-description'>3. 신간 목록과 추천 목록 역시 단순 슬라이더로 제작하였습니다.<br>footer의 내용을 기존 사이트의 내용을 클론하여 제작하였습니다.</div></li>"
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
        var workTech = workObj[$(this).attr('value')].tech;
        var workDesc = workObj[$(this).attr('value')].desc;
        
        $('.title-name').text(workTitle);
        $('.portfolio-bg-img').attr('src', workBgimg);
        $('.title-btn').attr('href', workUrl);
        $('.title-role').text(workRole);
        $('.title-term').text(workTerm);
        $('.portfolio-text').text(workText);
        $('.portfolio-tech-inner').text(workTech);
        $('.portfolio-slide-ul').html(workDesc);

        
    })


    $('.portfolio-close').on('click', function(){
        $('html').css({'overflow-y':'auto'});
        $('#portfolio').stop().animate({'opacity':'0'}, 300, function(){
            $('#portfolio').css({'display':'none'})
        })
    })


});
