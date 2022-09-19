const btn = document.getElementById('boton-formulario');
let nombre = document.getElementById('input-nombre')
let email = document.getElementById('input-email')
let textarea = document.getElementById('input-textarea')
let incorrecto = document.getElementById('incorrecto')
let correcto = document.getElementById('correcto')
let incorrectoEmail = document.getElementById('incorrecto-email')
let incorrectoConsulta = document.getElementById('incorrecto-consulta')


const validarYEnviar = (e) => {
    let patronNombre = /[a-zA-Z]{3}/
    let patronEmail = /@/
    let patronConsulta = /[a-zA-Z]/

    if(patronNombre.test(nombre.value)){
        incorrecto.classList.remove('incorrecto-show')

    } else {
        incorrecto.classList.add('incorrecto-show')
        e.preventDefault()
    }

    if(patronEmail.test(email.value)) {
        incorrectoEmail.classList.remove('incorrecto-show')

    } else {
        incorrectoEmail.classList.add('incorrecto-show')
        e.preventDefault()
    }


    if(patronConsulta.test(textarea.value)) {
        incorrectoConsulta.classList.remove('incorrecto-show')

    }   else {
        incorrectoConsulta.classList.add('incorrecto-show')
        e.preventDefault()
    }

}


btn.addEventListener("click", validarYEnviar)

