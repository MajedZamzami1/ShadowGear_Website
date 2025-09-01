import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const PreorderSection = styled.section`
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

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing[8]};
  
  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const PricingCard = styled.div<{ isHighlighted?: boolean }>`
  background: ${theme.colors.background.tertiary};
  border: 1px solid #515151;
  border-radius: ${theme.borderRadius['3xl']};
  padding: ${theme.spacing[10]};
  text-align: center;
  transition: all ${theme.transitions.base};
  position: relative;
  
  ${props => props.isHighlighted && `
    border-color: ${theme.colors.accent};
    transform: scale(1.05);
  `}
  
  &:hover {
    border-color: ${theme.colors.accent};
    transform: translateY(-4px);
  }
`;

const Price = styled.div`
  font-size: ${theme.typography.fontSize['5xl']};
  font-weight: ${theme.typography.fontWeight.black};
  color: ${theme.colors.accent};
  margin-bottom: ${theme.spacing[2]};
`;

const Discount = styled.div`
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.text.secondary};
  margin-bottom: ${theme.spacing[4]};
`;

const PackageTitle = styled.h3`
  font-size: ${theme.typography.fontSize['xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing[3]};
`;

const PackageFeatures = styled.div`
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.text.secondary};
  margin-bottom: ${theme.spacing[6]};
  line-height: 1.6;
`;

const PreorderButton = styled.button<{ isHighlighted?: boolean }>`
  width: 100%;
  padding: ${theme.spacing[4]} ${theme.spacing[6]};
  border: 1px solid ${theme.colors.accent};
  border-radius: ${theme.borderRadius.lg};
  font-weight: ${theme.typography.fontWeight.bold};
  cursor: pointer;
  transition: all ${theme.transitions.base};
  
  ${props => props.isHighlighted ? `
    background: ${theme.colors.accent};
    color: ${theme.colors.black};
  ` : `
    background: transparent;
    color: ${theme.colors.accent};
  `}
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.lg};
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
  grid-template-columns: 1fr;
  gap: ${theme.spacing[6]};
  margin-top: ${theme.spacing[12]};
  
  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const BenefitCard = styled.div`
  background: ${theme.colors.background.tertiary};
  border: 1px solid #515151;
  border-radius: ${theme.borderRadius.xl};
  padding: ${theme.spacing[6]};
  text-align: center;
  color: ${theme.colors.text.primary};
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.medium};
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
              <Price>{pkg.price}</Price>
              {pkg.discount && <Discount>{pkg.discount}</Discount>}
              <PackageTitle>{pkg.title}</PackageTitle>
              <PackageFeatures>{pkg.features}</PackageFeatures>
              <PreorderButton isHighlighted={pkg.isHighlighted}>
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
            {benefits.map((benefit, index) => (
              <BenefitCard key={index}>
                {benefit}
              </BenefitCard>
            ))}
          </BenefitsGrid>
        </WhyPreorderSection>
      </Container>
    </PreorderSection>
  );
};

export default Preorder;
