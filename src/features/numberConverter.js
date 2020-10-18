const formulario = document.querySelector('[form-number-converter]');

formulario.addEventListener("submit", transforma =>{
    transforma.preventDefault()
    const x = transforma.target.querySelector('[binary-input]').value
    const maiorElemento = Math.max(...x.split(''))
    if(maiorElemento == 0 || maiorElemento == 1){
        transforma.target.querySelector('[decimal-output]').value = parseInt(x, 2);
    }else{
        alert("Favor informar apenas 0 e 1");
        transforma.target.querySelector('[binary-input]').value = null;
    }
   
})

//function converte(numero){
//   const arruma = numero.split('').reverse().join('')
//    let acumulador = 0
//    for(const i in arruma){
//       acumulador += (Math.pow(2, i)) * arruma[i]
//    }
//    return acumulador
//}   