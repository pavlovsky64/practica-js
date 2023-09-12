function angulum(){
    var inicial = Math.floor(Math.random()*360);
    var randomNum = (Math.floor(Math.random()*1800)+1800);//360*5 =1800 (5 vueltas enteras)
    var anguloFinal = (inicial+randomNum)%360;

    console.log("angulo inicial:", inicial);
    console.log("valor aleatoreo:", randomNum);
    console.log("angulo final:", anguloFinal);
}
angulum();