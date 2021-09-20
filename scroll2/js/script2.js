TweenLite.defaultEase = Linear.easeNone;
var controller2 = new ScrollMagic.Controller();
var tl2 = new TimelineMax();



  
tl2.staggerFrom(".newbox", 1.5, {
  scale: 0,
  cycle: {
    y: [-50, 50]
  },
  stagger: {
    from: "center",
    amount: 0.75
  }
});

var scene2 = new ScrollMagic.Scene({
  triggerElement: "#stage2",
  duration: "50%",
  triggerHook: 0.6
})
  .addIndicators({
    name: "Box Timeline",
    colorTrigger: "white",
    colorStart: "white",
    colorEnd: "white"
  })
  .setTween(tl2)
  .addTo(controller2);
