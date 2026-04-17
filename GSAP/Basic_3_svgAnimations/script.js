var intialPath = `M 10 100 Q 500 100 990 100`
var finalPath = `M 10 100 Q 500 100 990 100`

var string = document.querySelector("#string")

string.addEventListener("mousemove",function(dets){
    // dets : it gives us the information object , which contains the information that what all things happedn when an event occurs , like when mouse will move in the the string the event will occur and the dets will give us the posotion and other info the mouse and event.

    path=`M 10 100 Q ${dets.x} ${dets.y} 990 100`

    gsap.to("svg path",{
        attr:{d:path} , // attr is used to change the atrribute of the element
        duration:0.2, 
        ease:"power3.out" //In GSAP, ease controls the style of speed change during an animation.
    })
})

string.addEventListener("mouseleave",function(dets){
    gsap.to("svg path",{
        attr:{d:finalPath},
        duration:2,
        ease:"elastic.out(1,0.2)"
    })
})

// Brandium : insperation website