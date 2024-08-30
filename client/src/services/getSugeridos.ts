import axios from 'axios'

export const getSugeridos1 = async ({ codigo, username, zona }:{codigo: number, username: string, zona: number }) => {
  const response = await axios.post('/SugeridosPrimeraConsulta', { codigo, user: username, zona })
  return response.data
}

export const getSugeridos2 = async ({ codigo, username, zona }:{codigo: number, username: string, zona: number }) => {
  const response = await axios.post('/SugeridosSegundaConsulta', { codigo, user: username, zona })
  return response.data
}
