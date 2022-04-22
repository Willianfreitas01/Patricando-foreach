function apuraVotacao(votos) {
    let candidato1 = 0
    let candidato2 = 0
    let candidato3 = 0
    // console.log(votos)
    const acharVotos = (votos) => {
        if (votos === 1) {
            candidato1++
        }
        if (votos === 2) {
            candidato2++
        }
        else if (votos === 3) {
            candidato3++
        }
    }
        votos.forEach(acharVotos)
        if (candidato1 > candidato2 && candidato1 > candidato3) {
            return "Vencedor: 1"
        }
        if (candidato2 > candidato1 && candidato2 > candidato3) {
            return "Vencedor: 2"
        }
        if (candidato3 > candidato1 && candidato3 > candidato2) {
            return "Vencedor: 3"
        }
        return "Empate"
    
    
}


console.log(apuraVotacao([1,1,1,1,1,1, 2, 2, 2, 2, 3, 3,]))
module.exports = apuraVotacao;
