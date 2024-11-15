
function callback(entries){
    entries.forEach(elems =>{
        const caja = elems.target.querySelector('section')
        caja.classList.toggle('animate-timeline-view' , elems.isIntersecting)
    })
}
const options ={
    root:null,
    rootMargin:'0px',
    threshold : 0
}
const observe = new IntersectionObserver(callback, options)
const boxs = document.querySelectorAll('.boxs')
boxs.forEach(box=>{

    observe.observe(box)
})
// elem

