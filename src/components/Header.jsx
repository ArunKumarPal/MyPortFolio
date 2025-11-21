import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'

const HeaderBar = styled.header`
  position: sticky;
  top: 0;
  z-index: 999;
  background: #fff;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  height: 62px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.03);
`;

const Logo = styled.div`
  font-weight: bold;
  font-size: 1.35rem;
  color: #1457c6;
`;

const NavLinks = styled.nav`
  @media (max-width: 850px) {
    display: ${props => (props.open ? 'flex' : 'none')};
    position: absolute;
    top: 62px;
    left: 0; right: 0;
    background: #fff;
    flex-direction: column;
    padding: 1rem 2rem;
    border-bottom: 1px solid #e6e6e6;
    box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  }
`;

const NavLink = styled(Link)`
  margin: 0 1rem;
  color: #333;
  cursor: pointer;
  font-weight: 500;
  transition: color .2s;
  &:hover {
    color: #1457c6;
  }
  @media (max-width: 850px) {
    margin: 1rem 0;
  }
`;

const Hamburger = styled.div`
  display: none;
  @media (max-width: 850px) {
    display: block;
    font-size: 2rem;
    cursor: pointer;
    color: #1457c6;
  }
`;

const navItems = [
  { label: 'Home', to: 'home' },
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Experience', to: 'experience' },
  { label: 'Education', to: 'education' },
  { label: 'Projects', to: 'projects' },
  { label: 'Contact', to: 'contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <HeaderBar>
      <Logo>Arun Pal</Logo>
      <Hamburger onClick={() => setOpen(!open)}>
        &#9776;
      </Hamburger>
      <NavLinks open={open}>
        {navItems.map(i => (
          <NavLink
            key={i.to}
            to={i.to}
            spy={true}
            smooth={true}
            duration={500}
            offset={-62}
            onClick={() => setOpen(false)}
            activeClass="active"
          >
            {i.label}
          </NavLink>
        ))}
      </NavLinks>
    </HeaderBar>
  );
}