const squadre = [
    {
        nome: "Milan",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Inter",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Cagliari",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Napoli",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Palermo",
        puntiFatti: 0,
        falliSubiti: 0,
    }
]

const newArray = [];

squadre.forEach(element => {
    element.falliSubiti = randomNumber();
    element.puntiFatti = randomNumber();

    const {nome, falliSubiti} = element;

    newArray.push({nome, falliSubiti});
});

console.log(newArray);

/*******************************/
//Funzioni
function randomNumber(){
    return Math.floor(Math.random() * 100) + 1;
}