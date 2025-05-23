import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./pages/Search";
import BookDetail from "./pages/BookDetail";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/book/:id" element={<BookDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
