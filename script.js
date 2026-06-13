function scrollToSection(){

document
.getElementById("main")
.scrollIntoView({
behavior:"smooth"
});

}

function surprise(){

alert(
"Dear Peachu 🍑\n\nIf you ever forget how amazing you are,\ncome back to this website.\n\nI'll keep reminding you.\n\n— Piranha 🐟❤️"
);

confetti();

}

function confetti(){

for(let i=0;i<40;i++){

let heart=document.createElement("div");

heart.innerHTML="🌸";

heart.classList.add("heart");

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=
(Math.random()*5+5)+"s";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},8000);

}

}