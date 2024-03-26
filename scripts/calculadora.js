function imc(){

    let peso = Number(document.getElementById("peso").value)
    let altura = Number(document.getElementById("altura").value)
    let ponto = peso / altura * altura
    let classificacao

    if (ponto < 18.5) {
        classificacao = "Magreza"
    }
    else if(ponto >= 18.5 && ponto < 25){
        classificacao = "Normal"
    }
    else if(ponto >= 25 && ponto < 30){
        classificacao = "Normal"
    }
    else if(ponto >= 30 && ponto < 35){
        classificacao = "Obesidade I"
    }
    else if(ponto >= 35 && ponto < 40){
        classificacao = "Obesidade II"
    }
    else{
        classificacao = "Obesidade III"
    }

    alert(`O seu IMC é ${ponto.toFixed(2)} com a classificação ${classificacao}`)

}