import './bootstrap';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App.jsx';

createRoot(document.getElementById('app')).render(
    <BrowserRouter basename="/React-App/public">
        <App />
    </BrowserRouter>
);
