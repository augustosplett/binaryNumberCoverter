const formulario = document.querySelector('[form-number-converter]');

formulario.addEventListener("submit", transforma =>{
    transforma.preventDefault()
    const x = transforma.target.querySelector('[binary-input]').value
    transforma.target.querySelector('[decimal-output]').value = converte(x)
})

function converte(numero){
    const arruma = numero.split('').reverse().join('')
    let acumulador = 0
    for(const i in arruma){
       acumulador += (Math.pow(2, i)) * arruma[i]
    }
    return acumulador
}   