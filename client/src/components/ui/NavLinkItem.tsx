import { NavLink } from 'react-router-dom'
import React from 'react'

interface NavLinkItemProps {
  path: string
  icon: React.ElementType
  label: string
}

export const NavLinkItem = ({ icon, label, path }: NavLinkItemProps) => {
  const IconComponent = icon
  const styles = 'flex items-center gap-3'
  const stylesSelected = 'flex items-center gap-3 text-blue-700'

  return (
    <NavLink className={({ isActive }) => isActive ? `${stylesSelected}` : `${styles}`} to={path}>
      <IconComponent />
      <span className=''>{label}</span>
    </NavLink>
  )
}
