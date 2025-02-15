gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy("main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

var tl = gsap.timeline()

tl.to(".loader-container,.loader-container svg", {
  top: -1200,
  delay: 1,
  duration: 0.2,
})


function cursorTrace(){
    document.addEventListener("mousemove",(dets)=>{
        console.log(dets.x);
        gsap.to(".crsr",{
            x:dets.x,
            y:dets.y,
        })
    })
  }
  cursorTrace();



  var allh4 = document.querySelectorAll(".quote-container h4")

allh4.forEach((elem) => {
  var clutter4 = ""
  var h4Text = elem.textContent
  var splittedText4 = h4Text.split("")
  splittedText4.forEach((p) => {
    clutter4 += `<span>${p}</span>`
  })
  elem.innerHTML = clutter4
  console.log(elem);
})


var tl2 = gsap.timeline()

tl2.to(".quote-container h4 span", {
  color: "black",
  backgroundColor: "greenyellow",
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".quote-container h4",
    scroller: "main",
    // markers: true,
    start: "top 55%",
    end: "top 20%",
    scrub: 1
  }
})


document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("[data-hs-tab]");
  const tabs = document.querySelectorAll("[role='tabpanel']");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove "active" class from all buttons
      buttons.forEach((btn) => btn.classList.remove("active"));

      // Hide all tab contents
      tabs.forEach((tab) => tab.classList.add("hidden"));

      // Add "active" class to the clicked button
      this.classList.add("active");

      // Show the corresponding image
      const targetTab = document.querySelector(this.getAttribute("data-hs-tab"));
      targetTab.classList.remove("hidden");
    });
  });
});


//hero carousel

const carouselBody = document.getElementById("carouselBody");
  const slides = document.querySelectorAll(".hs-carousel-slide");
  const totalSlides = slides.length;
  let currentIndex = 0;

  function updateCarousel() {
    carouselBody.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
  }

  document.getElementById("nextBtn").addEventListener("click", nextSlide);
  document.getElementById("prevBtn").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
  });

  setInterval(nextSlide, 3000); // Auto-scroll every 3 seconds
