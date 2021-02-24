// CONFIG YAGRS 
// const opciones = {
//     id:{
//         demand:true,
//         alias:'i'
//     },
//     nombre:{
//         demand:true,
//         alias:'n'
//     },
//     cedula:{
//         demand:true,
//         alias:'x'
//     }
// }

// REQUIRES
// const argv = require ('yargs')
//             .command ('inscribir','Inscribirse a un curso', opciones)
//             .argv
// const fs = require ("fs");
// const {cursos,listarCursos} = require ("./cursos");


//cursos
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
    var lista;
    for(let i=0;i<cursos.length;i++){
        incremento+=2000;
        setTimeout(()=> {
            if(i==0){
                lista=`Curso de ${cursos[i].nombre} (ID:${cursos[i].id}), este tiene una duración de ${cursos[i].duracion} horas y un costo de $ ${cursos[i].costo} </br>`;
            }else{
                lista+=`Curso de ${cursos[i].nombre} (ID:${cursos[i].id}), este tiene una duración de ${cursos[i].duracion} horas y un costo de $ ${cursos[i].costo}</br>`;
            }
            document.getElementById("ofertados").innerHTML=lista;
           //  console.log(`Curso de ${cursos[i].nombre} (ID:${cursos[i].id}), este tiene una duración de ${cursos[i].duracion} horas y un costo de $ ${cursos[i].costo}\n`);
        },incremento);
    };
};

// FUNCION PARA INSCRIBIRSE A UN CURSO
let inscribirse = ()=> {
    let id=parseInt(prompt("Ingrese el ID del curso a matricular"));
    let nombre=prompt("Ingrese el su nombre por favor");
    let cedula=prompt("Ingrese su número de cédula");
    if (id===1 || id===2 || id===3){
        let curso = cursos.find(function(objeto){
            return objeto.id == id;
        });
    
        texto = `El estudiante ${nombre} con cedula ${cedula}
        se ha matriculado en el curso de ${curso.nombre} que tiene una duración de ${curso.duracion} horas
        y un costo de $${curso.costo} pesos.`;
        
        alert(texto);
        document.getElementById("estado").innerHTML="<h2>Usted ha sido matriculado satisfactoriamente</h2>";
    }else{
        alert("Ha ingresado un ID que no corresponde a ningún curso");
        listarCursos();
    }
    
}

