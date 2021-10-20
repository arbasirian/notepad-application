import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';
import { store } from 'redux/store';
import themeVariables from 'theme/variables';

import 'config/axios.config';
import GlobalStyle from 'assets/styles/global.styles';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={themeVariables('light', 'en')}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
