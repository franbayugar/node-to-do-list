require('colors');
const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, leerInput, listadoTareas, confirmar } = require('./helpers/inquirer');
const Tareas = require('./models/tareas')

console.clear();

const main = async () => {
    let opt = '';
    const tareas = new Tareas();
    const tareasDB = leerDB();

    if (tareasDB) {
        // TODO: cargar tareas
        tareas.cargarTareasFromArray(tareasDB);
    }

    do {

        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                const desc = await leerInput('Descripcion:');
                tareas.crearTarea(desc);

                break;
            case '2':
                tareas.listadoCompleto();
                break;
            case '3':
                tareas.listarPendientesCompletadas(true);
                break;
            case '4':
                tareas.listarPendientesCompletadas(false);
                break;
            case '6':
                const id = await listadoTareas(tareas.listadoArr);
    
                if (id !== '0') {
                    const confirmacion = await confirmar('¿Estás seguro?');
                    if (confirmacion) {
                        tareas.borarTarea(id);
                        console.log('Tarea borrada de forma exitosa')
                    }
                }
                break;
        }


        guardarDB(JSON.stringify(tareas.listadoArr));


        if (opt !== '0') await pausa();

    } while (opt !== '0')



}

main();