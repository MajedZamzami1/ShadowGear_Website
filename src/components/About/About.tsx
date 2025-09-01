import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const AboutSection = styled.section`
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

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: ${theme.spacing[12]};
  color: ${theme.colors.text.primary};
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing[12]};
  align-items: center;
  
  @media (min-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const AboutText = styled.div`
  h3 {
    color: ${theme.colors.accent};
    margin-bottom: ${theme.spacing[4]};
  }
  
  p {
    color: ${theme.colors.text.secondary};
    line-height: 1.8;
    margin-bottom: ${theme.spacing[4]};
  }
`;

const AboutImage = styled.div`
  background: linear-gradient(135deg, ${theme.colors.gray[800]} 0%, ${theme.colors.gray[900]} 100%);
  height: 400px;
  border-radius: ${theme.borderRadius.xl};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${theme.typography.fontSize['6xl']};
  color: ${theme.colors.accent};
`;

const About: React.FC = () => {
  return (
    <AboutSection id="about">
      <Container>
        <SectionTitle>About ShadowGear</SectionTitle>
        <AboutContent>
          <AboutText>
            <h3>Our Mission</h3>
            <p>
              At ShadowGear, we believe that every gamer deserves the best equipment to enhance their gaming experience. 
              Our mission is to provide premium gaming gear that combines cutting-edge technology with exceptional design.
            </p>
            <p>
              Founded by passionate gamers, we understand the importance of precision, comfort, and style in gaming peripherals. 
              Every product in our collection is carefully selected and tested to meet the highest standards of quality and performance.
            </p>
            <p>
              Whether you're a competitive esports player or a casual gamer, our gear will help you achieve your full potential 
              and enjoy every moment of your gaming journey.
            </p>
          </AboutText>
          <AboutImage>🎮</AboutImage>
        </AboutContent>
      </Container>
    </AboutSection>
  );
};

export default About;
