import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const PreorderSection = styled.section`
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
    right: -100px;
    top: 50%;
    transform: translateY(-50%);
    background: #C6181B;
    filter: blur(150px);
    opacity: 0.3;
    
    @media (min-width: ${theme.breakpoints.md}) {
      width: 306px;
      height: 306px;
      right: -153px;
      filter: blur(250px);
      opacity: 1;
    }
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: ${theme.spacing[4]};
`;

const ModalContent = styled.div`
  background: #000000;
  border: 1px solid #ff0000;
  border-radius: ${theme.borderRadius['3xl']};
  padding: ${theme.spacing[10]};
  max-width: 500px;
  width: 100%;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: ${theme.spacing[4]};
  right: ${theme.spacing[4]};
  background: none;
  border: none;
  color: ${theme.colors.white};
  font-size: ${theme.typography.fontSize['2xl']};
  cursor: pointer;
  padding: ${theme.spacing[2]};
  
  &:hover {
    color: #ff0000;
  }
`;

const ModalTitle = styled.h2`
  font-size: ${theme.typography.fontSize['3xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacing[6]};
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[6]};
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[2]};
`;

const Label = styled.label`
  color: ${theme.colors.white};
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.medium};
`;

const Input = styled.input`
  padding: ${theme.spacing[3]} ${theme.spacing[4]};
  border: 1px solid #515151;
  border-radius: ${theme.borderRadius.lg};
  background: #000000;
  color: ${theme.colors.white};
  font-size: ${theme.typography.fontSize.base};
  
  &:focus {
    outline: none;
    border-color: #ff0000;
  }
  
  &::placeholder {
    color: #666666;
  }
`;

const SubmitButton = styled.button`
  background: #ff0000;
  color: ${theme.colors.white};
  border: none;
  padding: ${theme.spacing[4]} ${theme.spacing[6]};
  border-radius: ${theme.borderRadius.lg};
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.bold};
  cursor: pointer;
  transition: all ${theme.transitions.base};
  
  &:hover {
    background: #cc0000;
    transform: translateY(-2px);
  }
  
  &:disabled {
    background: #666666;
    cursor: not-allowed;
    transform: none;
  }
`;

const SuccessMessage = styled.div`
  color: #00ff00;
  text-align: center;
  font-size: ${theme.typography.fontSize.base};
  margin-top: ${theme.spacing[4]};
`;

const ErrorMessage = styled.div`
  color: #ff0000;
  text-align: center;
  font-size: ${theme.typography.fontSize.base};
  margin-top: ${theme.spacing[4]};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing[3]};
  
  @media (min-width: ${theme.spacing[4]}) {
    padding: 0 ${theme.spacing[4]};
  }
  
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
  font-size: clamp(1.5rem, 5vw, 2.5rem);
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing[4]};
  text-align: center;
  
  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.fontSize['5xl']};
    text-align: left;
  }
`;

const SectionDescription = styled.p`
  font-size: ${theme.typography.fontSize.base};
  color: #888888;
  margin-bottom: ${theme.spacing[8]};
  max-width: 600px;
  line-height: 1.4;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  
  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.fontSize.lg};
    line-height: 1.6;
    margin-bottom: ${theme.spacing[12]};
    text-align: left;
    margin-left: 0;
    margin-right: 0;
  }
`;

const PricingGrid = styled.div`
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

const PricingCard = styled.div<{ isHighlighted?: boolean }>`
  background: #000000;
  border: 1px solid #515151;
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing[3]};
  text-align: left;
  transition: all ${theme.transitions.base};
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 180px;
  min-width: 200px;
  
  @media (min-width: ${theme.spacing[4]}) {
    border-radius: ${theme.borderRadius['2xl']};
    padding: ${theme.spacing[4]};
    min-height: 200px;
    min-width: 220px;
  }
  
  @media (min-width: ${theme.breakpoints.md}) {
    border-radius: ${theme.borderRadius['3xl']};
    padding: ${theme.spacing[10]};
    min-height: 240px;
    min-width: auto;
  }
  
  &:hover {
    border-color: #ff0000;
    transform: translateY(-2px);
    
    @media (min-width: ${theme.breakpoints.md}) {
      transform: translateY(-4px);
    }
  }
