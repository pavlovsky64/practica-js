var now = new Date();

function timing(){
    const horaActual = [now.getHours(), now.getMinutes()];
    const randomMinute = (Math.floor(Math.random()*300)+300);//en 5 horas hay 300 minutos
    const horasFinales= Math.floor(horaActual[0]+(randomMinute+horaActual[1])/60)%24;
    const minutosFinales= (randomMinute+horaActual[1])%60

    const horaFinal = [horasFinales, minutosFinales];

    console.log(`hora inicial: ${horaActual[0]}:${horaActual[1]}`);
    console.log("valor aleatoreo en minutos:", randomMinute);
    console.log(`hora final: ${horaFinal[0]}:${horaFinal[1]}`);

    test('string with a single number should result in the number itself', () => {
        expect(horasFinales).toBeGreaterThanOrEqual(0);
        expect(horasFinales).toBeLessThanOrEqual(23);
        expect(minutosFinales).toBeGreaterThanOrEqual(0);
        expect(minutosFinales).toBeLessThanOrEqual(59);
      })
}
timing();