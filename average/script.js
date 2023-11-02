let name = prompt('Digite o seu nome: ')
let firstGrade = prompt('Digite a primeira nota: ')
let secondGrade = prompt('Digite a segunda nota: ')
let thirdGrade = prompt('Digite a terceira nota: ')

firstGrade = Number(firstGrade)
secondGrade = Number(secondGrade)
thirdGrade = Number(thirdGrade)

let average = (firstGrade + secondGrade + thirdGrade)/3

average = average.toFixed(2)

if(average >= 6.0){
  alert(`Parabéns ${name} sua média é ${average}, você foi aprovado.`)
}
else{
  alert(`Você está de recuperação, média ${average}`)
}
