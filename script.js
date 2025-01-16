function loadingAnimation(){
    var tl = gsap.timeline();
tl.from(".line h1",{
    y:150,
    stagger:0.2,
    duration:0.5
})
tl.from(".line1-left",{
    opacity:0,
    onStart: function(){
        var line1h5 = document.querySelector(".line1-left h5");
        var grow = 0;
        setInterval(function(){
            if(grow<100){
                line1h5.innerHTML = grow++;
            }  
            else{
                line1h5.innerHTML = grow;
            }
        },35)
    }
})
tl.to(".line h1,.line1-left",{
    delay:3.8,
    opacity:0,
    stagger:0.2,
    duration:0.5,
})
tl.to("#loader",{
    delay:0.8,
    opacity:0,
    duration:0.5
})
tl.from("#page1",{
    y:1600,
    duration:0.5,
    ease: "power1.out",
})
tl.from("#crsr",{
    display:"none",
})
tl.to("#loader",{
    display:"none"
})
tl.from("#nav",{
    opacity:0
})
tl.from(".hero h1,.hero h2,.hero h3",{
    y:120,
    stagger:0.2
})
}
loadingAnimation();

function cursorAnimation(){
    document.addEventListener("mousemove",function(dets){
    gsap.to("#crsr",{
        left:dets.x,
        top:dets.y,
        ease: "sine",
    })
})
Shery.makeMagnet("#nav .nav-part2 h4" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
})
}
cursorAnimation();

var hero3h2 = document.querySelectorAll("#hero3 h2");

hero3h2.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        // Animate the CSS variable controlling the pseudo-element
        gsap.to(elem, {
            "--after-opacity": 0,
            // duration: 0.3, // Smooth transition
        });
    });
    elem.addEventListener("mousemove",function(){
        gsap.to(elem,{
            "--after-opacity":0
        })
    })
    elem.addEventListener("mouseleave", function () {
        // Revert the CSS variable
        gsap.to(elem, {
            "--after-opacity": 1,
            // duration: 0.3,
        });
    });
});