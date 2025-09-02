import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: ${theme.typography.fontFamily.primary};
    background-color: #000000;
    color: ${theme.colors.text.primary};
    line-height: ${theme.typography.lineHeight.normal};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: ${theme.typography.fontWeight.bold};
    line-height: ${theme.typography.lineHeight.tight};
    margin-bottom: ${theme.spacing[4]};
  }

  h1 {
    font-size: ${theme.typography.fontSize['5xl']};
    
    @media (min-width: ${theme.breakpoints.md}) {
      font-size: ${theme.typography.fontSize['6xl']};
    }
    
    @media (min-width: ${theme.breakpoints.lg}) {
      font-size: ${theme.typography.fontSize['7xl']};
    }
  }

  h2 {
    font-size: ${theme.typography.fontSize['4xl']};
    
    @media (min-width: ${theme.breakpoints.md}) {
      font-size: ${theme.typography.fontSize['5xl']};
    }
  }

  h3 {
    font-size: ${theme.typography.fontSize['3xl']};
    
    @media (min-width: ${theme.breakpoints.md}) {
      font-size: ${theme.typography.fontSize['4xl']};
    }
  }

  p {
    margin-bottom: ${theme.spacing[4]};
    color: ${theme.colors.text.secondary};
  }

  a {
    color: ${theme.colors.accent};
    text-decoration: none;
    transition: color ${theme.transitions.base};
    
    &:hover {
      color: ${theme.colors.accentHover};
    }
  }

  button {
    font-family: inherit;
    border: none;
    background: none;
    cursor: pointer;
    transition: all ${theme.transitions.base};
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ul, ol {
    list-style: none;
  }

  section {
    padding: ${theme.spacing[16]} 0;
    
    @media (min-width: ${theme.breakpoints.md}) {
      padding: ${theme.spacing[24]} 0;
    }
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${theme.spacing[4]};
    
    @media (min-width: ${theme.breakpoints.md}) {
      padding: 0 ${theme.spacing[8]};
    }
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;
