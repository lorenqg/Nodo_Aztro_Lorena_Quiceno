const calcular = () => {
  let radio_circle = parseFloat(document.getElementById('radio_circle').value)

  let area = Math.PI * Math.pow(radio_circle, 2)
  let diametro = radio_circle + radio_circle
  let perimetro = Math.PI * diametro

  document.getElementById('area').value = area
  document.getElementById('perimetro').value = perimetro
  document.getElementById('diametro').value = diametro
}
