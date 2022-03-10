import { createGlobalStyle } from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif; 
  }

  p {
    margin-bottom: 5px;
  }


input {
  border: 0;
  outline: none;
}

button {
  border: 0;
  outline: none;
  background-color: #ffffff;
}
  ul,ol,li {
    list-style: none;
  }

`;

export default GlobalStyle;
