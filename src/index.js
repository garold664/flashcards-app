import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import FlashCardsContextProvider from './context/flashcards-context';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './index.css';

// ReactDOM.render(<App />, document.getElementById('root')); // in versions prior to 18
const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <FlashCardsContextProvider>
      <App />
    </FlashCardsContextProvider>
  </BrowserRouter>
);
