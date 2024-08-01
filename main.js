
function myMenuFunction() {
    var menuBtn = document.getElementById("mynavmenu");
    if (menuBtn.className === "nav-menu") {
        menuBtn.className += " responsive";
    } else {
        menuBtn.className = "nav-menu";
    }
}

/*const body = document.querySelector("body"),
toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click",()=>{
    body.classList.toggle("dark");
});*/

window.onscroll = function(){headerShadow()};

function headerShadow(){
    const navHeader = document.getElementById("header");

    if(document.body.scrollTop >50 || document.documentElement.scrollTop > 50){
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineheight = "70px";
        }else{
            navHeader.style.boxShadow="none";
            navHeader.style.height = "90px";
            navHeader.style.lineheight = "90px";

        }
}



var typingEffect = new Typed(".typedText",{
    strings : ["Designer","Creator", "Developer"],
    loop : true,
    typedSpeed  : 100,
    backSpeed   :  80,
    backDelay   :  2000
})

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration : 2000,
    reset: true
})

sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay:200})
sr.reveal('.featured-text-info',{delay:200})
sr.reveal('.featured-text-btn',{delay:200})
sr.reveal('.social_icons',{delay:200})
sr.reveal('.featured-image',{delay:300})


