function calcular(){
    //vamos criar 2 variaveis
    //js as variaveis não possuem tipo
    let mascote, homenagem, leite, kit_avulso, suplemento_avulso, doacao
    mascote = document.getElementById("Mascote").value
    homenagem = document.getElementById("Homenagem").value
    leite = document.getElementById("Leite").value
    kit_avulso = document.getElementById("Kit_Avulso").value
    suplemento_avulso = document.getElementById("Suplemento_Avulso").value
    doacao = document.getElementById("Doacao").value
    let soma = Number(mascote) + Number(homenagem) + (2 * Number (leite)) + (30 * Number (kit_avulso)) + (15 * Number (suplemento_avulso)) + (20 * Number (doacao))
    //retorna o valor ao htmll
    document.getElementById("soma").innerHTML = `A soma é ${soma}`
}
