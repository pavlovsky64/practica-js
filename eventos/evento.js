const box = document.getElementById("evento");
/*box.addEventListener("click", event =>{
    box.style.backgroundColor="green";
})*/
//const changeBox
box.onclick = function(){
    if(box.style.backgroundColor == ""){
        box.style.backgroundColor="green";
    }
    else{
        box.style.backgroundColor="";
    }
}

