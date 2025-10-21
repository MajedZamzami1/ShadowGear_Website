import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const KeyFeaturesSection = styled.section`
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
    left: -100px;
    top: 50%;
    transform: translateY(-50%);
    background: #C6181B;
    filter: blur(150px);
    opacity: 0.3;
    
    @media (min-width: ${theme.breakpoints.md}) {
      width: 306px;
      height: 306px;
      left: -153px;
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
  
  @media (min-width: ${theme.spacing[4]}) {
    padding: 0 ${theme.spacing[4]};
  }
  
  @media (min-width: ${theme.breakpoints.md}) {
    padding: 0 ${theme.spacing[4]};
  }
`;

const HeaderSection = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${theme.spacing[6]};
  margin-bottom: ${theme.spacing[8]};
  
  @media (min-width: ${theme.spacing[4]}) {
    gap: ${theme.spacing[8]};
    margin-bottom: ${theme.spacing[12]};
  }
  
  @media (min-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing[12]};
    margin-bottom: ${theme.spacing[16]};
  }
  
  @media (max-width: ${theme.breakpoints.md}) {
    flex-direction: column;
    gap: ${theme.spacing[6]};
  }
`;

const LeftColumn = styled.div`
  flex: 1;
`;

const RightColumn = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  padding-top: ${theme.spacing[20]};
`;

const SectionTag = styled.div`
  display: inline-block;
  padding: ${theme.spacing[2]} ${theme.spacing[4]};
  border: 1px solid ${theme.colors.accent};
  border-radius: ${theme.borderRadius.full};
  color: ${theme.colors.accent};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  margin-bottom: ${theme.spacing[6]};
`;

const SectionTitle = styled.h2`
  font-size: clamp(1.5rem, 5vw, 2.5rem);
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.white};
  margin-bottom: 0;
  line-height: 1.2;
  
  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.fontSize['5xl']};
  }
`;

const SectionDescription = styled.p`
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.white};
  margin-bottom: 0;
  max-width: 500px;
  line-height: 1.4;
  
  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.fontSize.lg};
    line-height: 1.6;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing[2]};
  overflow-x: auto;
  
  @media (min-width: ${theme.spacing[4]}) {
    gap: ${theme.spacing[3]};
  }
  
  @media (min-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing[8]};
  }
`;

const FeatureCard = styled.div`
  background: #000000;
  border: 1px solid #515151;
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing[3]};
  text-align: center;
  transition: all ${theme.transitions.base};
  min-height: 120px;
  min-width: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (min-width: ${theme.spacing[4]}) {
    border-radius: ${theme.borderRadius['2xl']};
    padding: ${theme.spacing[4]};
    min-height: 140px;
    min-width: 200px;
  }
  
  @media (min-width: ${theme.breakpoints.md}) {
    border-radius: ${theme.borderRadius['3xl']};
    padding: ${theme.spacing[10]};
    min-height: 160px;
    min-width: auto;
  }
  
  &:hover {
    border-color: ${theme.colors.accent};
    transform: translateY(-2px);
    
    @media (min-width: ${theme.breakpoints.md}) {
      transform: translateY(-4px);
    }
  }
`;

const FeatureNumber = styled.div`
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.black};
  color: ${theme.colors.accent};
  margin-bottom: ${theme.spacing[2]};
  
  @media (min-width: ${theme.spacing[4]}) {
    font-size: ${theme.typography.fontSize['3xl']};
    margin-bottom: ${theme.spacing[3]};
  }
  
  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.fontSize['4xl']};
    margin-bottom: ${theme.spacing[4]};
  }
`;

const FeatureTitle = styled.h3`
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacing[1]};
  line-height: 1.2;
  
  @media (min-width: ${theme.spacing[4]}) {
    font-size: ${theme.typography.fontSize.base};
    margin-bottom: ${theme.spacing[2]};
  }
  
  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.fontSize['xl']};
    margin-bottom: ${theme.spacing[3]};
  }
`;

const FeatureDescription = styled.p`
  font-size: ${theme.typography.fontSize.xs};
  color: ${theme.colors.white};
  line-height: 1.3;
  opacity: 0.8;
  margin: 0;
  
  @media (min-width: ${theme.spacing[4]}) {
    font-size: ${theme.typography.fontSize.sm};
    line-height: 1.4;
  }
  
  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.fontSize.base};
    line-height: 1.6;
  }
`;

const features = [
  {
    number: '.01',
    title: 'LED Target System',
    description: 'Train with precision using guided light patterns.'
  },
  {
    number: '.02',
    title: 'Smart Sensors',
    description: 'Real-time tracking of speed, power & punch variety.'
  },
  {
    number: '.03',
    title: 'Gamified Training',
    description: 'Compete, progress you character, climb ranks, and become the hero of your own fitness journey.'
  }
];

const KeyFeatures: React.FC = () => {
  return (
    <KeyFeaturesSection id="key-features">
      <Container>
        <HeaderSection>
          <LeftColumn>
            <SectionTag>Key Features</SectionTag>
            <SectionTitle>
              Power Meets Precision: ShadowGear's Smart Features
            </SectionTitle>
          </LeftColumn>
          <RightColumn>
            <SectionDescription>
              From guided punches to real-time tracking, every detail is built to make your training more engaging, competitive, and effective.
            </SectionDescription>
          </RightColumn>
        </HeaderSection>
        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard key={index}>
              <FeatureNumber>{feature.number}</FeatureNumber>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </Container>
    </KeyFeaturesSection>
  );
};

export default KeyFeatures;
