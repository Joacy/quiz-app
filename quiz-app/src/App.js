import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import Header from './components/Header';
import Footer from './components/Footer';
import Start from './routes';

import GlobalStyle from './styles/global';
import './App.css';

function App () {
  const [theme, setTheme] = useState(light);

  const toogleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <div id="App">
        <GlobalStyle />
        <Header toogleTheme={toogleTheme} />
        <Start />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
