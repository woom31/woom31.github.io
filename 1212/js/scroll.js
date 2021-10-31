TweenLite.defaultEase = Linear.easeNone;
var controller = new ScrollMagic.Controller();

$(document).ready(function(){
    if($(window).scrollTop() == $('#main').scrollTop()){
        console.log($(window).scrollTop());
        console.log($('#main').scrollTop());
        new TimelineMax()
        .add([
            TweenMax.from(".header-line", 1, {
                width: 0,}),
            TweenMax.from(".nav-btn", 1, {
                delay: 1,
                opacity: 0,}),
            TweenMax.from(".main-bg", 1.8, {
                delay: 0.8,
                height: 0,
                ease: Circ.easeOut}),
            TweenMax.from(".ex-area", 0.6, {
                delay: 1.5,
                scale: 0,
                // rotate: -60,
                ease: Circ.easeOut}),
            TweenMax.from(".main-text1", 0.8, {
                delay: 1.5,
                y: 50,
                opacity: 0}),
            TweenMax.from(".main-text2", 0.8, {
                delay: 1.7,
                y: 50,
                opacity: 0}),
            TweenMax.from(".main-title", 1.6, {
                delay: 2,
                marginLeft: "-120%",}),
        ])
    } 
    var exRotate = new TweenMax.to('.ex-area', 15, {
        rotate: 360,
        repeat: -1,
        ease: Linear.easeNone
    })
    $('.ex-area').on('mouseover', function(){
        exRotate.pause();
    })
    .on('mouseleave', function(){
        exRotate.play();
    })

})




// var navMotion = new TimelineMax()
// .add([
//     TweenMax.to(".left-btn2", 0.6, {
//         width: 0,
//     }),
//     TweenMax.to(".right-team-btn", 0.6, {
//         marginRight: 0,
//     }),
//     TweenMax.to(".left-btn3", 0.6, {
//         left: "150px",
//     }),
    
// ])

// var navMotionScroll = new ScrollMagic.Scene({
//   triggerElement: "#main",
//   offset: 100,
// //   duration: "80%",
//   triggerHook: 0
// })
// .setTween(navMotion)
// .addTo(controller)
// // .addIndicators({
// //   name:"news",
// //   colorTrigger: "red",
// //   colorStart: "gray",
// //   colorEnd: "white",
// // })

var exBtnMotion = new TweenMax.fromTo(".ex-area", 1, {
        scale: 1,
        x: 0,
        y: 0,
        overwrite: 2,
    }, 
    {
        scale: 0.66,
        x: 38,
        y: -18,
        overwrite: 2,
})

var exBtnMotionScroll = new ScrollMagic.Scene({
    triggerElement: "#main",
    offset: 600,
    duration: "100%",
    triggerHook: 0.3
  })
  .setTween(exBtnMotion)
  .addTo(controller)



// about animation
  var setNav1 = new ScrollMagic.Scene({
    triggerElement: "#about",
    duration: 2300,
    offset: "42px",
    triggerHook: 0
  })
  .setPin(".about-title")
  .addTo(controller);

  var setAbout = new ScrollMagic.Scene({
    triggerElement: ".about-content",
    duration: 580,
    offset: 0,
    triggerHook: 0
  })
  .setPin(".about-wrap")
  .addTo(controller);


  var aboutMotion = new TimelineMax()
  .add([
    TweenMax.from(".about-top .about-left .line-design-top", 0.4, {
        width: 0,
        ease: Power0.easeOut
    }),
    TweenMax.from(".about-top .about-center .line-design-top", 0.6, {
        delay: 0.2,  
        width: 0,
        ease: Power0.easeOut
    }),
    TweenMax.from(".about-top .about-right .line-design-top", 0.8, {
        delay: 0.82,
        width: 0,
        ease: Power0.easeOut
    }),
    TweenMax.from(".about-top .about-left .about-text", 1, {
        delay: 0.2,
        opacity: 0,
        y: 30,
        ease: Circ.easeOut
    }),
    TweenMax.from(".about-top .about-center .about-mean", 1, {
        delay: 0.4,  
        opacity: 0,
        y: 30,
        ease: Circ.easeOut
    }),
    TweenMax.from(".about-top .about-right .about-big", 1, {
        delay: 0.8,  
        opacity: 0,
        y: 30,
        ease: Circ.easeOut
    }),
  ])

  var aboutMotionScroll = new ScrollMagic.Scene({
    triggerElement: "#about",
    offset: 500,
    duration: 800,
    triggerHook: 0.3
  })
  .setTween(aboutMotion)
  .addTo(controller)


  var aboutMotion = new TimelineMax()
  .add([
    TweenMax.from(".about-bottom .about-left .line-design-top", 0.4, {
        width: 0,
        ease: Power0.easeOut
    }),
    TweenMax.from(".about-bottom .about-center .line-design-top", 0.6, {
        delay: 0.2,  
        width: 0,
        ease: Power0.easeOut
    }),
    TweenMax.from(".about-bottom .about-right .line-design-top", 0.8, {
        delay: 0.82,
        width: 0,
        ease: Power0.easeOut
    }),
    TweenMax.from(".about-bottom .about-left .about-text", 1, {
        delay: 0.2,
        opacity: 0,
        y: 30,
        ease: Circ.easeOut
    }),
    TweenMax.from(".about-bottom .about-center .about-mean", 1, {
        delay: 0.4,  
        opacity: 0,
        y: 30,
        ease: Circ.easeOut
    }),
    TweenMax.from(".about-bottom .about-right .about-big", 1, {
        delay: 0.8,  
        opacity: 0,
        y: 30,
        ease: Circ.easeOut
    }),
  ])

  var aboutMotionScroll = new ScrollMagic.Scene({
    triggerElement: "#about",
    offset: 800,
    duration: 800,
    triggerHook: 0.3
  })
  .setTween(aboutMotion)
  .addTo(controller)



