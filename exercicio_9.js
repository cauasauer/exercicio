const mensagemnsDivertidas =
[
    "Qual é a peça de carro que é feita só no Egito? Os faraóis"
    "O engenheiro olhou para o espelho. O que aconteceu?O engenheiro civil"
    "Quem é a mãe do mingau? A mãe zena"
    "Qual é o lugar mais certo do Brasil? O sertão"
    "Qual é o vinho que não tem álcool?Ovinho de codorna"
    "Quem é mais velho: a lua ou o sol? A lua, porque pode sair à noite"
    "O que o cavalo foi fazer no orelhão? Passar trote"
]


let botaoDivertido = document.getElementById("botaoDifertido")
let mensagemDivertida = document.getElementById("mansagemDivertida")

botaoDivertido.addEventListener('click', fuction(){
  
    const mensagemAleatoria = mensagemDivertida[Math.floor(Math.random() * mensagemnsDivertidas.length)]

    

} )
