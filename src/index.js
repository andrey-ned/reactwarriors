import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import Header from './component/Header'
import "bootstrap/dist/css/bootstrap.min.css"


ReactDOM.render(
  <React.StrictMode>
      <Header />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
    document.getElementById('Header')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

