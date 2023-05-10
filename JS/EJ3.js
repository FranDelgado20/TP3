let resultado = [];
let contador = [];
for(let i=0;i<11;i++){
  contador[i]=0
}

for (let i = 0; i < 50; i++) {
  let dado1 = Math.floor(Math.random() * 6)+1;
  let dado2 = Math.floor(Math.random() * 6)+1;
   let suma=dado1+dado2
   resultado.push(suma)
   switch(true){
     case resultado[i]===2:
       contador[0]++
       break
     case resultado[i]===3:
       contador[1]++
       break
     case resultado[i]===4:
       contador[2]++
       break
     case resultado[i]===5:
       contador[3]++
       break
     case resultado[i]===6:
       contador[4]++
       break
     case resultado[i]===7:
       contador[5]++
       break
     case resultado[i]===8:
       contador[6]++
       break
     case resultado[i]===9:
       contador[7]++
       break
     case resultado[i]===10:
       contador[8]++
       break
     case resultado[i]===11:
       contador[9]++
       break
     case resultado[i]===12:
       contador[10]++
       break
   }
}
console.log(resultado)
console.log(contador)