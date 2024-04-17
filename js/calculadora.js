window.addEventListener("scroll", function(){
    let header = this.document.querySelector("#header")
    header.classList.toggle('rolagem', window.scrollY > 0)
})
function sim(){
    let div = document.getElementById("div-input")
   

    if(div.style.display == 'none'){
        div.style.display = 'block'
    }else{
        div.style.display = 'block'
    }

}
function nao(){
    let div = document.getElementById("div-input")
   

    if(div.style.display == 'block'){
        div.style.display = 'none'
    }else{
        div.style.display = 'none'
    }

}

function calcAm(){
    let leite = Number(document.getElementById('leite').value)
    let sangue = Number(document.getElementById('sangue').value)
    let acao = Number(document.getElementById('acao').value)
    let mascote = Number(document.getElementById('mascote').value)
    let quiz = Number(document.getElementById('quiz').value)
    let extra = Number(document.getElementById('extra').value)
    let kit = Number(document.getElementById('kit').value)
    let kit2 = Number(document.getElementById('kit2').value)
    let lata = Number(document.getElementById('lata').value)
    let arroz5 = Number(document.getElementById('arroz5').value)
    let arroz1 = Number(document.getElementById('arroz1').value)
    let feijao2 = Number(document.getElementById('feijao2').value)
    let feijao1 = Number(document.getElementById('feijao1').value)
    let macarrao = Number(document.getElementById('macarrao').value)
    let oleo = Number(document.getElementById('oleo').value)
    let valKit
    leite = leite * 2
    sangue = sangue * 20
    kit2 = kit2 *30
    lata = lata*15
    arroz5 = arroz5*5
    arroz1 = arroz1*1
    feijao2 = feijao2*2
    feijao1 = feijao1*1
    macarrao = macarrao*.5
    oleo = oleo *1

    if(kit >= 91){
        valKit = 5000
    }else if(kit >=72 && kit < 91){
        valKit= 4000
    }else if(kit >= 45 && kit < 72){
        valKit = 2500
    }else if(kit >=20 && kit < 45){
        valKit = 1000
    }else{
        valKit = 0
    }

    window.document.getElementById("resp-am").innerHTML = leite + sangue + acao + mascote + quiz + extra + valKit + kit2 + lata + arroz5 + arroz1 + feijao1 + feijao2 + macarrao + oleo

}
function calcLr(){
    let leite = Number(document.getElementById('leite').value)
    let sangue = Number(document.getElementById('sangue').value)
    let acao = Number(document.getElementById('acao').value)
    let mascote = Number(document.getElementById('mascote').value)
    let quiz = Number(document.getElementById('quiz').value)
    let extra = Number(document.getElementById('extra').value)
    let kit = Number(document.getElementById('kit').value)
    let kit2 = Number(document.getElementById('kit2').value)
    let lata = Number(document.getElementById('lata').value)
    let arroz5 = Number(document.getElementById('arroz5').value)
    let arroz1 = Number(document.getElementById('arroz1').value)
    let feijao2 = Number(document.getElementById('feijao2').value)
    let feijao1 = Number(document.getElementById('feijao1').value)
    let macarrao = Number(document.getElementById('macarrao').value)
    let oleo = Number(document.getElementById('oleo').value)
    let valKit
    leite = leite * 2
    sangue = sangue * 20
    kit2 = kit2 *30
    lata = lata*15
    arroz5 = arroz5*5
    arroz1 = arroz1*1
    feijao2 = feijao2*2
    feijao1 = feijao1*1
    macarrao = macarrao*.5
    oleo = oleo *1

    if(kit >= 84){
        valKit = 5000
    }else if(kit >=67 && kit < 84){
        valKit= 4000
    }else if(kit >= 42 && kit < 67){
        valKit = 2500
    }else if(kit >=16 && kit < 42){
        valKit = 1000
    }else{
        valKit = 0
    }

    window.document.getElementById("resp-lr").innerHTML = leite + sangue + acao + mascote + quiz + extra + valKit + kit2 + lata + arroz5 + arroz1 + feijao1 + feijao2 + macarrao + oleo

}
function calcRx(){
    let leite = Number(document.getElementById('leite').value)
    let sangue = Number(document.getElementById('sangue').value)
    let acao = Number(document.getElementById('acao').value)
    let mascote = Number(document.getElementById('mascote').value)
    let quiz = Number(document.getElementById('quiz').value)
    let extra = Number(document.getElementById('extra').value)
    let kit = Number(document.getElementById('kit').value)
    let kit2 = Number(document.getElementById('kit2').value)
    let lata = Number(document.getElementById('lata').value)
    let arroz5 = Number(document.getElementById('arroz5').value)
    let arroz1 = Number(document.getElementById('arroz1').value)
    let feijao2 = Number(document.getElementById('feijao2').value)
    let feijao1 = Number(document.getElementById('feijao1').value)
    let macarrao = Number(document.getElementById('macarrao').value)
    let oleo = Number(document.getElementById('oleo').value)
    let valKit
    leite = leite * 2
    sangue = sangue * 20
    kit2 = kit2 *30
    lata = lata*15
    arroz5 = arroz5*5
    arroz1 = arroz1*1
    feijao2 = feijao2*2
    feijao1 = feijao1*1
    macarrao = macarrao*.5
    oleo = oleo *1

    if(kit >= 84){
        valKit = 5000
    }else if(kit >=67 && kit < 84){
        valKit= 4000
    }else if(kit >= 42 && kit < 67){
        valKit = 2500
    }else if(kit >=16 && kit < 42){
        valKit = 1000
    }else{
        valKit = 0
    }

    window.document.getElementById("resp-rx").innerHTML = leite + sangue + acao + mascote + quiz + extra + valKit + kit2 + lata + arroz5 + arroz1 + feijao1 + feijao2 + macarrao + oleo

}
function calcVd(){
    let leite = Number(document.getElementById('leite').value)
    let sangue = Number(document.getElementById('sangue').value)
    let acao = Number(document.getElementById('acao').value)
    let mascote = Number(document.getElementById('mascote').value)
    let quiz = Number(document.getElementById('quiz').value)
    let extra = Number(document.getElementById('extra').value)
    let kit = Number(document.getElementById('kit').value)
    let kit2 = Number(document.getElementById('kit2').value)
    let lata = Number(document.getElementById('lata').value)
    let arroz5 = Number(document.getElementById('arroz5').value)
    let arroz1 = Number(document.getElementById('arroz1').value)
    let feijao2 = Number(document.getElementById('feijao2').value)
    let feijao1 = Number(document.getElementById('feijao1').value)
    let macarrao = Number(document.getElementById('macarrao').value)
    let oleo = Number(document.getElementById('oleo').value)
    let valKit
    leite = leite * 2
    sangue = sangue * 20
    kit2 = kit2 *30
    lata = lata*15
    arroz5 = arroz5*5
    arroz1 = arroz1*1
    feijao2 = feijao2*2
    feijao1 = feijao1*1
    macarrao = macarrao*.5
    oleo = oleo *1


    if(kit >= 81){
        valKit = 5000
    }else if(kit >=67 && kit < 81){
        valKit= 4000
    }else if(kit >= 42 && kit < 67){
        valKit = 2500
    }else if(kit >=16 && kit < 42){
        valKit = 1000
    }else{
        valKit = 0
    }

    window.document.getElementById("resp-vd").innerHTML = leite + sangue + acao + mascote + quiz + extra + valKit + kit2 + lata + arroz5 + arroz1 + feijao1 + feijao2 + macarrao + oleo

}
function calcVm(){
    let leite = Number(document.getElementById('leite').value)
    let sangue = Number(document.getElementById('sangue').value)
    let acao = Number(document.getElementById('acao').value)
    let mascote = Number(document.getElementById('mascote').value)
    let quiz = Number(document.getElementById('quiz').value)
    let extra = Number(document.getElementById('extra').value)
    let kit = Number(document.getElementById('kit').value)
    let kit2 = Number(document.getElementById('kit2').value)
    let lata = Number(document.getElementById('lata').value)
    let arroz5 = Number(document.getElementById('arroz5').value)
    let arroz1 = Number(document.getElementById('arroz1').value)
    let feijao2 = Number(document.getElementById('feijao2').value)
    let feijao1 = Number(document.getElementById('feijao1').value)
    let macarrao = Number(document.getElementById('macarrao').value)
    let oleo = Number(document.getElementById('oleo').value)
    let valKit
    leite = leite * 2
    sangue = sangue * 20
    kit2 = kit2 *30
    lata = lata*15
    arroz5 = arroz5*5
    arroz1 = arroz1*1
    feijao2 = feijao2*2
    feijao1 = feijao1*1
    macarrao = macarrao*.5
    oleo = oleo *1
    if(kit >= 104){
        valKit = 5000
    }else if(kit >=83 && kit < 104){
        valKit= 4000
    }else if(kit >= 52 && kit < 83){
        valKit = 2500
    }else if(kit >=20 && kit < 55){
        valKit = 1000
    }else{
        valKit = 0
    }
    window.document.getElementById("resp-vm").innerHTML = leite + sangue + acao + mascote + quiz + extra + valKit + kit2 + lata + arroz5 + arroz1 + feijao1 + feijao2 + macarrao + oleo

}