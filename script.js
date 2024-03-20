import { informacion } from "./misdatos.js";



function educacion() {
    let codigoEducacion = ""
    codigoEducacion += `
    <div class="perfil"> 
    <h3> Mi perfil: </h3>

    <p> ${informacion.miEducacion.perfil} </p>
</div>  `


    codigoEducacion += `
    <div class="infoacademica">
    Mi formación academica:
    `
    for (let dato of informacion.miEducacion.formacionAcademica) {
        codigoEducacion += `
   
    <div>
        ${dato.titulo}
        Institución: ${dato.institucion}
        Año: ${dato.año}
    </div> `
    }
    codigoEducacion += `
</div>

`

    codigoEducacion += `
<div class="infoacomple">
Formacion complementaria:
`
    for (let dato of informacion.miEducacion.formacionAdicional) {
        codigoEducacion += `
    <div>
    ${dato.titulo}
    Institución: ${dato.institucion}
    Año: ${dato.año}
    Duracion: ${dato.duracion}
</div> `
    }

    codigoEducacion += ` 

    </div> `
    document.getElementById("micv").innerHTML = codigoEducacion
}


let botonEducacion = document.getElementById("mieducacion")
botonEducacion.addEventListener("click", educacion)



function trabajo() {
    let codigoTrabajo = ""
    codigoTrabajo += `
<div class="perfil"> 
<h3> Experiencia laboral: </h3>`

    for (let dato of informacion.mitrabajo.expecienciaLaboral) {
        codigoTrabajo += `
    <div>
    ${dato.cargo}
    Empresa: ${dato.empresa}
    Tiempo: ${dato.tiempoLaborado}
    Funciones: ${dato.funciones}
</div> `

    }
    document.getElementById("micv").innerHTML = codigoTrabajo

}
let botonTrabajo = document.getElementById("mitrabajo")
botonTrabajo.addEventListener("click", trabajo)

function habilidades() {
    let codigohabilidades = ""
    codigohabilidades += `
<div class="perfil"> 
<h3> Habilidades blandas: </h3>`

    for (let dato of informacion.mishabilidades.habilidadesblandas) {
        codigohabilidades += `
    <div>
    ${dato}
</div> `

    }
    codigohabilidades += `
<div class="perfil"> 
<h3> Idiomas: </h3>`

    for (let dato of informacion.mishabilidades.idiomas) {
        codigohabilidades += `
    <div>
${dato.idioma}
    <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="${dato.dominio}" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width:${dato.dominio}%"></div>
</div>

</div> `

    }


    codigohabilidades += `
<div class="perfil"> 
<h3> Sofware: </h3>`

    for (let dato of informacion.mishabilidades.software) {
        codigohabilidades += `
    <div>
${dato.programa}
    <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="${dato.dominio}" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width:${dato.dominio}%"></div>
</div>

</div> `


    }

    codigohabilidades += `
<div class="perfil"> 
<h3> Lenguajes de programación: </h3>`

    for (let dato of informacion.mishabilidades.lenguajeProgramacion) {
        codigohabilidades += `
    <div>
    ${dato}
</div> `

    }
    document.getElementById("micv").innerHTML = codigohabilidades
   


}
let botonhabilidades = document.getElementById("mishabilidades")
botonhabilidades.addEventListener("click", habilidades)

