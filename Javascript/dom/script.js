document.title = "Abhinav's web site"
document.body.style.backgroundColor = "green"
console.log("Hello world");

let abhibox = document.getElementsByClassName("boxes")
console.log(abhibox);
abhibox[2].style.backgroundColor = "red";

document.getElementById("blue").style.backgroundColor="blue";

let div = document.createElement("div");
div.innerHTML = "Created by <b>Abhi </b>" 
div.setAttribute("class", "created");
document.querySelector(".bjboxes").append(div);

let cont = document.querySelector(".bjboxes");
cont.insertAdjacentHTML("afterbegin", "This is inserted ")
