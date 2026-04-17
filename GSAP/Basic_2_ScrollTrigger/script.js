gsap.from("#page1 #box",{
    scale:0,
    delay:1,
    duration:2,
    rotate:360
})
// gsap.from("#page2 #box",{
//     scale:0,
//     delay:1,
//     duration:2,
//     rotate:360,
//     scrollTrigger:"#page2 #box"
// })

gsap.from("#page2 #box",{
    scale:0,
    delay:1,
    duration:2,
    rotate:360,
    scrollTrigger:{
        trigger:"#page2 #box", // element to animate upon trigger
        scroller:"body",
        marker:true,
        start:"top 60%", // scroller start , when user will scroll the body 60% then then scroller start and the element animation start will collide and triggers the animation 
        // end:"30%",
        // scrub:5
    }
})

