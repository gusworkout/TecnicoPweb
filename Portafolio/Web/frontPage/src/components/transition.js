
window.addEventListener("scroll", function(){
    var header = this.document.querySelector("header")
    header.classList.toggle("scrollAnimationHeader", this.window.scrollY>0)
})


