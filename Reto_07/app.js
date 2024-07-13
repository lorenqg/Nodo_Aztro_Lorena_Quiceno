// Constantes
const PAGO_DIA = 43000,
  PAGO_EXTRAS_DIURNAS = 6915,
  PAGO_EXTRAS_NOCTURAS = 9681,
  PAGO_EXTRAS_FESTIVOS = 11064

//
document.querySelectorAll('.nav-item').forEach((item) => {
  item.addEventListener('click', function () {
    // Ocultar todas las secciones
    document.querySelectorAll('main > section').forEach((section) => {
      section.classList.add('hidden')
    })

    // Mostrar la sección objetivo
    const targetSection = document.getElementById(this.dataset.target)
    if (targetSection) {
      targetSection.classList.remove('hidden')
    }
  })
})

// app-promedio-nadador
calcularPromedioNadador = () => {
  let tiempo1 = parseInt(document.getElementById('tiempo1').value)
  let tiempo2 = parseInt(document.getElementById('tiempo2').value)
  let tiempo3 = parseInt(document.getElementById('tiempo3').value)
  let tiempo4 = parseInt(document.getElementById('tiempo4').value)
  let tiempo5 = parseInt(document.getElementById('tiempo5').value)

  let promedio = (tiempo1 + tiempo2 + tiempo3 + tiempo4 + tiempo5) / 5

  document.getElementById('promedio').value = promedio
}

// app-terreno
calculoTerreno = () => {
  let baseMenor = parseFloat(document.getElementById('base-menor').value)
  let baseMayor = parseFloat(document.getElementById('base-mayor').value)
  let altura = parseFloat(document.getElementById('altura').value)
  let lado1 = parseFloat(document.getElementById('lado1').value)
  let lado2 = parseFloat(document.getElementById('lado2').value)

  let areaTerreno = ((baseMenor + baseMayor) / 2) * altura
  let cantidadPesticida = areaTerreno * 1.5
  let perimetroTerreno = baseMenor + baseMayor + lado1 + lado2

  document.getElementById('area').value = areaTerreno
  document.getElementById('pesticida').value = cantidadPesticida
  document.getElementById('cerca-electrica').value = perimetroTerreno
}

// app-cantidad-ladrillos
calcularLadrillos = () => {
  let altoPared = parseFloat(document.getElementById('alturaPared').value)
  let anchoPared = parseFloat(document.getElementById('anchoPared').value)
  let altoLadrillo = parseFloat(document.getElementById('altoLadrillo').value)
  let anchoLadrillo = parseFloat(document.getElementById('anchoLadrillo').value)

  let areaPared = altoPared * anchoPared
  let areaLadrillo = altoLadrillo * anchoLadrillo
  let cantidad = areaPared / areaLadrillo

  document.getElementById('cantidad').value = Math.ceil(cantidad)
}

// app-imc
calcularImc = () => {
  let peso = parseFloat(document.getElementById('peso').value)
  let estatura = parseFloat(document.getElementById('estatura').value)

  let imc = peso / (estatura * estatura)
  document.getElementById('imc').value = imc.toFixed(2)

  document.querySelectorAll('img').forEach((img) => {
    if (img.class === 'type-imc') {
      img.style.display = 'none'
    }
  })

  if (imc < 18.5) {
    let bajoPeso = document.getElementById('peso-bajo')
    bajoPeso.style.display = 'block'
  } else if ((imc >= 18.5) & (imc <= 24.9)) {
    let normal = document.getElementById('normal')
    normal.style.display = 'block'
  } else if ((imc >= 25.0) & (imc <= 29.9)) {
    let sobrepeso = document.getElementById('sobrepeso')
    sobrepeso.style.display = 'block'
  } else {
    let obesidad = document.getElementById('obesidad')
    obesidad.style.display = 'block'
  }
}

// app-liquidacion
calcularLiquidacion = () => {
  let numDiasTrabajados = document.getElementById('dias-trabajados').value
  let numExtrasDiurnas = document.getElementById('extras-diurnas').value
  let numExtrasNocturnas = document.getElementById('extras-nocturnas').value
  let numExtrasFestivos = document.getElementById('extras-festivos').value

  let basico = numDiasTrabajados * PAGO_DIA + numExtrasDiurnas * PAGO_EXTRAS_DIURNAS + numExtrasNocturnas * PAGO_EXTRAS_NOCTURAS + numExtrasFestivos * PAGO_EXTRAS_FESTIVOS

  let salud = basico * 0.04
  let pension = basico * 0.04
  let alimentacion = basico * 0.03
  let liquidacion = basico - (salud + pension + alimentacion)

  document.getElementById('salud').innerHTML = salud.toFixed(2)
  document.getElementById('pension').innerHTML = pension.toFixed(2)
  document.getElementById('alimentacion').innerHTML = alimentacion.toFixed(2)
  document.getElementById('liquidacion').value = liquidacion.toFixed(2)
}

// Eventos

document.getElementById('form-nadador').addEventListener('submit', (e) => {
  e.preventDefault()
  calcularPromedioNadador()
})

document.getElementById('form-terreno').addEventListener('submit', (e) => {
  e.preventDefault()
  calculoTerreno()
})

document.getElementById('form-ladrillos').addEventListener('submit', (e) => {
  e.preventDefault()
  calcularLadrillos()
})

document.getElementById('form-imc').addEventListener('submit', (e) => {
  e.preventDefault()
  calcularImc()
})

document.getElementById('form-tienda').addEventListener('submit', (e) => {
  e.preventDefault()
  calcularLiquidacion()
})
