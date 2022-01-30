import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailPage from './Pages/DetailPage/DetailPage';
import MainPage from './Pages/MainPage/MainPage';

function App() {
  return (
    <BrowserRouter basename="/pages">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/detail" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
