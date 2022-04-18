import React from 'react'
import HeaderProps from '../../../interfaces/header/header-props'

const Header = (props: HeaderProps) => {
  const { title } = props

  return (
    <header className="header">
      <h1 className="header__title">{title}</h1>
    </header>
  )
}

export default Header