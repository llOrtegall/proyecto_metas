interface AspDiaPageProps {
  codigo: number
  zona: string
}

function AspDiaPage ({ codigo, zona }: AspDiaPageProps) {
  return (
    <div>
      <h1>{codigo}</h1>
      <h1>{zona}</h1>
    </div>
  )
}

export default AspDiaPage
