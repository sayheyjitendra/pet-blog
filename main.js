const btn = document.querySelector(".main-btn")
const newsletter = document.querySelector(".newsletter")
const close = document.getElementById("close")


console.log("hello");

btn.addEventListener("click", function(){
newsletter.classList.toggle("hidden")
})

close.addEventListener("click", function(){
    newsletter.classList.add("hidden")

})




