function auditoria() {
    let confirmacion = true
    let total = 0
    while (confirmacion === true) {
        let productos = prompt("que producto desea")
        if (productos === "toner") {
            total = total + 1
        } else if (productos === "cabezal") {
            total = total + 1
        } else if (productos === "tinta") {
            total = total + 1
        }

        confirmacion = confirm("desea alun otro producto mas ?")
    }

    return total
}

let auditoria1 = auditoria()
console.log(auditoria1)