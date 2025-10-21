import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const AppExperienceSection = styled.section`
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
    left: calc(50% - 200px/2);
    top: 100px;
    background: #C6181B;
    filter: blur(150px);
    opacity: 0.2;
    
    @media (min-width: ${theme.breakpoints.md}) {
      width: 400px;
      height: 400px;
      left: calc(50% - 400px/2);
      top: 200px;
      filter: blur(300px);
      opacity: 0.3;
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
  
  @media (min-width: ${theme.breakpoints.sm}) {
    padding: 0 ${theme.spacing[4]};
  }
  
  @media (min-width: ${theme.breakpoints.md}) {
    padding: 0 ${theme.spacing[8]};
  }
`;

const AppExperienceTitle = styled.h2`
  font-size: clamp(1.75rem, 6vw, 4rem);
  font-weight: ${theme.typography.fontWeight.black};
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacing[3]};
  text-align: center;
  text-shadow: 0 0 20px rgba(255, 0, 0, 0.3);
  background: linear-gradient(135deg, #ffffff 0%, #ff6666 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
  
  @media (min-width: ${theme.breakpoints.md}) {
    margin-bottom: ${theme.spacing[4]};
    text-shadow: 0 0 30px rgba(255, 0, 0, 0.5);
  }
`;

const AppExperienceSubtitle = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  color: ${theme.colors.white};
  text-align: center;
  margin-bottom: ${theme.spacing[8]};
  opacity: 0.9;
  font-weight: ${theme.typography.fontWeight.medium};
  line-height: 1.4;
  
  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.fontSize.xl};
    margin-bottom: ${theme.spacing[16]};
  }
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing[8]};
  max-width: 1400px;
  width: 100%;
  margin-bottom: ${theme.spacing[8]};
  
  @media (min-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing[12]};
    margin-bottom: ${theme.spacing[12]};
  }
  
  @media (min-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr;
    gap: ${theme.spacing[20]};
    margin-bottom: ${theme.spacing[16]};
    align-items: stretch;
  }
`;

const AppStepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing[2]};
  
  @media (min-width: ${theme.breakpoints.sm}) {
    gap: ${theme.spacing[4]};
  }
  
  @media (min-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing[6]};
  }
  
  @media (min-width: ${theme.breakpoints.lg}) {
    gap: ${theme.spacing[6]};
  }
`;

const AppStepCard = styled.div`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 0, 0, 0.05) 100%);
  border: 1px solid rgba(255, 0, 0, 0.3);
  border-radius: 8px;
  padding: ${theme.spacing[2]};
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  min-height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  
  @media (min-width: ${theme.breakpoints.sm}) {
    border-radius: 12px;
    padding: ${theme.spacing[3]};
    min-height: 140px;
  }
  
  @media (min-width: ${theme.breakpoints.md}) {
    border-radius: 16px;
    padding: ${theme.spacing[4]};
    min-height: 160px;
  }
  
  &:hover {
    transform: translateY(-1px);
    border-color: rgba(255, 0, 0, 0.6);
    box-shadow: 
      0 4px 8px rgba(255, 0, 0, 0.15),
      0 0 0 1px rgba(255, 0, 0, 0.1);
    
    @media (min-width: ${theme.breakpoints.md}) {
      transform: translateY(-2px);
      box-shadow: 
        0 8px 16px rgba(255, 0, 0, 0.2),
        0 0 0 1px rgba(255, 0, 0, 0.1);
    }
  }
`;

const AppStepNumber = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: linear-gradient(135deg, #ff0000 0%, #ff6666 100%);
  border-radius: 50%;
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacing[1]};
  box-shadow: 
    0 2px 6px rgba(255, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  flex-shrink: 0;
  
  @media (min-width: ${theme.breakpoints.sm}) {
    width: 32px;
    height: 32px;
    font-size: ${theme.typography.fontSize.base};
    margin-bottom: ${theme.spacing[2]};
  }
  
  @media (min-width: ${theme.breakpoints.md}) {
    width: 40px;
    height: 40px;
    font-size: ${theme.typography.fontSize.lg};
    margin-bottom: ${theme.spacing[3]};
    box-shadow: 
      0 4px 12px rgba(255, 0, 0, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
  }
`;

const AppStepTitle = styled.h3`
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacing[1]};
  line-height: 1.2;
  
  @media (min-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.typography.fontSize.base};
    margin-bottom: ${theme.spacing[2]};
    line-height: 1.3;
  }
  
  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.fontSize.lg};
  }
