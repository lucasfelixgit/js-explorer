const students = [
  {
    name: 'Lucas',
    firstGrade: 10,
    secondGrade: 5
  },
  {
    name: 'Ana',
    firstGrade: 8,
    secondGrade: 4
  },
  {
    name: 'João',
    firstGrade: 9,
    secondGrade: 7
  },
  {
    name: 'Diego',
    firstGrade: 9,
    secondGrade: 8
  }
]

const averageCalc = function(gradeOne, gradeTwo){
  return ((gradeOne + gradeTwo)/2).toFixed(1)
}

const printResult = function(student){
  const average = averageCalc(student.firstGrade, student.secondGrade)

  if(average >= 7.0){
    return `A média do(a) aluno(a) ${student.name} é: ${average}
    Parabéns ${student.name}! Você foi aprovado(a) no concurso!
    `
  }
  else{
    return `A média do(a) aluno(a) ${student.name} é: ${average}
    Não foi dessa vez ${student.name}! Tente novamente!
    `
  }
}

for(let student of students){
  const message = printResult(student)
  alert(message)
}