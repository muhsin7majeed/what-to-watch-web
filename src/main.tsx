import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { Provider } from './components/ui/provider.tsx';
import { BrowserRouter, Route, Routes } from 'react-router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="*" element={<div>Not found</div>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
