gsap.from(".box", {
  scrollTrigger: {
    trigger: "#container",
    start: "top 70%",
    end: "center 30%",
    // markers: true,
    scrub: 1,
  },
  scale: 0,
  duration: 3,
  stagger: { each: 1, from: "start", delay: 1 },
});
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
