import React from 'react';
import {  Link } from "react-router-dom"
import { NavItemContainer, NavLink } from './NavItem.styled';

const NavItem = ({ text, path }) => {
  return(
    <NavItemContainer>
      <NavLink to={path}>{text}</NavLink>
    </NavItemContainer>
  );
};

export default NavItem;
