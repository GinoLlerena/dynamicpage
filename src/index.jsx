import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// Tailwind styles are included via index.css; legacy SASS removed
import App from './App.jsx';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
