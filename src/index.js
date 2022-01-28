import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes';
import GlobalStyle from './Styles/GrobalStyle';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root'),
);
