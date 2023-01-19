import { Container } from 'components/App/App.styled';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Container>
    <App />
    </Container>
  </React.StrictMode>
);
