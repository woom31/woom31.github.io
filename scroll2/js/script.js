var controller = new ScrollMagic.Controller();
var tl = new TimelineMax();
var controller2 = new ScrollMagic.Controller();
var tl2 = new TimelineMax();
var controller3 = new ScrollMagic.Controller();
var tl3 = new TimelineMax();

tl.staggerFrom(".box", 1.25, {
  scale: 0,
  cycle: {
    y: [-50, 50]
  },
  ease: Elastic.easeOut,
  stagger: {
    from: "center",
    amount: 0.25
  }
});



var scene = new ScrollMagic.Scene({
  triggerElement: "#stage1",
  triggerHook: 0.5
})
  .addIndicators({
    colorTrigger: "white",
    colorStart: "white",
    colorEnd: "white",
    indent: 5
  })
  .setTween(tl)
  .addTo(controller);



  tl3.staggerFrom(".textbox", 1, {
    scale: 0,
    cycle: {
      y: [-50, 0]
    },
    stagger: {
      from: "center",
      amount: 0.75
    }
  });
  
  var scene3 = new ScrollMagic.Scene({
    triggerElement: "#stage3",
    duration: "50%",
    triggerHook: 0.6
  })
    .addIndicators({
      name: "Box Timeline3",
      colorTrigger: "white",
      colorStart: "white",
      colorEnd: "white"
    })
    .setTween(tl3)
    .addTo(controller3);



TweenLite.defaultEase = Linear.easeNone;
var titles = document.querySelectorAll(".sectionTitle");
var controller4 = new ScrollMagic.Controller();
var tl4 = new TimelineMax();

// create timeline
// this could also be created in a loop
tl4.to("#js-slideContainer", 1, {xPercent: -20}, "label1");
tl4.from(titles[1], 0.5, {opacity:0}, "label1+=0.5");
tl4.to("#js-slideContainer", 1, {xPercent: -40}, "label2");
tl4.from(titles[2], 0.5, {opacity:0}, "label2+=0.5");
tl4.to("#js-slideContainer", 1, {xPercent: -60}, "label3");
tl4.from(titles[3], 0.5, {opacity:0}, "label3+=0.5");
tl4.to("#js-slideContainer", 1, {xPercent: -80}, "label4");
tl4.from(titles[4], 0.5, {opacity:0}, "label4+=0.5");


new ScrollMagic.Scene({
  triggerElement: "#js-wrapper",
  triggerHook: "onLeave",
  duration: "400%"
})
  .setPin("#js-wrapper")
  .setTween(tl4)
  .addIndicators({
    colorTrigger: "white",
    colorStart: "white",
    colorEnd: "white",
  })
  .addTo(controller4);
