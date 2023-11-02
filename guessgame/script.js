let result = prompt('Adivinhe o número que estou pensando? Está entre 0 e 10')

result = Number(result)

const randomNumber = Math.round(Math.random() * 10)

let xAttempts = 1;

while(result != randomNumber){
  result = prompt('Erro, tente novamente')
  xAttempts++
}

alert(`Parabéns! você acertou em ${xAttempts} tentativas`)