import './App.css';
import { Footer, Hero } from './components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Terms from './terms';
import PrivacyPolicy from './privacy';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/privacy' element={<PrivacyPolicy />} />
        <Route path='/terms' element={<Terms/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
