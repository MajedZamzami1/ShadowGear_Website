import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const ContactSection = styled.section`
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

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: ${theme.spacing[12]};
  color: ${theme.colors.text.primary};
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing[12]};
  
  @media (min-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[4]};
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[2]};
`;

const Label = styled.label`
  color: ${theme.colors.text.primary};
  font-weight: ${theme.typography.fontWeight.medium};
`;

const Input = styled.input`
  padding: ${theme.spacing[3]};
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: ${theme.borderRadius.lg};
  background: ${theme.colors.background.tertiary};
  color: ${theme.colors.text.primary};
  font-size: ${theme.typography.fontSize.base};
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.accent};
    box-shadow: 0 0 0 2px rgba(0, 255, 136, 0.2);
  }
  
  &::placeholder {
    color: ${theme.colors.text.muted};
  }
`;

const TextArea = styled.textarea`
  padding: ${theme.spacing[3]};
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: ${theme.borderRadius.lg};
  background: ${theme.colors.background.tertiary};
  color: ${theme.colors.text.primary};
  font-size: ${theme.typography.fontSize.base};
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.accent};
    box-shadow: 0 0 0 2px rgba(0, 255, 136, 0.2);
  }
  
  &::placeholder {
    color: ${theme.colors.text.muted};
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, ${theme.colors.accent} 0%, ${theme.colors.accentHover} 100%);
  color: ${theme.colors.black};
  border: none;
  padding: ${theme.spacing[4]};
  border-radius: ${theme.borderRadius.lg};
  font-weight: ${theme.typography.fontWeight.bold};
  cursor: pointer;
  transition: all ${theme.transitions.base};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.lg};
  }
`;

const ContactInfo = styled.div`
  h3 {
    color: ${theme.colors.accent};
    margin-bottom: ${theme.spacing[6]};
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[4]};
  margin-bottom: ${theme.spacing[6]};
  
  .icon {
    font-size: ${theme.typography.fontSize['2xl']};
    color: ${theme.colors.accent};
  }
  
  .content {
    h4 {
      color: ${theme.colors.text.primary};
      margin-bottom: ${theme.spacing[1]};
    }
    
    p {
      color: ${theme.colors.text.secondary};
    }
  }
`;

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <ContactSection id="contact">
      <Container>
        <SectionTitle>Get in Touch</SectionTitle>
        <ContactContent>
          <ContactForm onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input type="text" id="name" placeholder="Your name" required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="your.email@example.com" required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="subject">Subject</Label>
              <Input type="text" id="subject" placeholder="How can we help you?" required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea id="message" placeholder="Tell us more about your inquiry..." required />
            </FormGroup>
            <SubmitButton type="submit">Send Message</SubmitButton>
          </ContactForm>
          
          <ContactInfo>
            <h3>Contact Information</h3>
            <InfoItem>
              <div className="icon">📍</div>
              <div className="content">
                <h4>Address</h4>
                <p>123 Gaming Street<br />Tech City, TC 12345</p>
              </div>
            </InfoItem>
            <InfoItem>
              <div className="icon">📧</div>
              <div className="content">
                <h4>Email</h4>
                <p>info@shadowgear.com</p>
              </div>
            </InfoItem>
            <InfoItem>
              <div className="icon">📞</div>
              <div className="content">
                <h4>Phone</h4>
                <p>+1 (555) 123-4567</p>
              </div>
            </InfoItem>
            <InfoItem>
              <div className="icon">⏰</div>
              <div className="content">
                <h4>Business Hours</h4>
                <p>Mon - Fri: 9:00 AM - 6:00 PM<br />Sat - Sun: 10:00 AM - 4:00 PM</p>
              </div>
            </InfoItem>
          </ContactInfo>
        </ContactContent>
      </Container>
    </ContactSection>
  );
};

export default Contact;
