const counterUp = window.counterUp.default

const callback = entries => {
    entries.forEach(entry => {
        const el = entry.target
        if (entry.isIntersecting && !el.classList.contains('is-visible')) {
            counterUp(el, {
                duration: 4000,
                delay: 10,
            })
            el.classList.add('is-visible')
        }
    })
}

const IO = new IntersectionObserver(callback, { threshold: 1 })

const sections = document.querySelectorAll('.counter')
console.log(sections);
sections.forEach(section => {
    IO.observe(section)
});





var navIcon = document.getElementById("navIcon");
var leftmenu =document.getElementById("leftMenu");

document.onclick= function(e){
    if(e.target.id !=='leftmenu' && e.target.id !=='navIcon'){
        navIcon.classList.remove('active');
        leftmenu.classList.remove('fitMenu');
    }
}







navIcon.addEventListener('click' , function(){
   navIcon.classList.toggle('active');
   leftmenu.classList.toggle('fitMenu');
    
});
