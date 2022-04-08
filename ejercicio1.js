let Cant_litros, Price, Cant_Galones, Gains;
Cant_litros = Number(prompt("Cantidad de litros"));
Price = Number(prompt("Precio"));
Cant_Galones = 3.785 * Cant_litros;
Gains = Cant_Galones * Price;
console.log(`las ganancias son de ${Gains} soles `)