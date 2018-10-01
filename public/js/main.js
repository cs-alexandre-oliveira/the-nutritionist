var title = document.querySelector('.title')
    title.textContent = 'The Nutritionist'

var patients = document.querySelectorAll('.paciente')
console.log('==>>>>', patients)

for(var i = 0; i < patients.length; i++) {
  var patient = patients[i]

  var infoPeso = patient.querySelector('.info-peso')
  var weight = infoPeso.textContent 
  
  var infoAltura = patient.querySelector('.info-altura')
  var height = infoAltura.textContent
  
  
  var insertImc = patient.querySelector('.info-imc')
  
  var valueHeight = true
  var valueWeight = true
  
  if(weight <= 0 || weight >= 1000) {
    valueWeight = false
    insertImc.textContent = 'Peso Invalido'
    patient.classList.add('patient-alert')
  }
  
  if(height <= 0 || height >= 1000) {
    valueHeight = false
    insertImc.textContent = 'Altura Invalida'
    patient.classList.add('patient-alert')
  }
  
  if(weight && height) {
    var imc = weight / (height * height)
    insertImc.textContent = imc.toFixed(2)
  }
}

