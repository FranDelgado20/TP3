function texto(){
    let oracion=prompt('Ingrese  una palabra')
    
    if(oracion.toLowerCase()===oracion){
        console.log('Posee solo minusculas')

    }else if(oracion.toUpperCase()===oracion){
        console.log('Solo posee mayusculas')
    }else {
        console.log('tiene mayusculas y minusculas')
        
    }
}
texto()