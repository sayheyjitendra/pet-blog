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


let cats = document.getElementById("cats");
let dogs = document.getElementById("dogs");
let selectedOption;
function destination() {
  selectedOption = document.getElementById("selectDestination").value;

 console.log(selectedOption);
 
}


