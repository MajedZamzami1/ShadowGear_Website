import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';

const FooterSection = styled.footer`
  background: #000000;
  padding: ${theme.spacing[20]} 0 ${theme.spacing[12]} 0;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    width: 306px;
    height: 306px;
    left: -153px;
    top: 50%;
    transform: translateY(-50%);
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
  
  @media (min-width: ${theme.breakpoints.md}) {
    padding: 0 ${theme.spacing[8]};
  }
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing[12]};
  
  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
    gap: ${theme.spacing[16]};
  }
`;

const SocialSection = styled.div`
  text-align: center;
  
  @media (min-width: ${theme.breakpoints.md}) {
    text-align: left;
  }
`;

const SocialTitle = styled.h3`
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacing[6]};
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${theme.spacing[6]};
  justify-content: center;
  
  @media (min-width: ${theme.breakpoints.md}) {
    justify-content: flex-start;
  }
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border: 2px solid #ff0000;
  border-radius: 50%;
  color: ${theme.colors.white};
  transition: all ${theme.transitions.base};
  
  svg {
    width: 24px;
    height: 24px;
    fill: currentColor;
  }
  
  &:hover {
    background: #ff0000;
    transform: translateY(-2px);
  }
`;

const CofoundersSection = styled.div`
  text-align: center;
  
  @media (min-width: ${theme.breakpoints.md}) {
    text-align: left;
  }
`;

const CofoundersTitle = styled.h3`
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacing[6]};
`;

const CofounderCard = styled.div`
  background: #000000;
  border: 1px solid #333333;
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing[6]};
  margin-bottom: ${theme.spacing[4]};
  text-align: left;
`;

const CofounderName = styled.h4`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.bold};
  color: #ff0000;
  margin-bottom: ${theme.spacing[2]};
`;

const CofounderInfo = styled.div`
  color: ${theme.colors.white};
  font-size: ${theme.typography.fontSize.base};
  line-height: 1.6;
  
  a {
    color: ${theme.colors.white};
    text-decoration: none;
    
    &:hover {
      color: #ff0000;
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  color: #666666;
  font-size: ${theme.typography.fontSize.sm};
  margin-top: ${theme.spacing[12]};
  padding-top: ${theme.spacing[8]};
  border-top: 1px solid #333333;
`;

const Footer: React.FC = () => {
  return (
    <FooterSection>
      <Container>
        <FooterContent>
          <SocialSection>
            <SocialTitle>Follow Us</SocialTitle>
            <SocialLinks>
              <SocialLink href="https://instagram.com/shadowgear_boxing" target="_blank" rel="noopener noreferrer">
                {FaInstagram({})}
              </SocialLink>
              <SocialLink href="https://tiktok.com/@shadow1gear" target="_blank" rel="noopener noreferrer">
                {FaTiktok({})}
              </SocialLink>
              <SocialLink href="https://youtube.com/@ShadowGear_Boxing" target="_blank" rel="noopener noreferrer">
                {FaYoutube({})}
              </SocialLink>
            </SocialLinks>
          </SocialSection>
          
          <CofoundersSection>
            <CofoundersTitle>Contact Us</CofoundersTitle>
            <CofounderCard>
              <CofounderName>Majed Zamzami</CofounderName>
              <CofounderInfo>
                <div>+966 531528081</div>
                <div><a href="mailto:majedzamzami@gmail.com">majedzamzami@gmail.com</a></div>
              </CofounderInfo>
            </CofounderCard>
            <CofounderCard>
              <CofounderName>Mahdi Almosa</CofounderName>
              <CofounderInfo>
                <div>+966 569424448</div>
                <div><a href="mailto:mahdi.almosa@kaust.edu.sa">mahdi.almosa@kaust.edu.sa</a></div>
              </CofounderInfo>
            </CofounderCard>
          </CofoundersSection>
        </FooterContent>
        
        <Copyright>
          © 2025 ShadowGear. All rights reserved.
        </Copyright>
      </Container>
    </FooterSection>
  );
};

export default Footer;
