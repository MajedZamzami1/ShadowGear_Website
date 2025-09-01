import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const KeyFeaturesSection = styled.section`
  background: ${theme.colors.background.secondary};
  padding: ${theme.spacing[20]} 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing[4]};
  
  @media (min-width: ${theme.breakpoints.md}) {
    padding: 0 ${theme.spacing[8]};
  }
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
  font-size: ${theme.typography.fontSize['4xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing[4]};
  
  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.fontSize['5xl']};
  }
`;

const SectionDescription = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  color: ${theme.colors.text.secondary};
  margin-bottom: ${theme.spacing[12]};
  max-width: 600px;
  line-height: 1.6;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing[8]};
  
  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const FeatureCard = styled.div`
  background: ${theme.colors.background.tertiary};
  border: 1px solid #515151;
  border-radius: ${theme.borderRadius['3xl']};
  padding: ${theme.spacing[10]};
  text-align: center;
  transition: all ${theme.transitions.base};
  
  &:hover {
    border-color: ${theme.colors.accent};
    transform: translateY(-4px);
  }
`;

const FeatureNumber = styled.div`
  font-size: ${theme.typography.fontSize['6xl']};
  font-weight: ${theme.typography.fontWeight.black};
  color: ${theme.colors.accent};
  margin-bottom: ${theme.spacing[4]};
`;

const FeatureTitle = styled.h3`
  font-size: ${theme.typography.fontSize['xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing[3]};
`;

const FeatureDescription = styled.p`
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.text.secondary};
  line-height: 1.6;
`;

const features = [
  {
    number: '01',
    title: 'LED Target System',
    description: 'Train with precision using guided light patterns that adapt to your skill level.'
  },
  {
    number: '02',
    title: 'Smart Sensors',
    description: 'Real-time tracking of speed, power & punch variety with advanced analytics.'
  },
  {
    number: '03',
    title: 'Leaderboards',
    description: 'Compete, climb ranks & stay motivated with global and local leaderboards.'
  }
];

const KeyFeatures: React.FC = () => {
  return (
    <KeyFeaturesSection id="key-features">
      <Container>
        <SectionTag>Key Features</SectionTag>
        <SectionTitle>
          Power Meets Precision: ShadowGear's Smart Features
        </SectionTitle>
        <SectionDescription>
          From guided punches to real-time tracking, every detail is built to make your training more engaging, competitive, and effective.
        </SectionDescription>
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
