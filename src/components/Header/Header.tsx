import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import Logo from '../Logo';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: #000000;
  transition: all ${theme.transitions.base};
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.spacing[4]} 0;
  max-width: 1200px;
  margin: 0 auto;
  padding-left: ${theme.spacing[4]};
  padding-right: ${theme.spacing[4]};
  width: 100%;
  
  @media (min-width: ${theme.breakpoints.md}) {
    padding-left: ${theme.spacing[8]};
    padding-right: ${theme.spacing[8]};
  }
`;



const NavLinks = styled.ul<{ isOpen: boolean }>`
  display: flex;
  list-style: none;
  gap: ${theme.spacing[8]};
  
  @media (max-width: ${theme.breakpoints.md}) {
    position: fixed;
    top: 100%;
    left: 0;
    right: 0;
    background: ${theme.colors.background.primary};
    flex-direction: column;
    padding: ${theme.spacing[8]};
    transform: ${props => props.isOpen ? 'translateY(0)' : 'translateY(-100%)'};
    opacity: ${props => props.isOpen ? 1 : 0};
    visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
    transition: all ${theme.transitions.base};
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

const NavLink = styled.li`
  a {
    color: ${theme.colors.text.primary};
    text-decoration: none;
    font-weight: ${theme.typography.fontWeight.medium};
    transition: color ${theme.transitions.base};
    
    &:hover {
      color: ${theme.colors.accent};
    }
  }
`;

const MobileMenuButton = styled.button<{ isOpen: boolean }>`
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: ${theme.spacing[2]};
  
  @media (max-width: ${theme.breakpoints.md}) {
    display: flex;
  }
  
  span {
    width: 25px;
    height: 3px;
    background: ${theme.colors.text.primary};
    transition: all ${theme.transitions.base};
    
    &:nth-child(1) {
      transform: ${props => props.isOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none'};
    }
    
    &:nth-child(2) {
      opacity: ${props => props.isOpen ? 0 : 1};
    }
    
    &:nth-child(3) {
      transform: ${props => props.isOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none'};
    }
  }
`;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer>
      <Nav>
        <Logo onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
        
        <NavLinks isOpen={isMenuOpen}>
          <NavLink><a href="#home">Home</a></NavLink>
          <NavLink><a href="#how-it-works">How it works</a></NavLink>
          <NavLink><a href="#key-features">Key features</a></NavLink>
          <NavLink><a href="#preorder">Pre order</a></NavLink>
        </NavLinks>
        
        <MobileMenuButton isOpen={isMenuOpen} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </MobileMenuButton>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
