const btn = document.querySelector(".main-btn");
const newsletter = document.querySelector(".newsletter");
const close = document.getElementById("close");

btn.addEventListener("click", function () {
  newsletter.classList.toggle("hidden");
});

close.addEventListener("click", function () {
  newsletter.classList.add("hidden");
});

let cats = document.getElementById("cats");
let dogs = document.getElementById("dogs");
let selectedOption;
function category() {
  selectedOption = document.getElementById("selectCategory").value;
  console.log(selectedOption);
  if (selectedOption === "Cats") {
    dogs.classList.add("hidden");
    cats.classList.remove("hidden");
  } else if (selectedOption === "Dogs") {
    dogs.classList.remove("hidden");
    cats.classList.add("hidden");
  }

  else{
    cats.classList.remove("hidden");
    dogs.classList.remove("hidden");

  }
}
