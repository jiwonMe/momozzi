import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MobileView from './components/MobileView';
import MainPage from './pages/MainPage';

const App = () => {
  return (
    <MobileView>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
          </Routes>
        </BrowserRouter>
    </MobileView>
  );
};

export default App;