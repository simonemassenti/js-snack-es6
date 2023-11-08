const bikes = [
    {
        nome: "Bici1",
        peso: 84
    },
    {
        nome: "Bici2",
        peso: 43
    },
    {
        nome: "Bici3",
        peso: 54
    }
]

const [primaBici] = bikes;
let pesoMinore = primaBici.peso;

bikes.forEach(element => {    
    const {peso} = element;
    
    if (pesoMinore > peso) {
        pesoMinore = peso;
    }
});

const [biciConPesoMinore] = bikes.filter((curBike) => curBike.peso === pesoMinore);

const {nome, peso} = biciConPesoMinore;

console.log(`
Nome: ${nome}
Peso: ${peso}`);