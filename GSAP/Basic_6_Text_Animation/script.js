function breakTheText(){
    var h1 = document.querySelector("#string")
    var h1Text = h1.textContent

    var splittedText = h1Text.split("")
    var halfValue = Math.floor(splittedText.length/2)

    var clutter = ""

    splittedText.forEach(function(elem , idx){
        if(idx < halfValue){
            clutter += `<span class="a">${elem}</span>`
        }else{
            clutter += `<span class="b">${elem}</span>`
        }
    })
    h1.innerHTML = clutter
}

breakTheText()

gsap.from(".a",{
    y:100,
    duration:0.6,
    delay:0.5,
    stagger:0.2,
    opacity:0
})

gsap.from(".b",{
    y:100,
    duration:0.6,
    delay:0.5,
    stagger:-0.2,
    opacity:0
})