import React from 'react'
import { HeaderContainer, Logo } from './HeaderStyles'

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="Stackline Logo" />
    </HeaderContainer>
  )
}

export default Header;
