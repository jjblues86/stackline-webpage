import React from 'react'
import { HeaderContainer, Logo } from './HeaderStyles'
import logo from '../Assets/stackline_logo.svg'

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="Stackline Logo" />
    </HeaderContainer>
  )
}

export default Header;
