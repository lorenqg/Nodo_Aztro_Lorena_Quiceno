const calcular = () => {
  let rectangle_base = parseFloat(document.getElementById('rectangle_base').value)
  let rectangle_height = parseFloat(document.getElementById('rectangle_height').value)
  let retangle_area = rectangle_base * rectangle_height
  let rectangle_perimeter = 2 * (rectangle_base + rectangle_height)
  let diagonal = Math.sqrt(Math.pow(rectangle_base, 2) + Math.pow(rectangle_height, 2))

  document.getElementById('retangle_area').value = retangle_area
  document.getElementById('rectangle_perimeter').value = rectangle_perimeter
  document.getElementById('diagonal').value = diagonal
}
