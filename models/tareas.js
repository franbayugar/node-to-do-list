const Tarea = require('./tarea')

class Tareas{
    _listado = {}; 

    constructor(){
        this._listado = {};
    }

    crearTarea( desc = ''){
        const tarea = new Tarea(desc);

        this._listado[tarea.getId()] = tarea;
    }

    getLista(){
        return this._listado;
    }
    
}

module.exports = Tareas;