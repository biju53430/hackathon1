let btn = document.querySelector("#dark-mode");
let currmode = "light-mode";
let body = document.querySelector("body");
let headingbg = document.querySelector("#heading-bg")


btn.addEventListener("click", () => {
 if(currmode==="light-mode"){
    currmode = "darkmode";
    body.classList.toggle("darkmode");
    headingbg.classList.toggle("bg")
    
 }
 else{
    currmode= "lightmode";
    body.classList.toggle("lightmode");
    headingbg.classList.toggle("bg")
 }



})
btn.addEventListener("click", () => {
   if (btn.innerHTML === "☀️") {
        btn.innerHTML = "🌙";
    } else {
        btn.innerHTML = "☀️";
    }
})
console.log(currmode);