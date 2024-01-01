import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MobileView from './components/MobileView';

const App = () => {
  return (
    <MobileView>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<>test</>} />
          </Routes>
        </BrowserRouter>
    </MobileView>
  );
};

export default App;