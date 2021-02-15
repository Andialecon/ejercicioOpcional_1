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
const {cursos,listarCursos} = require ("./cursos");

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
        // var intervalo =setInterval(listarCursos,2000);//llama la función listarCursos()
        listarCursos();
    }
    
}

if(argv.id===undefined){
    // var intervalo =setInterval(listarCursos,2000);
    listarCursos();
}else{
    inscribirse();
}