`;

const PriceRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: ${theme.spacing[2]};
  margin-bottom: ${theme.spacing[4]};
`;

const Price = styled.div`
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.black};
  color: #ff0000;
  
  @media (min-width: ${theme.spacing[4]}) {
    font-size: ${theme.typography.fontSize['3xl']};
  }
  
  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.fontSize['4xl']};
  }
`;

const Discount = styled.div`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.white};
  
  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.fontSize.base};
  }
`;

const PackageTitle = styled.h3`
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacing[2]};
  min-height: 1.5rem;
  display: flex;
  align-items: center;
  line-height: 1.2;
  
  @media (min-width: ${theme.spacing[4]}) {
    font-size: ${theme.typography.fontSize.base};
    margin-bottom: ${theme.spacing[3]};
    min-height: 2rem;
  }
  
  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.fontSize['xl']};
    margin-bottom: ${theme.spacing[4]};
    min-height: 2.5rem;
  }
`;

const PackageFeatures = styled.p`
  font-size: ${theme.typography.fontSize.xs};
  color: ${theme.colors.white};
  line-height: 1.3;
  margin-bottom: ${theme.spacing[4]};
  flex-grow: 1;
  min-height: 2rem;
  display: flex;
  align-items: flex-start;
  
  @media (min-width: ${theme.spacing[4]}) {
    font-size: ${theme.typography.fontSize.sm};
    line-height: 1.4;
    margin-bottom: ${theme.spacing[6]};
    min-height: 2.5rem;
  }
  
  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.fontSize.base};
    line-height: 1.6;
    margin-bottom: ${theme.spacing[8]};
    min-height: 3rem;
  }
`;

const PreorderButton = styled.button<{ isHighlighted?: boolean }>`
  background: ${props => props.isHighlighted ? '#ff0000' : 'transparent'};
  color: ${theme.colors.white};
  border: 1px solid #ff0000;
  padding: ${theme.spacing[2]} ${theme.spacing[3]};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.bold};
  border-radius: ${theme.borderRadius.md};
  cursor: pointer;
  transition: all ${theme.transitions.base};
  margin-top: auto;
  width: 100%;
  
  @media (min-width: ${theme.spacing[4]}) {
    padding: ${theme.spacing[3]} ${theme.spacing[4]};
    font-size: ${theme.typography.fontSize.base};
    border-radius: ${theme.borderRadius.lg};
  }
  
  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing[4]} ${theme.spacing[6]};
    font-size: ${theme.typography.fontSize.lg};
  }
  
  &:hover {
    background: #ff0000;
    color: ${theme.colors.white};
  }
`;

const WhyPreorderSection = styled.div`
  margin-top: ${theme.spacing[20]};
  text-align: center;
`;

const WhyPreorderButton = styled.button`
  padding: ${theme.spacing[3]} ${theme.spacing[6]};
  border: 1px solid ${theme.colors.accent};
  border-radius: ${theme.borderRadius.lg};
  background: transparent;
  color: ${theme.colors.accent};
  font-weight: ${theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: all ${theme.transitions.base};
  margin-bottom: ${theme.spacing[6]};
  
  &:hover {
    background: ${theme.colors.accent};
    color: ${theme.colors.black};
  }
`;

const WhyPreorderTitle = styled.h2`
  font-size: ${theme.typography.fontSize['5xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing[6]};
`;

const WhyPreorderDescription = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  color: ${theme.colors.text.secondary};
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing[6]};
  margin-top: ${theme.spacing[12]};
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const BenefitCard = styled.div`
  background: #000000;
  border: 1px solid #333333;
  border-radius: ${theme.borderRadius.xl};
  padding: ${theme.spacing[6]};
  text-align: center;
  color: ${theme.colors.white};
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.medium};
  line-height: 1.4;
  letter-spacing: 0.01em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: all ${theme.transitions.base};
  min-width: 350px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: ${theme.borderRadius.xl};
    padding: 1px;
    background: linear-gradient(135deg, #333333 0%, #555555 50%, #333333 100%);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    pointer-events: none;
  }
  
  &:hover {
    border-color: #ff0000;
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(255, 0, 0, 0.2);
  }
`;

