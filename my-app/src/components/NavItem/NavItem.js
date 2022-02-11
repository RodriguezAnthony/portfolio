import React from 'react';
import { NavbarContainer } from '../Navbar/Navbar.styled';
import { NavItemContainer } from './NavItem.styled';

const NavItem = ({ text }) => {
  return(
    <NavItemContainer>
      {text}
    </NavItemContainer>
  );
};

export default NavItem;
