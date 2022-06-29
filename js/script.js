

let info;
var value;
var cuadroRespuesta = document.getElementById("respuesta");

function tomarSeleccion(){
    var seleccion = document.getElementById("tipo");
    value = seleccion.options[seleccion.selectedIndex].value;
    console.log(value);
}

function calcular() {
    var ingreso = document.getElementById("number").value;
    while (cuadroRespuesta.lastElementChild) {
        cuadroRespuesta.removeChild(cuadroRespuesta.lastElementChild);}
    
    fetch("https://cors-solucion.herokuapp.com/https://api-dolar-argentina.herokuapp.com/api/dolarblue")
.then(response => {
	return response.json();
})
.then(data => {info = data.compra})
.then(() => {
    var enDolares = (ingreso/info).toFixed(2);
    var nuevoElemento = document.createElement("h3");
    var nuevoTexto = document.createTextNode(`El importe ingresado corresponde a US$ ${enDolares} dólares Blue`);
    nuevoElemento.appendChild(nuevoTexto);
    cuadroRespuesta.appendChild(nuevoElemento);
})

}

// RELACIONAR EL ENTER CON EL BOTÓN ENVIAR
var input = document.getElementById("number");

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("botonete").click();
  }
});