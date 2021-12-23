gsap.registerPlugin(ScrollTrigger);

// gsap.fromTo(
//   ".about",
//   {
//     x: "-=100",
//   },
//   {
//     x: 0,
//     ease: "linear",
//     duration: 0.8,
//     scrollTrigger: {
//       start: "top center",
//       trigger: ".about",
//       toggleActions: "restart complete restart complete",
//     },
//   }
// );

// gsap.fromTo(
//   ".skills-container",
//   {
//     x: "+=100",
//   },
//   {
//     x: 0,
//     duration: 0.8,
//     ease: "linear",
//     scrollTrigger: {
//       start: "top center",
//       trigger: ".skills-container",
//       toggleActions: "restart complete restart complete",
//     },
//   }
// );

// gsap.fromTo(
//   ".projects-container",
//   {
//     x: "-=100",
//   },
//   {
//     x: 0,
//     ease: "linear",
//     duration: 0.8,
//     scrollTrigger: {
//       start: "top center",
//       trigger: ".projects-container",
//       toggleActions: "restart complete restart complete",
//     },
//   }
// );

// gsap.fromTo(
//   ".contact",
//   {
//     x: "+=100",
//   },
//   {
//     x: 0,
//     ease: "linear",
//     duration: 0.8,
//     scrollTrigger: {
//       start: "top 90%",
//       trigger: ".contact",
//       toggleActions: "restart complete restart complete",
//     },
//   }
// );

let skillsTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".skills-container",
    start: "top 70%",
    end: "top 30%",
    // toggleActions: "play complete restart complete",
  },
});

skillsTL
  .to(".skills-box", {
    duration: 1,
    width: "13vw",
    opacity: 1,
    ease: "power4.inOut",
  })
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
  );

let aboutTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".about-section",
    start: "top 99%",
    toggleActions: "play complete none play",
  },
});

aboutTl
  .set(".about-image>img", { opacity: 0 })
  .to(".about-reveal", {
    opacity: 1,
    scaleX: 0,
    xPercent: -100,
    duration: 2,
    ease: "power2.inOut",
  })
  .fromTo(".about-reveal", { x: "+=50" }, { x: "-=50", duration: 1 }, "-=1")
  .to(".about-image>img", { opacity: 1, scaleX: 1, duration: 1 }, "-=0.5")
  .to(".about-box", {
    duration: 1,
    width: "26vw",
    opacity: 1,
    ease: "power4.inOut",
  });

let projectsTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".projects-container",
    start: "top 60%",
    toggleActions: "play none none reset",
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

let contactTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".contact",
    start: "top 99%",
    toggleActions: "restart complete play complete",
  },
});

contactTl
  .fromTo(
    ".button-c1",
    { x: "-=10000", opacity: 0 },
    { x: 0, opacity: 1, duration: 1, ease: "linear" }
  )
  .fromTo(
    ".button-c2",
    { x: "+=2000", opacity: 0 },
    { x: 0, opacity: 1, duration: 1, ease: "linear" },
    "-=1"
  )
  .to(".contact-box", {
    duration: 1,
    width: "20.5vw",
    opacity: 1,
    ease: "power4.inOut",
  });

let footerTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".footer",
    start: "top 99%%",
    toggleActions: "restart complete none complete",
  },
});

footerTl.fromTo(
  ".footer",
  { opacity: 0 },
  { opacity: 1, duration: 2, ease: "linear" }
);

// let planeTl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".hero",
//     // start: "top",
//     toggleActions: "restart complete none complete",
//   },
// });

// planeTl.fromTo(".plane", { rotationX: 0 }, { rotationX: 20 });

gsap.set(".plane", { xPercent: -50 });

let rotate = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".hero",
      pin: true,
      scrub: 0.2,
      start: "top top",
      //   end: "+=10000",
    },
  })
  .to(".plane", {
    rotation: 90,
    duration: 0.5,
    ease: "none",
  })
  .to(".plane", { x: "+=1200", y: "+=500" });

//   .set(".about-reveal", { top: 0, left: 00, scale: 1, opacity: 1 })
//     .to(".about-reveal", { scaleX: 1, xPercent: -40, duration: 1 })
//   .to(".about-reveal", {
//     scaleX: 0,
//     xPercent: -100,
//     duration: 2,
//     ease: "power2.inOut",
//   })
