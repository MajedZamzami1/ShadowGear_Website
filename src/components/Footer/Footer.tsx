import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const FooterContainer = styled.footer`
  background: ${theme.colors.background.primary};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: ${theme.spacing[12]} 0 ${theme.spacing[6]};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing[4]};
  
  @media (min-width: ${theme.breakpoints.md}) {
    padding: 0 ${theme.spacing[8]};
  }
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing[8]};
  margin-bottom: ${theme.spacing[8]};
  
  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;

const FooterSection = styled.div`
  h3 {
    color: ${theme.colors.accent};
    margin-bottom: ${theme.spacing[4]};
    font-size: ${theme.typography.fontSize.lg};
  }
  
  p, a {
    color: ${theme.colors.text.secondary};
    line-height: 1.6;
    margin-bottom: ${theme.spacing[2]};
    text-decoration: none;
    transition: color ${theme.transitions.base};
    
    &:hover {
      color: ${theme.colors.accent};
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${theme.spacing[4]};
  margin-top: ${theme.spacing[4]};
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: ${theme.colors.background.tertiary};
    border-radius: ${theme.borderRadius.full};
    color: ${theme.colors.text.secondary};
    transition: all ${theme.transitions.base};
    
    &:hover {
      background: ${theme.colors.accent};
      color: ${theme.colors.black};
      transform: translateY(-2px);
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: ${theme.spacing[6]};
  text-align: center;
  
  p {
    color: ${theme.colors.text.muted};
    font-size: ${theme.typography.fontSize.sm};
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <FooterSection>
            <h3>ShadowGear</h3>
            <p>
              Interactive Smart Boxing Trainer for the ultimate training experience. 
              Precision, power, and performance in every punch.
            </p>
            <SocialLinks>
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="YouTube">📺</a>
            </SocialLinks>
          </FooterSection>
          
                     <FooterSection>
             <h3>Quick Links</h3>
             <p><a href="#home">Home</a></p>
             <p><a href="#how-it-works">How it works</a></p>
             <p><a href="#key-features">Key features</a></p>
             <p><a href="#preorder">Pre order</a></p>
           </FooterSection>
          
                     <FooterSection>
             <h3>Support</h3>
             <p><a href="#">Help Center</a></p>
             <p><a href="#">Training Guide</a></p>
             <p><a href="#">App Support</a></p>
             <p><a href="#">Warranty</a></p>
           </FooterSection>
          
          <FooterSection>
            <h3>Contact Info</h3>
            <p>📧 info@shadowgear.com</p>
            <p>📞 +1 (555) 123-4567</p>
            <p>📍 123 Gaming Street<br />Tech City, TC 12345</p>
          </FooterSection>
        </FooterContent>
        
        <FooterBottom>
          <p>&copy; 2024 ShadowGear. All rights reserved. | Privacy Policy | Terms of Service</p>
        </FooterBottom>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
