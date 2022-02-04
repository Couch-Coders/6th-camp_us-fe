import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailPage from './Pages/DetailPage/DetailPage';
import MainPage from './Pages/MainPage/MainPage';

import Navbar from './Components/Navbar/Navbar';
import { AuthProvider } from './Components/auth/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter basename="/pages">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/detail" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
