TweenLite.defaultEase = Linear.easeNone;
var titles = document.querySelectorAll(".sectionTitle");
var controller = new ScrollMagic.Controller();
var tl = new TimelineMax();

// create timeline
// this could also be created in a loop
tl.to("#js-slideContainer", 1, {xPercent: -50}, "label1");
tl.from(titles[1], 0.5, {opacity:1}, "label1+=0");



new ScrollMagic.Scene({
  triggerElement: "#js-wrapper",
  triggerHook: "onLeave",
  duration: "400%"
})
  .setPin("#js-wrapper")
  .setTween(tl)
  .addIndicators({
    colorTrigger: "white",
    colorStart: "white",
    colorEnd: "white",
  })
  .addTo(controller);
