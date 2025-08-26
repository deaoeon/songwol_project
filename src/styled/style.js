import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
  
  body {
    width: 100vw;
    font-size: 16px;
    line-height: 1.6;
    font-family: 'Noto Sans KR', sans-serif;
    color:#000;
    background: #fff;
  }
  a {
    text-decoration: none;
    color:#333; 
  }
  li { list-style:none }
  img { vertical-align: top; }
  
  
  /* .inner { width:1400px; margin:auto; box-sizing:border-box; position:relative } */
  .main { width: 100%; }
  .main h2 { text-align: center; font-size: 40px;   margin-bottom: 80px; }
   button { border:none; cursor: pointer; }
`;

export default GlobalStyle;
