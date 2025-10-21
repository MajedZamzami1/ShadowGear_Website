import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const HowItWorksSection = styled.section`
  background: #000000;
  padding: ${theme.spacing[12]} 0;
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing[20]} 0;
  }
  
  &::before {
    content: '';
    position: absolute;
    width: 200px;
    height: 200px;
    left: calc(50% - 200px/2 + 200px);
    top: 200px;
    background: #C6181B;
    filter: blur(150px);
    opacity: 0.3;
    
    @media (min-width: ${theme.breakpoints.md}) {
      width: 306px;
      height: 306px;
      left: calc(50% - 306px/2 + 910px);
      top: 697px;
      filter: blur(250px);
      opacity: 1;
    }
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 ${theme.spacing[3]};
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (min-width: ${theme.spacing[4]}) {
    padding: 0 ${theme.spacing[4]};
  }
  
  @media (min-width: ${theme.breakpoints.md}) {
    padding: 0 ${theme.spacing[8]};
    align-items: flex-start;
    margin-left: 50%;
  }
`;

const SectionTag = styled.div`
  display: inline-block;
  padding: ${theme.spacing[2]} ${theme.spacing[4]};
  background: #000000;
  border: 1px solid #ff0000;
  border-radius: ${theme.borderRadius.full};
  color: #ff0000;
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  margin-bottom: ${theme.spacing[6]};
  width: fit-content;
`;

const SectionTitle = styled.h2`
  font-size: clamp(1.75rem, 6vw, 2.5rem);
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacing[6]};
  line-height: 1.2;
  letter-spacing: -0.02em;
  text-align: center;
  max-width: 500px;
  
  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.fontSize['4xl']};
    text-align: left;
    margin-bottom: ${theme.spacing[8]};
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing[3]};
  max-width: 1000px;
  width: 100%;
  
  @media (min-width: ${theme.spacing[4]}) {
    gap: ${theme.spacing[4]};
  }
  
  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
    gap: ${theme.spacing[6]};
  }
`;

const FeatureCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 0, 0, 0.2);
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing[3]};
  position: relative;
  overflow: hidden;
  transition: all ${theme.transitions.base};
  min-height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  
  @media (min-width: ${theme.spacing[4]}) {
    border-radius: ${theme.borderRadius.lg};
    padding: ${theme.spacing[4]};
    min-height: 140px;
  }
  
  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing[6]};
    min-height: 160px;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, #ff0000, #ff6666, #ff0000);
    opacity: 0.8;
    
    @media (min-width: ${theme.breakpoints.md}) {
      height: 3px;
    }
  }
  
  &:hover {
    transform: translateY(-2px);
    border-color: rgba(255, 0, 0, 0.4);
    box-shadow: 0 4px 12px rgba(255, 0, 0, 0.1);
    
    @media (min-width: ${theme.breakpoints.md}) {
      transform: translateY(-4px);
      box-shadow: 0 10px 30px rgba(255, 0, 0, 0.1);
    }
  }
`;

const FeatureTitle = styled.h3`
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacing[1]};
  text-shadow: 0 0 5px rgba(255, 0, 0, 0.3);
  line-height: 1.2;
  
  @media (min-width: ${theme.spacing[4]}) {
    font-size: ${theme.typography.fontSize.base};
    margin-bottom: ${theme.spacing[2]};
  }
  
  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.fontSize.lg};
    margin-bottom: ${theme.spacing[3]};
    text-shadow: 0 0 10px rgba(255, 0, 0, 0.3);
  }
`;

const FeatureDescription = styled.p`
  font-size: ${theme.typography.fontSize.xs};
  color: ${theme.colors.white};
  line-height: 1.3;
  opacity: 0.9;
  margin: 0;
  flex-grow: 1;
  
  @media (min-width: ${theme.spacing[4]}) {
    font-size: ${theme.typography.fontSize.sm};
    line-height: 1.4;
  }
  
  @media (min-width: ${theme.breakpoints.md}) {
    line-height: 1.6;
  }
`;

const HowItWorks: React.FC = () => {
  return (
    <HowItWorksSection id="how-it-works">
      <Container>
        <SectionTag>How it works</SectionTag>
        <SectionTitle>
          Train Like a Fighter.<br />
          Play Like It's a Game.
        </SectionTitle>
        <FeaturesGrid>
          <FeatureCard>
            <FeatureTitle>Guided by Light.</FeatureTitle>
            <FeatureDescription>
              Reactive LEDs lead every strike, turning your workout into a living, breathing challenge that pushes your rhythm and precision.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureTitle>Powered by Data.</FeatureTitle>
            <FeatureDescription>
              Embedded sensors track your speed, power, accuracy, and combos, translating every punch into real progress.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureTitle>Made for Leveling Up.</FeatureTitle>
            <FeatureDescription>
              Connect to the ShadowGear app to unlock skills, climb ranks, and become the hero of your own fitness journey.
            </FeatureDescription>
          </FeatureCard>
        </FeaturesGrid>
      </Container>
    </HowItWorksSection>
  );
};

export default HowItWorks;