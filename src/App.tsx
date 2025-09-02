import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import Hero from './components/Hero';
import Header from './components/Header';
import HowItWorks from './components/HowItWorks';
import KeyFeatures from './components/KeyFeatures';
import Preorder from './components/Preorder';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Hero />
      <HowItWorks />
      <KeyFeatures />
      <Preorder />
    </ThemeProvider>
  );
}

export default App;
