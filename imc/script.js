const patients = [
  {
    name: 'Lucas',
    age: 20,
    weight: 70,
    height: 171
  },
  {
    name: 'Cris',
    age: 52,
    weight: 65,
    height: 167
  },
  {
    name: 'Ana',
    age: 15,
    weight: 60,
    height: 168
  }
]

function IMC(weight, height) {
  return (weight / ((height/ 100) ** 2)).toFixed(2)
}

function printPatientIMC(patient){
  return `
  O Paciente ${patient.name} possui o IMC de 
  ${IMC(patient.weight, patient.height)}
  `
}

for(let patient of patients){
  let IMCmessage = printPatientIMC(patient)
  alert(IMCmessage)
}