//background animation
  var setNav2 = new ScrollMagic.Scene({
    triggerElement: "#background",
    duration: 4000,
    offset: "42px",
    triggerHook: 0
  })
  .setPin(".background-title")
  .addTo(controller);

  var setBackground = new ScrollMagic.Scene({
    triggerElement: ".background-content",
    duration: 2500,
    offset: 0,
    triggerHook: 0
  })
  .setPin(".background-wrap")
  .addTo(controller);

  var bgMotion = new TimelineMax()
  .add([
    TweenMax.from(".bg-stack6", 2, {
        delay: 3,  
        y: "-648px",
        ease: Power4.easeOut
    }),
    TweenMax.from(".bg-stack5", 2, {
        delay: 6,  
        y: "-540px",
        ease: Power4.easeOut
    }),
    TweenMax.from(".bg-stack4", 2, {
        delay: 9,  
        y: "-432px",
        ease: Power4.easeOut
    }),
    TweenMax.from(".bg-stack3", 2, {
        delay: 12,  
        y: "-324px",
        ease: Power4.easeOut
    }),
    TweenMax.from(".bg-stack2", 2, {
        delay: 15,  
        y: "-216px",
        ease: Power4.easeOut
    }),
    TweenMax.from(".bg-stack1", 2, {
        delay: 18,  
        y: "-108px",
        ease: Power4.easeOut
    }),
  ])

  var bgMotionScroll = new ScrollMagic.Scene({
    triggerElement: "#background",
    offset: 1200,
    duration: 2000,
    triggerHook: 0.5
  })
  .setTween(bgMotion)
  .addTo(controller)


  
//project animation
  var setNav3 = new ScrollMagic.Scene({
    triggerElement: "#project",
    duration: 1140,
    offset: "42px",
    triggerHook: 0
  })
  .setPin(".project-title")
  .addTo(controller);


