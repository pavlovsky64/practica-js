function tabla(multiplicand, maxMultiplier){
    console.log(`\n Tabla del  ${multiplicand} hasta ${maxMultiplier} \n`)
    
    for(let multiplier =0; multiplier<= maxMultiplier; multiplier++){
         console.log(`${multiplicand} x ${multiplier} = ${multiplicand*multiplier}`);
    }
}
for(let i =1; i<= 3; i++) tabla(i,8);
