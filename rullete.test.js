let jugadas = 0;
function roll(){
    const total = (Math.floor(Math.random()*185))+185;// 37*5=185
    const numCaido = total%37;
    jugadas+=1

    console.log(jugadas,":", total, "caido en numero", numCaido)
    test('string with a single number should result in the number itself', () => {
        expect(numCaido).toBeGreaterThanOrEqual(0);
        expect(numCaido).toBeLessThanOrEqual(36);
      })
}
for(let i=0; i<10; i++){
    roll();
}