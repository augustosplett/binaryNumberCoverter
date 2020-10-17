const formulario = document.querySelector('[form-number-converter]');

formulario.addEventListener("submit", transforma =>{
    transforma.preventDefault()
    const x = transforma.target.querySelector('[binary-input]').value
    transforma.target.querySelector('[decimal-output]').value = x
})
