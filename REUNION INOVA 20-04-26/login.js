function login(){

const user = document.getElementById("usuario").value
const pass = document.getElementById("password").value

const usuarios = [
{usuario:"admin", password:"1234", rol:"admin"},
{usuario:"user", password:"1234", rol:"usuario"}
]

const encontrado = usuarios.find(u => u.usuario === user && u.password === pass)

if(encontrado){

localStorage.setItem("usuario", JSON.stringify(encontrado))

if(encontrado.rol === "admin"){
window.location.href = "index.html"
}else{
window.location.href = "reportar.html"
}

}else{
document.getElementById("error").innerText="Datos incorrectos"
}

}