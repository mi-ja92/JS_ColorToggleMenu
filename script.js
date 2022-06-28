
const background = document.querySelector(".myBody");
const sidebarbtn = document.querySelector(".sidebarbutton");
const slideHidden = document.querySelector(".slide");
const grayBackground=document.querySelector(".gray");
const redBackground=document.querySelector(".red");
const blueBackground=document.querySelector(".blue");
const yellowBackground=document.querySelector(".yellow");
const purpleBackground=document.querySelector(".purple");
const greenBackground=document.querySelector(".green");



sidebarbtn.addEventListener("click", function() {
    slideHidden.classList.toggle("on");
})

grayBackground.addEventListener("click", function(){
    background.className="gray-background";
    slideHidden.classList.remove("on");
} )

redBackground.addEventListener("click", function(){
    background.className="red-background";
    slideHidden.classList.remove("on");
})

blueBackground.addEventListener("click", function(){
    background.className="blue-background";
    slideHidden.classList.remove("on");
})

yellowBackground.addEventListener("click", function(){
    background.className="yellow-background";
    slideHidden.classList.remove("on");
})

greenBackground.addEventListener("click", function(){
    background.className="green-background";
    slideHidden.classList.remove("on");
})

purpleBackground.addEventListener("click", function(){
    background.className="purple-background";
    slideHidden.classList.remove("on");
})
