$(document).ready(function () {
  setTimeout(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    if (ScrollTrigger.isTouch !== 1) {
      ScrollSmoother.create({
        wrapper: ".wrapper",
        content: ".content",
        smooth: 1.5,
        effects: true,
      });
      gsap.fromTo(
        ".header-main",
        { opacity: 1 },
        {
          opacity: 0,
          scrollTrigger: {
            trigger: ".header-main",
            start: "center",
            end: "700",
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        ".footer",
        { opacity: 1 },
        {
          opacity: 0,
          scrollTrigger: {
            trigger: ".footer",
            start: "top",
            end: "bottom",
            scrub: true,
          },
        }
      );

      let itemsL = gsap.utils.toArray(".gallery__left .gallery__item");

      itemsL.forEach((element) => {
        gsap.fromTo(
          element,
          { x: 0, y: 100, opacity: 0 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            scrollTrigger: {
              trigger: element,
              scrub: true,
              start: "-750",
              end: "-100",
            },
          }
        );
      });
      let itemsR = gsap.utils.toArray(".gallery__right .gallery__item");

      itemsR.forEach((element) => {
        gsap.fromTo(
          element,
          { x: 50, opacity: 0 },
          {
            opacity: 1,
            x: 0,

            scrollTrigger: {
              trigger: element,
              start: "-850",
              end: "-100",
              scrub: true,
            },
          }
        );
      });
    }
  },500);
});

// window.addEventListener("load", ()=>{

//     setTimeout(()=>{

//         document.getElementsByTagName('body')[0].style.height = `${document.getElementsByClassName('content')[0].offsetHeight + 100}px`;
//         document.getElementsByClassName('content')[0].style.height = `${document.getElementsByTagName('body')[0].offsetHeight}px`;

//         console.log(123);
//         console.log(document.getElementsByClassName('content')[0].offsetHeight)
//         console.log(document.getElementsByTagName('body')[0].offsetHeight)
//     }, 300)
//     console.log(document.getElementsByTagName('body')[0].offsetHeight)
// })
