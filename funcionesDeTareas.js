let fs = require('fs');

module.exports = miModulo = {
    leerJSON:()=>{
        let tareas = fs.readFileSync('./tareas.json', 'utf-8')
        return JSON.parse(tareas)
    },
    escribirJSON:(titulo, estado) => {
        let tareaNueva = {
            titulo : titulo,
            estado : "pendiente"
        }
        let tareasAnteriores = miModulo.leerJSON();
        tareasAnteriores.push(tareaNueva);
        miModulo.guardarJSON(tareasAnteriores)
    },
    guardarJSON: (info) => {
        let nuevoJSON = JSON.stringify(info)
        fs.writeFileSync('./tareas.json', nuevoJSON, 'utf-8')
    },
    filtrarPorEstado: (estadoFiltro) => {
        let listaDeTareas = miModulo.leerJSON();
        let tareasFiltradas = listaDeTareas.filter(tarea => {
            return tarea.estado === estadoFiltro.toLowerCase()
        })
        return tareasFiltradas;
    },
}