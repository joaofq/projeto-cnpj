import React from 'react';
import ReactDOM from 'react-dom/client';
import './vendor/normalize.css';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HashRouter>,
);

//Substituí o BrowserRouter pelo HashRouter para funcionar no GitHub Pages.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
