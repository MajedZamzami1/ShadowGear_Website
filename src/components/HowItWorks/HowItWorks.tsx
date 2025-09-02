import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const HowItWorksSection = styled.section`
  background: #000000;
  padding: ${theme.spacing[20]} 0;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    width: 306px;
    height: 306px;
    left: calc(50% - 306px/2 + 910px);
    top: 697px;
    background: #C6181B;
    filter: blur(250px);
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing[4]};
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 50%;
  
  @media (min-width: ${theme.breakpoints.md}) {
    padding: 0 ${theme.spacing[8]};
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
  font-size: ${theme.typography.fontSize['3xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacing[8]};
  line-height: 1.2;
  letter-spacing: -0.02em;
  text-align: left;
  max-width: 500px;
  
  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.fontSize['4xl']};
  }
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
  max-width: 500px;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${theme.spacing[4]};
  margin-bottom: ${theme.spacing[6]};
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.white};
  line-height: 1.4;
  justify-content: flex-start;
  white-space: nowrap;
  max-width: 600px;
  
  &::before {
    content: '•';
    color: #666666;
    font-size: ${theme.typography.fontSize.lg};
    font-weight: ${theme.typography.fontWeight.bold};
    line-height: 1;
    flex-shrink: 0;
  }
`;

const HowItWorks: React.FC = () => {
  return (
    <HowItWorksSection id="how-it-works">
      <Container>
        <SectionTag>How it works</SectionTag>
        <SectionTitle>
          Precision Lights, Powerful<br />
          Sensors, Smarter You
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
