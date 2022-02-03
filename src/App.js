import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailPage from './Pages/DetailPage/DetailPage';
import MainPage from './Pages/MainPage/MainPage';
import SearchPage from './Pages/SearchPage/SearchPage';
import MyPage from './Pages/MyPage/MyPage';
import Navbar from './Components/Navbar/Navbar';
function App() {
  return (
    <BrowserRouter basename="/pages">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
