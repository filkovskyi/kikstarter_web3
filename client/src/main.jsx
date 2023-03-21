import React from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
import { StateContextProvider } from './context';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
//activeChain <ThirdwebProvider activeChain={ChainId.Goerli}>
root.render(
  <ThirdwebProvider activeChain={ChainId.Goerli}>
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider>
)