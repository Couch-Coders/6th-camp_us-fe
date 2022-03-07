import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthProvider from './components/auth/AuthProvider';
import DetailPage from './pages/detailPage/DetailPage';
import MainPage from './pages/mainPage/MainPage';
import SearchPage from './pages/searchPage/SearchPage';
import MyPage from './pages/myPage/MyPage';
import Navbar from './components/navbar/Navbar';
import CommunityPage from './pages/communityPage/CommunityPage';
import WritePage from './pages/communityPage/writePage/WritePage';
import './styles/antdCustom.css';

function App() {
  console.log('배포가 되긴 되나??');

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
          <Route path="/community/write" element={<WritePage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
