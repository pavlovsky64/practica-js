let jugadas = 0;
function roll(){
    const total = (Math.floor(Math.random()*185))+185;// 37*5=185
    const numCaido = total%37;
    jugadas+=1

    console.log(jugadas,":", total, "caido en numero", numCaido)
}
for(let i=0; i<10; i++){
    roll();
}