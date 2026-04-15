// gsap.to("#box",{
//     x:1000,
//     duration:3,
//     delay:2,
//     rotate:360,
//     backgroundColor:"blue",
//     borderRadius:"50%"
// })

// gsap.from("h1",{
//     opacity:0,
//     y:50,
//     color:"red",
//     delay:1,
//     duration :2 , // it will take 2 sec to go from y:50 to initial postion
//     stagger:1, // stagger:-1 then all elemnts come in 3,2,1
// })

// gsap.to("#box",{
//     x:1200,
//     duration:2,
//     delay:1,
//     repeat:2,
//     yoyo:true
// })

var tl = gsap.timeline()

tl.to("#box1",{
    x:1200,
    duration:2,
    delay:1,
})
tl.to("#box2",{
    x:1200,
    duration:2
})
tl.to("#box3",{
    x:1200,
    duration:2
})