// * validar funcionamiento

export const determineProgressColor = (porcentaje: number) => {
  if (porcentaje <= 49.99) return 'red'
  if (porcentaje <= 94.99) return 'yellow'
  if (porcentaje <= 99.99) return 'sky'
  if (porcentaje >= 99.99) return 'green'
  return 'gray'
}
