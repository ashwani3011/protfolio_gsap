gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(MotionPathPlugin);

const words = ["A Developer.", "A Designer", "Sample"];

let cursor = gsap.to(".cursor", {
  opacity: 0,
  ease: "power2.inOut",
  repeat: -1,
});

let masterTl = gsap.timeline({
  repeat: -1,
});

words.forEach((word) => {
  let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
  tl.to(".text", { duration: 1, text: word });
  masterTl.add(tl);
});

//==============================

let planeTl = gsap.timeline({
  repeat: -1,
  repeatDelay: 1,
});

planeTl.to(".plane", {
  duration: 6,
  motionPath: {
    // path: "M6,123 C555,-1 398,1 820,450 M820,450 C1247,390 1229,138 1450,250",
    // path: "M10,-24 C729,-5 583.163,422.33 371,369 -99.864,250.641 686,-37 1184,-25 ",
    path: "M-22,-26 C697,-7 872.21,868.119 493,439 431.697,369.63 887,3 1264,-87 ",
    autoRotate: true,
  },
});

//====================================

let aboutTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".about-section",
    start: "top center",
    toggleActions: "restart complete complete reset",
  },
});

aboutTl
  .set(".about-avtar", { opacity: 0 })
  .fromTo(
    ".about-reveal",
    { opacity: 1, width: 0 },
    { width: 500, duration: 0.5, ease: "linear" }
  )
  .fromTo(
    ".about-reveal",
    { width: 500 },
    {
      width: 0,
      duration: 0.8,
      ease: "linear",
      delay: 0.5,
    }
  )
  .to(".about-avtar", { opacity: 1, duration: 1 }, "-=0.5")
  .to(".about-box", {
    duration: 1,
    width: "23vw",
    opacity: 1,
    ease: "power4.inOut",
  });

//skills ==============================

let skillsTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".skills-container",
    start: "top 10%",

    toggleActions: "restart complete complete reset",
  },
});

skillsTL

  .fromTo(
    ".line1",
    { x: "-=1000", opacity: 0 },
    { x: 0, stagger: 0.7, ease: "linear", opacity: 1 }
  )
  .fromTo(
    ".line2",
    { x: "+=1000", opacity: 0 },
    { x: 0, stagger: 0.7, ease: "linear", opacity: 1 },
    "-=2.1"
  )
  .to(".skills-box", {
    duration: 1,
    width: "11vw",
    opacity: 1,
    ease: "power4.inOut",
  });

//projects ===============================

let projectsTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".projects-container",
    start: "top 15%",
    toggleActions: "restart complete complete reset",
  },
});

projectsTl
  .fromTo(
    ".title-pr",
    { x: "-=1000" },
    { x: "+=1500", duration: 2, scale: 1, ease: "bounce" }
  )
  .to(".title-pr", { x: 0 }, "-=0.5")
  .to(".projects-box", {
    duration: 1,
    width: "21vw",
    opacity: 1,
    ease: "power4.inOut",
  });

//=============================

let contactTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".contact",
    start: "top 60%",
    toggleActions: "play none none reset",
  },
});

contactTl
  .fromTo(
    ".button-c1",
    { x: "-=2000", opacity: 0 },
    { x: 0, opacity: 1, duration: 0.7, ease: "linear" }
  )
  .fromTo(
    ".button-c2",
    { x: "+=2000", opacity: 0 },
    { x: 0, opacity: 1, duration: 0.7, ease: "linear" },
    "-=0.7"
  )
  .to(".contact-box", {
    width: "18.5vw",
    opacity: 1,
    ease: "power4.inOut",
  });

let footerTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".footer",
    // start: "top 80%",
    toggleActions: "restart complete complete reset",
  },
});

footerTl.fromTo(
  ".footer",
  { opacity: 0 },
  { opacity: 1, duration: 2, ease: "linear" }
);

//=======================================

// planeTl.fromTo(".plane", { rotationX: 0 }, { rotationX: 20 });

// gsap.set(".plane", { xPercent: -50 });

// let rotate = gsap
//   .timeline({
//     scrollTrigger: {
//       trigger: ".hero",
// pin: true,
// scrub: 0.2,
// start: "top top",
//       // end: "+=10000",
//     },
//   })
//   .to(".plane", {
//     rotation: 90,
//     duration: 0.5,
//     ease: "none",
//   })
//   .to(".plane", { x: "+=1200", y: "+=500" });

//===================================================

//   .set(".about-reveal", { top: 0, left: 00, scale: 1, opacity: 1 })
//     .to(".about-reveal", { scaleX: 1, xPercent: -40, duration: 1 })
//   .to(".about-reveal", {
//     scaleX: 0,
//     xPercent: -100,
//     duration: 2,
//     ease: "power2.inOut",
//   })
