// Punto 1
let array = [];
console.log(array);

// Punto 2
let utents = parseInt(prompt('Quanti elementi vuoi inserire?'));
console.log('Hai inserito: ' + utents);

// Punto 3
for(let i=0; i<utents; i++){
    let numbers = Math.round(Math.random()*100);
    array.push(numbers);
}

console.log(array);

// Punto 4
const five_elements = array.slice(-5);
console.log(five_elements);

