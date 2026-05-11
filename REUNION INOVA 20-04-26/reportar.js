const usuario = JSON.parse(localStorage.getItem("usuario"))

if(!usuario){
window.location.href="login.html"
}

if(usuario.rol === "admin"){
window.location.href="index.html"
}

let tipo="", edificio="", aula=""

function activarBoton(selector, boton){
document.querySelectorAll(selector).forEach(b => b.classList.remove("activo"))
boton.classList.add("activo")
}

function seleccionarTipo(t, btn){
tipo=t
activarBoton(".tipo-btn", btn)
}

function seleccionarEdificio(e, btn){
edificio=e
activarBoton(".edificio-btn", btn)
}

function seleccionarAula(a, btn){
aula=a
activarBoton(".aula-btn", btn)
}

function enviarReporte(){

if(tipo==="" || edificio==="" || aula===""){
alert("Completa todos los datos")
return
}

let reportes = JSON.parse(localStorage.getItem("reportes")) || []

const nuevo = {
tipo,
edificio,
aula,
fecha:new Date().toLocaleTimeString(),
atendida:false
}

reportes.push(nuevo)

localStorage.setItem("reportes", JSON.stringify(reportes))

alert("Reporte enviado 🚨")

tipo=""
edificio=""
aula=""

document.querySelectorAll(".tipo-btn, .edificio-btn, .aula-btn")
.forEach(b => b.classList.remove("activo"))

}

function logout(){
localStorage.removeItem("usuario")
window.location.href="login.html"
}