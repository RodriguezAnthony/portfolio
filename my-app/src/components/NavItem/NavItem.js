import React from 'react';
import {  Link } from "react-router-dom"
import { NavItemContainer } from './NavItem.styled';

const NavItem = ({ text, path }) => {
  return(
    <NavItemContainer>
      <Link to={path}>{text}</Link>
    </NavItemContainer>
  );
};

export default NavItem;