const ThirdBenefitCard = styled(BenefitCard)`
  grid-column: 1 / -1;
  justify-self: center;
  min-width: 350px;
`;

const pricingPackages = [
  {
    price: '$499',
    discount: '(Save 20%)',
    title: 'Early-Bird Special',
    features: 'Smart Bag + Gloves + 3 Months App Access',
    isHighlighted: false
  },
  {
    price: '$999',
    discount: '',
    title: 'Complete Bundle',
    features: 'Smart Bag + Gloves + 12 Months App Access',
    isHighlighted: true
  },
  {
    price: '$1499',
    discount: '',
    title: 'Pro Edition',
    features: 'Smart Bag + Gloves + 12 Months App Access + Extra Accessories',
    isHighlighted: false
  }
];

const benefits = [
  'Bonus app features for first adopters.',
  'Early Access to the first wave.',
  'Exclusive pre order discount.'
];

const Preorder: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('Form data being sent:', formData); // Debug log
    
    // Ensure all fields are captured
    const submissionData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone || ''
    };
    
    console.log('Submission data:', submissionData); // Debug log
    
    // Close modal immediately and reset form
    setIsModalOpen(false);
    setFormData({ name: '', email: '', phone: '' });
    
    // Show loading message
    setSuccessMessage('Submitting your pre-order...');
    setErrorMessage(null);
    
    try {
      const response = await fetch('https://shadowgear-website.onrender.com/api/preorder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        setSuccessMessage('Your pre-order has been submitted successfully!');
        setErrorMessage(null);
        setTimeout(() => {
          setSuccessMessage(null); // Clear success message after 2 seconds
        }, 2000);
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Error submitting pre-order');
        setSuccessMessage(null);
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Network error. Please try again.');
      setSuccessMessage(null);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <PreorderSection id="preorder">
      <Container>
        <SectionTag>Preorder Options</SectionTag>
        <SectionTitle>
          Power Meets Precision: ShadowGear's Smart Features
        </SectionTitle>
        <SectionDescription>
          From guided punches to real-time tracking, every detail is built to make your training more engaging, competitive, and effective.
        </SectionDescription>
        
        <PricingGrid>
          {pricingPackages.map((pkg, index) => (
            <PricingCard key={index} isHighlighted={pkg.isHighlighted}>
              <PriceRow>
                <Price>{pkg.price}</Price>
                {pkg.discount && <Discount>{pkg.discount}</Discount>}
              </PriceRow>
              <PackageTitle>{pkg.title}</PackageTitle>
              <PackageFeatures>{pkg.features}</PackageFeatures>
              <PreorderButton isHighlighted={pkg.isHighlighted} onClick={() => setIsModalOpen(true)}>
                Preorder Now
              </PreorderButton>
            </PricingCard>
          ))}
        </PricingGrid>
        
        <WhyPreorderSection>
          <WhyPreorderButton>Why choose us?</WhyPreorderButton>
          <WhyPreorderTitle>Why Preorder Now?</WhyPreorderTitle>
          <WhyPreorderDescription>
            From guided punches to real-time tracking, every detail is built to make your training more engaging, competitive, and effective.
          </WhyPreorderDescription>
          
          <BenefitsGrid>
            <BenefitCard>
              {benefits[1]}
            </BenefitCard>
            <BenefitCard>
              {benefits[2]}
            </BenefitCard>
            <ThirdBenefitCard>
              {benefits[0]}
            </ThirdBenefitCard>
          </BenefitsGrid>
        </WhyPreorderSection>
      </Container>

      {isModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <CloseButton onClick={() => setIsModalOpen(false)}>&times;</CloseButton>
            <ModalTitle>Pre-Order Form</ModalTitle>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="name">Name:</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your name"
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="email">Email:</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your email"
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="phone">Phone:</Label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your phone number"
                />
              </FormGroup>
              <SubmitButton type="submit">Submit Pre-Order</SubmitButton>
            </Form>
            {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          </ModalContent>
        </ModalOverlay>
      )}
    </PreorderSection>
  );
};

export default Preorder;
