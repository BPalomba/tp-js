//Ejercicio 1.2
function ej1_2() {
  let a, b, c;
  a = 69;
  b = 96;
  c = a + b;
  console.log("La suma de a y b es: ", c);
}

//Ejercicio 1.3
function ej1_3() {
  let nombre = prompt("como te llamas?");
  console.log("hola", nombre);
}

//Ejercicio 2.1
let ej2_1 = () => {
  let a, b, c;
  a = 25;
  b = 30;
  c = 25;
  let result = () => {
    if (a > b) {
      if (a > c) {
        return a;
      }
      else if (c > a) {
        return c;

      }
    }
    else if (b > a) {
      if (b > c) {
        return b;

      }
      else if (c > b) {
        return c;

      }
    }
    else if (a < c) {
      return c;
    }
    else return "iguales"
  }
  console.log("El mayor de los tres numeros es:", result());
}

//Ejercicio 2.2
function ej2_2() {
  let numeroIngresado = (Number)(prompt("Introduci un numero"));
  if (numeroIngresado % 2 === 0) {
    console.log("El numero", numeroIngresado, "es par");
  }
  else {
    console.log("El numero", numeroIngresado, "es impar");
  }
}

//Ejercicio 3.1
function ej3_1() {
  let i = 10;
  while (i > 0) {
    console.log(i);
    i--;
  }
}

//Ejercicio 3.2
function ej3_2() {
  let ingresado;
  do {
    ingresado = prompt("Intrudoci un numero mayor a 100");
  } while (ingresado < 100)
  console.log("Ingresaste un numero mas grande que a 100:", ingresado, ", bien");
}

//Ejercicio 4.1
let esPar = (soyelnumero) => {
  if (soyelnumero % 2 === 0) {
    return true;
  }
  else {
    return false;
  }
}
function ej4_1() {
  let numerito = 64
  console.log("El número ingresado", numerito, "es par:", esPar(numerito));
}

//Ejercicio 4.2
function convertirCelciusAFarenheit(celso) {
  return ((celso * 1.8) + 32);
}

function ej4_2() {
  let tempC = 30;
  let tempF = convertirCelciusAFarenheit(tempC);
  console.log(tempC, "°C equivalentes a", tempF, "°F");
}

//Ejercicio 5.1
let persona = {
  nombre: "Patroclo",
  edad: 85,
  ciudad: "Atenas",
  setCiudad: function (newCity) {
    this.ciudad = newCity;
  }
}
function ej5_1() {
  console.log("Persona antes de cambiar:", persona);
  persona.setCiudad("Albuquerque");
  console.log("Persona luego de cambiar:", persona);
}

//Ejercicio 5.2
let libro = {
  titulo: "2001: Una odisea en el espacio",
  autor: "Arthur C. Clarke",
  ano: 1968
}
function esViejo(lib) {
  const date = new Date();
  if ((date.getFullYear() - lib.ano) > 10) {
    return true;
  } else return false;
}
function ej5_2() {
  console.log('El libro "' + libro.titulo + '" es antiguo:', esViejo(libro));
}

//Ejercicio 6.1
function ej6_1() {
  let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let arr2 = [];
  let length = arr1.length;
  for (let i = 0; i < length; i++) {
    arr2[i] = arr1[i] * 2;
  }
  console.log("Números originales:", arr1.toString());
  console.log("Números multiplicados por 2:", arr2.toString());
}

//Ejercicio 6.2 
function ej6_2() {
  let pares = [];
  for (let i = 0; i < 20; i++) {
    if ((i + 1) % 2 === 0) {
      pares.push(i + 1);
    }
  }
  console.log("Primeros 10 números pares:", pares.toString());
}

//Ejercicio 7.1
let botonColor = document.getElementById("cambiaColor");
botonColor.onclick = () => {
  let arrP = document.getElementsByTagName("p");
  let lengthP = arrP.length;
  for (let i = 0; i < lengthP; i++) {
    arrP[i].style = `color: blue`;
  }
}

//Ejercicio 7.2
let input72 = document.getElementById("input72");
let submit72 = document.getElementById("submit72");
submit72.onclick = (e) => {
  e.preventDefault();
  alert("Has ingresado: " + input72.value.toString());
}

//Ejercicio 8.1 
let li0, li1, li2, li3;

li0 = document.getElementById("li0");
li0.onclick = () => {
  console.log(li0.innerText);
}

li1 = document.getElementById("li1");
li1.onclick = () => {
  console.log(li1.innerText);
}

li2 = document.getElementById("li2");
li2.onclick = () => {
  console.log(li2.innerText);
}

li3 = document.getElementById("li3");
li3.onclick = () => {
  console.log(li3.innerText);
}

//Ejercicio 8.2 
let toggField = document.getElementById("toggleableField");
let disableBut = document.getElementById("disableField");
disableBut.onclick = () => {
  toggField.disabled = true;
}
let enableBut = document.getElementById("enableField");
enableBut.onclick = () => {
  toggField.disabled = false;
}

//Ejercicio 9.1 
let displayEmail = document.getElementById("displayEmail");

// Muestra el correo si está guardado
if (window.localStorage.getItem("correo") != null) {
  displayEmail.innerText = window.localStorage.getItem("correo");
}

let email91 = document.getElementById("email91");
let boton91 = document.getElementById("boton91");
boton91.addEventListener("click", (e) => {
  e.preventDefault();
  //Guardar el correo
  window.localStorage.setItem("correo", email91.value.toString());
  //Mostrar el correo recién guardado
  if (window.localStorage.getItem("correo") != null) {
    displayEmail.innerText = window.localStorage.getItem("correo");
  }
})

//Botón eliminar correo
let eliminarEmail = document.getElementById("eliminarEmail");
eliminarEmail.onclick = () => {
  window.localStorage.removeItem("correo");
}