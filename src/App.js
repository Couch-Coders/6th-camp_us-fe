import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthProvider from './components/auth/AuthProvider';
import DetailPage from './pages/detailPage/DetailPage';
import MainPage from './pages/mainPage/MainPage';
import SearchPage from './pages/searchPage/SearchPage';
import MyPage from './pages/myPage/MyPage';
import Navbar from './components/navbar/Navbar';
import CommunityPage from './pages/communityPage/CommunityPage';
import CommunityWritePage from './pages/communityPage/communityWritePage/CommunityWritePage';
import CommunityDetailPage from './pages/communityPage/communityDetailPage/CommunityDetailPage';
import './styles/antdCustom.css';
import CommunityEditPage from './pages/communityPage/communityEditPage/CommunityEditPage';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/detail" element={<DetailPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/member" element={<MyPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/community/write" element={<CommunityWritePage />} />
          <Route path="/community/edit" element={<CommunityEditPage />} />
          <Route path="/community/detail" element={<CommunityDetailPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
