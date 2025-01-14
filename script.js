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
    duration:1,
    ease: "power1.in",
})
tl.to("#loader",{
    display:"none"
})
