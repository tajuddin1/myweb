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