import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, ${theme.colors.background.primary} 0%, ${theme.colors.background.secondary} 100%);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
    opacity: 0.5;
  }
`;

const HeroContent = styled.div`
  text-align: center;
  max-width: 800px;
  padding: ${theme.spacing[8]};
  position: relative;
  z-index: 2;
`;

const HeroTitle = styled.h1`
  font-size: ${theme.typography.fontSize['5xl']};
  font-weight: ${theme.typography.fontWeight.black};
  color: #FFEFEF;
  margin-bottom: ${theme.spacing[6]};
  line-height: 1.1;
  text-shadow: 0 0 20px rgba(255, 0, 0, 0.5);
  
  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.fontSize['7xl']};
  }
  
  @media (min-width: ${theme.breakpoints.lg}) {
    font-size: ${theme.typography.fontSize['8xl']};
  }
`;

const HeroSubtitle = styled.p`
  font-size: ${theme.typography.fontSize['xl']};
  color: ${theme.colors.text.secondary};
  margin-bottom: ${theme.spacing[8]};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  
  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.fontSize['2xl']};
  }
`;

const CTAButton = styled.button`
  background: linear-gradient(135deg, ${theme.colors.accent} 0%, ${theme.colors.accentHover} 100%);
  color: ${theme.colors.black};
  border: none;
  padding: ${theme.spacing[4]} ${theme.spacing[8]};
  font-size: ${theme.typography.fontSize['lg']};
  font-weight: ${theme.typography.fontWeight.bold};
  border-radius: ${theme.borderRadius.lg};
  cursor: pointer;
  transition: all ${theme.transitions.base};
  box-shadow: ${theme.shadows.glow};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${theme.shadows['2xl']}, ${theme.shadows.glow};
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: ${theme.spacing[8]};
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing[2]};
  color: ${theme.colors.text.muted};
  font-size: ${theme.typography.fontSize.sm};
  
  &::after {
    content: '';
    width: 2px;
    height: 40px;
    background: ${theme.colors.accent};
    animation: scroll 2s infinite;
  }
  
  @keyframes scroll {
    0%, 100% {
      transform: translateY(0);
      opacity: 1;
    }
    50% {
      transform: translateY(20px);
      opacity: 0.3;
    }
  }
`;

const Hero: React.FC = () => {
  return (
    <HeroSection id="home">
      <HeroContent>
        <HeroTitle>
          ShadowGear
        </HeroTitle>
        <HeroSubtitle>
          Unleash Your Power<br />
          Train Smarter Play Harder.
        </HeroSubtitle>
        <CTAButton onClick={() => document.getElementById('preorder')?.scrollIntoView({ behavior: 'smooth' })}>
          Pre order Now
        </CTAButton>
      </HeroContent>
      <ScrollIndicator>
        Scroll to explore
      </ScrollIndicator>
    </HeroSection>
  );
};

export default Hero;
