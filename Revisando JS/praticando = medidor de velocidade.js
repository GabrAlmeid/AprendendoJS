// Velocidade maxima de 70km 
// a cada 5km acima do limite, 1 ponto na carteira
// mais de 12 pontos = carteira suspensa

verificarVelocidade(95)

function verificarVelocidade(velocidade){
    const velocidadeMaxima = 70
    if (velocidade <= velocidadeMaxima)
        console.log("Dentro da velocidade estabelecida")
    else {
        const pontos = Math.floor ((velocidade - velocidadeMaxima) / 5)
        if (pontos >= 12)
            console.log("Carteira suspensa")
        else
            console.log("Pontos",pontos)
    }
}