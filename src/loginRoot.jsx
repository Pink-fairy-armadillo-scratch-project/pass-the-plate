// entry point for the front end

// import the stuff we need
import React from 'react';
import { createRoot } from 'react-dom/client';
import LoginProvider from './client/loginProvider';


// import styles
import './client/styles/loginStyles.scss';


const cheese = document.createElement('main');
document.querySelector('body').append(cheese);

const root = createRoot(cheese);

root.render(<LoginProvider />);
