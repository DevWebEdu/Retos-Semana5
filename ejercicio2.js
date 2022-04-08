function hamburguesasNaufrago(Q_hamburg, Mod_pag) {


    let Total_sincargo = 0;



    for (let i = 1; i <= Q_hamburg; i++) {
        var Type_hambur = prompt("Cual es el tipo de hamburguesa que desea");
        if (Type_hambur === "sencilla") {

            Total_sincargo = Total_sincargo + 20

        } else if (Type_hambur === "doble") {
            Total_sincargo = Total_sincargo + 25

        } else if (Type_hambur === "triple") {
            Total_sincargo = Total_sincargo + 28

        }


    }
    let Cargo = 0.05;
    if (Mod_pag === "credito") {
        Total_sincargo = (Cargo * Total_sincargo) + Total_sincargo;
    } else if (Mod_pag === "efectivo") {
        Total_sincargo
    }


    return Total_sincargo


}

let pedido1 = hamburguesasNaufrago(5, "credito")

console.log(
    `Usted a comprado una cantidad Hamburguesas que suman la cantidad de ${pedido1}  soles`)
console.log("gola")