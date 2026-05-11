const usuario = JSON.parse(localStorage.getItem("usuario"))

if(!usuario){
window.location.href="login.html"
}

if(usuario.rol !== "admin"){
window.location.href="reportar.html"
}

function cargarReportes(){

let reportes = JSON.parse(localStorage.getItem("reportes")) || []

const contenedor = document.querySelector(".alertas")

contenedor.innerHTML=""

reportes.forEach((r,index)=>{

const div = document.createElement("div")
div.classList.add("alerta")

if(r.atendida){
div.classList.add("atendida")
}

div.innerHTML=`
<h3>${r.tipo.toUpperCase()}</h3>
<p>Edificio ${r.edificio} - Aula ${r.aula}</p>
<span>${r.fecha}</span>

${!r.atendida 
? `<button onclick="atender(${index})">Atendida</button>` 
: `<p class="estado">✔ Atendida</p>`}
`

contenedor.prepend(div)

})

}

function atender(index){

let reportes = JSON.parse(localStorage.getItem("reportes")) || []

reportes[index].atendida = true

localStorage.setItem("reportes", JSON.stringify(reportes))

cargarReportes()
}

setInterval(cargarReportes,2000)

function logout(){
localStorage.removeItem("usuario")
window.location.href="login.html"
}