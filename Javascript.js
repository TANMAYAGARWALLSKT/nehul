


function bhaikaLoader() {
  gsap.to(".loader", {
    top: "-100vh",
    duration:2,
    ease: "Expo.inOut",
    delay:5,
  });
}
bhaikaLoader();
const page1 = document.querySelector("#page3");
const container = document.querySelector(".hi");
const page2 = document.querySelector("#page2");
const container1 = document.querySelector("#container1");
const containerWidth = container.clientWidth;
const page1Width = page1.clientWidth;
const flipcardcontainer = document.querySelector("#flipcardcontainer");
let cont = document.querySelector("#warp");
gsap.to(".hi", {
  x: page1Width - containerWidth,
  ease: "power1.inOut",
  scrollTrigger: {
    scroller: "body",
    trigger: ".page3",
    start: "top 0",
    pin: ".page3",
    scrub: 5,
  
    // markers: true,
  },
});
gsap.from("#text", {
  duration: 1,
  stagger:1,
  delay: 0.5,
  opacity: 0,
  color: "zinc",
  x: -100,
});


