import React from 'react';
import { NavbarContainer } from './Navbar.styled';
import NavItem from '../NavItem/NavItem';

const Navbar = () => {
  return(
      <NavbarContainer>
        <NavItem text="Home" path="/" />
        <NavItem text="About Me" path="about" />
        <NavItem text="Projects" path="projects" />
        <NavItem text="Hobbies" path="hobbies" />
      </NavbarContainer>
  ) ;
};

export default Navbar;
