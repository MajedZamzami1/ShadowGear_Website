import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const HowItWorksSection = styled.section`
  background: ${theme.colors.background.primary};
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
  font-size: ${theme.typography.fontSize['5xl']};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing[8]};
  line-height: 1.3;
  letter-spacing: -0.035em;
  
  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.fontSize['6xl']};
  }
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${theme.spacing[4]};
  margin-bottom: ${theme.spacing[6]};
  font-size: ${theme.typography.fontSize.lg};
  color: ${theme.colors.text.secondary};
  line-height: 1.6;
  
  &::before {
    content: '•';
    color: ${theme.colors.accent};
    font-size: ${theme.typography.fontSize['2xl']};
    font-weight: ${theme.typography.fontWeight.bold};
    line-height: 1;
  }
`;

const HowItWorks: React.FC = () => {
  return (
    <HowItWorksSection id="how-it-works">
      <Container>
        <SectionTag>How it works</SectionTag>
        <SectionTitle>
          Precision Lights, Powerful Sensors, Smarter You
        </SectionTitle>
        <FeaturesList>
          <FeatureItem>
            Punch with Purpose – LED lights guide your punches with precision targeting and real-time feedback.
          </FeatureItem>
          <FeatureItem>
            Track Every Move - Advanced sensors in gloves & bag capture speed, type & power of every strike.
          </FeatureItem>
          <FeatureItem>
            Level Up - Connect to the ShadowGear app for personalized drills, classes & competitive challenges.
          </FeatureItem>
        </FeaturesList>
      </Container>
    </HowItWorksSection>
  );
};

export default HowItWorks;
