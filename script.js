const alquere = 24200 // m^2
const hectare = 10000 // m^2

let litrosPorAlquere = prompt('Quantos litros por Alquere?')

let litrosPorHectare = ((litrosPorAlquere) / (alquere / hectare))

console.log(litrosPorHectare)

let tempoMedido = prompt('Qual foi o tempo necessário para o veículo se deslocar 50 m aplicando o produto? (em segundos)')

let espacamentoEntreLinhas = prompt('Qual o espaçamento entre as linhas (em cm)?')

let metrosLineares = (hectare / ((espacamentoEntreLinhas) / 100))

console.log(metrosLineares + 'm')

let litroPorMetroCubico = litrosPorHectare / metrosLineares

console.log(litroPorMetroCubico + 'L/m^3')

let mLporMetroQuadrado = litroPorMetroCubico * 50

console.log(mLporMetroQuadrado + 'mL / m^2')

let convertido = mLporMetroQuadrado * 1000

alert('Deverá ser coletado ' + convertido.toFixed(2) + ' mL em ' + tempoMedido + ' segundos')