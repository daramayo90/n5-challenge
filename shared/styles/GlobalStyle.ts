import { createGlobalStyle } from 'styled-components';
import theme from '../theme';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }

  body {
    font-family: ${theme.fonts.primary};
    color: ${theme.colors.dark};
    font-size: ${theme.fontSizes.medium};
    background-color: ${theme.colors.light};
  }
`;

export default GlobalStyle;
