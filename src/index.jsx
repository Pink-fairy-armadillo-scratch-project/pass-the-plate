// entry point for the front end

// import the stuff we need
import React from 'react';
import { createRoot } from 'react-dom';
import App from './client/app';

const cheese = document.createElement('main');
document.querySelector('body').append(cheese);

const root = createRoot(cheese);

root.render(<App />);
