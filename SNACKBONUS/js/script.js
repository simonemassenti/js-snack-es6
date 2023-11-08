const myArray = [2, 5, 6, 3, 8, 5, 0]

const subArray = [...ritornaValori(myArray, 0, 3)];

console.log(subArray);

/*************/
//Funzioni

function ritornaValori(array, a, b) {
    const newArray = [];

    array.forEach((element, index)=> {
        if (index >= a && index <= b) {
            newArray.push(element);
        }
    });

    return newArray;
}