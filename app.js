require('colors');
const { inquirerMenu, pausa } = require('./helpers/inquirer');
const Tarea = require ('./models/tarea')


console.clear();

const main = async()=>{
    let opt = '';

    do{
        const tarea = new Tarea();

        // opt = await inquirerMenu();
        // console.log({opt})
        // if (opt !== '0') await pausa();


    }while(opt !== '0')

    

}

main();