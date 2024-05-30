export const LogoImage = ({ zona }: {zona: number}) => {
  return (
    zona && zona === 39627
      ? <img src='/ganeyumbo.webp' width={120} alt='logo gane yumbo' className='xl:w-40 2xl:w-52' />
      : <img src='/ganejamundi.webp' width={150} alt='logo gane jamundi' className='xl w-40 2xl:w-52' />
  )
}
