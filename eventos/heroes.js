const spiderman = document.getElementById("spiderman");
const homelander = document.getElementById("homelander");
const batman = document.getElementById("batman");
const spidermanImg = document.getElementById("spidermanImg");
const homelanderImg = document.getElementById("homelanderImg");
const batmanImg = document.getElementById("batmanImg");

spiderman.onclick = function(){
    if(spidermanImg.getAttribute("src") == "unknown.png"){
    spidermanImg.src = "spiderman.jpg"; 
    }
    else{
    spidermanImg.src = "unknown.png";
    }
}
homelander.onclick = function(){
    if(homelanderImg.getAttribute("src") == "unknown.png"){
    homelanderImg.src = "homelander.avif";
    }
    else{
    homelanderImg.src = "unknown.png";
    }
}
batman.onclick = function(){
   if(batmanImg.getAttribute("src") == "unknown.png"){
    batmanImg.src = "batman.jpg";
   }
   else{
    batmanImg.src = "unknown.png";
   }
}