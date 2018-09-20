//Realizo los imports necesarios para el proyecto incluyendo nuevas librerias, css o componentes JS
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//Le indico al ReactDOM que ejecute el render de elemento que le paso con su id
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
