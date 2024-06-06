export const LogoImage = ({ zona }: {zona: number}) => {
  return (
    zona && zona === 39627
      ? <img src='/ganeyumbo.webp' width={120} alt='logo gane yumbo' loading='lazy' className='w-36' />
      : <img src='/ganejamundi.webp' width={150} alt='logo gane jamundi' loading='lazy' className='w-36' />
  )
}
