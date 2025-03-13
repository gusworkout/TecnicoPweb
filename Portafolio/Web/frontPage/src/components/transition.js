

window.addEventListener("scroll", function(){
    var header = this.document.querySelector("header")
    header.classList.toggle("scrollAnimationHeader", this.window.scrollY>0)
})


window.addEventListener("click", function(){
var slide = document.querySelector('.slideBarMobil')
slide.classList.toggle("ocultarSlide")
})