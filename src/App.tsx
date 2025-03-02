import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MobileView from './design-system/components/layout/MobileView';
import MainPage from './pages/MainPage';
import { Analytics } from '@vercel/analytics/react';
import ThemeProvider from './design-system/ThemeProvider';

const App = () => {
  return (
    <ThemeProvider initialTheme="light">
      <MobileView>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainPage />} />
            </Routes>
          </BrowserRouter>
          <Analytics />
      </MobileView>
    </ThemeProvider>
  );
};

export default App;