`;

const AppStepDescription = styled.p`
  font-size: ${theme.typography.fontSize.xs};
  color: ${theme.colors.white};
  line-height: 1.3;
  opacity: 0.9;
  margin: 0;
  flex-grow: 1;
  
  @media (min-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.typography.fontSize.sm};
    line-height: 1.4;
  }
  
  @media (min-width: ${theme.breakpoints.md}) {
    line-height: 1.5;
  }
`;

const AppImagesSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[4]};
  width: 100%;
  max-width: 100%;
  align-self: stretch;
  
  @media (min-width: ${theme.breakpoints.sm}) {
    max-width: 500px;
  }
  
  @media (min-width: ${theme.breakpoints.lg}) {
    position: sticky;
    top: 100px;
    height: fit-content;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 300px;
  overflow: hidden;
  border-radius: 8px;
  background: linear-gradient(135deg, rgba(255, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.1) 100%);
  border: 1px solid rgba(255, 0, 0, 0.2);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (min-width: ${theme.breakpoints.sm}) {
    min-height: 400px;
    border-radius: 12px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  }
  
  @media (min-width: ${theme.breakpoints.md}) {
    min-height: 500px;
  }
  
  @media (min-width: ${theme.breakpoints.lg}) {
    min-height: 600px;
  }
`;

const AppImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;
  display: block;
  
  &:hover {
    transform: scale(1.02);
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.9));
  padding: ${theme.spacing[2]};
  color: ${theme.colors.white};
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.medium};
  opacity: 0;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 1;
  }
`;

const AppExperience: React.FC = () => {
  return (
    <AppExperienceSection id="app-experience">
      <Container>
        <AppExperienceTitle>The ShadowGear App Experience</AppExperienceTitle>
        <AppExperienceSubtitle>Your fitness journey, gamified.</AppExperienceSubtitle>
        
        <ContentWrapper>
          <AppStepsGrid>
            <AppStepCard>
              <AppStepNumber>1</AppStepNumber>
              <AppStepTitle>Build Your Fighter</AppStepTitle>
              <AppStepDescription>
                Create your in-game character, a reflection of your real-world performance. Every punch, kick, and drill improves your character's stats, from strength and speed to reaction and endurance.
              </AppStepDescription>
            </AppStepCard>
            
            <AppStepCard>
              <AppStepNumber>2</AppStepNumber>
              <AppStepTitle>Train, Test, and Track</AppStepTitle>
              <AppStepDescription>
                Complete skill tests to measure your attributes and unlock your Shadow Profile. Sensors record every strike's power, accuracy, and timing, updating your character's in-game stats instantly.
              </AppStepDescription>
            </AppStepCard>
            
            <AppStepCard>
              <AppStepNumber>3</AppStepNumber>
              <AppStepTitle>Unlock Skills and Combos</AppStepTitle>
              <AppStepDescription>
                Progress through your personalized Skill Tree. Earn new abilities, unlock advanced combos, and master your fighting style as you level up, just like in your favorite RPG.
              </AppStepDescription>
            </AppStepCard>
            
            <AppStepCard>
              <AppStepNumber>4</AppStepNumber>
              <AppStepTitle>Compete and Evolve</AppStepTitle>
              <AppStepDescription>
                Challenge friends, climb leaderboards, and push your limits through missions, drills, and competitive events. Every session moves your real-life performance and your digital fighter forward.
              </AppStepDescription>
            </AppStepCard>
          </AppStepsGrid>
          
          <AppImagesSection>
            <ImageContainer>
              <AppImage 
                src="/images/App1.png" 
                alt="ShadowGear App Interface"
              />
              <ImageOverlay>
                ShadowGear App - Character Creation & Stats
              </ImageOverlay>
            </ImageContainer>
          </AppImagesSection>
        </ContentWrapper>
      </Container>
    </AppExperienceSection>
  );
};

export default AppExperience;
