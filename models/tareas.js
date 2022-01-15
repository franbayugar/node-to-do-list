const Tarea = require('./tarea')

class Tareas{
    _listado = {}; 

    constructor(){
        this._listado = {};
    }

    cargarTareasFromArray(tareas = []){
        tareas.forEach(tarea =>{
            this._listado[tarea.id] = tarea;
        });
    }

    crearTarea( desc = ''){
        const tarea = new Tarea(desc);

        this._listado[tarea.getId()] = tarea;
    }

    get listadoArr(){
        const listado = [];
        Object.keys(this._listado).forEach(key => {
            listado.push(this._listado[key]);
        })
        return listado;
    }
    
    listadoCompleto(){
        this.listadoArr.forEach( (tarea,i) =>{
            const idx = `${i+1}`.green;
            const {desc, completadoEn} = tarea;
            const estado = (completadoEn)
                            ? 'Completada'.green
                            : 'Pendiente'.red;
            console.log(`${idx} ${desc} :: ${estado}`);


        });
    }

    listarPendientesCompletadas( completadas = true){
            let indice = 0;
            this.listadoArr.forEach( (tarea) =>{
                const {desc, completadoEn} = tarea;
                const estado = (completadoEn)
                                ? 'Completada'.green
                                : 'Pendiente'.red;
                if(completadas){
                    if(completadoEn){
                        indice += 1;
                        console.log(`${(indice + '.').green} ${desc} :: ${estado}`);
                    }
                }else{
                    if(!completadoEn){
                        indice += 1;
                        console.log(`${(indice + '.').red} ${desc} :: ${estado}`);
                    }
                }
    
    
            });
        
    }

    borarTarea(id = ''){
        if(this._listado[id]){
            delete this._listado[id];
        }else{
            console.log(id);
        }
    }
}

module.exports = Tareas;