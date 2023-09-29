/*const button = document.querySelector("button");
const parrafo = document.querySelector("p");
button.onclick = ()=>{
    parrafo.innerHTML="Buenos dias!!!";
    parrafo.style.backgroundColor = "lightGreen";
    parrafo.style.width = "100px";
}*/
const button = document.querySelector("button");
const action = ()=>document.querySelector("p").innerHTML="Hello!!";
const action2 = ()=>document.querySelector("p").innerHTML="Chau!!";
button.addEventListener("click", action);
button.addEventListener("mouseover", action2);