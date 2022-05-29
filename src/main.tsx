import React from 'react';

import ReactDOM from 'react-dom/client';

import App from './components/App';
import { EquipUIProvider } from './theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <EquipUIProvider>
      <App />
    </EquipUIProvider>
  </React.StrictMode>,
);
