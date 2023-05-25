gsap.to(".box", {

  x:50,
  repeat: -1,
  duration: 1,
  yoyo: true,
  stagger: {
    from: 1,
    ease: "power2.inOut",
    each:.1
  },
});
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

