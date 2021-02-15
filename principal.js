// CONFIG YAGRS 
const opciones = {
    id:{
        demand:true,
        alias:'i'
    },
    nombre:{
        demand:true,
        alias:'n'
    },
    cedula:{
        demand:true,
        alias:'x'
    }
}

// REQUIRES
const argv = require ('yargs')
            .command ('inscribir','Inscribirse a un curso', opciones)
            .argv
const fs = require ("fs");
const {cursos} = require ("./cursos");

// FUNCION PARA MOSTRAR LOS CURSOS DISPONIBLES 
var i = 0;
let listarCursos = () => {
    console.log(`Curso de ${cursos[i].nombre} (ID:${cursos[i].id}), este tiene una duración de ${cursos[i].duracion} horas y un costo de $ ${cursos[i].costo}`);  
    if(i===2){
        clearInterval(intervalo);
    }
    i=i+1;
}; 

// FUNCION PARA INSCRIBIRSE A UN CURSO
let inscribirse = ()=> {
    let id=argv.id;

    if (id===1 || id===2 || id===3){
        let curso = cursos.find(function(objeto){
            return objeto.id == id;
        });
    
        texto = `El estudiante ${argv.nombre} con cedula ${argv.cedula}
        se ha matriculado en el curso de ${curso.nombre} que tiene una duración de ${curso.duracion} horas
        y un costo de $${curso.costo} pesos.`;
        
        fs.writeFile('matricula.txt', texto, (err)=>{
            if(err) throw (err);
            console.log("Usted ha sido matriculado")
        })
    }else{
        console.log("Ha ingresado un ID que no corresponde a ningún curso");
        var intervalo =setInterval(listarCursos,2000);//llama la función listarCursos()
    }
    
}


if(argv.id===undefined){
    var intervalo =setInterval(listarCursos,2000);
}else{
    inscribirse();
}


