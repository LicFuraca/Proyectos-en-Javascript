// Un juego de azar, donde la persona tiene que adivinar cual es el numero!

let maximum = parseInt(prompt('Vas a adivinar un numero del 1 al ...'));
while (!maximum) {
    maximum = parseInt(prompt('Coloca un numero valido!'));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt(`Adivina el numero del 1 al ${maximum}`));
let attempts = 1;

while (parseInt(guess) !== targetNum) {

    if (guess === 's') {break};
    attempts++;

    while (!Number(guess) && guess !== 's') {
        guess = prompt('Coloca un numero valido!');
    };
        if (guess > targetNum) {
            guess = (prompt('Muy alto, proba otra vez'));
        } else if (guess < targetNum) {
            guess = (prompt('Muy bajo, proba otra vez!'));
        };
};

if (guess === 's'){
    console.log(`Saliste del juego!, El numero era ${targetNum}`);
    } else {
        console.log (`Muy bien! El numero era ${targetNum}, te llevo ${attempts} intento(s). Ganaste!`);
    } 