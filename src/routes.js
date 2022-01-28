import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './Pages/MainPage/MainPage';

function App() {
  return (
    <div>
      <BrowserRouter basename="/pages">
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
