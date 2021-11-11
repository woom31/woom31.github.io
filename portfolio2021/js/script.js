$(document).ready(function(){
    TweenLite.defaultEase = Linear.easeNone;
    var controller = new ScrollMagic.Controller();

    var webStart = new TimelineMax()
                    .add([
                        TweenMax.from(".main-slogan p:nth-child(1)", 1.5, {
                            x: "-120%",}),
                        TweenMax.from(".main-slogan p:nth-child(2)", 1.5, {
                            delay: 0.2,
                            x: "-120%",}),
                        TweenMax.from(".main-slogan p:nth-child(3)", 1.5, {
                            delay: 0.4,
                            x: "-120%",}),
                    ])
    webStart;

    


    var abilityStart1 = new TimelineMax()
                    .add([
                        TweenMax.from(".ability-box:nth-child(1) .line-design", 1.5, {
                            width: "0%",}),
                        TweenMax.from(".ability-box:nth-child(1) .ability-box-head div", 1, {
                            delay: 0.2,
                            y: "120%",}),
                        TweenMax.from(".ability-box:nth-child(1) .ability-box-text div", 1, {
                            delay: 0.6,
                            y: "-120%",}),
                        TweenMax.from(".ability-box:nth-child(2) .line-design", 1.5, {
                            delay: 0.6,
                            width: "0%",}),
                        TweenMax.from(".ability-box:nth-child(2) .ability-box-head div", 1, {
                            delay: 0.8,
                            y: "120%",}),
                        TweenMax.from(".ability-box:nth-child(2) .ability-box-text div", 1, {
                            delay: 1.2,
                            y: "-120%",}),
                    ])
    
    var abilityStart2 = new TimelineMax()
                    .add([
                        TweenMax.from(".ability-box:nth-child(3) .line-design", 1.5, {
                            width: "0%",}),
                        TweenMax.from(".ability-box:nth-child(3) .ability-box-head div", 1, {
                            delay: 0.2,
                            y: "120%",}),
                        TweenMax.from(".ability-box:nth-child(3) .ability-box-text div", 1, {
                            delay: 0.6,
                            y: "-120%",}),
                        TweenMax.from(".ability-box:nth-child(4) .line-design", 1.5, {
                            delay: 0.6,
                            width: "0%",}),
                        TweenMax.from(".ability-box:nth-child(4) .ability-box-head div", 1, {
                            delay: 0.8,
                            y: "120%",}),
                        TweenMax.from(".ability-box:nth-child(4) .ability-box-text div", 1, {
                            delay: 1.2,
                            y: "-120%",}),
                    ])

    var abilityAnimate1 = new ScrollMagic.Scene({
                        triggerElement: ".ability",
                            offset: 0,
                            triggerHook: 0.75
                        })
                        .setTween(abilityStart1)
                        .addTo(controller)
    var abilityAnimate2 = new ScrollMagic.Scene({
                        triggerElement: ".ability",
                            offset: 0,
                            triggerHook: 0.55
                        })
                        .setTween(abilityStart2)
                        .addTo(controller)             
                        
                        
    
    $('.work-box-left .work-btn').mouseenter(function(){
        new TimelineMax().add([
            TweenMax.to($(this).closest('.work-box').find('.work-img-rotate'), 0.6, {
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
                TweenMax.to($(this).closest('.work-box').find('.work-img-rotate'), 0.6, {
                    rotateY: "10deg",
                }),
                TweenMax.to($(this).closest('.work-box').find('.work-img'), 1, {
                    webkitFilter: "grayscale(1) brightness(0.8)",
                    filter: "grayscale(1) brightness(0.8)",
                }),
            ])
        } else {
            new TimelineMax().add([
                TweenMax.to($(this).closest('.work-box').find('.work-img-rotate'), 0.6, {
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
            TweenMax.to($(this).closest('.work-box').find('.work-img-rotate'), 0.6, {
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
                TweenMax.to($(this).closest('.work-box').find('.work-img-rotate'), 0.6, {
                    rotateY: "-10deg",
                }),
                TweenMax.to($(this).closest('.work-box').find('.work-img'), 1, {
                    webkitFilter: "grayscale(1) brightness(0.8)",
                    filter: "grayscale(1) brightness(0.8)",
                }),
            ])
        } else {
            new TimelineMax().add([
                TweenMax.to($(this).closest('.work-box').find('.work-img-rotate'), 0.6, {
                    rotateY: "0deg",
                }),
                TweenMax.to($(this).closest('.work-box').find('.work-img'), 1, {
                    webkitFilter: "grayscale(1) brightness(0.8)",
                    filter: "grayscale(1) brightness(0.8)",
                }),
            ])
        }
    })




});