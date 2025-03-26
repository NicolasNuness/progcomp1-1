function calcular(){
    //vamos criar 2 variaveis
    //js as variaveis não possuem tipo
    let mascote, homenagem
    mascote = document.getElementById("Mascote").value
    homenagem = document.getElementById("Homenagem").value
    let soma = Number(mascote) + Number(homenagem)
    alert(soma)
}
