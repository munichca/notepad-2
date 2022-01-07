let miModuloRequerido = require('./funcionesDeTareas')
let process = require("process")
let accion = process.argv[2]

switch (accion) {
    case "listar":
        let tareas = miModuloRequerido.leerJSON()
        if (tareas.length === 0){
            console.log("Tarea vacía");
        }else{
            tareas.forEach(tarea => {
                console.log("Título: " + tarea.titulo + " / Estado: " + tarea.estado )
            });
            }
        break;
    case "crear":
        let titulo = process.argv[3];
        miModuloRequerido.escribirJSON(titulo)
        console.log("Agregada: Título: " + process.argv[3] + " - Estado: Pendiente")
        break;
    case "filtrar":
        let estadoFiltro = process.argv[3]
        let listaFiltrada = miModuloRequerido.filtrarPorEstado(estadoFiltro)
        if(listaFiltrada.length === 0){
            console.log("No hay coincidencias")
        }else {for(let i = 0; i < listaFiltrada.length ; i++){
            console.log(listaFiltrada[i].titulo)};
        }
        break;
    case undefined:
        console.log("Atención - tienes que pasar una acción");
        break;
    default:
        console.log("No entiendo qué quieres hacer.");
        break
    }