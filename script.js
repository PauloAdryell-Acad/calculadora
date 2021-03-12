var visor = document.form.visor

function insere_valor(valor){
    visor.value += valor.value
}

function calcula(){
    var calculo = visor.value
    var resultado;
    
    if(visor.value){
        resultado = eval(visor.value)
        visor.value = resultado
    }
    else{
        visor.value = "Operação Inválida!"
        setTimeout(limpar, 1500)
    }
    hist_calculo(calculo, resultado)
}

function limpar(){
    visor.value = ""
}

function hist_calculo(calc,res){
    var historico = document.getElementById('hist')
    var calculo = document.createTextNode(calc)
    var resultado = document.createTextNode(res)
    var view = `${calculo.textContent}= ${resultado.textContent}`
    var seila = document.createElement("h4");
    seila.innerHTML = view;
    historico.appendChild(seila)
}

