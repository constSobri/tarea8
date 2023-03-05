function miFuncion() {
    return true
}

const funcion = miFuncion();

console.log(funcion)

////////////////////////////////////////////////////////////////////////

//Esto no se explico en ninguna parte del modulo antes de la prueba. Tuve que investigarlo por mi cuenta.

async function miFuncionAsincrona() {
    await new Promise(resolve => setTimeout(resolve, 5000));
    console.log("Hola soy una promesa");
}
console.log(miFuncionAsincrona())

////////////////////////////////////////////////////////////////////////

function* generadorRex() {
    let id = 0
    while(true){
        id += 2
        if (id >= 20) {
            return 20 //Investigando un poco me di cuenta que habia que retornar el ultimo numero.
        }
        yield id
    }
}

const gen = generadorRex();

console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())