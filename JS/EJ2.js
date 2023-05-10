let ciudades = [];

do {
  let nombre = prompt("Ingrese una city");
  ciudades.push(nombre);
} while (confirm("¿desea seguir escribiendo?"));
for (let i = 0; i < ciudades.length; i++) {
 console.log(ciudades[i]);
}

console.log(ciudades.length);

for (let i = 0; i < ciudades.length; i++) {
  if (i === 0) {
    console.log(ciudades[i]);
  } else if (i === 2) {
    console.log(ciudades[i]);
  } else if (i + 1 === ciudades.length) {
    console.log(ciudades[i]);
  }else if( i===1){
    console.log(ciudades[i])
  }
}

ciudades.push("Paris");
ciudades[1]='Barcelona'
console.log(ciudades);
