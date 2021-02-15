let cursos = [
    {
        id:"1",
        nombre:"Matematicas",
        duracion: '48',
        costo:'370000'
    },
    {
        id:"2",
        nombre:"Ingles",
        duracion: '32',
        costo:'300000'
    },
    {
        id:"3",
        nombre:"Programacion",
        duracion: '48',
        costo:'420000'
    }
];

// FUNCION PARA MOSTRAR LOS CURSOS DISPONIBLES 
function listarCursos(){
    var incremento=0;
    for(let i=0;i<cursos.length;i++){
        incremento+=2000;
        setTimeout(()=> {
             console.log(`Curso de ${cursos[i].nombre} (ID:${cursos[i].id}), este tiene una duración de ${cursos[i].duracion} horas y un costo de $ ${cursos[i].costo}\n`);
        },incremento);
    }
}

module.exports = {
    cursos,
    listarCursos
}