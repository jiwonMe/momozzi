import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MobileView from './components/MobileView';
import MainPage from './pages/MainPage';
import { Analytics } from '@vercel/analytics/react';

const App = () => {
  return (
    <MobileView>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
          </Routes>
        </BrowserRouter>
        <Analytics />
    </MobileView>
  );
};

export default App;