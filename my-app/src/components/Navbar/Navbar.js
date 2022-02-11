import React from 'react';
import { NavbarContainer } from './Navbar.styled';
import NavItem from '../NavItem/NavItem';

const Navbar = () => {
  return(
      <NavbarContainer>
        <NavItem text="Home" />
        <NavItem text="About Me" />
        <NavItem text="Projects" />
        <NavItem text="Hobbies" />
      </NavbarContainer>
  ) ;
};

export default Navbar;
