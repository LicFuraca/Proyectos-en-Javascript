// Lista de que haceres

const list = [];
let command = prompt('Ingrese un comando');

while (command !== 'salir') {

    if (command === 'lista') {
        console.log('------------------------');
        for (i = 0; i < list.length; i++) {
            console.log(`${i}: ${list[i]}`);
        }
        console.log('------------------------');
        
    } else if (command === 'nuevo') {
        const addNew = prompt ('Agregue la nueva tarea.');
        list.push(addNew);
        console.log(`${addNew} agregado a la lista!`);

    } else if (command === 'borrar') {
        const remove = parseInt(prompt('Coloque el numero del item a eliminar.'));

        if (!Number.isNaN(remove)) {
        console.log(`${list[remove]} eliminado!`);
        list.splice(remove, 1); 
        } else {
            console.log('Item invalido!');
        }
    }

    command = prompt('Ingrese un comando');
    
}
console.log('Saliste de la aplicacion!');