//keyword1 animation
  var setNav4 = new ScrollMagic.Scene({
    triggerElement: "#keyword1",
    duration: 7880,
    offset: "42px",
    triggerHook: 0
  })
  .setPin(".keyword1-title")
  .addTo(controller);

  var setKeyword1 = new ScrollMagic.Scene({
    triggerElement: "#keyword1",
    duration: 580,
    offset: "560px",
    triggerHook: 0
  })
  .setPin(".keyword1-list")
  .addTo(controller);

  var setKeyword1Motion = new ScrollMagic.Scene({
    triggerElement: ".keyword1-motion",
    duration: 5000,
    offset: "-240px",
    triggerHook: 0
  })
  .setPin(".keyword1-motion")
  .addTo(controller);

  var keyword1ListMotion = new TimelineMax().add([
    TweenMax.from(".keyword1-box1 .keyword1-num .line-design-bottom", 0.4, {
        width: 0,
        height: "2px",
        ease: Power0.easeOut
    }),
    TweenMax.from(".keyword1-box1 .keyword1-item .line-design-bottom", 0.4, {
        delay: 0.4,  
        width: 0,
        height: "2px",
        ease: Power0.easeOut
    }),
    TweenMax.from(".keyword1-box1 .keyword1-text .line-design-bottom", 1.2, {
        delay: 0.9,
        width: 0,
        height: "2px",
        ease: Power0.easeOut
    }),
    TweenMax.from(".keyword1-box1 .keyword1-num .keyword1-inner", 0.8, {
        delay: 0.4,
        opacity: 0,
        ease: Power0.easeOut
    }),
    TweenMax.from(".keyword1-box1 .keyword1-item .keyword1-inner", 0.8, {
        delay: 0.6,
        opacity: 0,
        ease: Power0.easeOut
    }),
    TweenMax.from(".keyword1-box1 .keyword1-text .keyword1-inner", 0.8, {
        delay: 0.8,
        opacity: 0,
        ease: Power0.easeOut
    }),
    TweenMax.from(".keyword1-box2 .keyword1-num .line-design-bottom", 0.4, {
        delay: 0.2,  
        width: 0,
        height: "2px",
        ease: Power0.easeOut
    }),
    TweenMax.from(".keyword1-box2 .keyword1-item .line-design-bottom", 0.4, {
        delay: 0.6,  
        width: 0,
        height: "2px",
        ease: Power0.easeOut
    }),
    TweenMax.from(".keyword1-box2 .keyword1-text .line-design-bottom", 1.2, {
        delay: 1.1,
        width: 0,
        height: "2px",
        ease: Power0.easeOut
    }),
    TweenMax.from(".keyword1-box2 .keyword1-num .keyword1-inner", 0.8, {
        delay: 0.6,
        opacity: 0,
        ease: Power0.easeOut
    }),
    TweenMax.from(".keyword1-box2 .keyword1-item .keyword1-inner", 0.8, {
        delay: 0.8,
        opacity: 0,
        ease: Power0.easeOut
    }),
    TweenMax.from(".keyword1-box2 .keyword1-text .keyword1-inner", 0.8, {
        delay: 1,
        opacity: 0,
        ease: Power0.easeOut
    }),
    TweenMax.from(".keyword1-box3 .keyword1-num .line-design-bottom", 0.4, {
        delay: 0.4,  
        width: 0,
        height: "2px",
        ease: Power0.easeOut
    }),
    TweenMax.from(".keyword1-box3 .keyword1-item .line-design-bottom", 0.4, {
        delay: 0.8,  
        width: 0,
        height: "2px",
        ease: Power0.easeOut
    }),
    TweenMax.from(".keyword1-box3 .keyword1-text .line-design-bottom", 1.2, {
        delay: 1.3,
        width: 0,
        height: "2px",
        ease: Power0.easeOut
    }),
    TweenMax.from(".keyword1-box3 .keyword1-num .keyword1-inner", 0.8, {
        delay: 0.8,
        opacity: 0,
        ease: Power0.easeOut
    }),
    TweenMax.from(".keyword1-box3 .keyword1-item .keyword1-inner", 0.8, {
        delay: 1,
        opacity: 0,
        ease: Power0.easeOut
    }),
    TweenMax.from(".keyword1-box3 .keyword1-text .keyword1-inner", 0.8, {
        delay: 1.2,
        opacity: 0,
        ease: Power0.easeOut
    }),
  ])

  var keyword1ListMotionScroll = new ScrollMagic.Scene({
    triggerElement: "#keyword1",
    offset: 0,
    duration: "100%",
    triggerHook: 0.3
  })
  .setTween(keyword1ListMotion)
  .addTo(controller)
 

  var keyword1ImgMotion = new TweenMax.to(".keyword1-motion img", 1, {
    left: "-300%",
    })

  var keyword1ImgMotionScroll = new ScrollMagic.Scene({
    triggerElement: ".keyword1-motion",
    offset: 0,
    duration: 4700,
    triggerHook: 0.3
  })
  .setTween(keyword1ImgMotion)
  .addTo(controller)
//   .addIndicators({
//     name:"ex-btn",
//     colorTrigger: "red",
//     colorStart: "gray",
//     colorEnd: "white",
//   })



  
//keyword2 animation
  var setNav5 = new ScrollMagic.Scene({
    triggerElement: "#keyword2",
    duration: 3000,
    offset: "42px",
    triggerHook: 0
  })
  .setPin(".keyword2-title")
  .addTo(controller);