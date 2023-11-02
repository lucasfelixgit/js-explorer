let patient = [
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

patientsName = []
patientsAge = []
patientsWeight = []
patientsHeight = []

for(let i = 0; i < patient.length; i++){
  patientsName[i] = patient[i].name
  patientsAge[i] = patient[i].age
  patientsWeight[i] = patient[i].weight
  patientsHeight[i] = patient[i].height
}



for(let i = 0; i <patient.length; i++){
  alert(`${patientsName[i]} tem ${patientsAge[i]} anos, pesa ${patientsWeight[i]}kg e tem ${patientsHeight[i]} de altura.`);
}