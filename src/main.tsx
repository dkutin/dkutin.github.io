import { StrictMode } from 'react';

import { HeroUIProvider } from '@heroui/system';
import { createRoot } from 'react-dom/client';

import App from '@/App.tsx';

// import './main.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeroUIProvider>
      <App />
    </HeroUIProvider>
  </StrictMode>,
);
