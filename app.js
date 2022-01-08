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





var form = document.getElementById("form");

form.addEventListener('submit', e => {
    e.preventDefault();

    fromSubmit();
});

function fromSubmit() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    // var number = document.getElementById("number").value;
    var cover = document.getElementById("cover").value;
    // var file = document.getElementById("file").value;
    // var alertBox = document.getElementById("alertBox").style;
    if (name == "") {
        document.getElementById("inputAlert").innerHTML = "Please type Your name";
        document.getElementById("alertBox").style.display = "flex";
        document.getElementById("alertBox").style.backgroundColor = "#ff7599";
        document.getElementById("alertBox").style.boxShadow= "rgb(231 78 113 / 75%) 0px 0px 12px 13px inset";
        return false;
    } else {
        document.getElementById("alertBox").style.display = "none";
    }
    if (email == "") {
        document.getElementById("inputAlert").innerHTML = "Please type Your Email";
        document.getElementById("alertBox").style.display = "flex";
        document.getElementById("alertBox").style.backgroundColor = "#ff7599";
        document.getElementById("alertBox").style.boxShadow= "rgb(231 78 113 / 75%) 0px 0px 12px 13px inset";
        return false;
    } else {

        document.getElementById("alertBox").style.display = "none";
    }
    // if (number == "") {
    //     document.getElementById("inputAlert").innerHTML = "Please type Your Number";
    //     document.getElementById("alertBox").style.display = "flex";
    //     document.getElementById("alertBox").style.backgroundColor = "red";
    //     return false;
    // } else {

    //     document.getElementById("alertBox").style.display = "none";
    // }
    if (cover == "") {
        document.getElementById("inputAlert").innerHTML = "Please type Something..";
        document.getElementById("alertBox").style.display = "flex";
        document.getElementById("alertBox").style.backgroundColor = "#ff7599";
        document.getElementById("alertBox").style.boxShadow= "rgb(231 78 113 / 75%) 0px 0px 12px 13px inset";
        return false;
    } else {

        document.getElementById("alertBox").style.display = "none";
        document.getElementById("submitResult").style.display = "block";
        document.getElementById("from1").style.display = "none";
    }
    // if (file == "") {
    //     document.getElementById("inputAlert").innerHTML = "Please upload your CV";
    //     document.getElementById("alertBox").style.display = "flex";
    //     document.getElementById("alertBox").style.backgroundColor = "red";
    //     return false;
    // } else {
    //     document.getElementById("inputAlert").innerHTML = "From Submited";
    //     document.getElementById("submitResult").style.display = "block";
    //     document.getElementById("from1").style.display = "none";
    // }
}

function closeBtn() {
    console.log("hello");
    document.getElementById("alertBox").style.display = "none";
    document.getElementById("name").style.borderStyle = "none";
    document.getElementById("name").style.borderBottom = "1px solid #95c120";
}