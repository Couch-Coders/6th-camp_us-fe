import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthProvider from './Components/auth/AuthProvider';
import DetailPage from './Pages/DetailPage/DetailPage';
import MainPage from './Pages/MainPage/MainPage';
import SearchPage from './Pages/SearchPage/SearchPage';
import MyPage from './Pages/MyPage/MyPage';
import Navbar from './Components/Navbar/Navbar';
import CommunityPage from './Pages/CommunityPage/CommunityPage';
import './Styles/antdCustom.css';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter basename="/pages">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/detail" element={<DetailPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/member" element={<MyPage />} />
          <Route path="/community" element={<CommunityPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
