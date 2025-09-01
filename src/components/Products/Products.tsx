import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const ProductsSection = styled.section`
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

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing[8]};
  margin-top: ${theme.spacing[12]};
`;

const ProductCard = styled.div`
  background: ${theme.colors.background.tertiary};
  border-radius: ${theme.borderRadius.xl};
  padding: ${theme.spacing[6]};
  text-align: center;
  transition: all ${theme.transitions.base};
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: ${theme.shadows['2xl']};
    border-color: ${theme.colors.accent};
  }
`;

const ProductImage = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, ${theme.colors.gray[800]} 0%, ${theme.colors.gray[900]} 100%);
  border-radius: ${theme.borderRadius.lg};
  margin-bottom: ${theme.spacing[4]};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${theme.typography.fontSize['4xl']};
  color: ${theme.colors.accent};
`;

const ProductTitle = styled.h3`
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing[2]};
`;

const ProductDescription = styled.p`
  color: ${theme.colors.text.secondary};
  margin-bottom: ${theme.spacing[4]};
  line-height: 1.6;
`;

const ProductPrice = styled.div`
  font-size: ${theme.typography.fontSize['xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.accent};
  margin-bottom: ${theme.spacing[4]};
`;

const BuyButton = styled.button`
  background: linear-gradient(135deg, ${theme.colors.accent} 0%, ${theme.colors.accentHover} 100%);
  color: ${theme.colors.black};
  border: none;
  padding: ${theme.spacing[3]} ${theme.spacing[6]};
  border-radius: ${theme.borderRadius.lg};
  font-weight: ${theme.typography.fontWeight.bold};
  cursor: pointer;
  transition: all ${theme.transitions.base};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.lg};
  }
`;

const products = [
  {
    id: 1,
    name: 'ShadowGear Pro Mouse',
    description: 'High-precision gaming mouse with customizable RGB lighting and programmable buttons.',
    price: '$89.99',
    icon: '🖱️'
  },
  {
    id: 2,
    name: 'ShadowGear Mechanical Keyboard',
    description: 'Premium mechanical keyboard with tactile switches and customizable backlighting.',
    price: '$149.99',
    icon: '⌨️'
  },
  {
    id: 3,
    name: 'ShadowGear Gaming Headset',
    description: '7.1 surround sound gaming headset with noise-canceling microphone.',
    price: '$129.99',
    icon: '🎧'
  },
  {
    id: 4,
    name: 'ShadowGear Gaming Mousepad',
    description: 'Extra-large gaming mousepad with RGB edge lighting and non-slip base.',
    price: '$39.99',
    icon: '🖱️'
  },
  {
    id: 5,
    name: 'ShadowGear Monitor Stand',
    description: 'Adjustable monitor stand with cable management and RGB accent lighting.',
    price: '$79.99',
    icon: '🖥️'
  },
  {
    id: 6,
    name: 'ShadowGear Gaming Chair',
    description: 'Ergonomic gaming chair with lumbar support and adjustable armrests.',
    price: '$299.99',
    icon: '🪑'
  }
];

const Products: React.FC = () => {
  return (
    <ProductsSection id="products">
      <Container>
        <SectionTitle>Our Premium Gaming Gear</SectionTitle>
        <ProductsGrid>
          {products.map((product) => (
            <ProductCard key={product.id}>
              <ProductImage>{product.icon}</ProductImage>
              <ProductTitle>{product.name}</ProductTitle>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductPrice>{product.price}</ProductPrice>
              <BuyButton>Add to Cart</BuyButton>
            </ProductCard>
          ))}
        </ProductsGrid>
      </Container>
    </ProductsSection>
  );
};

export default Products;
