function calcular() {

    const alquere = 24200 // m^2
    const hectare = 10000 // m^2

    // let litrosPorAlquere = prompt('Quantos litros por Alquere?')

    // let litrosPorHectare = ((litrosPorAlquere) / (alquere / hectare))

    let litros = document.getElementById('litrosCliente').value
    let tempo = document.getElementById('tempo').value
    let litrosPorHectare = (litros / (alquere / hectare))
    let radioLinhas = document.getElementsByName('radioLinhas')
    let radioUnidade = document.getElementsByName('radioUnidadeMedida')
    let metrosLineares45 = (hectare / (45 / 100))
    let metrosLineares50 = (hectare / (50 / 100))
    let resultado = document.getElementById('resultado')

    if (document.getElementById('radioAlquere').checked) {
        console.log('Alquere selecionado')
        if (document.getElementById('45cm').checked) {
            console.log(metrosLineares45 + ' metros lineares')
            let litroPorMetroCubico = litrosPorHectare / metrosLineares45
            console.log(litroPorMetroCubico + ' litros por metro cubico')
            let mLporMetroQuadrado = litroPorMetroCubico * 50
            let convertido = mLporMetroQuadrado * 1000
            document.getElementById('resultado').value = convertido.toFixed(2) + ' mL em ' + tempo + ' segundos.'
            console.log(convertido)
        } else {
            console.log(metrosLineares50)
            let litroPorMetroCubico = litrosPorHectare / metrosLineares50
            let mLporMetroQuadrado = litroPorMetroCubico * 50
            let convertido = mLporMetroQuadrado * 1000
            document.getElementById('resultado').value = convertido.toFixed(2) + ' mL em ' + tempo + ' segundos.'
        }
    } 
    else {
        console.log('Hectare selecionado')
        if (document.getElementById('45cm').checked) {
            let litroPorMetroCubico = litros / metrosLineares45
            let mLporMetroQuadrado = litroPorMetroCubico * 50
            let convertido = mLporMetroQuadrado * 1000
            document.getElementById('resultado').value = convertido.toFixed(2) + ' mL em ' + tempo + ' segundos.'
        } else {
            let litroPorMetroCubico = litros / metrosLineares50
            let mLporMetroQuadrado = litroPorMetroCubico * 50
            let convertido = mLporMetroQuadrado * 1000
            document.getElementById('resultado').value = convertido.toFixed(2) + 'mL em ' + tempo + ' segundos.'
        }
    }
}

// console.log(litrosPorHectare)

// let tempoMedido = prompt('Qual foi o tempo necessário para o veículo se deslocar 50 m aplicando o produto? (em segundos)')

// let espacamentoEntreLinhas = prompt('Qual o espaçamento entre as linhas (em cm)?')

// let metrosLineares = (hectare / ((espacamentoEntreLinhas) / 100))

// console.log(metrosLineares + 'm')

// let litroPorMetroCubico = litrosPorHectare / metrosLineares

// console.log(litroPorMetroCubico + 'L/m^3')

// let mLporMetroQuadrado = litroPorMetroCubico * 50

// console.log(mLporMetroQuadrado + 'mL / m^2')

// let convertido = mLporMetroQuadrado * 1000

// alert('Deverá ser coletado ' + convertido.toFixed(2) + ' mL em ' + tempoMedido + ' segundos')

