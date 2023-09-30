
/*-------------------------------------------------
  hay posibilidad de que ninguna carta coincida,pero 
  no afecta el juego de forma MUY significativa.
-------------------------------------------------*/

let cartas = document.getElementsByClassName("carta");
let intentos = 0;
let win = false;
const values = ["♠", "♥", "♣", "♦", "♤", "♡", "♧", "♢"];
const winValue = values[Math.floor(Math.random() * values.length)];
document.querySelector("h1").innerHTML+= winValue // escribe el titulo

function reiniciar(){
    alert("reiniciando el juego...");
    location.reload();
}

function flip(index) {
    if (cartas[index].style.backgroundImage != "none" && intentos<3){
        const cartaValue = values[Math.floor(Math.random() * values.length)];
        cartas[index].style.backgroundImage = "none";
        cartas[index].style.backgroundColor = "white";
        cartas[index].style.borderColor= "white";
        cartas[index].innerHTML = "<p>" + cartaValue + "</p>";
        if(cartaValue == winValue){
            win = true
        }
        intentos++;
    }
}

function check(index){
    if(intentos == 3 && !win){
        alert("PERDISTE");
        reiniciar();
    }
    else if(win){
        alert("GANASTE");
        reiniciar();
    }
}

for (let i=0; i<cartas.length; i++){
    cartas[i].addEventListener("mousedown", function() {
        flip(i);
    });
    cartas[i].addEventListener("mouseup", function() {
        check(i);
    });
}
