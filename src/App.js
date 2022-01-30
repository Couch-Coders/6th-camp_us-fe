import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './Pages/MainPage/MainPage';

function App() {
  return (
    <BrowserRouter basename="/pages">
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
