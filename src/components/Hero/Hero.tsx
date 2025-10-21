import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import Logo from '../Logo';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('/images/hero-background.png') no-repeat center center;
  background-size: cover;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    width: 1920px;
    height: 2352px;
    left: calc(50% - 1920px/2);
    top: -605px;
    background: rgba(198, 24, 27, 0.1);
    opacity: 0.3;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  position: relative;
  z-index: 2;
  padding-top: 5vh;
`;

const HeroLogo = styled.div`
  margin-bottom: ${theme.spacing[8]};
  display: flex;
  justify-content: center;
  
  > * {
    transform: scale(1.5);
    
    @media (min-width: ${theme.breakpoints.md}) {
      transform: scale(2);
    }
  }
`;

const PunchingBag = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 600px;
  z-index: 1;
  
  @media (min-width: ${theme.breakpoints.md}) {
    width: 400px;
    height: 800px;
  }
  
  @media (min-width: ${theme.breakpoints.lg}) {
    width: 500px;
    height: 1000px;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const HeroTitle = styled.h1`
  font-family: 'League Spartan', sans-serif;
  font-size: clamp(4rem, 15vw, 12rem);
  font-weight: ${theme.typography.fontWeight.black};
  color: #FFEFEF;
  text-shadow: 0 0 40px #ff0000;
  line-height: 0.9;
  margin-bottom: ${theme.spacing[8]};
  position: relative;
  z-index: 3;
  text-align: center;
  white-space: pre-line;
`;

const HeroSubtitle = styled.p`
  font-family: 'League Spartan', sans-serif;
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacing[8]};
  line-height: 1.4;
  position: relative;
  z-index: 3;
  text-align: center;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  
  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.fontSize['3xl']};
  }
`;

const CTAButton = styled.button`
  font-family: 'League Spartan', sans-serif;
  background: linear-gradient(135deg, #ff0000 0%, #ff3333 100%);
  color: ${theme.colors.white};
  border: none;
  padding: ${theme.spacing[4]} ${theme.spacing[8]};
  font-size: ${theme.typography.fontSize['lg']};
  font-weight: ${theme.typography.fontWeight.bold};
  border-radius: ${theme.borderRadius.lg};
  cursor: pointer;
  transition: all ${theme.transitions.base};
  box-shadow: 0 0 20px rgba(255, 0, 0, 0.5);
  position: relative;
  z-index: 3;
  margin-top: ${theme.spacing[16]};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 30px rgba(255, 0, 0, 0.7);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const ScrollIndicator = styled.div`
  font-family: 'League Spartan', sans-serif;
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
      <PunchingBag>
        <img src="/images/punching-bag.png" alt="ShadowGear Smart Punching Bag" />
      </PunchingBag>
      <HeroContent>
        <HeroTitle>
          SHADOW<br />
          GEAR
        </HeroTitle>
        <HeroSubtitle>
        Be the Main Character of Your <br />
        Fitness Journey
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
