import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'
import { FaSun, FaMoon } from 'react-icons/fa'

const HeaderBar = styled.header`
  position: sticky;
  top: 0;
  z-index: 999;
  background: var(--header-bg);
  border-bottom: 1px solid var(--header-border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  height: 62px;
  box-shadow: 0 2px 16px var(--header-shadow);
`;

const Logo = styled.div`
  font-weight: 800;
  font-size: 1.35rem;
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.2rem;

  @media (max-width: 850px) {
    display: ${props => (props.$open ? 'flex' : 'none')};
    position: absolute;
    top: 62px;
    left: 0;
    right: 0;
    background: var(--header-bg);
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 2rem 1.5rem;
    border-bottom: 1px solid var(--header-border);
    box-shadow: 0 4px 12px var(--header-shadow);
    gap: 0;
  }
`;

const NavLink = styled(Link)`
  padding: 0.3rem 0.8rem;
  color: var(--text-secondary);
  cursor: pointer;
  font-weight: 500;
  font-size: 0.95rem;
  border-radius: 6px;
  transition: color 0.2s, background 0.2s;

  &:hover,
  &.active {
    color: var(--accent);
    background: var(--highlight-bg);
  }

  @media (max-width: 850px) {
    padding: 0.7rem 0;
    border-radius: 0;
    background: none !important;
    width: 100%;
  }
`;

const ThemeBtn = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1.5px solid var(--border-accent);
  background: none;
  color: var(--accent);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  transition: background 0.25s, color 0.25s, border-color 0.25s, transform 0.3s;
  margin-left: 0.8rem;
  flex-shrink: 0;

  &:hover {
    background: var(--accent-gradient);
    color: #fff;
    border-color: transparent;
    transform: rotate(22deg);
  }
`;

/* Desktop: shown alongside nav. Mobile: shown in the right slot */
const MobileRight = styled.div`
  display: none;
  @media (max-width: 850px) {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

const HamburgerIcon = styled.span`
  font-size: 1.7rem;
  cursor: pointer;
  color: var(--accent);
  line-height: 1;
`;

const DesktopToggle = styled(ThemeBtn)`
  @media (max-width: 850px) {
    display: none;
  }
`;

const navItems = [
  { label: 'Home', to: 'home' },
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Experience', to: 'experience' },
  { label: 'Education', to: 'education' },
  { label: 'Certifications', to: 'certifications' },
  { label: 'Projects', to: 'projects' },
  { label: 'Contact', to: 'contact' },
]

export default function Header({ isDark, toggleTheme }) {
  const [open, setOpen] = useState(false)
  const icon = isDark ? <FaSun /> : <FaMoon />
  const label = isDark ? 'Switch to light mode' : 'Switch to dark mode'

  return (
    <HeaderBar>
      <Logo>Arun Pal</Logo>

      {/* Mobile: hamburger + theme toggle */}
      <MobileRight>
        <ThemeBtn onClick={toggleTheme} title={label}>{icon}</ThemeBtn>
        <HamburgerIcon onClick={() => setOpen(o => !o)}>&#9776;</HamburgerIcon>
      </MobileRight>

      {/* Nav links (desktop always visible, mobile toggled) */}
      <NavLinks $open={open}>
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
        <DesktopToggle onClick={toggleTheme} title={label}>{icon}</DesktopToggle>
      </NavLinks>
    </HeaderBar>
  )
}
