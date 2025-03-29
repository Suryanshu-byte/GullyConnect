import gsap from "gsap";


function loadingAnimation(){
    // typical import


//_______________________________________________________________________________________________

var tl= gsap.timeline();
tl.from(".line h1", {
    y:150,
    stagger:0.25,
    duration:0.6,
    delay:0.5 

});
tl.from("#line1-part1 ", {
    opacity:0,
    onStart:function(){
        var h5timer = document.querySelector("#line1-part1 h5");
        var grow = 0;
        setInterval(function() {
    if(grow<100){
        h5timer.innerHTML = grow++;
    } else {
        h5timer.innerHTML = grow;
    }   
},33)
    },
})
tl.to(".line h2",{
    animationName: "anime",
    opacity: 1
})
tl.to("#loader", {
    opacity: 0,
    duration: 0.2,
    delay: 4,
}) 

tl.from("page-1",{
    delay: 0.2,
    y:1600,
    opacity:0.6,
    duration: 0.5,
    // ease: Power4
})

tl.to("#loader",{
    display: "none",


});
tl.from("#nav",{
    opacity: 0,
})
tl.from(".meow h1 ",{
    y:120,
    stagger: 0.2
})
}
loadingAnimation()



function cursoranimation(){
    // document.addEventListener("mousemove", function(dets){
//     gsap.to("#cursor",{
//         left: dets.clientX,
//         top: dets.clientY
//     })
// })

document.addEventListener("mousemove", (event) => {
    gsap.to("#cursor", {
        left: event.clientX,
        top: event.clientY,
        duration: 0.1,  // Smooth animation
        ease: "power2.out"
    });
});
}

cursoranimation()