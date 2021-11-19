const intro = document.querySelector("#intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");
//END SECTION
const section = document.querySelector("#section");
const end = section.querySelector("h1");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 17000,
  triggerElement: intro,
  triggerHook: 0
})
  .addIndicators()
  .setPin(intro)
  .addTo(controller);


//Video Animation
let accelamount = 1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = e.scrollPos / 900;
  // setInterval(() => {
  //   // delay += (scrollpos - delay)  + 0.01;
  //   video.currentTime += 0.2;
  // }, 120);
});

setInterval(() => {
  delay += (scrollpos - delay)  + 0.01;
  video.currentTime = delay;
}, 80);