import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: transform ${theme.transitions.base};
  
  &:hover {
    transform: scale(1.05);
  }

  img {
    height: 48px;
    width: auto;
    
    @media (min-width: ${theme.breakpoints.md}) {
      height: 60px;
    }
  }
`;

interface LogoProps {
  onClick?: () => void;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ onClick, className }) => {
  return (
    <LogoContainer onClick={onClick} className={className}>
      <img src="/images/logo.png" alt="ShadowGear Logo" />
    </LogoContainer>
  );
};

export default Logo;
