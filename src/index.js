import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import App from './App';
import configureStore from './configureStore';
import './styles.css';

const store = configureStore();

const element = document.getElementById('root');

render(<Provider store={store}><App /></Provider>, element);
