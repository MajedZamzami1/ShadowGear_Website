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
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.98) 0%, rgba(20, 20, 20, 0.95) 100%);
    backdrop-filter: blur(20px);
    flex-direction: column;
    padding: ${theme.spacing[24]} ${theme.spacing[8]} ${theme.spacing[8]};
    justify-content: flex-start;
    align-items: center;
    transform: ${props => props.isOpen ? 'translateY(0)' : 'translateY(-100%)'};
    opacity: ${props => props.isOpen ? 1 : 0};
    visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 999;
    box-shadow: 
      0 0 50px rgba(255, 0, 0, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at center, rgba(255, 0, 0, 0.05) 0%, transparent 70%);
      pointer-events: none;
    }
  }
`;

const NavLink = styled.li<{ isOpen: boolean; index: number }>`
  a {
    color: ${theme.colors.text.primary};
    text-decoration: none;
    font-weight: ${theme.typography.fontWeight.medium};
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    display: block;
    padding: ${theme.spacing[4]} 0;
    font-size: ${theme.typography.fontSize.lg};
    position: relative;
    overflow: hidden;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 0, 0, 0.1), transparent);
      transition: left 0.5s ease;
    }
    
    &:hover {
      color: ${theme.colors.accent};
      transform: translateX(8px);
      
      &::before {
        left: 100%;
      }
    }
    
    @media (max-width: ${theme.breakpoints.md}) {
      font-size: ${theme.typography.fontSize['2xl']};
      padding: ${theme.spacing[8]} 0;
      font-weight: ${theme.typography.fontWeight.bold};
      text-align: center;
      opacity: ${props => props.isOpen ? 1 : 0};
      transform: ${props => props.isOpen ? 'translateY(0)' : `translateY(${20 + props.index * 10}px)`};
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      transition-delay: ${props => props.isOpen ? `${props.index * 0.1}s` : '0s'};
      
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0;
        height: 2px;
        background: linear-gradient(90deg, transparent, ${theme.colors.accent}, transparent);
        transition: all 0.3s ease;
        transform: translateX(-50%);
      }
      
      &:hover {
        color: ${theme.colors.accent};
        transform: translateX(0) scale(1.05);
        
        &::after {
          width: 100%;
        }
      }
    }
  }
`;

const MobileMenuButton = styled.button<{ isOpen: boolean }>`
  display: none;
  flex-direction: column;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  padding: ${theme.spacing[3]};
  z-index: 1001;
  border-radius: ${theme.borderRadius.md};
  transition: all 0.3s ease;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 0, 0, 0.1);
    border-radius: ${theme.borderRadius.md};
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  @media (max-width: ${theme.breakpoints.md}) {
    display: flex;
  }
  
  span {
    width: 28px;
    height: 3px;
    background: ${theme.colors.text.primary};
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 2px;
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: ${theme.colors.accent};
      border-radius: 2px;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    &:nth-child(1) {
      transform: ${props => props.isOpen ? 'rotate(45deg) translate(7px, 7px)' : 'none'};
      
      &::before {
        opacity: ${props => props.isOpen ? 1 : 0};
      }
    }
    
    &:nth-child(2) {
      opacity: ${props => props.isOpen ? 0 : 1};
      transform: ${props => props.isOpen ? 'translateX(30px)' : 'none'};
    }
    
    &:nth-child(3) {
      transform: ${props => props.isOpen ? 'rotate(-45deg) translate(7px, -7px)' : 'none'};
      
      &::before {
        opacity: ${props => props.isOpen ? 1 : 0};
      }
    }
  }
`;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    e.stopPropagation();
    closeMenu();
    
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Close menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen) {
        const target = event.target as HTMLElement;
        if (!target.closest('nav') && !target.closest('[data-menu]')) {
          closeMenu();
        }
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <HeaderContainer>
      <Nav>
        <Logo onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
        
        <NavLinks isOpen={isMenuOpen} data-menu="true">
          <NavLink isOpen={isMenuOpen} index={0}><a href="#home" onClick={(e) => handleLinkClick(e, 'home')}>Home</a></NavLink>
          <NavLink isOpen={isMenuOpen} index={1}><a href="#how-it-works" onClick={(e) => handleLinkClick(e, 'how-it-works')}>How it works</a></NavLink>
          <NavLink isOpen={isMenuOpen} index={2}><a href="#key-features" onClick={(e) => handleLinkClick(e, 'key-features')}>Key features</a></NavLink>
          <NavLink isOpen={isMenuOpen} index={3}><a href="#preorder" onClick={(e) => handleLinkClick(e, 'preorder')}>Pre order</a></NavLink>
        </NavLinks>
        
        <MobileMenuButton isOpen={isMenuOpen} onClick={toggleMenu} data-menu="true">
          <span></span>
          <span></span>
          <span></span>
        </MobileMenuButton>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
