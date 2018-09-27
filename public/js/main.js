let title = document.querySelector('.title')
    title.textContent = 'The Nutritionist'

let patient = document.querySelector('#first-patient')
let infoPeso = patient.querySelector('.info-peso')
let weight = infoPeso.textContent 

let infoAltura = patient.querySelector('.info-altura')
let height = infoAltura.textContent


var insertImc = patient.querySelector('.info-imc')

let valueHeight = true
let valueWeight = true

if(weight <= 0 || weight >= 1000) {
  valueWeight = false
  insertImc.textContent = 'Peso Invalido'
  console.log(imc)
}

if(height <= 0 || height >= 1000) {
  valueHeight = false
  insertImc.textContent = 'Altura Invalida'
  console.log(imc)
}

if(weight && height) {
  let imc = weight / (height * height)
  insertImc.textContent = imc
}