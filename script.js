function scrollanimation() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });



  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();


}
scrollanimation()

function mouseanimation() {


  var pgcont = document.querySelector("#page1-content");
  var crsr = document.querySelector("#cursor");

  pgcont.addEventListener("mousemove", function (dets) {
    gsap.to(crsr, {
      x: dets.x,
      y: dets.y,
    })
  })
  pgcont.addEventListener("mouseenter", function () {
    gsap.to(crsr, {
      scale: 1,
    })
  })
  pgcont.addEventListener("mouseleave", function () {
    gsap.to(crsr, {
      scale: 0,
    })
  })







}
mouseanimation()

function navbtn() {
  var navbtn = document.querySelector("nav>a h3");
  var close = document.querySelector("#upper-menu #btn")

  navbtn.addEventListener("click", function () {
    gsap.to("#upper-menu", {
      y: 0,
    })
    gsap.to(navbtn, {
      opacity: 0,
      display: "none",
    })

  }
  )

  close.addEventListener("click", function () {
    gsap.to("#upper-menu", {
      y: "-100%",
    })
    gsap.to(navbtn, {
      opacity: 1,
      display: "block",
    })
  })


}
navbtn();

function page1animation() {

  var tl = gsap.timeline();
  tl.from("#loader h3", {
    x: 40,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
  })
  tl.to("#loader h3", {
    opacity: 0,
    x: -50,
    stagger: 0.2,
    duration: 1,
  })
  tl.to("#loader", {
    opacity: 0,
    display: "none"
  })

  tl.from("nav h2, nav h3", {
    y: -100,
    opacity: 0,
    duration: 1,
  })

  tl.from("#page1-elem span", {
    y: 200,
    stagger: 0.1,
    opacity: 0,
    duration: 1,
  })
}
page1animation()

function page2animation() {

  gsap.from("#page2-elem-left h2 ,#page2-elem-right h2", {
    y: 120,
    duration: 1,
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: {
      trigger: "#page2",
      scroller: "#main",
      end: "top 50%",
      start: "top 80%",
      scrub: 3,
    }
  })

  gsap.from("#page2-para h1", {
    y: 100,
    duration: 2,
    scrollTrigger: {
      trigger: "#page2",
      scroller: "#main",
      start: "top 80%",
      end: "top 50%",
      scrub: 3
    }
  })



}
page2animation();

function page3animation() {
  gsap.from("#heading-coat h2", {
    y: 200,
    duration: 2,
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#page3-top",
      scroller: "#main",
      start: "top 80%",
      end: "top 50%",
      scrub: 3
    }
  })

  gsap.from("#page3-top h4", {
    y: -100,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
      trigger: "#page3-top",
      scroller: "#main",
      start: "top 50%",
      end: "top 30%",
      scrub: 2,
    }
  })
}
page3animation()

function page5animation() {

  gsap.from("#page5top .headings h2", {
    y: 100,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#page5",
      scroller: "#main",
      start: "top 80%",
      end: "top 20%",
      scrub: 3,
    }
  })

  gsap.from("#page5bottom .paragraphs h1", {
    y: 100,
    duration: 1,
    scrollTrigger: {
      trigger: "#page5bottom",
      scroller: "#main",
      start: "top 80%",
      end: "top 20%",
      scrub: 3
    }
  })

}
page5animation();

function page6crsr() {
  var page6 = document.querySelector("#page6");
  var crsr2 = document.querySelector("#cursor2");

  page6.addEventListener("mousemove", function (dets) {
    gsap.to(crsr2, {
      x: dets.x,
      y: dets.y,
    })
  })
  page6.addEventListener("mouseenter", function () {
    gsap.to(crsr2, {
      scale: 1,
    })
  })
  page6.addEventListener("mouseleave", function () {
    gsap.to(crsr2, {
      scale: 0,
    })
  })




}
page6crsr();

function page7_8() {

  gsap.from(".page7top .page7headings h2", {
    y: 100,
    duration: 1,
    stagger: .2,
    scrollTrigger: {
      trigger: ".page7top",
      scroller: "#main",
      start: "top 80%",
      end: "top 40",
      scrub: 3,
    }
  })

  gsap.from(".boundry h1", {
    y: 100,
    duration: 1,
    scrollTrigger: {
      trigger: "#page7",
      scroller: "#main",
      start: "top 80%",
      end: "top 20%",
      scrub: 3
    }
  })

  gsap.from("#page8top h1", {
    x: -100,
    duration: 1,
    scrollTrigger: {
      trigger: "#page8",
      scroller: "#main",
      start: "top 80%",
      end: "top 20%",
      scrub: 3
    }
  })

  gsap.from("#page8bottom>h1", {
    y: -100,
    duration: 1,
    scrollTrigger: {
      trigger: "#page8",
      scroller: "#main",
      start: "top 50%",
      end: "top 20%",
      scrub: 3
    }
  })


  gsap.from("#headingcoat h1", {
    y: 100,
    duration: 1,
    scrollTrigger: {
      trigger: "#page8",
      scroller: "#main",
      start: "top 50%",
      end: "top 20%",
      scrub: 3
    }
  })

  gsap.from("#headingcoat h2 span", {
    y: -200,
    duration: 4,
    stagger: 1,
    scrollTrigger: {
      trigger: "#page8bottom",
      scroller: "#main",
      start: "top 50%",
      end: "top 20%",
      scrub: 3
    }
  })


}
page7_8();

function page9() {
  gsap.from("#page9 .boundrywall> a h1", {
    y: 100,
    duration: 1,
    scrollTrigger: {
      trigger: "#page9",
      scroller: "#main",
      scrub: 3,
      start: "top 50%",
      end: "top 30%",
    }
  })
}
page9();

gsap.from("#page10top .topleft h1", {
  y: -100,
  duration: 1,
  scrollTrigger: {
    trigger: "#page10",
    scroller: "#main",
    scrub: 3,
    start: "top 50%",
    end: "top 30%",
  }
})
gsap.from("#page10top .topright .menu a,#page10top .topright .social a", {
  y: -200,
  duration: 5,
  stagger: .5,
  scrollTrigger: {
    trigger: "#page10",
    scroller: "#main",
    scrub: 3,
    start: "top 50%",
    end: "top 30%",
  }
})

gsap.from("#page10centre #page10centreleft h2, #page10centre #page10centreright h2", {
  y: 200,
  duration: 5,
  stagger: .5,
  scrollTrigger: {
    trigger: "#page10",
    scroller: "#main",
    scrub: 3,
    start: "top 80%",
    end: "top 30%",
  }
})


gsap.from("#page10bottom #page10bottom_heading h1 span", {
  y: -200,
  stagger: 0.1,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#page10",
    scroller: "#main",
    scrub: 3,
    start: "top 30%",
    end: "top 10%",

  }
})