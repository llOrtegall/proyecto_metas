import axios from 'axios'

interface IHora {
  fecha: string
  hora: string
}

export const getColombiaTime = async (): Promise<IHora> => {
  const response = await axios.get('/dataTime')
  const { fecha, hora } = response.data
  return { fecha, hora }
}
