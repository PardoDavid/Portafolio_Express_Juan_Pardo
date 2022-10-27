const sumar=(valor1,valor2)=>{
    //const valor1=2,valor2=3;
    let suma=valor1+valor2    
    console.log(`La suma es ${suma}`)
}
//sumar(10,2)

const restar=(valor1,valor2)=>{
    //const valor1=2,valor2=3;
    let resta=valor1-valor2    
    console.log(`La resta es ${resta}`)
}
//restar(10,2)

const multiplicacion=(valor1,valor2)=>{
    //const valor1=2,valor2=3;
    let multi=valor1*valor2    
    console.log(`La multiplicación es ${multi}`)
}
//multiplicacion(10,2)

const division=(valor1,valor2)=>{
    //const valor1=2,valor2=3;
    let div=valor1/valor2    
    console.log(`La división es ${div}`)
}
//division(10,2)


/*exports.sumar=sumar;
exports.restar=restar;
exports.multiplicacion=multiplicacion;
exports.division=division;*/

const operaciones={}
operaciones.sumar=sumar
operaciones.restar=restar;
operaciones.multiplicacion=multiplicacion;
operaciones.division=division;

module.exports=operaciones;







